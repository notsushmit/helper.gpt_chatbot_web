import OpenAI from 'openai';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const OPENROUTER_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: OPENROUTER_API_KEY,
  dangerouslyAllowBrowser: true,
  defaultHeaders: {
    "HTTP-Referer": "https://helper-gpt.com",
    "X-Title": "Helper.GPT",
  },
});

export async function sendChatMessage(messages: ChatMessage[]): Promise<string> {
  if (!OPENROUTER_API_KEY) {
    return 'API key is not configured. Please check the configuration.';
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000,
      stream: false,
    });

    if (completion.choices && completion.choices[0]?.message?.content) {
      return completion.choices[0].message.content.trim();
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('OpenRouter API Error:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('503')) {
        return 'The AI service is temporarily unavailable. Please try again in a moment.';
      } else if (error.message.includes('401')) {
        return 'Invalid API key. Please check your OpenRouter API key configuration.';
      } else if (error.message.includes('429')) {
        return 'Too many requests. Please wait a moment before trying again.';
      } else if (error.message.includes('400')) {
        return 'Invalid request format. Please try rephrasing your message.';
      }
    }
    
    return 'I\'m having trouble connecting right now. Please try again in a moment.';
  }
}

export async function sendStreamingChatMessage(
  messages: ChatMessage[], 
  onChunk: (chunk: string) => void
): Promise<void> {
  if (!OPENROUTER_API_KEY) {
    onChunk('API key is not configured. Please check the configuration.');
    return;
  }

  try {
    const stream = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000,
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        onChunk(content);
      }
    }
  } catch (error) {
    console.error('OpenRouter Streaming Error:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('503')) {
        onChunk('The AI service is temporarily unavailable. Please try again in a moment.');
      } else if (error.message.includes('401')) {
        onChunk('Invalid API key. Please check your OpenRouter API key configuration.');
      } else if (error.message.includes('429')) {
        onChunk('Too many requests. Please wait a moment before trying again.');
      } else {
        onChunk('I\'m having trouble connecting right now. Please try again in a moment.');
      }
    } else {
      onChunk('I\'m having trouble connecting right now. Please try again in a moment.');
    }
  }
}