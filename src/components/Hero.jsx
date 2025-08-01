import { useState, useEffect } from 'react'
import { ArrowRight, Smartphone, Watch, Headphones } from 'lucide-react'

const Hero = ({ scrollY }) => {
  const [currentDevice, setCurrentDevice] = useState(0)
  const [titleScale, setTitleScale] = useState(1)
  
  const devices = [
    { icon: Smartphone, name: 'NovPhone X1', color: 'var(--primary)' },
    { icon: Watch, name: 'NovWatch Pro', color: 'var(--secondary)' },
    { icon: Headphones, name: 'NovBuds Elite', color: 'var(--accent)' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDevice((prev) => (prev + 1) % devices.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [devices.length])

  useEffect(() => {
    // Scroll-based text sizing
    const scale = Math.max(0.7, 1 - scrollY * 0.001)
    setTitleScale(scale)
  }, [scrollY])

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span 
                className="hero-main-title"
                style={{ transform: `scale(${titleScale})` }}
              >
                Welcome to the Future of
              </span>
              <span className="text-gradient"> Smart Technology</span>
            </h1>
            <p className="hero-description">
              Experience the next generation of connected devices with TechNova's 
              revolutionary smart ecosystem. Where innovation meets elegance.
            </p>
            <div className="hero-actions">
              <a href="#devices" className="btn btn-primary">
                Explore Devices <ArrowRight size={20} />
              </a>
              <a href="#innovation" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="device-showcase">
              {devices.map((device, index) => {
                const Icon = device.icon
                return (
                  <div
                    key={index}
                    className={`device-item ${index === currentDevice ? 'active' : ''}`}
                    style={{
                      '--device-color': device.color,
                      transform: `translateX(${(index - currentDevice) * 120}px) scale(${index === currentDevice ? 1 : 0.8})`,
                      opacity: index === currentDevice ? 1 : 0.4
                    }}
                  >
                    <div className="device-glow"></div>
                    <Icon size={80} />
                    <span className="device-name">{device.name}</span>
                  </div>
                )
              })}
            </div>
            <div className="device-indicators">
              {devices.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentDevice ? 'active' : ''}`}
                  onClick={() => setCurrentDevice(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: calc(var(--spacing) * 10);
        }

        .hero-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, var(--primary), transparent);
          top: 10%;
          left: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, var(--secondary), transparent);
          top: 60%;
          right: -5%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, var(--accent), transparent);
          bottom: -20%;
          left: 50%;
          animation-delay: 4s;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: calc(var(--spacing) * 8);
          align-items: center;
          min-height: 80vh;
        }

        .hero-text {
          z-index: 1;
        }

        .hero-title {
          margin-bottom: calc(var(--spacing) * 3);
          animation: fadeInUp 1s ease-out;
        }

        .hero-main-title {
          display: block;
          transform-origin: left center;
          transition: transform 0.1s ease-out;
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 900;
          line-height: 1.1;
        }

        .hero-description {
          font-size: 1.2rem;
          margin-bottom: calc(var(--spacing) * 4);
          max-width: 600px;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .hero-actions {
          display: flex;
          gap: calc(var(--spacing) * 2);
          flex-wrap: wrap;
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .hero-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: calc(var(--spacing) * 4);
          z-index: 1;
        }

        .device-showcase {
          position: relative;
          height: 300px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .device-item {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: calc(var(--spacing) * 2);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .device-item.active {
          animation: pulse 2s ease-in-out infinite;
        }

        .device-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, var(--device-color), transparent);
          border-radius: 50%;
          opacity: 0.3;
          animation: glow 3s ease-in-out infinite;
        }

        .device-item svg {
          color: var(--device-color);
          z-index: 1;
        }

        .device-name {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 1.1rem;
        }

        .device-indicators {
          display: flex;
          gap: calc(var(--spacing) * 1);
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: var(--primary);
          transform: scale(1.2);
        }

        @keyframes fadeInUp {
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
          50% { transform: scale(1.05); }
        }

        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: calc(var(--spacing) * 6);
          }
          
          .hero-actions {
            justify-content: center;
          }
        }

        @media (max-width: 568px) {
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .device-showcase {
            height: 250px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero