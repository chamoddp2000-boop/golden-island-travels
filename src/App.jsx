import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Tours from './components/Tours';
import Activities from './components/Activities';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Tours />
      <Activities />
      <Reviews />
      <Gallery />

      <section id="about" className="section bg-darker" style={{ padding: '80px 0' }}>
        <div className="container text-center">
          <h2 className="section-title">Why Choose <span className="text-gold">Us?</span></h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-gray-300)', fontSize: '1.1rem' }}>
            Golden Island Travels is a family-owned business dedicated to showing you the real Sri Lanka.
            With a network of trusted drivers and years of experience, we treat every guest like family.
            Whether you need a simple airport transfer or a full 14-day tour, we are here to serve you with a smile.
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}

export default App;
