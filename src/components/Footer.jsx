import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer bg-darker">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="text-gold">Golden Island</span> Travels
                    </div>

                    <div className="footer-links">
                        <a href="#">Home</a>
                        <a href="#services">Services</a>
                        <a href="#tours">Tours</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="social-icons">
                        <a href="#" className="social-icon"><Facebook size={20} /></a>
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                        <a href="#" className="social-icon"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-bottom text-center">
                    <p>&copy; {currentYear} Golden Island Travels. All rights reserved.</p>
                </div>
            </div>

            <style>{`
        .footer {
            padding: 60px 0 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            flex-wrap: wrap;
            gap: 20px;
        }

        .footer-logo {
            font-size: 1.5rem;
            font-weight: 700;
        }

        .footer-links {
            display: flex;
            gap: 30px;
        }

        .footer-links a {
            color: var(--color-gray-300);
            transition: color 0.3s;
        }

        .footer-links a:hover {
            color: var(--color-gold);
        }

        .social-icons {
             display: flex;
             gap: 15px;
        }

        .social-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }

        .social-icon:hover {
            background: var(--color-gold);
            color: var(--color-darker);
        }

        .footer-bottom {
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            color: var(--color-gray-500);
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .footer-content {
                flex-direction: column;
                text-align: center;
            }
            .footer-links {
                flex-direction: column;
                gap: 15px;
            }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
