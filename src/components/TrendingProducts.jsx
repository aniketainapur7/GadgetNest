import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  TrendingUp,
  Crown,
  Sparkles,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  Tablet,
  Speaker,
  Monitor,
  Star,
  ShoppingCart,
  Heart,
  Eye,
} from "lucide-react"
import RippleGrid from "../RippleGrid"

const TrendingProducts = () => {
  const [activeSection, setActiveSection] = useState("featured")
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const sections = [
    {
      id: "featured",
      title: "Featured",
      subtitle: "Handpicked Excellence",
      icon: Crown,
      gradient: "linear-gradient(135deg, #FFD700, #FFA500)",
      glowColor: "#FFD700",
    },
    {
      id: "bestseller",
      title: "Best Sellers",
      subtitle: "Customer Favorites",
      icon: TrendingUp,
      gradient: "linear-gradient(135deg, #00D4FF, #0099CC)",
      glowColor: "#00D4FF",
    },
    {
      id: "newarrivals",
      title: "New Arrivals",
      subtitle: "Latest Innovation",
      icon: Sparkles,
      gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
      glowColor: "#8B5CF6",
    },
  ]

  const products = {
    featured: [
      {
        id: "f1",
        name: "QuantumPhone Pro Max",
        category: "Smartphone",
        price: "$1299",
        originalPrice: "$1499",
        image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
        icon: Smartphone,
        rating: 4.9,
        badge: "Editor's Choice",
        discount: "15%",
      },
      {
        id: "f2",
        name: "HoloBook Ultra",
        category: "Laptop",
        price: "$2199",
        originalPrice: "$2599",
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
        icon: Laptop,
        rating: 4.8,
        badge: "Premium",
        discount: "20%",
      },
      {
        id: "f3",
        name: "Neural Pods X",
        category: "Earbuds",
        price: "$349",
        originalPrice: "$399",
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
        icon: Headphones,
        rating: 4.7,
        badge: "AI Powered",
        discount: "12%",
      },
      {
        id: "f4",
        name: "TimeWarp Watch",
        category: "Smartwatch",
        price: "$599",
        originalPrice: "$699",
        image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
        icon: Watch,
        rating: 4.6,
        badge: "Limited",
        discount: "14%",
      },
      {
        id: "f5",
        name: "VisionCam 8K",
        category: "Camera",
        price: "$1899",
        originalPrice: "$2199",
        image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400",
        icon: Camera,
        rating: 4.9,
        badge: "Pro",
        discount: "18%",
      },
      {
        id: "f6",
        name: "GameSphere Elite",
        category: "Gaming",
        price: "$799",
        originalPrice: "$899",
        image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
        icon: Gamepad2,
        rating: 4.8,
        badge: "Gaming",
        discount: "11%",
      },
    ],
    bestseller: [
      {
        id: "b1",
        name: "FlexiTab Pro",
        category: "Tablet",
        price: "$899",
        originalPrice: "$999",
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400",
        icon: Tablet,
        rating: 4.7,
        badge: "#1 Seller",
        discount: "10%",
      },
      {
        id: "b2",
        name: "SonicWave Speaker",
        category: "Audio",
        price: "$299",
        originalPrice: "$349",
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        icon: Speaker,
        rating: 4.6,
        badge: "Popular",
        discount: "14%",
      },
      {
        id: "b3",
        name: "CrystalView 4K",
        category: "Monitor",
        price: "$699",
        originalPrice: "$799",
        image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400",
        icon: Monitor,
        rating: 4.8,
        badge: "Trending",
        discount: "12%",
      },
      {
        id: "b4",
        name: "PowerCore Laptop",
        category: "Laptop",
        price: "$1599",
        originalPrice: "$1799",
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
        icon: Laptop,
        rating: 4.5,
        badge: "Value",
        discount: "11%",
      },
      {
        id: "b5",
        name: "AirPods Quantum",
        category: "Earbuds",
        price: "$199",
        originalPrice: "$249",
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
        icon: Headphones,
        rating: 4.4,
        badge: "Bestseller",
        discount: "20%",
      },
      {
        id: "b6",
        name: "SmartPhone Lite",
        category: "Smartphone",
        price: "$599",
        originalPrice: "$699",
        image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
        icon: Smartphone,
        rating: 4.3,
        badge: "Budget",
        discount: "14%",
      },
    ],
    newarrivals: [
      {
        id: "n1",
        name: "NeoPhone 15",
        category: "Smartphone",
        price: "$1099",
        originalPrice: "$1199",
        image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
        icon: Smartphone,
        rating: 4.8,
        badge: "Just Launched",
        discount: "8%",
      },
      {
        id: "n2",
        name: "HyperWatch 2024",
        category: "Smartwatch",
        price: "$449",
        originalPrice: "$499",
        image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
        icon: Watch,
        rating: 4.7,
        badge: "New",
        discount: "10%",
      },
      {
        id: "n3",
        name: "UltraBook X1",
        category: "Laptop",
        price: "$1799",
        originalPrice: "$1999",
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
        icon: Laptop,
        rating: 4.9,
        badge: "Innovation",
        discount: "10%",
      },
      {
        id: "n4",
        name: "ProCam Alpha",
        category: "Camera",
        price: "$1299",
        originalPrice: "$1499",
        image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400",
        icon: Camera,
        rating: 4.6,
        badge: "Fresh",
        discount: "13%",
      },
      {
        id: "n5",
        name: "GamePad Pro Max",
        category: "Gaming",
        price: "$199",
        originalPrice: "$229",
        image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
        icon: Gamepad2,
        rating: 4.5,
        badge: "Latest",
        discount: "13%",
      },
      {
        id: "n6",
        name: "SoundWave Elite",
        category: "Audio",
        price: "$399",
        originalPrice: "$449",
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        icon: Speaker,
        rating: 4.4,
        badge: "Arrival",
        discount: "11%",
      },
    ],
  }

  const currentSection = sections.find((s) => s.id === activeSection)
  const currentProducts = products[activeSection]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const productVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      y: -60,
      scale: 0.8,
      rotateX: 15,
      transition: {
        duration: 0.4,
      },
    },
    hover: {
      y: -12,
      scale: 1.02,
      rotateX: 5,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  }

  const sectionHeaderVariants = {
    hidden: {
      opacity: 0,
      y: -30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      y: 30,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  }

  const navItemVariants = {
    inactive: {
      scale: 1,
      y: 0,
    },
    active: {
      scale: 1.05,
      y: -4,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  }

  const floatingElementVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      rotate: [0, 180, 360],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const scanLineVariants = {
    animate: {
      x: ["-100%", "100%", "-100%"],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const glowVariants = {
    animate: {
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="trending-products">
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="floating-particles">
          {[...Array(25)].map((_, i) => (
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
        <motion.div
          className="grid-overlay"
          animate={{
            x: [0, 60],
            y: [0, 60],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="wave-overlay"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="mouse-follower"
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      <div className="container">
        {/* Main Header */}
        <motion.div
          className="main-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="header-badge"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <TrendingUp size={18} />
            <span>Trending Now</span>
          </motion.div>
          <motion.h1
            className="main-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <motion.span
              className="title-line"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover
            </motion.span>
            <motion.span
              className="title-line gradient-text"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Tomorrow's Tech
            </motion.span>
          </motion.h1>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Explore our curated collection of cutting-edge technology products
          </motion.p>
        </motion.div>

        {/* Section Navigation */}
        <motion.div
          className="section-nav"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {sections.map((section, index) => {
            const Icon = section.icon
            const isActive = activeSection === section.id
            return (
              <motion.button
                key={section.id}
                className={`nav-item ${isActive ? "active" : ""}`}
                onClick={() => setActiveSection(section.id)}
                variants={navItemVariants}
                initial="inactive"
                animate={isActive ? "active" : "inactive"}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{
                  "--section-gradient": section.gradient,
                  "--glow-color": section.glowColor,
                }}
              >
                <motion.div className="nav-icon" animate={isActive ? glowVariants.animate : {}}>
                  <Icon size={20} />
                  <motion.div className="icon-glow" animate={isActive ? glowVariants.animate : {}} />
                </motion.div>
                <div className="nav-content">
                  <span className="nav-title">{section.title}</span>
                  <span className="nav-subtitle">{section.subtitle}</span>
                </div>
                <motion.div
                  className="nav-glow"
                  animate={isActive ? { opacity: 0.4 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            )
          })}
        </motion.div>

        {/* Products Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            className="products-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="section-header" variants={sectionHeaderVariants}>
              <motion.div
                className="section-badge"
                style={{ "--glow-color": currentSection.glowColor }}
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    `0 0 20px ${currentSection.glowColor}33`,
                    `0 0 30px ${currentSection.glowColor}66`,
                    `0 0 20px ${currentSection.glowColor}33`,
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              >
                <currentSection.icon size={16} />
                <span>{currentSection.title}</span>
              </motion.div>
              <motion.h2
                className="section-title"
                style={{ "--gradient": currentSection.gradient }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {currentSection.subtitle}
              </motion.h2>
            </motion.div>

            <motion.div className="products-grid" variants={containerVariants}>
              {currentProducts.map((product, index) => {
                const Icon = product.icon
                const isHovered = hoveredProduct === product.id
                return (
                  <motion.div
                    key={product.id}
                    className={`product-card ${isHovered ? "hovered" : ""}`}
                    variants={productVariants}
                    whileHover="hover"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    style={{
                      "--glow-color": currentSection.glowColor,
                    }}
                    layout
                  >
                    {/* Card Glow */}
                    <motion.div className="card-glow" animate={isHovered ? glowVariants.animate : {}} />

                    {/* Discount Badge */}
                    <motion.div
                      className="discount-badge"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span>-{product.discount}</span>
                    </motion.div>

                    {/* Product Badge */}
                    <motion.div
                      className="product-badge"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>{product.badge}</span>
                    </motion.div>

                    {/* Image Container */}
                    <motion.div className="product-image" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                      <div className="image-wrapper">
                        <motion.img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          whileHover={{ scale: 1.15, rotate: 2 }}
                          transition={{ duration: 0.8 }}
                        />
                        <div className="image-overlay" />
                        <motion.div className="scan-effect" variants={scanLineVariants} animate="animate" />
                      </div>
                      <motion.div
                        className="hologram-grid"
                        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                      className="product-info"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <motion.div className="product-header" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <motion.div
                          className="product-icon"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon size={18} />
                        </motion.div>
                        <span className="product-category">{product.category}</span>
                      </motion.div>

                      <motion.h3
                        className="product-name"
                        whileHover={{ color: currentSection.glowColor }}
                        transition={{ duration: 0.3 }}
                      >
                        {product.name}
                      </motion.h3>

                      <motion.div
                        className="product-rating"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                      >
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{
                                delay: index * 0.1 + 0.7 + i * 0.1,
                                type: "spring",
                              }}
                            >
                              <Star size={12} className={i < Math.floor(product.rating) ? "filled" : "empty"} />
                            </motion.div>
                          ))}
                        </div>
                        <span className="rating-text">{product.rating}</span>
                      </motion.div>

                      <motion.div
                        className="product-pricing"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.8 }}
                      >
                        <motion.div className="price" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                          {product.price}
                        </motion.div>
                        <div className="original-price">{product.originalPrice}</div>
                      </motion.div>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                      className="product-actions"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.9 }}
                    >
                      <motion.button
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ShoppingCart size={16} />
                        <span>Add to Cart</span>
                        <motion.div className="btn-glow" animate={isHovered ? glowVariants.animate : {}} />
                      </motion.button>
                      <motion.button
                        className="btn btn-icon"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Heart size={16} />
                      </motion.button>
                      <motion.button
                        className="btn btn-icon"
                        whileHover={{ scale: 1.1, rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Eye size={16} />
                      </motion.button>
                    </motion.div>

                    {/* Floating Elements */}
                    <div className="floating-elements">
                      <motion.div className="float-1" variants={floatingElementVariants} animate="animate" />
                      <motion.div
                        className="float-2"
                        variants={floatingElementVariants}
                        animate="animate"
                        transition={{ delay: 1 }}
                      />
                      <motion.div
                        className="float-3"
                        variants={floatingElementVariants}
                        animate="animate"
                        transition={{ delay: 2 }}
                      />
                    </div>

                    {/* Data Streams */}
                    <motion.div
                      className="data-streams"
                      animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        className="stream stream-1"
                        animate={
                          isHovered
                            ? {
                                scaleY: [0, 1, 0],
                                opacity: [0, 1, 0],
                              }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="stream stream-2"
                        animate={
                          isHovered
                            ? {
                                scaleY: [0, 1, 0],
                                opacity: [0, 1, 0],
                              }
                            : {}
                        }
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      />
                      <motion.div
                        className="stream stream-3"
                        animate={
                          isHovered
                            ? {
                                scaleY: [0, 1, 0],
                                opacity: [0, 1, 0],
                              }
                            : {}
                        }
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        .trending-products {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 30%, #16213e 70%, #0f3460 100%);
          overflow: hidden;
          padding: 100px 0;
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
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #00D4FF, #8B5CF6, #00FF88);
          border-radius: 50%;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 212, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .wave-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 0%, rgba(139, 92, 246, 0.03) 50%, transparent 100%);
        }

        .mouse-follower {
          position: fixed;
          width: 30px;
          height: 30px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }

        .container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .main-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          padding: 10px 20px;
          border-radius: 25px;
          color: #00D4FF;
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 32px;
          backdrop-filter: blur(15px);
        }

        .main-title {
          font-size: clamp(3.5rem, 10vw, 7rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .title-line {
          display: block;
          color: white;
        }

        .gradient-text {
          background: linear-gradient(135deg, #00D4FF, #8B5CF6, #00FF88, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .section-nav {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-bottom: 80px;
          flex-wrap: wrap;
        }

        .nav-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 16px 24px;
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          overflow: hidden;
        }

        .nav-item:hover,
        .nav-item.active {
          border-color: rgba(255, 255, 255, 0.3);
          color: white;
        }

        .nav-glow {
          position: absolute;
          inset: -2px;
          background: var(--section-gradient);
          border-radius: 20px;
          filter: blur(15px);
          z-index: -1;
        }

        .nav-icon {
          position: relative;
          padding: 12px;
          background: var(--section-gradient);
          border-radius: 12px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-glow {
          position: absolute;
          inset: -3px;
          background: var(--section-gradient);
          border-radius: 12px;
          filter: blur(8px);
          opacity: 0.6;
          z-index: -1;
        }

        .nav-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .nav-title {
          font-size: 16px;
          font-weight: 700;
        }

        .nav-subtitle {
          font-size: 12px;
          opacity: 0.7;
        }

        .products-section {
          perspective: 1000px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 16px;
          border-radius: 20px;
          color: var(--glow-color);
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
          backdrop-filter: blur(10px);
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
          margin-top: 40px;
        }

        .product-card {
          position: relative;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 24px;
          overflow: hidden;
          cursor: pointer;
          transform-style: preserve-3d;
        }

        .card-glow {
          position: absolute;
          inset: -3px;
          background: linear-gradient(135deg, var(--glow-color), transparent, var(--glow-color));
          border-radius: 24px;
          opacity: 0;
          filter: blur(20px);
          z-index: -1;
        }

        .discount-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: linear-gradient(135deg, #FF6B6B, #FF8E53);
          color: white;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          z-index: 2;
        }

        .product-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          color: white;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .product-image {
          position: relative;
          height: 200px;
          margin-bottom: 24px;
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
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
        }

        .scan-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--glow-color), transparent);
        }

        .hologram-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0;
        }

        .product-info {
          margin-bottom: 20px;
        }

        .product-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .product-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: var(--glow-color);
        }

        .product-category {
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }

        .product-name {
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .product-rating {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
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
          font-size: 13px;
          font-weight: 600;
        }

        .product-pricing {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .price {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--glow-color);
          line-height: 1;
        }

        .original-price {
          color: rgba(255, 255, 255, 0.5);
          font-size: 1rem;
          text-decoration: line-through;
        }

        .product-actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          overflow: hidden;
          border: none;
          cursor: pointer;
        }

        .btn-primary {
          flex: 1;
          background: linear-gradient(135deg, var(--glow-color), rgba(255, 255, 255, 0.1));
          color: white;
        }

        .btn-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, var(--glow-color), transparent);
          border-radius: 12px;
          filter: blur(10px);
          opacity: 0;
          z-index: -1;
        }

        .btn-icon {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .floating-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .float-1, .float-2, .float-3 {
          position: absolute;
          width: 6px;
          height: 6px;
          background: var(--glow-color);
          border-radius: 50%;
          opacity: 0.4;
        }

        .float-1 {
          top: 25%;
          right: 15%;
        }

        .float-2 {
          bottom: 35%;
          left: 20%;
        }

        .float-3 {
          top: 65%;
          right: 25%;
        }

        .data-streams {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
        }

        .stream {
          position: absolute;
          width: 1px;
          background: linear-gradient(to bottom, transparent, var(--glow-color), transparent);
          transform-origin: top;
        }

        .stream-1 {
          left: 20%;
          height: 60%;
          top: 20%;
        }

        .stream-2 {
          right: 30%;
          height: 40%;
          top: 30%;
        }

        .stream-3 {
          left: 60%;
          height: 50%;
          top: 25%;
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 0 16px;
          }

          .section-nav {
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }

          .nav-item {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .product-card {
            padding: 20px;
          }

          .main-title {
            font-size: clamp(2.5rem, 8vw, 4rem);
          }

          .product-actions {
            flex-direction: column;
          }

          .btn-icon {
            width: 100%;
            height: 44px;
          }
        }
      `}</style>
    </section>
  )
}

export default TrendingProducts
