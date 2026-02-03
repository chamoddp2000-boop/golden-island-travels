import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content text-center">
        <h1 className="hero-title">
          Explore <span className="text-gold">Sri Lanka</span> <br /> with Comfort & Style
        </h1>
        <p className="hero-subtitle">
          Your trusted partner for premium transport, expert guides, and unforgettable island tours.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Plan My Trip <ArrowRight size={20} style={{ marginLeft: '10px' }} />
          </a>
          <a href="#tours" className="btn btn-outline">
            View Popular Tours
          </a>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url(${heroBg});
          background-size: cover;
          background-position: center;
          background-attachment: fixed; /* Parallax effect */
        }


        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(15, 23, 42, 0.3), rgba(15, 23, 42, 0.8));
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding-top: 60px; /* Offset for navbar */
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 20px;
          text-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--color-gray-100);
          max-width: 700px;
          margin: 0 auto 40px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .btn-outline {
          padding: 12px 30px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid var(--color-white);
          background: transparent;
          color: var(--color-white);
        }

        .btn-outline:hover {
          background: var(--color-white);
          color: var(--color-darker);
        }

        .btn-primary {
          display: flex;
          align-items: center;
        }

        @media (max-width: 768px) {
          .hero {
            background-attachment: scroll; /* Disable parallax on mobile */
            min-height: 100vh; /* Handle dynamic toolbars better */
            height: auto;
          }

          .hero-overlay {
            background: linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.95)); /* Much darker on mobile */
          }

          .hero-title {
            font-size: 3rem;
          }
          .hero-subtitle {
            font-size: 1.2rem;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
           .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
