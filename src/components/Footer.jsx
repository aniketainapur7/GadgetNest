import { Zap, Mail, Phone, MapPin, Twitter, Github, Linkedin } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    products: [
      { label: 'NovPhone X1', href: '#novphone' },
      { label: 'NovWatch Pro', href: '#novwatch' },
      { label: 'NovBuds Elite', href: '#novbuds' },
      { label: 'Accessories', href: '#accessories' }
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#press' },
      { label: 'News', href: '#news' }
    ],
    support: [
      { label: 'Help Center', href: '#help' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Warranty', href: '#warranty' },
      { label: 'Returns', href: '#returns' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'Accessibility', href: '#accessibility' }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Github, href: '#github', label: 'GitHub' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' }
  ]

  const contactInfo = [
    { icon: Mail, text: 'hello@gadgetnest.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: 'San Francisco, CA' }
  ]

  return (
    <footer id="contact" className="footer">
      <div className="footer-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <Zap className="brand-icon" />
              <span className="brand-text">GadgetNest</span>
            </div>
            <p className="brand-description">
              Pioneering the future of smart technology with innovative devices 
              that seamlessly integrate into your lifestyle.
            </p>
            <div className="contact-info">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="contact-item">
                    <Icon size={16} />
                    <span>{item.text}</span>
                  </div>
                )
              })}
            </div>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="social-link"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h3 className="column-title">Products</h3>
              <ul className="link-list">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h3 className="column-title">Company</h3>
              <ul className="link-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h3 className="column-title">Support</h3>
              <ul className="link-list">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h3 className="column-title">Legal</h3>
              <ul className="link-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 TechNova. All rights reserved.
            </p>
            <p className="footer-note">
              Designed with ❤️ for the future of technology
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-secondary);
          position: relative;
          overflow: hidden;
          padding: calc(var(--spacing) * 8) 0 calc(var(--spacing) * 4) 0;
        }

        .footer-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.2;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--primary), transparent);
          top: -300px;
          left: -200px;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, var(--accent), transparent);
          bottom: -200px;
          right: -100px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: calc(var(--spacing) * 8);
          margin-bottom: calc(var(--spacing) * 6);
          position: relative;
          z-index: 1;
        }

        .footer-brand {
          max-width: 400px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: calc(var(--spacing) * 1);
          margin-bottom: calc(var(--spacing) * 3);
        }

        .brand-icon {
          color: var(--primary);
          animation: glow 3s ease-in-out infinite;
        }

        .brand-text {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: calc(var(--spacing) * 4);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: calc(var(--spacing) * 2);
          margin-bottom: calc(var(--spacing) * 4);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: calc(var(--spacing) * 2);
          color: var(--text-secondary);
        }

        .contact-item svg {
          color: var(--primary);
        }

        .social-links {
          display: flex;
          gap: calc(var(--spacing) * 2);
        }

        .social-link {
          width: 44px;
          height: 44px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          background: var(--surface-hover);
          color: var(--primary);
          transform: translateY(-2px);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: calc(var(--spacing) * 4);
        }

        .column-title {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: calc(var(--spacing) * 3);
        }

        .link-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: calc(var(--spacing) * 2);
        }

        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--primary);
        }

        .footer-bottom {
          position: relative;
          z-index: 1;
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
          margin-bottom: calc(var(--spacing) * 4);
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: calc(var(--spacing) * 2);
        }

        .copyright {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .footer-note {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 968px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: calc(var(--spacing) * 6);
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: calc(var(--spacing) * 6);
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 568px) {
          .footer-links {
            grid-template-columns: 1fr;
            gap: calc(var(--spacing) * 4);
          }

          .social-links {
            justify-content: center;
          }

          .contact-info {
            align-items: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer