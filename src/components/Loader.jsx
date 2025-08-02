import { useState, useEffect } from 'react'
import { Zap } from 'lucide-react'

const Loader = () => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Initializing...')

  const loadingSteps = [
    'Initializing...',
    'Loading Smart Devices...',
    'Connecting to the Future...',
    'Almost Ready...'
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        const currentIndex = loadingSteps.indexOf(prev)
        const nextIndex = (currentIndex + 1) % loadingSteps.length
        return loadingSteps[nextIndex]
      })
    }, 750)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <div className="loader-container">
      <div className="loader-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="loader-content">
        <div className="brand-loader">
          <div className="brand-icon-container">
            <Zap className="brand-icon" />
            <div className="icon-glow"></div>
          </div>
          <h1 className="brand-name">GadgetNest</h1>
        </div>

        <div className="loading-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">
            <span className="loading-message">{loadingText}</span>
            <span className="progress-percentage">{progress}%</span>
          </div>
        </div>

        <div className="loading-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      <style jsx>{`
        .loader-container {
          position: fixed;
          inset: 0;
          background: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }

        .loader-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
          animation: float 4s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, var(--primary), transparent);
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, var(--secondary), transparent);
          top: 60%;
          right: 20%;
          animation-delay: 1.5s;
        }

        .orb-3 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, var(--accent), transparent);
          bottom: 10%;
          left: 60%;
          animation-delay: 3s;
        }

        .loader-content {
          text-align: center;
          z-index: 1;
          animation: fadeIn 1s ease-out;
        }

        .brand-loader {
          margin-bottom: calc(var(--spacing) * 6);
        }

        .brand-icon-container {
          position: relative;
          display: inline-block;
          margin-bottom: calc(var(--spacing) * 3);
        }

        .brand-icon {
          width: 80px;
          height: 80px;
          color: var(--primary);
          animation: pulse 2s ease-in-out infinite;
        }

        .icon-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, var(--primary), transparent);
          border-radius: 50%;
          opacity: 0.3;
          animation: glow 3s ease-in-out infinite;
        }

        .brand-name {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          animation: slideUp 1s ease-out 0.5s both;
        }

        .loading-progress {
          margin-bottom: calc(var(--spacing) * 4);
          animation: slideUp 1s ease-out 1s both;
        }

        .progress-bar {
          width: 300px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          margin: 0 auto calc(var(--spacing) * 2) auto;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: 2px;
          transition: width 0.3s ease;
          position: relative;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 20px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
          animation: shimmer 1.5s ease-in-out infinite;
        }

        .progress-text {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 300px;
          margin: 0 auto;
        }

        .loading-message {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .progress-percentage {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .loading-dots {
          display: flex;
          gap: calc(var(--spacing) * 1);
          justify-content: center;
          animation: slideUp 1s ease-out 1.5s both;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          animation: bounce 1.4s ease-in-out infinite both;
        }

        .dot:nth-child(1) { animation-delay: -0.32s; }
        .dot:nth-child(2) { animation-delay: -0.16s; }
        .dot:nth-child(3) { animation-delay: 0s; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-20px); }
          100% { transform: translateX(320px); }
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .brand-name {
            font-size: 2.5rem;
          }

          .progress-bar,
          .progress-text {
            width: 250px;
          }
        }
      `}</style>
    </div>
  )
}

export default Loader