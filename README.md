# 🤖 Helper.GPT - AI Chat Bot Receptionist

A mordern Web based AI Chat Bot Receptionist designed to streamline front-desk operations and enhance user interaction, powered by Deepseek's R1 model.

**DEMO**:https://clinquant-dango-07a366.netlify.app/   
(NOTE: When using the chat bot, responses may take time to generate as this is powered by a deep research AI model)

## 📸 Screenshots
<img width="1919" height="833" alt="image" src="https://github.com/user-attachments/assets/1eaed8f0-f1a2-42ec-bc5b-617434115db3" />
---------------------------------------------------------------------------------------------------------
<img width="1919" height="837" alt="image" src="https://github.com/user-attachments/assets/d64ecbb7-1b40-4bc9-a46d-9824e6d628a6" />

<img width="1918" height="834" alt="image" src="https://github.com/user-attachments/assets/b1388009-a9d4-4968-94c9-f896137f8583" />

<img width="1919" height="824" alt="image" src="https://github.com/user-attachments/assets/3bbfd4a3-f3b1-470f-a4af-d5eb45370f10" />

<img width="1913" height="827" alt="image" src="https://github.com/user-attachments/assets/10bfc86a-ab9d-4d13-871d-b27cd51fb8dd" />





## ✨ Features

- **🤖 Advanced AI Conversations** - Powered by DeepSeek's cutting-edge language model
- **💬 Real-time Streaming** - See responses as they're generated for a natural chat experience
- **🎨 Beautiful UI** - Modern glass morphism design with animated backgrounds
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **🌊 Animated Background** - Dynamic wavy background with customizable colors
- **⚡ Fast Performance** - Optimized for speed with Vite and modern React
- **🔒 Secure** - API keys handled securely through environment variables
- **♿ Accessible** - Built with accessibility best practices
- **🎯 TypeScript** - Fully typed for better development experience

## 🔧 Pending Fixes and Enchancements

- Organisation centric responses (customised responses)
- UI bug fixes (Alignment)
- Model training using custom datasets
- Voice communication

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenRouter API key

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your OpenRouter API key:
   ```env
   VITE_DEEPSEEK_API_KEY=your_openrouter_api_key_here
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔑 Getting an OpenRouter API Key

1. Visit [OpenRouter.ai](https://openrouter.ai)
2. Sign up for an account
3. Navigate to the API Keys section
4. Generate a new API key
5. Add the key to your `.env` file

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **AI Integration**: OpenRouter API with DeepSeek models
- **Icons**: Lucide React
- **Animations**: Custom CSS animations and Simplex Noise
- **HTTP Client**: OpenAI SDK (configured for OpenRouter)

## 📁 Project Structure

```
src/
├── api/
│   └── deepseek.ts          # OpenRouter API integration
├── components/
│   ├── AnimatedGradientText.tsx  # Gradient text animation
│   ├── ChatInterface.tsx         # Main chat component
│   ├── TextPressure.tsx          # Interactive text effect
│   └── WavyBackground.tsx        # Animated background
├── lib/
│   └── utils.ts             # Utility functions
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
└── index.css               # Global styles
```

## 🎨 Customization

### Changing Colors

The app uses a customizable color palette. You can modify colors in:

- `src/components/WavyBackground.tsx` - Background wave colors
- `src/App.tsx` - Gradient colors for text and buttons
- `tailwind.config.js` - Tailwind color extensions

### Modifying AI Model

To use a different model, update the model name in `src/api/deepseek.ts`:

```typescript
model: "deepseek/deepseek-r1-0528-qwen3-8b:free"
```

Available models can be found in the [OpenRouter documentation](https://openrouter.ai/docs).

### Customizing the Background

The wavy background can be customized by modifying props in `src/App.tsx`:

```typescript
<WavyBackground
  colors={['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee']}
  waveWidth={50}
  backgroundFill="black"
  blur={10}
  speed="fast"
  waveOpacity={0.3}
>
```

## 📱 Features Overview

### Landing Page
- Interactive text pressure effect on the title
- Feature showcase with hover animations
- Smooth transitions and micro-interactions
- Call-to-action buttons

### Chat Interface
- Real-time streaming responses
- Message history with timestamps
- Copy message functionality
- Regenerate response option
- Auto-scrolling to latest messages
- Responsive design for all screen sizes

### User Experience
- Loading states and error handling
- Keyboard shortcuts (Enter to send, Shift+Enter for new line)
- Auto-resizing text input
- Visual feedback for all interactions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Set environment variables in Netlify dashboard

### Deploy to Vercel

1. Connect your repository to Vercel
2. Set the build command to `npm run build`
3. Set the output directory to `dist`
4. Add environment variables in Vercel dashboard

## 🔒 Security Considerations

- API keys are handled client-side (suitable for demo purposes)
- For production use, consider implementing a backend proxy
- The `dangerouslyAllowBrowser` flag is used for client-side API calls
- Never commit API keys to version control

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request


## 🙏 Acknowledgments

- [DeepSeek](https://deepseek.com) for the AI models
- [OpenRouter](https://openrouter.ai) for the API infrastructure
- [Lucide](https://lucide.dev) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com) for the styling framework
- [Vite](https://vitejs.dev) for the build tool

Built By ~ Sushmit Arora (@notsushmit)
         ~ Suvarcha Wadhwa (@suvarchaw)



