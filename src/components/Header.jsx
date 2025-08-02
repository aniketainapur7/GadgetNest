import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Crown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false); // close menu when route changes
  }, [location]);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Trending', to: '/trending' },
    { label: 'Team', to: '/team' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <Zap className="brand-icon" />
            <Link to={'/'}>
            <span className="brand-text">GadgetNest</span>
            </Link>
            
          </div>

          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/tech-of-year" className="btn btn-primary nav-cta">
              <Crown size={20} />
              Tech Of The Year
            </Link>
          </div>

          <button
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Style remains the same */}
      <style jsx>{`
        .header {
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .header-scrolled {
          background: rgba(10, 10, 15, 0.95);
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: calc(var(--spacing) * 2) 0;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: calc(var(--spacing) * 1);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: none;
        }

        .brand-icon {
          color: var(--primary);
          animation: glow 3s ease-in-out infinite;
        }

        .brand-text {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: calc(var(--spacing) * 4);
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-cta {
          margin-left: calc(var(--spacing) * 2);
        }

        .nav-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: calc(var(--spacing) * 1);
        }

        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(10, 10, 15, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: calc(var(--spacing) * 4);
            transform: translateY(-100vh);
            transition: transform 0.3s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .nav-menu-open {
            transform: translateY(0);
          }

          .nav-toggle {
            display: block;
          }

          .nav-cta {
            margin-left: 0;
            margin-top: calc(var(--spacing) * 2);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;

