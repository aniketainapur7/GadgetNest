import { useState } from 'react'
import { Smartphone, Watch, Headphones, Cpu, Battery, Wifi, Shield } from 'lucide-react'

const DeviceShowcase = () => {
  const [hoveredDevice, setHoveredDevice] = useState(null)

  const devices = [
    {
      id: 'novphone',
      name: 'NovPhone X1',
      category: 'Smartphone',
      icon: Smartphone,
      price: '$899',
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['6.7" OLED Display', 'AI Triple Camera', '5G Ultra', 'Face ID'],
      specs: [
        { icon: Cpu, label: 'A17 Quantum Chip' },
        { icon: Battery, label: '48h Battery Life' },
        { icon: Shield, label: 'Quantum Security' }
      ],
      gradient: 'linear-gradient(135deg, #00D4FF, #0099CC)'
    },
    {
      id: 'novwatch',
      name: 'NovWatch Pro',
      category: 'Smartwatch',
      icon: Watch,
      price: '$399',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Health Monitoring', 'GPS Precision', 'Water Resistant', 'Wireless Charging'],
      specs: [
        { icon: Battery, label: '7 Days Battery' },
        { icon: Wifi, label: '5G + WiFi 6' },
        { icon: Shield, label: 'Military Grade' }
      ],
      gradient: 'linear-gradient(135deg, #00FF88, #00CC66)'
    },
    {
      id: 'novbuds',
      name: 'NovBuds Elite',
      category: 'Earbuds',
      icon: Headphones,
      price: '$249',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Active Noise Cancelling', 'Spatial Audio', 'Touch Controls', 'Fast Charging'],
      specs: [
        { icon: Battery, label: '32h Total Playback' },
        { icon: Wifi, label: 'Bluetooth 5.3' },
        { icon: Shield, label: 'IPX7 Rating' }
      ],
      gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)'
    }
  ]

  return (
    <section id="devices" className="section device-showcase">
      <div className="container">
        <div className="section-header">
          <h2>Revolutionary Devices</h2>
          <p>Discover our complete ecosystem of smart devices designed for the future</p>
        </div>

        <div className="devices-grid">
          {devices.map((device, index) => {
            const Icon = device.icon
            const isHovered = hoveredDevice === device.id

            return (
              <div
                key={device.id}
                className={`device-card ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredDevice(device.id)}
                onMouseLeave={() => setHoveredDevice(null)}
                style={{
                  '--device-gradient': device.gradient,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="device-image-hover-overlay"></div>
                <div className="device-header">
                  <div className="device-icon">
                    <Icon size={32} />
                  </div>
                  <div className="device-info">
                    <span className="device-category">{device.category}</span>
                    <h3 className="device-name">{device.name}</h3>
                  </div>
                  <div className="device-price">{device.price}</div>
                </div>

                <div className="device-image">
                  <img src={device.image} alt={device.name} />
                  <div className="device-overlay"></div>
                  <div className="device-hover-effect"></div>
                </div>

                <div className="device-features">
                  {device.features.map((feature, i) => (
                    <span key={i} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="device-specs">
                  {device.specs.map((spec, i) => {
                    const SpecIcon = spec.icon
                    return (
                      <div key={i} className="spec-item">
                        <SpecIcon size={16} />
                        <span>{spec.label}</span>
                      </div>
                    )
                  })}
                </div>

                <div className="device-actions">
                  <button className="btn btn-primary device-btn">
                    Learn More
                  </button>
                  <button className="btn btn-secondary device-btn">
                    Compare
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .device-showcase {
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .section-header {
          text-align: center;
          margin-bottom: calc(var(--spacing) * 8);
        }

        .section-header h2 {
          margin-bottom: calc(var(--spacing) * 2);
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-header p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .devices-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: calc(var(--spacing) * 4);
          max-width: 1200px;
          margin: 0 auto;
        }

        .device-card {
          background: var(--surface);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: calc(var(--spacing) * 3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.6s ease-out both;
        }

        .device-image-hover-overlay {
          position: absolute;
          inset: 0;
          background: var(--device-gradient);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
          border-radius: var(--radius-lg);
        }

        .device-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--device-gradient);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .device-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .device-card:hover::before {
          opacity: 0.1;
        }

        .device-card:hover .device-image-hover-overlay {
          opacity: 0.05;
        }

        .device-header {
          display: flex;
          align-items: flex-start;
          gap: calc(var(--spacing) * 2);
          margin-bottom: calc(var(--spacing) * 3);
        }

        .device-icon {
          padding: calc(var(--spacing) * 2);
          background: var(--device-gradient);
          border-radius: var(--radius-md);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .device-info {
          flex: 1;
        }

        .device-category {
          color: var(--text-muted);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .device-name {
          color: var(--text-primary);
          margin: calc(var(--spacing) / 2) 0 0 0;
        }

        .device-price {
          font-size: 1.5rem;
          font-weight: 700;
          background: var(--device-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .device-image {
          position: relative;
          height: 200px;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: calc(var(--spacing) * 3);
        }

        .device-hover-effect {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .device-card:hover .device-hover-effect {
          transform: translateX(100%);
        }

        .device-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .device-card:hover .device-image img {
          transform: scale(1.1);
        }

        .device-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(0, 0, 0, 0.4));
        }

        .device-features {
          display: flex;
          flex-wrap: wrap;
          gap: calc(var(--spacing) * 1);
          margin-bottom: calc(var(--spacing) * 3);
        }

        .feature-tag {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          padding: calc(var(--spacing) / 2) calc(var(--spacing) * 1);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          backdrop-filter: blur(10px);
        }

        .device-specs {
          display: flex;
          flex-direction: column;
          gap: calc(var(--spacing) * 1);
          margin-bottom: calc(var(--spacing) * 3);
        }

        .spec-item {
          display: flex;
          align-items: center;
          gap: calc(var(--spacing) * 1);
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .spec-item svg {
          color: var(--primary);
        }

        .device-actions {
          display: flex;
          gap: calc(var(--spacing) * 2);
        }

        .device-btn {
          flex: 1;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .devices-grid {
            grid-template-columns: 1fr;
            gap: calc(var(--spacing) * 3);
          }

          .device-card {
            margin: 0 calc(var(--spacing) * 1);
          }

          .device-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}

export default DeviceShowcase