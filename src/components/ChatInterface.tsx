import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Copy, RefreshCw } from 'lucide-react';
import { sendChatMessage, sendStreamingChatMessage, type ChatMessage } from '../api/deepseek';

interface Message {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: Date;
  isStreaming?: boolean;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm Helper.GPT, your AI assistant powered by DeepSeek's advanced language models via OpenRouter. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessageId, setStreamingMessageId] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const regenerateResponse = async (messageIndex: number) => {
    if (isLoading) return;

    const userMessage = messages[messageIndex - 1];
    if (!userMessage || userMessage.isUser === false) return;

    // Remove the old AI response
    const updatedMessages = messages.slice(0, messageIndex);
    setMessages(updatedMessages);

    // Regenerate the response
    await handleSendMessage(userMessage.content, false);
  };

  const handleSendMessage = async (messageContent?: string, addUserMessage = true) => {
    const content = messageContent || inputValue.trim();
    if (content === '' || isLoading) return;

    let userMessage: Message | null = null;
    
    if (addUserMessage) {
      userMessage = {
        id: Date.now(),
        content,
        isUser: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
    }

    setIsLoading(true);

    // Create streaming message
    const streamingMessageId = Date.now() + 1;
    const streamingMessage: Message = {
      id: streamingMessageId,
      content: '',
      isUser: false,
      timestamp: new Date(),
      isStreaming: true,
    };

    setMessages(prev => [...prev, streamingMessage]);
    setStreamingMessageId(streamingMessageId);

    try {
      // Prepare conversation history for OpenRouter
      const conversationHistory: ChatMessage[] = messages
        .filter(msg => !msg.isStreaming)
        .slice(-10) // Keep last 10 messages for context (5 exchanges)
        .map(msg => ({
          role: msg.isUser ? 'user' : 'assistant',
          content: msg.content
        }));

      // Add the current user message if it's a new message
      if (addUserMessage && userMessage) {
        conversationHistory.push({
          role: 'user',
          content: userMessage.content
        });
      } else if (!addUserMessage) {
        conversationHistory.push({
          role: 'user',
          content
        });
      }

      // Use streaming for better UX
      let fullResponse = '';
      await sendStreamingChatMessage(conversationHistory, (chunk) => {
        fullResponse += chunk;
        setMessages(prev => 
          prev.map(msg => 
            msg.id === streamingMessageId 
              ? { ...msg, content: fullResponse }
              : msg
          )
        );
      });

      // Mark streaming as complete
      setMessages(prev => 
        prev.map(msg => 
          msg.id === streamingMessageId 
            ? { ...msg, isStreaming: false }
            : msg
        )
      );

    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: streamingMessageId,
        content: "I apologize, but I'm having trouble connecting right now. The AI service might be temporarily unavailable. Please try again in a moment.",
        isUser: false,
        timestamp: new Date(),
        isStreaming: false,
      };
      
      setMessages(prev => 
        prev.map(msg => 
          msg.id === streamingMessageId ? errorMessage : msg
        )
      );
    } finally {
      setIsLoading(false);
      setStreamingMessageId(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Helper.GPT</h2>
            <p className="text-sm text-gray-400">Powered by DeepSeek via OpenRouter</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-400">Online</span>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex items-start space-x-2 max-w-xs lg:max-w-2xl ${
                message.isUser ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.isUser
                  ? 'bg-gradient-to-r from-green-500 to-blue-500'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600'
              }`}>
                {message.isUser ? (
                  <User className="w-5 h-5 text-white" />
                ) : (
                  <Bot className="w-5 h-5 text-white" />
                )}
              </div>
              <div
                className={`px-4 py-3 rounded-2xl relative group ${
                  message.isUser
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                    : 'bg-white/10 text-white border border-white/20'
                }`}
              >
                <div className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content}
                  {message.isStreaming && (
                    <span className="inline-block w-2 h-5 bg-white/60 ml-1 animate-pulse"></span>
                  )}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                  {!message.isUser && !message.isStreaming && (
                    <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => copyToClipboard(message.content)}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                        title="Copy message"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => regenerateResponse(index)}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                        title="Regenerate response"
                        disabled={isLoading}
                      >
                        <RefreshCw className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        {isLoading && streamingMessageId === null && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2 max-w-xs lg:max-w-md">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="px-4 py-3 rounded-2xl bg-white/10 text-white border border-white/20">
                <div className="flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Thinking...</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/10">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your message... (Press Enter to send, Shift+Enter for new line)"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none scrollbar-hide"
              rows={1}
              style={{ minHeight: '48px', maxHeight: '120px' }}
              disabled={isLoading}
            />
          </div>
          <button
            onClick={() => handleSendMessage()}
            disabled={inputValue.trim() === '' || isLoading}
            className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center min-w-[48px]"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="mt-2 text-xs text-gray-400 text-center">
          Powered by DeepSeek AI via OpenRouter • Your conversations are processed securely
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;