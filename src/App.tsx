import React, { useState } from 'react';
import { WavyBackground } from './components/WavyBackground';
import TextPressure from './components/TextPressure';
import ChatInterface from './components/ChatInterface';
import { MessageCircle, Sparkles, ArrowRight, Brain, Zap, Clock } from 'lucide-react';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen relative">
      <WavyBackground
        className="flex flex-col items-center justify-center py-20"
        containerClassName="relative min-h-screen"
        colors={['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee']}
        waveWidth={50}
        backgroundFill="black"
        blur={10}
        speed="fast"
        waveOpacity={0.3}
      >
        {!showChat ? (
          <div className="flex flex-col items-center justify-center space-y-12 text-center max-w-6xl mx-auto px-4 py-8">
            {/* Title with Text Pressure Effect */}
            <div className="h-32 w-full max-w-4xl">
              <TextPressure
                text="Helper.GPT"
                textColor="#ffffff"
                minFontSize={48}
                width={true}
                weight={true}
                italic={false}
                alpha={false}
                flex={true}
              />
            </div>

            {/* Main Description with Gradient Text */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-relaxed">
                Your intelligent AI assistant powered by advanced language models
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Experience the future of conversational AI with Helper.GPT. Get instant, intelligent responses to your questions, engage in meaningful discussions, and unlock the power of artificial intelligence at your fingertips.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-relaxed">
                Ask questions, get answers, and have meaningful conversations
              </h3>
              <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
                From complex problem-solving to creative brainstorming, Helper.GPT adapts to your needs and provides thoughtful, contextual responses that help you achieve your goals.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl w-full">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Natural Conversations</h3>
                <p className="text-gray-300 leading-relaxed">Engage in fluid, natural conversations with an AI that understands context, nuance, and maintains meaningful dialogue throughout your interaction.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Intelligent Responses</h3>
                <p className="text-gray-300 leading-relaxed">Get thoughtful, well-reasoned answers to your questions across a wide range of topics, from technical queries to creative challenges.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Always Available</h3>
                <p className="text-gray-300 leading-relaxed">Get help whenever you need it, 24/7, with instant responses to your queries and continuous availability for all your AI assistance needs.</p>
              </div>
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl w-full">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Lightning Fast</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">Experience near-instantaneous responses with our optimized AI infrastructure designed for speed and efficiency.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Creative & Analytical</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">Whether you need creative inspiration or analytical insights, Helper.GPT delivers both with remarkable versatility.</p>
              </div>
            </div>

            {/* Key Benefits Section */}
            <div className="mt-16 max-w-4xl w-full">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-8">
                Why Choose Helper.GPT?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-white mb-3">🎯 Precision & Accuracy</h4>
                  <p className="text-gray-300 leading-relaxed">Advanced language models ensure accurate, contextually relevant responses every time.</p>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-white mb-3">🔒 Privacy Focused</h4>
                  <p className="text-gray-300 leading-relaxed">Your conversations are secure and private, with no data retention beyond your session.</p>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-white mb-3">🌐 Versatile Applications</h4>
                  <p className="text-gray-300 leading-relaxed">From coding help to creative writing, research assistance to casual conversation.</p>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-white mb-3">⚡ Continuous Learning</h4>
                  <p className="text-gray-300 leading-relaxed">Built on cutting-edge AI technology that evolves and improves over time.</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-16">
              <button
                onClick={() => setShowChat(true)}
                className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Start Chatting Now
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setShowChat(true)}
                className="px-10 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-2xl hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 transform hover:scale-105 border border-white/20 flex items-center justify-center gap-3"
              >
                Try Demo
                <Sparkles className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Access Section */}
            <div className="mt-12 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 max-w-2xl w-full">
              <p className="text-gray-300 text-lg mb-4">
                Ready to experience the future of AI conversation?
              </p>
              <button
                onClick={() => setShowChat(true)}
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2 mx-auto"
              >
                Open Chat Interface
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Footer */}
            <div className="mt-20 text-center">
              <p className="text-gray-400 text-sm">
                Powered by advanced AI technology • Built with modern web standards • Designed for the future
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full h-screen flex flex-col p-4">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setShowChat(false)}
                className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200 flex items-center gap-2"
              >
                ← Back to Home
              </button>
              <div className="text-center">
                <h1 className="text-2xl font-bold text-white">Helper.GPT</h1>
                <p className="text-gray-300 text-sm">Your AI Assistant</p>
              </div>
              <div className="w-32 flex justify-end">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Online</span>
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              <ChatInterface />
            </div>
          </div>
        )}
      </WavyBackground>

      {/* Floating Chat Button - Always Visible */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}

      {/* Custom Scrollbar Styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Custom scrollbar for webkit browsers */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}

export default App;