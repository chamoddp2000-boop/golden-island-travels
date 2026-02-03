import { MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { WHATSAPP_NUMBER } from '../config';
import sigiriyaImg from '../assets/sigiriya.png';
import ellaImg from '../assets/ella_train.png';
import mirissaImg from '../assets/mirissa.png';

const tours = [
  {
    title: 'Cultural Triangle Heritage',
    image: sigiriyaImg,
    duration: '5 Days / 4 Nights',
    locations: ['Sigiriya', 'Dambulla', 'Kandy', 'Polonnaruwa'],
    description: 'Immerse yourself in 2500 years of history. Visit ancient kingdoms, climb the majestic Sigiriya Rock Fortress, and explore the Golden Temple of Dambulla.',
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Transfer', desc: 'Pick up from Airport and drive to Polonnaruwa. Relax at hotel after the journey.' },
      { day: 'Day 2', title: 'Polonnaruwa & Village Life', desc: 'Explore the ancient city of Polonnaruwa. Experience a traditional Local Village Tour activity.' },
      { day: 'Day 3', title: 'Sigiriya, Dambulla & Safari', desc: 'Climb Sigiriya Rock, visit Dambulla Cave Temple, and enjoy a Minneriya/Kawdulla National Park Safari.' },
      { day: 'Day 4', title: 'Kandy City & Gems', desc: 'Temple of the Tooth, Botanical Gardens, and visit a certified Gem Museum & Showroom.' },
      { day: 'Day 5', title: 'Departure', desc: 'Transfer to Airport or next destination.' }
    ]
  },
  {
    title: 'Hill Country & Scenic Train',
    image: ellaImg,
    duration: '4 Days / 3 Nights',
    locations: ['Kandy', 'Nuwara Eliya', 'Ella', 'Nine Arch'],
    description: 'Ride the world-famous blue train through misty lush tea plantations. Experience the cool climate of Nuwara Eliya ("Little England") and the vibes of Ella.',
    itinerary: [
      { day: 'Day 1', title: 'Kandy to Nuwara Eliya via Kitulgala', desc: 'Optional: White Water Rafting at Kitulgala. Visit a Tea Factory to see how Ceylon Tea is made.' },
      { day: 'Day 2', title: 'Horton Plains & The Train', desc: 'Morning trek at World\'s End. Afternoon iconic train journey from Nanu Oya to Ella.' },
      { day: 'Day 3', title: 'Ella Explorer', desc: 'Visit Nine Arch Bridge, hike Little Adam\'s Peak. Evening relaxing at a local cafe.' },
      { day: 'Day 4', title: 'Ravana Falls & Departure', desc: 'Stop by Ravana Falls. Transfer to the coast or Airport.' }
    ]
  },
  {
    title: 'Southern Coast Bliss',
    image: mirissaImg,
    duration: '6 Days / 5 Nights',
    locations: ['Galle', 'Mirissa', 'Yala', 'Bentota'],
    description: 'The perfect mix of relaxation and adventure. Spot leopards in Yala, watch whales in Mirissa, and sunbathe on the golden sands of Bentota.',
    itinerary: [
      { day: 'Day 1', title: 'Transfer to Yala', desc: 'Drive to Yala. Optional stop for an Elephant Safari.' },
      { day: 'Day 2', title: 'Yala Safari', desc: 'Early morning Jeep Safari to spot Leopards, Elephants, and Bears.' },
      { day: 'Day 3', title: 'Mirissa & Surfing', desc: 'Transfer to Mirissa. Surfing lessons for beginners at Weligama Bay. Sunset at Coconut Tree Hill.' },
      { day: 'Day 4', title: 'Whales & Moonstones', desc: 'Morning Whale Watching. Visit the famous Moonstone Mines in Meetiyagoda. Galle Fort walk.' },
      { day: 'Day 5', title: 'Bentota Water Sports', desc: 'Transfer to Bentota. Enjoy Jet Skiing, Banana Boat rides, and River Safaris.' },
      { day: 'Day 6', title: 'Airport Transfer', desc: 'Highway drive back to the Airport, stopping for last minute souvenirs.' }
    ]
  },
];

const Tours = () => {
  // State to track which tour is expanded
  const [expandedTour, setExpandedTour] = useState(null);

  const toggleTour = (index) => {
    if (expandedTour === index) {
      setExpandedTour(null); // Collapse if already open
    } else {
      setExpandedTour(index); // Expand detailed view
    }
  };

  return (
    <section id="tours" className="section bg-dark">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Popular <span className="text-gold">Tour Packages</span></h2>
          <p className="section-subtitle">Handpicked itineraries to show you the true beauty of our island.</p>
        </div>

        <div className="tours-grid">
          {tours.map((tour, index) => (
            <div key={index} className="tour-card">
              <div className="tour-image-container">
                <img src={tour.image} alt={tour.title} className="tour-image" />
              </div>
              <div className="tour-content">
                <div className="tour-header">
                  <h3>{tour.title}</h3>
                  <span className="tour-duration">
                    <Clock size={16} style={{ display: 'inline', marginRight: '5px' }} />
                    {tour.duration}
                  </span>
                </div>
                <div className="tour-locations">
                  <MapPin size={16} className="text-gold" style={{ marginRight: '5px' }} />
                  {tour.locations.join(' • ')}
                </div>
                <p className="tour-description">{tour.description}</p>

                {/* Itinerary Toggle */}
                <button
                  className="btn btn-outline-gold btn-sm"
                  style={{ width: '100%', marginTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  onClick={() => toggleTour(index)}
                >
                  {expandedTour === index ? 'Hide Itinerary' : 'View Full Itinerary'}
                  {expandedTour === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {/* Expanded Itinerary */}
                {expandedTour === index && (
                  <div className="tour-itinerary">
                    {tour.itinerary.map((item, i) => (
                      <div key={i} className="itinerary-item">
                        <span className="day-badge">{item.day}</span>
                        <div className="day-content">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                    <div className="text-center mt-3">
                      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="btn btn-primary btn-sm">Book This Tour</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '50px' }}>
          <p style={{ marginBottom: '20px', color: 'var(--color-gray-300)' }}>Want to change day 3? Or add a beach day?</p>
          <a href="#contact" className="btn btn-primary">Customize This Trip</a>
        </div>
      </div>

      <style>{`
        .bg-dark {
             background-color: var(--color-dark);
        }
        .tours-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); /* Slightly wider cards */
          gap: 30px;
        }

        .tour-card {
          background: var(--color-darker);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: border-color 0.3s ease;
        }

        .tour-card:hover {
          border-color: var(--color-gold);
        }

        .tour-image-container {
            height: 220px;
            overflow: hidden;
            position: relative;
        }
        
        .tour-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .tour-card:hover .tour-image {
            transform: scale(1.05);
        }

        .tour-image-placeholder {
          /* Remove placeholder styles */
          display: none;
        }

        .tour-content {
          padding: 25px;
        }

        .tour-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 10px;
          flex-wrap: wrap; /* Handle long titles */
          gap: 10px;
        }

        .tour-header h3 {
          font-size: 1.25rem;
          color: var(--color-white);
        }

        .tour-duration {
          font-size: 0.85rem;
          color: var(--color-gold);
          font-weight: 500;
          display: flex;
          align-items: center;
        }

        .tour-locations {
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          color: var(--color-gray-300);
          margin-bottom: 15px;
        }

        .tour-description {
          font-size: 0.95rem;
          color: var(--color-gray-500);
          line-height: 1.5;
        }

        .btn-outline-gold {
             border: 1px solid var(--color-gold);
             color: var(--color-gold);
             background: transparent;
        }
        .btn-outline-gold:hover {
             background: var(--color-gold);
             color: var(--color-darker);
        }

        /* Itinerary Styles */
        .tour-itinerary {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.1);
            animation: fadeIn 0.3s ease;
        }

        .itinerary-item {
            display: flex;
            gap: 15px;
            margin-bottom: 15px;
        }

        .day-badge {
            background: rgba(212, 175, 55, 0.1);
            color: var(--color-gold);
            padding: 5px 10px;
            border-radius: 8px;
            font-size: 0.8rem;
            font-weight: 700;
            height: fit-content;
            white-space: nowrap;
        }

        .day-content h4 {
            font-size: 1rem;
            color: var(--color-white);
            margin-bottom: 3px;
        }

        .day-content p {
            font-size: 0.9rem;
            color: var(--color-gray-500);
        }

        .mt-3 { margin-top: 1rem; }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Tours;
