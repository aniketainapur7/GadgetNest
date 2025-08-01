import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { createRoot } from 'react-dom/client';

// Individual animated item component
const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      style={{ marginBottom: '1rem', cursor: 'pointer' }}
    >
      {children}
    </motion.div>
  );
};

// Main animated list
const AnimatedList = ({
  items,
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  displayScrollbar = true,
  initialSelectedIndex = -1,
}) => {
  const listRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  };

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(items[selectedIndex], selectedIndex);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`);
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: 'smooth',
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <div
      style={{
        position: 'relative',
        width: '500px',
        background: '#060010',
        borderRadius: '12px',
        padding: '16px',
      }}
    >
      <div
        ref={listRef}
        onScroll={handleScroll}
        style={{
          maxHeight: '400px',
          overflowY: displayScrollbar ? 'auto' : 'hidden',
          paddingRight: '8px',
        }}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            delay={0.1}
            index={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => {
              setSelectedIndex(index);
              if (onItemSelect) {
                onItemSelect(item, index);
              }
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '16px',
                backgroundColor: selectedIndex === index ? '#271E37' : '#170D27',
                borderRadius: '8px',
                transition: 'background-color 0.3s ease',
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <div>
                <p style={{ margin: 0, color: 'white', fontWeight: 600 }}>{item.name}</p>
                <p style={{ margin: 0, color: '#aaa', fontSize: '14px' }}>{item.position}</p>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>

      {showGradients && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50px',
              background: 'linear-gradient(to bottom, #060010, transparent)',
              opacity: topGradientOpacity,
              pointerEvents: 'none',
              transition: 'opacity 0.3s ease',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '100px',
              background: 'linear-gradient(to top, #060010, transparent)',
              opacity: bottomGradientOpacity,
              pointerEvents: 'none',
              transition: 'opacity 0.3s ease',
            }}
          />
        </>
      )}
    </div>
  );
};

// App entry
const App = () => {
  const teamMembers = [
    { name: 'Harshad Jogdande', position: 'CEO', image: 'https://i.pravatar.cc/100?img=1' },
    { name: 'Jane Smith', position: 'CTO', image: 'https://i.pravatar.cc/100?img=2' },
    { name: 'John Doe', position: 'Product Manager', image: 'https://i.pravatar.cc/100?img=3' },
    { name: 'Alex Roe', position: 'UI/UX Designer', image: 'https://i.pravatar.cc/100?img=4' },
    { name: 'Samantha Ray', position: 'Marketing Head', image: 'https://i.pravatar.cc/100?img=5' },
    { name: 'Daniel Young', position: 'Engineer', image: 'https://i.pravatar.cc/100?img=6' },
    { name: 'Emily King', position: 'Data Analyst', image: 'https://i.pravatar.cc/100?img=7' },
  ];

  return (
    <div style={{ padding: '2rem', background: '#0c011a', minHeight: '100vh' }}>
      <h2 style={{ color: 'white', marginBottom: '1rem' }}>🚀 Team Members</h2>
      <AnimatedList
        items={teamMembers}
        onItemSelect={(item, index) => console.log('Selected:', item, index)}
        showGradients={true}
        enableArrowNavigation={true}
        displayScrollbar={true}
      />
    </div>
  );
};

// Render
const root = createRoot(document.getElementById('root'));
root.render(<App />);
