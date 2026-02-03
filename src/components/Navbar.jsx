import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#services' },
        { name: 'Tours', href: '#tours' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="logo">
                    <span className="text-gold">Golden Island</span> Travels
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                    <a href="https://wa.me/YOUR_NUMBER" className="btn btn-primary btn-sm">
                        <Phone size={18} style={{ marginRight: '8px' }} />
                        Book Now
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="https://wa.me/YOUR_NUMBER" className="btn btn-primary" style={{ marginTop: '20px' }}>
                            Book via WhatsApp
                        </a>
                    </div>
                )}
            </div>

            <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar.scrolled {
          background: var(--overlay-dark);
          backdrop-filter: blur(10px);
          padding: 15px 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-white);
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-link {
          color: var(--color-white);
          font-weight: 500;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-gold);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .btn-sm {
          padding: 8px 20px;
          display: flex;
          align-items: center;
        }

        .mobile-toggle {
          display: none;
          cursor: pointer;
          color: var(--color-white);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--color-darker);
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .mobile-nav-link {
          font-size: 1.2rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
