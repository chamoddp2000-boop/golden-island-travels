import { Car, Map, UserCheck, Calendar } from 'lucide-react';

const services = [
  {
    icon: <Car size={40} />,
    title: 'Private Chauffeur Service',
    description: 'Travel at your own pace with a dedicated vehicle and driver. No strict schedules, just total freedom.',
  },
  {
    icon: <Map size={40} />,
    title: 'Hotel & Safari Booking',
    description: 'We secure the best rates for your accommodation, wildlife safaris, and activity tickets, managing all bookings for you.',
  },
  {
    icon: <UserCheck size={40} />,
    title: 'Expert Local Guides',
    description: 'Our drivers are not just for transport; they are knowledgeable guides who share the hidden gems of Sri Lanka.',
  },
  {
    icon: <Calendar size={40} />,
    title: 'Tailor-Made Itineraries',
    description: 'Start from scratch or customize our packages. We help you design the perfect trip based on your interests and budget.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section bg-darker">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Premium <span className="text-gold">Services</span></h2>
          <p className="section-subtitle">Experience the best of Sri Lankan hospitality with our tailored travel solutions.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-box">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bg-darker {
          background-color: var(--color-darker);
        }

        .mb-5 {
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: var(--color-gray-300);
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: var(--color-dark);
          padding: 30px;
          border-radius: 20px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border-color: var(--color-gold);
        }

        .icon-box {
          color: var(--color-gold);
          margin-bottom: 20px;
          display: inline-block;
          padding: 15px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.1);
        }

        .service-card h3 {
          margin-bottom: 15px;
          font-size: 1.5rem;
        }

        .service-card p {
          color: var(--color-gray-300);
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
};

export default Services;
