import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trophy, Star, Zap, Calendar, Clock, Sparkles, Eye, Bell } from "lucide-react"

const TechOfTheYear = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isRevealed, setIsRevealed] = useState(false)
  const [mysteryRotation, setMysteryRotation] = useState(0)
  const [ripples, setRipples] = useState([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setIsRevealed(true)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setMysteryRotation((prev) => prev + 0.5)
    }, 50)
    return () => clearInterval(rotationInterval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Create ripple effect
  useEffect(() => {
    const createRipple = () => {
      const newRipple = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }
      setRipples((prev) => [...prev, newRipple])

      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
      }, 4000)
    }

    const interval = setInterval(createRipple, 2000)
    return () => clearInterval(interval)
  }, [])

  const mysteryFeatures = [
    "Revolutionary AI Integration",
    "Quantum Processing Power",
    "Holographic Display Technology",
    "Neural Interface Compatibility",
    "Unlimited Battery Life",
    "Telepathic Controls",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    }),
  }

  const rippleVariants = {
    initial: { scale: 0, opacity: 0.8 },
    animate: {
      scale: [0, 1, 2, 3],
      opacity: [0.8, 0.6, 0.3, 0],
      transition: {
        duration: 4,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="tech-of-year">
      {/* Animated Background */}
      <div className="mystery-background">
        {/* Ripple Effects */}
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.div
              key={ripple.id}
              className="ripple"
              style={{
                left: ripple.x,
                top: ripple.y,
              }}
              variants={rippleVariants}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0 }}
            />
          ))}
        </AnimatePresence>

        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: ["100vh", "-100px"],
                rotate: [0, 360],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 10,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Gradient Mesh */}
        <motion.div
          className="gradient-mesh"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 212, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(0, 212, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 30% 60%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Neural Network Lines */}
        <div className="neural-network">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="neural-line"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="mouse-follower"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      <div className="container">
        <motion.div className="section-header" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="award-badge" variants={itemVariants}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Trophy className="trophy-icon" />
            </motion.div>
            <span>Tech of the Year 2025</span>
            <motion.div
              className="badge-glow"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.h2 className="mystery-title" variants={itemVariants}>
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              The Ultimate Innovation
            </motion.span>
            <motion.span
              className="mystery-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Something extraordinary is coming...
            </motion.span>
          </motion.h2>
        </motion.div>

        <motion.div className="mystery-content" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="mystery-device" variants={itemVariants}>
            <div className="device-container">
              <motion.div
                className="mystery-box"
                animate={{
                  rotateY: mysteryRotation,
                  y: [-10, 10, -10],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  rotateX: 15,
                }}
              >
                <div className="box-face front">
                  <motion.div
                    className="question-mark"
                    animate={{
                      scale: [1, 1.2, 1],
                      textShadow: [
                        "0 0 20px rgba(139, 92, 246, 0.5)",
                        "0 0 40px rgba(139, 92, 246, 0.8)",
                        "0 0 20px rgba(139, 92, 246, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    ?
                  </motion.div>
                </div>
                <div className="box-face back">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Zap size={60} />
                  </motion.div>
                </div>
                <div className="box-face right">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Star size={60} />
                  </motion.div>
                </div>
                <div className="box-face left">
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Trophy size={60} />
                  </motion.div>
                </div>
                <div className="box-face top">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Clock size={60} />
                  </motion.div>
                </div>
                <div className="box-face bottom">
                  <motion.div
                    animate={{ scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Calendar size={60} />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="device-glow"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <div className="energy-rings">
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    className={`ring ring-${ring}`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: ring * 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="mystery-info" variants={itemVariants}>
            <motion.div className="countdown-container" variants={itemVariants}>
              <motion.h3
                className="countdown-title"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Sparkles size={20} />
                Reveal Countdown
              </motion.h3>
              <div className="countdown-grid">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Minutes" },
                  { value: timeLeft.seconds, label: "Seconds" },
                ].map((unit, index) => (
                  <motion.div key={unit.label}>
                    <motion.div
                      className="time-unit"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="time-value"
                        key={unit.value}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {unit.value.toString().padStart(2, "0")}
                      </motion.div>
                      <div className="time-label">{unit.label}</div>
                      <motion.div
                        className="time-glow"
                        animate={{
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      />
                    </motion.div>
                    {index < 3 && (
                      <motion.div
                        className="time-separator"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        :
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="mystery-features" variants={itemVariants}>
              <motion.h4
                className="features-title"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Eye size={18} />
                Rumored Features
              </motion.h4>
              <div className="features-list">
                {mysteryFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-item"
                    custom={index}
                    variants={featureVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                      x: 10,
                      scale: 1.02,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="feature-dot"
                      animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          "0 0 10px rgba(0, 255, 136, 0.5)",
                          "0 0 20px rgba(0, 255, 136, 0.8)",
                          "0 0 10px rgba(0, 255, 136, 0.5)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    />
                    <span className="feature-text">{feature}</span>
                    <motion.div
                      className="feature-line"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="mystery-actions" variants={itemVariants}>
              <motion.button
                className="btn btn-primary mystery-btn"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Bell size={20} />
                </motion.div>
                Get Notified
                <motion.div
                  className="btn-glow"
                  animate={{
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.button>
              <motion.button
                className="btn btn-secondary mystery-btn"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 212, 255, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Trophy size={20} />
                </motion.div>
                Join Waitlist
                <motion.div
                  className="btn-glow secondary"
                  animate={{
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .tech-of-year {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 30%, #16213e 70%, #0f3460 100%);
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .mystery-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .ripple {
          position: absolute;
          width: 100px;
          height: 100px;
          border: 2px solid rgba(139, 92, 246, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
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
          background: linear-gradient(45deg, #8B5CF6, #00D4FF, #00FF88);
          border-radius: 50%;
        }

        .gradient-mesh {
          position: absolute;
          inset: 0;
        }

        .neural-network {
          position: absolute;
          inset: 0;
        }

        .neural-line {
          position: absolute;
          width: 200px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), transparent);
          transform: rotate(45deg);
        }

        .mouse-follower {
          position: fixed;
          width: 50px;
          height: 50px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .award-badge {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #8B5CF6, #00D4FF);
          color: white;
          padding: 16px 32px;
          border-radius: 25px;
          font-weight: 600;
          margin-bottom: 32px;
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
          overflow: hidden;
        }

        .badge-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #8B5CF6, #00D4FF);
          border-radius: 25px;
          filter: blur(10px);
          z-index: -1;
        }

        .trophy-icon {
          filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
        }

        .mystery-title {
          font-size: clamp(3rem, 8vw, 6rem);
          margin-bottom: 16px;
          font-weight: 900;
          line-height: 1.1;
        }

        .mystery-title span:first-child {
          display: block;
          background: linear-gradient(135deg, #8B5CF6, #00D4FF, #00FF88);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mystery-subtitle {
          display: block;
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 400;
          margin-top: 16px;
        }

        .mystery-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
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
          width: 250px;
          height: 250px;
          position: relative;
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .box-face {
          position: absolute;
          width: 250px;
          height: 250px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(139, 92, 246, 0.3);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(20px);
          color: #8B5CF6;
        }

        .front { transform: rotateY(0deg) translateZ(125px); }
        .back { transform: rotateY(180deg) translateZ(125px); }
        .right { transform: rotateY(90deg) translateZ(125px); }
        .left { transform: rotateY(-90deg) translateZ(125px); }
        .top { transform: rotateX(90deg) translateZ(125px); }
        .bottom { transform: rotateX(-90deg) translateZ(125px); }

        .question-mark {
          font-size: 5rem;
          font-weight: 900;
          background: linear-gradient(135deg, #8B5CF6, #00D4FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .device-glow {
          position: absolute;
          inset: -80px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent);
          border-radius: 50%;
          z-index: -1;
        }

        .energy-rings {
          position: absolute;
          inset: -150px;
        }

        .ring {
          position: absolute;
          border: 2px solid rgba(139, 92, 246, 0.3);
          border-radius: 50%;
        }

        .ring-1 { inset: 0; }
        .ring-2 { inset: 30px; }
        .ring-3 { inset: 60px; }

        .mystery-info {
          z-index: 1;
        }

        .countdown-container {
          margin-bottom: 48px;
        }

        .countdown-title {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          margin-bottom: 24px;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .countdown-grid {
          display: flex;
          align-items: center;
          gap: 16px;
          justify-content: center;
        }

        .time-unit {
          position: relative;
          text-align: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 20px 16px;
          backdrop-filter: blur(20px);
          min-width: 90px;
          cursor: pointer;
          overflow: hidden;
        }

        .time-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #8B5CF6, #00D4FF);
          border-radius: 16px;
          filter: blur(10px);
          z-index: -1;
        }

        .time-value {
          font-size: 2.2rem;
          font-weight: 800;
          color: #8B5CF6;
          margin-bottom: 4px;
          text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }

        .time-label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        .time-separator {
          font-size: 2.2rem;
          font-weight: 800;
          color: #8B5CF6;
          text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }

        .mystery-features {
          margin-bottom: 48px;
        }

        .features-title {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          margin-bottom: 24px;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .feature-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 0;
          cursor: pointer;
        }

        .feature-line {
          position: absolute;
          bottom: 0;
          left: 24px;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, #00FF88, transparent);
          transform-origin: left;
        }

        .feature-dot {
          width: 10px;
          height: 10px;
          background: #00FF88;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .feature-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          font-weight: 500;
        }

        .mystery-actions {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .mystery-btn {
          position: relative;
          flex: 1;
          min-width: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 32px;
          border-radius: 16px;
          font-weight: 600;
          font-size: 16px;
          border: none;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #8B5CF6, #7C3AED);
          color: white;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 212, 255, 0.3);
        }

        .btn-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #8B5CF6, #7C3AED);
          border-radius: 16px;
          filter: blur(10px);
          z-index: -1;
        }

        .btn-glow.secondary {
          background: linear-gradient(135deg, #00D4FF, #0099CC);
        }

        @media (max-width: 968px) {
          .mystery-content {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }

          .countdown-grid {
            flex-wrap: wrap;
            gap: 12px;
          }

          .time-unit {
            min-width: 70px;
            padding: 16px 12px;
          }

          .time-value {
            font-size: 1.8rem;
          }

          .mystery-actions {
            justify-content: center;
          }
        }

        @media (max-width: 568px) {
          .mystery-box {
            width: 180px;
            height: 180px;
          }

          .box-face {
            width: 180px;
            height: 180px;
          }

          .front { transform: rotateY(0deg) translateZ(90px); }
          .back { transform: rotateY(180deg) translateZ(90px); }
          .right { transform: rotateY(90deg) translateZ(90px); }
          .left { transform: rotateY(-90deg) translateZ(90px); }
          .top { transform: rotateX(90deg) translateZ(90px); }
          .bottom { transform: rotateX(-90deg) translateZ(90px); }

          .question-mark {
            font-size: 3.5rem;
          }

          .mystery-actions {
            flex-direction: column;
          }

          .mystery-btn {
            min-width: auto;
          }
        }
      `}</style>
    </section>
  )
}

export default TechOfTheYear
