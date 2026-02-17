
import { MessageSquare, Map, Car, UserCheck } from 'lucide-react';

const steps = [
    {
        icon: <MessageSquare size={32} />,
        title: '1. Share Your Vision',
        description: 'Tell us where you want to go, what you love to see, and your travel style. Or simply pick one of our curated routes.'
    },
    {
        icon: <Car size={32} />,
        title: '2. Meet Your Chauffeur',
        description: 'We assign a dedicated vehicle and an English-speaking guide who will accompany you throughout your journey.'
    },
    {
        icon: <Map size={32} />,
        title: '3. Explore Your Way',
        description: 'Enjoy total freedom. Stop for a coconut, stay longer at a view, or change plans on the go. Your driver is there for YOU.'
    }
];

const HowItWorks = () => {
    return (
        <section className="section bg-dark">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">How It <span className="text-gold">Works</span></h2>
                    <p className="section-subtitle">A private tour means you are in control. Here is how we make it happen.</p>
                </div>

                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">{index + 1}</div>
                            <div className="step-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .steps-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 30px;
                    margin-top: 50px;
                }

                .step-card {
                    background: rgba(255, 255, 255, 0.03);
                    padding: 40px 30px;
                    border-radius: 20px;
                    text-align: center;
                    position: relative;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    transition: all 0.3s ease;
                }

                .step-card:hover {
                    border-color: var(--color-gold);
                    transform: translateY(-5px);
                }

                .step-number {
                    position: absolute;
                    top: -20px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 40px;
                    height: 40px;
                    background: var(--color-gold);
                    color: var(--color-darker);
                    font-weight: 800;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
                }

                .step-icon {
                    color: var(--color-gold);
                    margin-bottom: 20px;
                    margin-top: 10px;
                }

                .step-card h3 {
                    margin-bottom: 15px;
                    font-size: 1.3rem;
                    color: var(--color-white);
                }

                .step-card p {
                    color: var(--color-gray-300);
                    font-size: 0.95rem;
                    line-height: 1.6;
                }
            `}</style>
        </section>
    );
};

export default HowItWorks;
