import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, Code, Brain, Server, Github, Linkedin, Twitter, Mail, MapPin, Star } from "lucide-react"

const TeamPage = () => {
  const [hoveredMember, setHoveredMember] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const teamMembers = [
    {
      id: 1,
      name: "Harshad Jogdande",
      position: "Backend Developer",
      image:
        "https://sjc.microlink.io/J4BmwHDYVZ8kFQeGZJ_aXmc7L49qy4dO5PLrnB3hOO4uH8XftBugGn9EWN0UKD8R7IAkH5gSQ2Ca0w91BzbYkg.jpeg",
      icon: Server,
      gradient: "linear-gradient(135deg, #00D4FF, #0099CC)",
      glowColor: "#00D4FF",
      skills: ["Node.js", "Python", "MongoDB", "AWS"],
      experience: "3+ Years",
      location: "Mumbai, India",
      bio: "Passionate backend architect with expertise in scalable systems and cloud infrastructure.",
      achievements: ["Built 50+ APIs", "Cloud Expert", "Performance Optimizer"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "harshad@company.com",
      },
    },
    {
      id: 2,
      name: "Aniket Ainapur",
      position: "Frontend Developer",
      image: "https://i.pravatar.cc/100?img=2",
      icon: Code,
      gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
      glowColor: "#8B5CF6",
      skills: ["React", "Next.js", "TypeScript", "Tailwind"],
      experience: "4+ Years",
      location: "Bangalore, India",
      bio: "Creative frontend developer focused on building beautiful and intuitive user experiences.",
      achievements: ["UI/UX Expert", "100+ Components", "Animation Master"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "aniket@company.com",
      },
    },
    {
      id: 3,
      name: "Niraj Ukare",
      position: "ML Expert",
      image: "https://i.pravatar.cc/100?img=3",
      icon: Brain,
      gradient: "linear-gradient(135deg, #00FF88, #00CC66)",
      glowColor: "#00FF88",
      skills: ["TensorFlow", "PyTorch", "Python", "Data Science"],
      experience: "5+ Years",
      location: "Pune, India",
      bio: "Machine learning specialist with deep expertise in AI algorithms and data analysis.",
      achievements: ["AI Researcher", "20+ Models", "Data Scientist"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "niraj@company.com",
      },
    },
  ]

  // Animation variants
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

  const memberVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.02,
      x: 10,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  }

  const imagePopupVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    visible: {
      scale: 1.5,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  }

  const glowVariants = {
    animate: {
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      rotate: [0, 180, 360],
      transition: {
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="team-page">
      {/* Animated Background */}
      <div className="bg-animation">
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
                duration: Math.random() * 15 + 20,
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
            x: [0, 80],
            y: [0, 80],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className="neural-network"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="mouse-follower"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      <div className="container">
        {/* Header Section */}
        <motion.div
          className="header-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="header-badge"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 20px rgba(0, 212, 255, 0.3)",
                "0 0 40px rgba(0, 212, 255, 0.6)",
                "0 0 20px rgba(0, 212, 255, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Users size={20} />
            <span>Meet Our Team</span>
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
              The Minds Behind
            </motion.span>
            <motion.span
              className="title-line gradient-text"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Innovation
            </motion.span>
          </motion.h1>

          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            A passionate team of developers and innovators building the future of technology
          </motion.p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div className="team-grid" variants={containerVariants} initial="hidden" animate="visible">
          {teamMembers.map((member, index) => {
            const Icon = member.icon
            const isHovered = hoveredMember === member.id
            return (
              <motion.div
                key={member.id}
                className={`member-card ${isHovered ? "hovered" : ""}`}
                variants={memberVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                style={{
                  "--gradient": member.gradient,
                  "--glow-color": member.glowColor,
                }}
              >
                {/* Card Glow */}
                <motion.div className="card-glow" animate={isHovered ? glowVariants.animate : {}} />

                {/* Floating Elements */}
                <div className="floating-elements">
                  <motion.div
                    className="float-1"
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: index * 0.5 }}
                  />
                  <motion.div
                    className="float-2"
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: index * 0.5 + 1 }}
                  />
                  <motion.div
                    className="float-3"
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: index * 0.5 + 2 }}
                  />
                </div>

                {/* Left Side - Profile Image */}
                <div className="member-image-section">
                  <motion.div className="member-image-container">
                    <motion.div
                      className="image-wrapper"
                      animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={member.image || "/placeholder.svg"} alt={member.name} />
                      <motion.div className="image-glow" animate={isHovered ? glowVariants.animate : {}} />
                    </motion.div>

                    <motion.div
                      className="role-icon"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon size={20} />
                    </motion.div>

                    {/* Scan Lines */}
                    <motion.div
                      className="scan-line"
                      animate={{
                        x: ["-100%", "100%", "-100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Popup Profile Image */}
                  <motion.div
                    className="popup-image"
                    variants={imagePopupVariants}
                    initial="hidden"
                    animate={isHovered ? "visible" : "hidden"}
                  >
                    <img src={member.image || "/placeholder.svg"} alt={member.name} />
                    <motion.div className="popup-glow" animate={isHovered ? glowVariants.animate : {}} />
                  </motion.div>
                </div>

                {/* Right Side - Member Info */}
                <motion.div
                  className="member-info"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  <div className="member-header">
                    <motion.h3
                      className="member-name"
                      whileHover={{ color: member.glowColor }}
                      transition={{ duration: 0.3 }}
                    >
                      {member.name}
                    </motion.h3>

                    <motion.p
                      className="member-position"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.7 }}
                    >
                      {member.position}
                    </motion.p>

                    <motion.div
                      className="member-location"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.9 }}
                    >
                      <MapPin size={14} />
                      <span>{member.location}</span>
                    </motion.div>
                  </div>

                  <motion.p
                    className="member-bio"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 1.1 }}
                  >
                    {member.bio}
                  </motion.p>

                  {/* Skills */}
                  <motion.div
                    className="member-skills"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 1.3 }}
                  >
                    {member.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="skill-tag"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: index * 0.2 + 1.5 + skillIndex * 0.1,
                          type: "spring",
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Achievements */}
                  <motion.div
                    className="member-achievements"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 1.7 }}
                  >
                    {member.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        className="achievement"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Star size={12} />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    className="social-links"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 1.9 }}
                  >
                    {[
                      { icon: Github, link: member.social.github },
                      { icon: Linkedin, link: member.social.linkedin },
                      { icon: Twitter, link: member.social.twitter },
                      { icon: Mail, link: `mailto:${member.social.email}` },
                    ].map((social, socialIndex) => {
                      const SocialIcon = social.icon
                      return (
                        <motion.a
                          key={socialIndex}
                          href={social.link}
                          className="social-link"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          <SocialIcon size={16} />
                        </motion.a>
                      )
                    })}
                  </motion.div>
                </motion.div>

                {/* Data Streams */}
                <motion.div
                  className="data-streams"
                  animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {[1, 2, 3].map((stream) => (
                    <motion.div
                      key={stream}
                      className={`stream stream-${stream}`}
                      animate={
                        isHovered
                          ? {
                              scaleY: [0, 1, 0],
                              opacity: [0, 1, 0],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2 + stream * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: stream * 0.3,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <style jsx>{`
        .team-page {
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
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #00D4FF, #8B5CF6, #00FF88);
          border-radius: 50%;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
        }

        .neural-network {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%);
        }

        .mouse-follower {
          position: fixed;
          width: 40px;
          height: 40px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
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

        .header-section {
          text-align: center;
          margin-bottom: 80px;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          padding: 12px 24px;
          border-radius: 30px;
          color: #00D4FF;
          font-size: 16px;
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

        .team-grid {
          display: flex;
          flex-direction: column;
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .member-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 40px;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 32px;
          overflow: hidden;
          cursor: pointer;
          min-height: 200px;
        }

        .card-glow {
          position: absolute;
          inset: -3px;
          background: var(--gradient);
          border-radius: 24px;
          opacity: 0;
          filter: blur(20px);
          z-index: -1;
        }

        .floating-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .float-1, .float-2, .float-3 {
          position: absolute;
          width: 8px;
          height: 8px;
          background: var(--glow-color);
          border-radius: 50%;
          opacity: 0.3;
        }

        .float-1 {
          top: 20%;
          right: 15%;
        }

        .float-2 {
          bottom: 30%;
          left: 20%;
        }

        .float-3 {
          top: 60%;
          right: 25%;
        }

        .member-image-section {
          position: relative;
          flex-shrink: 0;
        }

        .member-image-container {
          position: relative;
          width: 120px;
          height: 120px;
        }

        .image-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--glow-color);
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-glow {
          position: absolute;
          inset: -6px;
          background: var(--gradient);
          border-radius: 50%;
          filter: blur(15px);
          opacity: 0;
          z-index: -1;
        }

        .role-icon {
          position: absolute;
          bottom: -5px;
          right: -5px;
          width: 40px;
          height: 40px;
          background: var(--gradient);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border: 3px solid rgba(255, 255, 255, 0.1);
        }

        .scan-line {
          position: absolute;
          top: 50%;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--glow-color), transparent);
          transform: translateY(-50%);
        }

        .popup-image {
          position: absolute;
          top: -60px;
          left: -60px;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--glow-color);
          z-index: 10;
          pointer-events: none;
        }

        .popup-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .popup-glow {
          position: absolute;
          inset: -8px;
          background: var(--gradient);
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0;
          z-index: -1;
        }

        .member-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .member-header {
          margin-bottom: 8px;
        }

        .member-name {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }

        .member-position {
          font-size: 1.1rem;
          color: var(--glow-color);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .member-location {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
        }

        .member-bio {
          color: rgba(255, 255, 255, 0.7);
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 4px;
        }

        .member-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 8px;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.9);
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
        }

        .member-achievements {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 8px;
        }

        .achievement {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
          cursor: pointer;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          cursor: pointer;
        }

        .social-link:hover {
          color: var(--glow-color);
          border-color: var(--glow-color);
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
          left: 25%;
          height: 60%;
          top: 20%;
        }

        .stream-2 {
          right: 25%;
          height: 40%;
          top: 30%;
        }

        .stream-3 {
          left: 60%;
          height: 50%;
          top: 25%;
        }

        @media (max-width: 768px) {
          .member-card {
            flex-direction: column;
            text-align: center;
            gap: 24px;
            padding: 24px;
          }

          .member-info {
            align-items: center;
          }

          .member-achievements {
            justify-content: center;
          }

          .member-skills {
            justify-content: center;
          }

          .popup-image {
            top: -40px;
            left: -40px;
            width: 200px;
            height: 200px;
          }

          .main-title {
            font-size: clamp(2.5rem, 8vw, 4rem);
          }
        }
      `}</style>
    </section>
  )
}

export default TeamPage
