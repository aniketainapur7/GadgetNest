import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedItem = ({ item, index, isSelected, onHover, onClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={() => onHover(index)}
      onFocus={() => onHover(index)}
      onClick={() => onClick(index)}
      initial={{ scale: 0.85, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.05 * index }}
      tabIndex={0}
      style={{
        marginBottom: '1rem',
        cursor: 'pointer',
        position: 'relative',
        padding: '20px',
        backgroundColor: isSelected ? '#271E37' : '#1a102b',
        borderRadius: '12px',
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: isSelected ? '0 4px 12px rgba(255,255,255,0.1)' : 'none',
        transition: 'background-color 0.3s ease',
      }}
    >
      <div>
        <p style={{ margin: 0, color: 'white', fontWeight: 600, fontSize: '1.1rem' }}>{item.name}</p>
        <p style={{ margin: 0, color: '#bbb', fontSize: '0.9rem' }}>{item.position}</p>
      </div>

      {isSelected && (
        <motion.img
  src={item.image}
  alt={item.name}
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1.2 }} // slightly scaled up
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
  style={{
    width: '100px',       // increased from 80px
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginLeft: '1rem',
    border: '3px solid white',
    boxShadow: '0 0 12px rgba(255, 255, 255, 0.2)', // optional glow
  }}
/>
      )}
    </motion.div>
  );
};

const AnimatedList = ({ items }) => {
  const listRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // keyboard navigation
  useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    }
  };



  const handleClickOutside = (e) => {
    if (listRef.current && !listRef.current.contains(e.target)) {
      setSelectedIndex(-1); // 👉 Reset selection when clicking outside
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  document.addEventListener('mousedown', handleClickOutside); // 👈 listen for outside click

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [items.length]);


  return (
  
  <div
    ref={listRef}
    onMouseLeave={() => setSelectedIndex(-1)} // 👈 clear selection on mouse out
    style={{
      width: '100%',
      maxWidth: '540px',
      background: '#0e061b',
      borderRadius: '16px',
      padding: '24px',
      maxHeight: '500px',
      overflowY: 'auto',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    }}
  >
    {items.map((item, index) => (
      <AnimatedItem
        key={index}
        item={item}
        index={index}
        isSelected={index === selectedIndex}
        onHover={setSelectedIndex}
        onClick={(i) => console.log('Clicked:', items[i])}
      />
    ))}
  </div>
);


};

const Teampage = () => {
  const teamMembers = [
    { name: 'Harshad Jogdande', position: 'Backend Developer', image: 'https://i.pravatar.cc/100?img=1' },
    { name: 'Aniket Ainapur', position: 'Frontend Developer', image: 'https://i.pravatar.cc/100?img=2' },
    { name: 'Niraj Ukare', position: 'ML Expert', image: 'https://i.pravatar.cc/100?img=3' },
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Gradient Orbs */}
      <div className="landing-background">
        <div className="gradient-orb orb-a"></div>
        <div className="gradient-orb orb-b"></div>
        <div className="gradient-orb orb-c"></div>
      </div>

      <div
        style={{
          padding: '3rem 1rem',
          background: 'linear-gradient(135deg, #0c011a, #120d23)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <h2 style={{ color: 'white', fontSize: '4rem', marginBottom: '2rem', fontWeight: 700 }}>
          Team Tech-Titans
        </h2>
        <AnimatedList items={teamMembers} />
      </div>

      <style jsx>{`
        .landing-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;
        }

        .orb-a {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, var(--primary, #6c5ce7), transparent);
          top: 5%;
          left: -10%;
          animation-delay: 0s;
        }

        .orb-b {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, var(--secondary, #00cec9), transparent);
          bottom: 10%;
          right: -5%;
          animation-delay: 2s;
        }

        .orb-c {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, var(--accent, #fd79a8), transparent);
          bottom: -20%;
          left: 50%;
          transform: translateX(-50%);
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};


export default Teampage;