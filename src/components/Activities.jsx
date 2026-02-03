import { Gem, Waves, ChefHat, Compass } from 'lucide-react';

const activities = [
    {
        icon: <Gem size={32} />,
        title: 'Gems & Moonstones',
        description: 'Visit government-certified Gem Museums in Kandy and the unique Moonstone Mines in Meetiyagoda. Own a piece of our island\'s treasure.',
    },
    {
        icon: <Compass size={32} />,
        title: 'Wildlife Safaris',
        description: 'Witness elephants, leopards, and bears in their natural habitat at Yala, Udawalawe, or Minneriya National Parks.',
    },
    {
        icon: <Waves size={32} />,
        title: 'Water Sports & Surfing',
        description: 'Adrenaline-pumping Jet Skiing in Bentota, White Water Rafting in Kitulgala, or Surfing lessons in Weligama.',
    },
    {
        icon: <ChefHat size={32} />,
        title: 'Traditional Cookery',
        description: 'Learn to cook authentic Sri Lankan rice and curry in a traditional village mud house setting.',
    },
];

const Activities = () => {
    return (
        <section id="activities" className="section">
            <div className="container">
                <div className="activities-header text-center mb-5">
                    <h2 className="section-title">Signature <span className="text-gold">Experiences</span></h2>
                    <p className="section-subtitle">Enhance your journey with these exclusive add-on activities.</p>
                </div>

                <div className="activities-grid">
                    {activities.map((activity, index) => (
                        <div key={index} className="activity-card">
                            <div className="activity-icon-wrapper">
                                {activity.icon}
                            </div>
                            <div className="activity-content">
                                <h3>{activity.title}</h3>
                                <p>{activity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .activities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .activity-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 30px 20px;
          border-radius: 15px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .activity-card:hover {
          background: rgba(212, 175, 55, 0.05);
          border-color: var(--color-gold);
          transform: translateY(-5px);
        }

        .activity-icon-wrapper {
          color: var(--color-gold);
          margin-bottom: 20px;
          background: rgba(255, 255, 255, 0.05);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .activity-content h3 {
            font-size: 1.2rem;
            margin-bottom: 10px;
            color: var(--color-white);
        }
        
        .activity-content p {
            font-size: 0.9rem;
            color: var(--color-gray-300);
        }
      `}</style>
        </section>
    );
};

export default Activities;
