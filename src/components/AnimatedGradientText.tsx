import React from 'react';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  children,
  className = '',
  colors = ['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee'],
  animationSpeed = 3,
}) => {
  const gradientStyle = {
    background: `linear-gradient(90deg, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  };

  const overlayStyle = {
    background: `linear-gradient(90deg, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <>
      <style>{`
        .animated-gradient-text {
          position: relative;
          margin: 0 auto;
          display: flex;
          max-width: fit-content;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          border-radius: 1.25rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
          transition: box-shadow 0.5s ease-out;
          overflow: hidden;
          cursor: pointer;
          padding: 0.75rem 1.5rem;
          border: 2px solid transparent;
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: 300% 100%;
          animation: gradient linear infinite;
          border-radius: inherit;
          z-index: 0;
          pointer-events: none;
        }

        .gradient-overlay::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          border-radius: inherit;
          width: calc(100% - 2px);
          height: calc(100% - 2px);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(6, 0, 16, 0.8);
          z-index: -1;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        .text-content {
          display: inline-block;
          position: relative;
          z-index: 2;
          background-size: 300% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradient linear infinite;
          font-weight: 600;
        }
      `}</style>
      <div className={`animated-gradient-text ${className}`}>
        <div className="gradient-overlay" style={overlayStyle}></div>
        <span className="text-content" style={gradientStyle}>
          {children}
        </span>
      </div>
    </>
  );
};

export default AnimatedGradientText;