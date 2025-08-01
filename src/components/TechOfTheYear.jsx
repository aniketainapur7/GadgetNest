import { useState, useEffect } from 'react'
import { Trophy, Star, Zap, Calendar, Clock } from 'lucide-react'

const TechOfTheYear = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isRevealed, setIsRevealed] = useState(false)
  const [mysteryRotation, setMysteryRotation] = useState(0)

  // Set countdown to 30 days from now
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 30)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setIsRevealed(true)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setMysteryRotation(prev => prev + 1)
    }, 50)

    return () => clearInterval(rotationInterval)
  }, [])

  const mysteryFeatures = [
    'Revolutionary AI Integration',
    'Quantum Processing Power',
    'Holographic Display Technology',
    'Neural Interface Compatibility',
    'Unlimited Battery Life',
    'Telepathic Controls'
  ]

  return (
    <section className="tech-of-year">
      <div className="mystery-background">
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        <div className="gradient-mesh"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <div className="award-badge">
            <Trophy className="trophy-icon" />
            <span>Tech of the Year 2025</span>
          </div>
          <h2 className="mystery-title">
            The Ultimate Innovation
            <span className="mystery-subtitle">Something extraordinary is coming...</span>
          </h2>
        </div>

        <div className="mystery-content">
          <div className="mystery-device">
            <div className="device-container">
              <div 
                className="mystery-box"
                style={{ transform: `rotateY(${mysteryRotation}deg)` }}
              >
                <div className="box-face front">
                  <div className="question-mark">?</div>
                </div>
                <div className="box-face back">
                  <Zap size={60} />
                </div>
                <div className="box-face right">
                  <Star size={60} />
                </div>
                <div className="box-face left">
                  <Trophy size={60} />
                </div>
                <div className="box-face top">
                  <Clock size={60} />
                </div>
                <div className="box-face bottom">
                  <Calendar size={60} />
                </div>
              </div>
              <div className="device-glow"></div>
              <div className="energy-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
            </div>
          </div>

          <div className="mystery-info">
            <div className="countdown-container">
              <h3 className="countdown-title">Reveal Countdown</h3>
              <div className="countdown-grid">
                <div className="time-unit">
                  <div className="time-value">{timeLeft.days.toString().padStart(2, '0')}</div>
                  <div className="time-label">Days</div>
                </div>
                <div className="time-separator">:</div>
                <div className="time-unit">
                  <div className="time-value">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="time-label">Hours</div>
                </div>
                <div className="time-separator">:</div>
                <div className="time-unit">
                  <div className="time-value">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="time-label">Minutes</div>
                </div>
                <div className="time-separator">:</div>
                <div className="time-unit">
                  <div className="time-value">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="time-label">Seconds</div>
                </div>
              </div>
            </div>

            <div className="mystery-features">
              <h4 className="features-title">Rumored Features</h4>
              <div className="features-list">
                {mysteryFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="feature-item"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="feature-dot"></div>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mystery-actions">
              <button className="btn btn-primary mystery-btn">
                <Star size={20} />
                Get Notified
              </button>
              <button className="btn btn-secondary mystery-btn">
                <Trophy size={20} />
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tech-of-year {
          background: var(--bg-primary);
          padding: calc(var(--spacing) * 12) 0;
          position: relative;
          overflow: hidden;
        }

        .mystery-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .floating-particles {
          position: absolute;
          inset: 0;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--primary);
          border-radius: 50%;
          animation: float-particle linear infinite;
        }

        .gradient-mesh {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0, 212, 255, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%);
          animation: gradient-shift 8s ease-in-out infinite;
        }

        .section-header {
          text-align: center;
          margin-bottom: calc(var(--spacing) * 8);
        }

        .award-badge {
          display: inline-flex;
          align-items: center;
          gap: calc(var(--spacing) * 2);
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);
          border-radius: var(--radius-lg);
          font-weight: 600;
          margin-bottom: calc(var(--spacing) * 4);
          box-shadow: var(--shadow-md);
          animation: pulse 3s ease-in-out infinite;
        }

        .trophy-icon {
          animation: bounce 2s ease-in-out infinite;
        }

        .mystery-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: calc(var(--spacing) * 2);
          background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradient-shift 3s ease-in-out infinite;
        }

        .mystery-subtitle {
          display: block;
          font-size: 1.2rem;
          color: var(--text-secondary);
          font-weight: 400;
          margin-top: calc(var(--spacing) * 2);
        }

        .mystery-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: calc(var(--spacing) * 8);
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .mystery-device {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .device-container {
          position: relative;
          perspective: 1000px;
        }

        .mystery-box {
          width: 200px;
          height: 200px;
          position: relative;
          transform-style: preserve-3d;
          animation: float 6s ease-in-out infinite;
        }

        .box-face {
          position: absolute;
          width: 200px;
          height: 200px;
          background: var(--surface);
          border: 2px solid var(--border);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(20px);
          color: var(--primary);
        }

        .front { transform: rotateY(0deg) translateZ(100px); }
        .back { transform: rotateY(180deg) translateZ(100px); }
        .right { transform: rotateY(90deg) translateZ(100px); }
        .left { transform: rotateY(-90deg) translateZ(100px); }
        .top { transform: rotateX(90deg) translateZ(100px); }
        .bottom { transform: rotateX(-90deg) translateZ(100px); }

        .question-mark {
          font-size: 4rem;
          font-weight: 900;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pulse 2s ease-in-out infinite;
        }

        .device-glow {
          position: absolute;
          inset: -50px;
          background: radial-gradient(circle, var(--primary), transparent);
          border-radius: 50%;
          opacity: 0.3;
          animation: glow 4s ease-in-out infinite;
        }

        .energy-rings {
          position: absolute;
          inset: -100px;
        }

        .ring {
          position: absolute;
          border: 2px solid var(--primary);
          border-radius: 50%;
          opacity: 0.3;
        }

        .ring-1 {
          inset: 0;
          animation: ring-pulse 3s ease-in-out infinite;
        }

        .ring-2 {
          inset: 20px;
          animation: ring-pulse 3s ease-in-out infinite 1s;
        }

        .ring-3 {
          inset: 40px;
          animation: ring-pulse 3s ease-in-out infinite 2s;
        }

        .mystery-info {
          z-index: 1;
        }

        .countdown-container {
          margin-bottom: calc(var(--spacing) * 6);
        }

        .countdown-title {
          color: var(--text-primary);
          margin-bottom: calc(var(--spacing) * 3);
          font-size: 1.5rem;
        }

        .countdown-grid {
          display: flex;
          align-items: center;
          gap: calc(var(--spacing) * 2);
          justify-content: center;
        }

        .time-unit {
          text-align: center;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: calc(var(--spacing) * 2);
          backdrop-filter: blur(10px);
          min-width: 80px;
        }

        .time-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: calc(var(--spacing) / 2);
        }

        .time-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .time-separator {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          animation: blink 1s ease-in-out infinite;
        }

        .mystery-features {
          margin-bottom: calc(var(--spacing) * 6);
        }

        .features-title {
          color: var(--text-primary);
          margin-bottom: calc(var(--spacing) * 3);
          font-size: 1.3rem;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: calc(var(--spacing) * 2);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: calc(var(--spacing) * 2);
          opacity: 0;
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .feature-dot {
          width: 8px;
          height: 8px;
          background: var(--secondary);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .feature-text {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .mystery-actions {
          display: flex;
          gap: calc(var(--spacing) * 3);
          flex-wrap: wrap;
        }

        .mystery-btn {
          flex: 1;
          min-width: 150px;
          justify-content: center;
        }

        @keyframes float-particle {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes ring-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateY(0);
          }
          40%, 43% {
            transform: translateY(-10px);
          }
          70% {
            transform: translateY(-5px);
          }
          90% {
            transform: translateY(-2px);
          }
        }

        @media (max-width: 968px) {
          .mystery-content {
            grid-template-columns: 1fr;
            gap: calc(var(--spacing) * 6);
            text-align: center;
          }

          .countdown-grid {
            flex-wrap: wrap;
            gap: calc(var(--spacing) * 1);
          }

          .time-unit {
            min-width: 60px;
            padding: calc(var(--spacing) * 1.5);
          }

          .time-value {
            font-size: 1.5rem;
          }

          .mystery-actions {
            justify-content: center;
          }
        }

        @media (max-width: 568px) {
          .mystery-box {
            width: 150px;
            height: 150px;
          }

          .box-face {
            width: 150px;
            height: 150px;
          }

          .front { transform: rotateY(0deg) translateZ(75px); }
          .back { transform: rotateY(180deg) translateZ(75px); }
          .right { transform: rotateY(90deg) translateZ(75px); }
          .left { transform: rotateY(-90deg) translateZ(75px); }
          .top { transform: rotateX(90deg) translateZ(75px); }
          .bottom { transform: rotateX(-90deg) translateZ(75px); }

          .question-mark {
            font-size: 3rem;
          }

          .mystery-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}

export default TechOfTheYear