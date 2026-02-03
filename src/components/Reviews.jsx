import { Star, MessageCircle, X, Send } from 'lucide-react';
import { useState } from 'react';
import { WHATSAPP_NUMBER } from '../config';

const initialReviews = [
    {
        name: "Sarah Jenkins",
        country: "UK",
        rating: 5,
        text: "The best driver we could have asked for! He knew all the hidden spots and treated us like family. The van was super comfortable too."
    },
    {
        name: "Marcus & Elena",
        country: "Germany",
        rating: 5,
        text: "Unforgettable trip. The Cultural Triangle tour was perfectly planned. Highly recommend the village cookery class he suggested!"
    },
    {
        name: "David Chen",
        country: "Singapore",
        rating: 5,
        text: "Honest, reliable, and safe driving. We felt very taken care of during our 10-day trip. Thank you for the amazing memories."
    }
];

const Reviews = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newReview, setNewReview] = useState({ name: '', rating: 5, message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `*New Review for Golden Island Travels*%0A%0A*Name:* ${newReview.name}%0A*Rating:* ${'⭐'.repeat(newReview.rating)}%0A*Message:* ${newReview.message}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
        setIsModalOpen(false);
        setNewReview({ name: '', rating: 5, message: '' });
    };

    return (
        <section id="reviews" className="section bg-dark">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">Traveler <span className="text-gold">Love</span></h2>
                    <p className="section-subtitle">Don't just take our word for it. Hear from our happy guests.</p>
                </div>

                <div className="reviews-grid">
                    {initialReviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="stars">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-author">
                                <div className="author-avatar">{review.name.charAt(0)}</div>
                                <div>
                                    <h4>{review.name}</h4>
                                    <span>{review.country}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <button onClick={() => setIsModalOpen(true)} className="btn btn-outline-gold">
                        <MessageCircle size={18} style={{ marginRight: '8px' }} />
                        Leave a Review
                    </button>
                </div>
            </div>

            {/* Review Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                            <X size={24} />
                        </button>
                        <h3>Rate Your Experience</h3>
                        <p style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', marginBottom: '20px' }}>
                            Your feedback means the world to us!
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    required
                                    value={newReview.name}
                                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label>Rating</label>
                                <div className="star-input">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={24}
                                            fill={star <= newReview.rating ? "var(--color-gold)" : "none"}
                                            color={star <= newReview.rating ? "var(--color-gold)" : "#4b5563"}
                                            style={{ cursor: 'pointer', marginRight: '5px' }}
                                            onClick={() => setNewReview({ ...newReview, rating: star })}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    required
                                    value={newReview.message}
                                    onChange={(e) => setNewReview({ ...newReview, message: e.target.value })}
                                    placeholder="Tell us about your trip..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                Send via WhatsApp <Send size={18} style={{ marginLeft: '8px' }} />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <style>{`
        .bg-dark {
             background-color: var(--color-dark);
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .review-card {
          background: var(--color-darker);
          padding: 30px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-gold);
        }

        .stars {
          display: flex;
          gap: 2px;
          margin-bottom: 20px;
        }

        .review-text {
          font-style: italic;
          color: var(--color-gray-300);
          line-height: 1.6;
          margin-bottom: 25px;
          min-height: 80px;
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          background: var(--color-gold);
          color: var(--color-darker);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .review-author h4 {
          color: var(--color-white);
          font-size: 1rem;
          margin: 0;
        }

        .review-author span {
          color: var(--color-gray-500);
          font-size: 0.8rem;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          backdrop-filter: blur(5px);
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: var(--color-darker);
          padding: 40px;
          border-radius: 20px;
          width: 90%;
          max-width: 500px;
          position: relative;
          border: 1px solid var(--color-gold);
          animation: slideUp 0.3s ease;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          color: var(--color-gray-500);
          cursor: pointer;
        }
        
        .modal-close:hover {
            color: var(--color-white);
        }

        .modal-content h3 {
            color: var(--color-white);
            margin-bottom: 10px;
            text-align: center;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          color: var(--color-gray-300);
          margin-bottom: 8px;
          font-size: 0.9rem;
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: var(--color-white);
          outline: none;
        }
        
        .form-group input:focus, .form-group textarea:focus {
            border-color: var(--color-gold);
        }
        
        .mt-5 { margin-top: 3rem; }
        
        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
        </section>
    );
};

export default Reviews;
