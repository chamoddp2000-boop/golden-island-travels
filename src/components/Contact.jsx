import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="contact-wrapper">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h2 className="section-title">Get in <span className="text-gold">Touch</span></h2>
                        <p className="contact-desc">
                            Ready to explore Sri Lanka? Contact us today to start planning your dream vacation.
                            We are available 24/7 via WhatsApp.
                        </p>

                        <div className="info-item">
                            <div className="info-icon"><Phone size={24} /></div>
                            <div>
                                <h4>Call / WhatsApp</h4>
                                <p>+94 77 123 4567</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><Mail size={24} /></div>
                            <div>
                                <h4>Email Us</h4>
                                <p>hello@goldenisland.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><MapPin size={24} /></div>
                            <div>
                                <h4>Location</h4>
                                <p>Colombo, Sri Lanka</p>
                            </div>
                        </div>

                        <a href="https://wa.me/YOUR_NUMBER" className="btn btn-primary mt-4">
                            Chat on WhatsApp
                        </a>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <h3>Send us a Message</h3>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="4" placeholder="I want to visit Sigiriya..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                Send Message <Send size={18} style={{ marginLeft: '10px' }} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
        .contact-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: center;
        }

        .section-title {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        .contact-desc {
            color: var(--color-gray-300);
            margin-bottom: 40px;
            line-height: 1.8;
        }

        .info-item {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
        }

        .info-icon {
            width: 50px;
            height: 50px;
            background: rgba(212, 175, 55, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-gold);
        }

        .info-item h4 {
            font-size: 1.1rem;
            margin-bottom: 5px;
        }

        .info-item p {
            color: var(--color-gray-300);
        }

        .mt-4 {
            margin-top: 1.5rem;
        }

        .contact-form-wrapper {
            background: var(--color-darker);
            padding: 40px;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .contact-form-wrapper h3 {
            font-size: 1.5rem;
            margin-bottom: 25px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: var(--color-gray-300);
            font-size: 0.9rem;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            color: var(--color-white);
            font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--color-gold);
        }

        @media (max-width: 768px) {
            .contact-wrapper {
                grid-template-columns: 1fr;
                gap: 40px;
            }
        }
      `}</style>
        </section>
    );
};

export default Contact;
