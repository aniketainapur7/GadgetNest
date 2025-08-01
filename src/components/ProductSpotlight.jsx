import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Zap, Shield, Wifi } from 'lucide-react'

const ProductSpotlight = () => {
  const [activeSpotlight, setActiveSpotlight] = useState(0)

  const spotlights = [
    {
      id: 'ai-integration',
      title: 'AI-Powered Intelligence',
      subtitle: 'The future thinks with you',
      description: 'Experience unprecedented smart assistance with our revolutionary AI integration. From predictive text to intelligent automation, our devices learn your patterns and adapt to your lifestyle.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        { icon: Zap, text: 'Instant Response AI' },
        { icon: Shield, text: 'Privacy-First Learning' },
        { icon: Wifi, text: 'Edge Computing' }
      ],
      stats: [
        { value: '99.9%', label: 'Accuracy Rate' },
        { value: '< 50ms', label: 'Response Time' },
        { value: '24/7', label: 'Always Learning' }
      ]
    },
    {
      id: 'ecosystem',
      title: 'Seamless Ecosystem',
      subtitle: 'Connected. Synchronized. Effortless.',
      description: 'All your TechNova devices work together in perfect harmony. Start a task on one device and finish it on another with seamless handoff technology.',
      image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        { icon: Wifi, text: 'Universal Sync' },
        { icon: Zap, text: 'Instant Handoff' },
        { icon: Shield, text: 'Secure Connection' }
      ],
      stats: [
        { value: '5+', label: 'Device Types' },
        { value: '1ms', label: 'Sync Latency' },
        { value: '100%', label: 'Compatibility' }
      ]
    },
    {
      id: 'sustainability',
      title: 'Sustainable Innovation',
      subtitle: 'Technology that cares for tomorrow',
      description: 'Built with 100% recycled materials and designed for longevity. Our commitment to sustainability means premium devices that respect our planet.',
      image: 'https://images.pexels.com/photos/9324394/pexels-photo-9324394.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        { icon: Shield, text: '100% Recycled Materials' },
        { icon: Zap, text: 'Energy Efficient' },
        { icon: Star, text: 'Carbon Neutral' }
      ],
      stats: [
        { value: '0kg', label: 'Carbon Footprint' },
        { value: '10yrs', label: 'Device Lifespan' },
        { value: '95%', label: 'Recyclable Components' }
      ]
    }
  ]

  const nextSpotlight = () => {
    setActiveSpotlight((prev) => (prev + 1) % spotlights.length)
  }

  const prevSpotlight = () => {
    setActiveSpotlight((prev) => (prev - 1 + spotlights.length) % spotlights.length)
  }

  const currentSpotlight = spotlights[activeSpotlight]

  return (
    <section id="innovation" className="section product-spotlight">
      <div className="container">
        <div className="spotlight-header">
          <h2>Innovation Spotlight</h2>
          <p>Discover the technologies that make TechNova devices extraordinary</p>
        </div>

        <div className="spotlight-container">
          <div className="spotlight-content">
            <div className="spotlight-text">
              <div className="spotlight-badge">
                <Star size={16} />
                Innovation
              </div>
              <h3 className="spotlight-title">{currentSpotlight.title}</h3>
              <p className="spotlight-subtitle">{currentSpotlight.subtitle}</p>
              <p className="spotlight-description">{currentSpotlight.description}</p>

              <div className="spotlight-features">
                {currentSpotlight.features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="feature-item">
                      <div className="feature-icon">
                        <Icon size={20} />
                      </div>
                      <span>{feature.text}</span>
                    </div>
                  )
                })}
              </div>

              <div className="spotlight-stats">
                {currentSpotlight.stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="spotlight-visual">
              <div className="spotlight-image">
                <img src={currentSpotlight.image} alt={currentSpotlight.title} />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>

          <div className="spotlight-controls">
            <button className="control-btn" onClick={prevSpotlight}>
              <ChevronLeft size={24} />
            </button>
            
            <div className="spotlight-indicators">
              {spotlights.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === activeSpotlight ? 'active' : ''}`}
                  onClick={() => setActiveSpotlight(index)}
                />
              ))}
            </div>

            <button className="control-btn" onClick={nextSpotlight}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-spotlight {
          background: var(--bg-secondary);
          position: relative;
          overflow: hidden;
        }

        .product-spotlight::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 1000px;
          height: 1000px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.1), transparent);
          transform: translateX(-50%);
          pointer-events: none;
        }

        .spotlight-header {
          text-align: center;
          margin-bottom: calc(var(--spacing) * 8);
        }

        .spotlight-header h2 {
          margin-bottom: calc(var(--spacing) * 2);
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .spotlight-header p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .spotlight-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .spotlight-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: calc(var(--spacing) * 8);
          align-items: center;
          min-height: 600px;
        }

        .spotlight-text {
          z-index: 1;
        }

        .spotlight-badge {
          display: inline-flex;
          align-items: center;
          gap: calc(var(--spacing) * 1);
          background: var(--surface);
          color: var(--primary);
          padding: calc(var(--spacing) * 1) calc(var(--spacing) * 2);
          border-radius: var(--radius-lg);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: calc(var(--spacing) * 3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 212, 255, 0.2);
        }

        .spotlight-title {
          font-size: 2.5rem;
          margin-bottom: calc(var(--spacing) * 2);
          color: var(--text-primary);
        }

        .spotlight-subtitle {
          font-size: 1.3rem;
          color: var(--primary);
          margin-bottom: calc(var(--spacing) * 3);
          font-weight: 600;
        }

        .spotlight-description {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: calc(var(--spacing) * 4);
          color: var(--text-secondary);
        }

        .spotlight-features {
          display: flex;
          flex-direction: column;
          gap: calc(var(--spacing) * 2);
          margin-bottom: calc(var(--spacing) * 4);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: calc(var(--spacing) * 2);
          color: var(--text-secondary);
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          background: var(--surface);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          backdrop-filter: blur(10px);
        }

        .spotlight-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: calc(var(--spacing) * 3);
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: calc(var(--spacing) / 2);
        }

        .stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .spotlight-visual {
          position: relative;
          z-index: 1;
        }

        .spotlight-image {
          position: relative;
          height: 500px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .spotlight-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(0, 212, 255, 0.2));
        }

        .spotlight-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: calc(var(--spacing) * 6);
          padding: 0 calc(var(--spacing) * 2);
        }

        .control-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .control-btn:hover {
          background: var(--surface-hover);
          transform: scale(1.1);
        }

        .spotlight-indicators {
          display: flex;
          gap: calc(var(--spacing) * 2);
        }

        .indicator {
          width: 60px;
          height: 4px;
          border-radius: 2px;
          border: none;
          background: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: var(--primary);
        }

        @media (max-width: 968px) {
          .spotlight-content {
            grid-template-columns: 1fr;
            gap: calc(var(--spacing) * 6);
            text-align: center;
          }

          .spotlight-title {
            font-size: 2rem;
          }

          .spotlight-stats {
            grid-template-columns: repeat(3, 1fr);
            justify-items: center;
          }
        }

        @media (max-width: 568px) {
          .spotlight-stats {
            grid-template-columns: 1fr;
            gap: calc(var(--spacing) * 2);
          }

          .spotlight-features {
            align-items: center;
          }

          .control-btn {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  )
}

export default ProductSpotlight