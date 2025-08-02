import { useState, useEffect } from "react"
import { Smartphone, Watch, Headphones, Cpu, Battery, Wifi, Shield, Star, Zap, Eye, Laptop } from "lucide-react"

import ProductMarquee from "./ProductMarquee"

const DeviceShowcase = () => {
  const [hoveredDevice, setHoveredDevice] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const devices = [
    {
      id: "novphone",
      name: "NovPhone X1",
      category: "Smartphone",
      icon: Smartphone,
      price: "$899",
      originalPrice: "$1099",
      image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ['6.7" OLED Display', "AI Triple Camera", "5G Ultra", "Face ID"],
      specs: [
        { icon: Cpu, label: "A17 Quantum Chip" },
        { icon: Battery, label: "48h Battery Life" },
        { icon: Shield, label: "Quantum Security" },
      ],
      gradient: "linear-gradient(135deg, #00D4FF, #0099CC)",
      glowColor: "#00D4FF",
      rating: 4.9,
      badge: "Best Seller",
    },
    {
      id: "novwatch",
      name: "NovWatch Pro",
      category: "Smartwatch",
      icon: Watch,
      price: "$399",
      originalPrice: "$499",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Health Monitoring", "GPS Precision", "Water Resistant", "Wireless Charging"],
      specs: [
        { icon: Battery, label: "7 Days Battery" },
        { icon: Wifi, label: "5G + WiFi 6" },
        { icon: Shield, label: "Military Grade" },
      ],
      gradient: "linear-gradient(135deg, #00FF88, #00CC66)",
      glowColor: "#00FF88",
      rating: 4.8,
      badge: "New",
    },
    {
      id: "novbuds",
      name: "NovBuds Elite",
      category: "Earbuds",
      icon: Headphones,
      price: "$249",
      originalPrice: "$299",
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Active Noise Cancelling", "Spatial Audio", "Touch Controls", "Fast Charging"],
      specs: [
        { icon: Battery, label: "32h Total Playback" },
        { icon: Wifi, label: "Bluetooth 5.3" },
        { icon: Shield, label: "IPX7 Rating" },
      ],
      gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
      glowColor: "#8B5CF6",
      rating: 4.7,
      badge: "Limited",
    },
    {
      id: "novabook",
      name: "NovaBook M3",
      category: "Laptop",
      icon: Laptop,
      price: "$1249",
      originalPrice: "$1599",
      image: "https://images.pexels.com/photos/2148220/pexels-photo-2148220.jpeg",
      features: ["Intel Core i7 13th Gen", "Retina 4K Display", "Backlit Keyboard", "Fast SSD Storage"],
      specs: [
        { icon: Battery, label: "Up to 18h Battery Life" },
        { icon: Wifi, label: "Wi-Fi 6 & Bluetooth 5.3" },
        { icon: Shield, label: "Fingerprint Security" },
      ],
      gradient: "linear-gradient(135deg, #F97316, #EA580C)", // Orange gradient
      glowColor: "#F97316", // Glow matches gradient
      rating: 4.7,
      badge: "Limited",
    }
  ]

  return (
    <section className="device-showcase">
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`,
              }}
            />
          ))}
        </div>
        <div className="grid-overlay" />
      </div>

      {/* Mouse Follower */}
      <div
        className="mouse-follower"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-badge">
            <Zap size={16} />
            <span>Revolutionary Technology</span>
          </div>
          <h2 className="main-title">
            <span className="title-line">Future-Ready</span>
            <span className="title-line gradient-text">Devices</span>
          </h2>
          <p className="subtitle">Discover our complete ecosystem of smart devices designed for tomorrow</p>
        </div>

        {/* Product Marquee */}
        <ProductMarquee />

        {/* Devices Grid */}
        <div className="devices-grid">
          {devices.map((device, index) => {
            const Icon = device.icon
            const isHovered = hoveredDevice === device.id

            return (
              <div
                key={device.id}
                className={`device-card ${isHovered ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredDevice(device.id)}
                onMouseLeave={() => setHoveredDevice(null)}
                style={{
                  "--device-gradient": device.gradient,
                  "--glow-color": device.glowColor,
                  "--animation-delay": `${index * 0.2}s`,
                }}
              >
                {/* Card Glow Effect */}
                <div className="card-glow" />

                {/* Badge */}
                {device.badge && (
                  <div className="device-badge">
                    <span>{device.badge}</span>
                  </div>
                )}

                {/* Header */}
                <div className="device-header">
                  <div className="device-icon">
                    <Icon size={28} />
                    <div className="icon-glow" />
                  </div>
                  <div className="device-info">
                    <span className="device-category">{device.category}</span>
                    <h3 className="device-name">{device.name}</h3>
                    <div className="rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className={i < Math.floor(device.rating) ? "filled" : "empty"} />
                        ))}
                      </div>
                      <span className="rating-text">{device.rating}</span>
                    </div>
                  </div>
                  <div className="device-pricing">
                    <div className="price">{device.price}</div>
                    <div className="original-price">{device.originalPrice}</div>
                  </div>
                </div>

                {/* Image Container */}
                <div className="device-image-container">
                  <div className="image-wrapper">
                    <img src={device.image || "/placeholder.svg"} alt={device.name} />
                    <div className="image-overlay" />
                    <div className="scan-line" />
                  </div>
                  <div className="hologram-effect" />
                </div>

                {/* Features */}
                <div className="device-features">
                  {device.features.map((feature, i) => (
                    <div key={i} className="feature-tag">
                      <div className="feature-dot" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Specs */}
                <div className="device-specs">
                  {device.specs.map((spec, i) => {
                    const SpecIcon = spec.icon
                    return (
                      <div key={i} className="spec-item">
                        <div className="spec-icon">
                          <SpecIcon size={14} />
                        </div>
                        <span>{spec.label}</span>
                        <div className="spec-line" />
                      </div>
                    )
                  })}
                </div>

                {/* Actions */}
                <div className="device-actions">
                  <button className="btn btn-primary">
                    <Eye size={16} />
                    <span>Explore</span>
                    <div className="btn-glow" />
                  </button>
                  <button className="btn btn-secondary">
                    <span>Compare</span>
                  </button>
                </div>

                {/* Floating Elements */}
                <div className="floating-elements">
                  <div className="float-1" />
                  <div className="float-2" />
                  <div className="float-3" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .device-showcase {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          overflow: hidden;
          padding: 80px 0;
        }

        .bg-animation {
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
          width: 2px;
          height: 2px;
          background: linear-gradient(45deg, #00D4FF, #8B5CF6);
          border-radius: 50%;
          animation: float infinite linear;
        }

        @keyframes float {
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

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .mouse-follower {
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          transform: translate(-50%, -50%);
          transition: all 0.1s ease;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
          animation: fadeInUp 1s ease-out;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          padding: 8px 16px;
          border-radius: 20px;
          color: #00D4FF;
          font-size: 14px;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .main-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .title-line {
          display: block;
          color: white;
        }

        .gradient-text {
          background: linear-gradient(135deg, #00D4FF, #8B5CF6, #00FF88);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(90deg); }
        }

        .subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .devices-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .device-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 32px;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          animation: cardFloat 6s ease-in-out infinite;
          animation-delay: var(--animation-delay);
          overflow: hidden;
        }

        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-10px) rotateX(2deg); }
        }

        .card-glow {
          position: absolute;
          inset: -2px;
          background: var(--device-gradient);
          border-radius: 24px;
          opacity: 0;
          filter: blur(20px);
          transition: opacity 0.6s ease;
          z-index: -1;
        }

        .device-card:hover {
          transform: translateY(-20px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .device-card:hover .card-glow {
          opacity: 0.3;
        }

        .device-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--device-gradient);
          color: white;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .device-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 32px;
        }

        .device-icon {
          position: relative;
          padding: 16px;
          background: var(--device-gradient);
          border-radius: 16px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-glow {
          position: absolute;
          inset: -4px;
          background: var(--device-gradient);
          border-radius: 16px;
          filter: blur(10px);
          opacity: 0.5;
          z-index: -1;
          animation: iconPulse 2s ease-in-out infinite;
        }

        @keyframes iconPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        .device-info {
          flex: 1;
        }

        .device-category {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }

        .device-name {
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 8px 0;
          line-height: 1.2;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .stars .filled {
          color: #FFD700;
          fill: #FFD700;
        }

        .stars .empty {
          color: rgba(255, 255, 255, 0.3);
        }

        .rating-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          font-weight: 600;
        }

        .device-pricing {
          text-align: right;
        }

        .price {
          font-size: 1.75rem;
          font-weight: 800;
          background: var(--device-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .original-price {
          color: rgba(255, 255, 255, 0.5);
          font-size: 1rem;
          text-decoration: line-through;
          margin-top: 4px;
        }

        .device-image-container {
          position: relative;
          height: 240px;
          margin-bottom: 32px;
          border-radius: 16px;
          overflow: hidden;
        }

        .image-wrapper {
          position: relative;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .device-card:hover .image-wrapper img {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
        }

        .scan-line {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--glow-color), transparent);
          animation: scan 3s ease-in-out infinite;
        }

        @keyframes scan {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: -100%; }
        }

        .hologram-effect {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.8s ease;
        }

        .device-card:hover .hologram-effect {
          transform: translateX(100%);
        }

        .device-features {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }

        .feature-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .feature-tag:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .feature-dot {
          width: 6px;
          height: 6px;
          background: var(--glow-color);
          border-radius: 50%;
          animation: dotPulse 2s ease-in-out infinite;
        }

        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .device-specs {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .spec-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          position: relative;
        }

        .spec-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: var(--glow-color);
        }

        .spec-line {
          position: absolute;
          left: 40px;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--glow-color), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .device-card:hover .spec-line {
          opacity: 0.3;
        }

        .device-actions {
          display: flex;
          gap: 16px;
        }

        .btn {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          overflow: hidden;
          border: none;
          cursor: pointer;
        }

        .btn-primary {
          background: var(--device-gradient);
          color: white;
        }

        .btn-glow {
          position: absolute;
          inset: -2px;
          background: var(--device-gradient);
          border-radius: 12px;
          filter: blur(8px);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .btn-primary:hover .btn-glow {
          opacity: 0.6;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .floating-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .float-1, .float-2, .float-3 {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--glow-color);
          border-radius: 50%;
          opacity: 0.6;
        }

        .float-1 {
          top: 20%;
          right: 10%;
          animation: floatAround 8s ease-in-out infinite;
        }

        .float-2 {
          bottom: 30%;
          left: 15%;
          animation: floatAround 10s ease-in-out infinite reverse;
        }

        .float-3 {
          top: 60%;
          right: 20%;
          animation: floatAround 12s ease-in-out infinite;
        }

        @keyframes floatAround {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(90deg); }
          50% { transform: translate(-10px, -30px) rotate(180deg); }
          75% { transform: translate(-20px, 10px) rotate(270deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .devices-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 0 16px;
          }

          .device-card {
            padding: 24px;
          }

          .main-title {
            font-size: clamp(2rem, 6vw, 3rem);
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
