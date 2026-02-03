import { Star, MessageCircle, X, Send, Image as ImageIcon, Loader } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const Reviews = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    // Form State
    const [newReview, setNewReview] = useState({
        name: '',
        email: '',
        visit_date: '',
        rating: 5,
        message: ''
    });
    const [photos, setPhotos] = useState([]);

    // Fetch Reviews on Mount
    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('reviews')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setReviews(data || []);
        } catch (error) {
            console.error('Error fetching reviews:', error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            setPhotos(Array.from(e.target.files));
        }
    };

    const uploadPhotos = async () => {
        const uploadedUrls = [];

        for (const file of photos) {
            const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
            const { data, error } = await supabase.storage
                .from('review-images')
                .upload(fileName, file);

            if (error) {
                console.error('Error uploading image:', error.message);
                continue;
            }

            const { data: { publicUrl } } = supabase.storage
                .from('review-images')
                .getPublicUrl(fileName);

            uploadedUrls.push(publicUrl);
        }
        return uploadedUrls;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            // 1. Upload Photos first
            const photoUrls = await uploadPhotos();

            // 2. Insert Review Data
            const { error } = await supabase
                .from('reviews')
                .insert([
                    {
                        name: newReview.name,
                        email: newReview.email,
                        visit_date: newReview.visit_date,
                        rating: newReview.rating,
                        message: newReview.message,
                        photos: photoUrls
                    }
                ]);

            if (error) throw error;

            // 3. Reset and Refresh
            setIsModalOpen(false);
            setNewReview({ name: '', email: '', visit_date: '', rating: 5, message: '' });
            setPhotos([]);
            fetchReviews(); // Refresh list to show new review
            alert('Thank you for your review!');

        } catch (error) {
            console.error('Error submitting review:', error.message);
            alert('Failed to submit review. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="reviews" className="section bg-dark">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">Traveler <span className="text-gold">Love</span></h2>
                    <p className="section-subtitle">Don't just take our word for it. Hear from our happy guests.</p>
                </div>

                {loading ? (
                    <div className="text-center text-gold">
                        <Loader className="animate-spin" size={40} style={{ margin: '0 auto' }} />
                        <p className="mt-3">Loading reviews...</p>
                    </div>
                ) : (
                    <div className="reviews-grid">
                        {reviews.length === 0 ? (
                            <div className="text-center" style={{ gridColumn: '1/-1', color: 'var(--color-gray-500)' }}>
                                <p>No reviews yet. Be the first to share your experience!</p>
                            </div>
                        ) : (
                            reviews.map((review) => (
                                <div key={review.id} className="review-card">
                                    <div className="stars">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                                        ))}
                                    </div>
                                    <p className="review-text">"{review.message}"</p>

                                    {/* Photo Gallery */}
                                    {review.photos && review.photos.length > 0 && (
                                        <div className="review-photos">
                                            {review.photos.map((url, idx) => (
                                                <img
                                                    key={idx}
                                                    src={url}
                                                    alt={`Review by ${review.name}`}
                                                    className="review-photo"
                                                    onClick={() => window.open(url, '_blank')}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    <div className="review-author">
                                        <div className="author-avatar">{review.name.charAt(0).toUpperCase()}</div>
                                        <div>
                                            <h4>{review.name}</h4>
                                            <span>Visited: {new Date(review.visit_date).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

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
                            {/* Name & Email Row */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
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
                                    <label>Email (Private)</label>
                                    <input
                                        type="email"
                                        required
                                        value={newReview.email}
                                        onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            {/* Visit Date */}
                            <div className="form-group">
                                <label>Date of Visit</label>
                                <input
                                    type="date"
                                    required
                                    value={newReview.visit_date}
                                    onChange={(e) => setNewReview({ ...newReview, visit_date: e.target.value })}
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

                            {/* Photo Upload */}
                            <div className="form-group">
                                <label>Add Photos (Optional)</label>
                                <div className="file-input-wrapper">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={handleFileChange}
                                        id="photo-upload"
                                        style={{ display: 'none' }}
                                    />
                                    <label htmlFor="photo-upload" className="file-label">
                                        <ImageIcon size={20} />
                                        <span>{photos.length > 0 ? `${photos.length} photos selected` : "Click to select photos"}</span>
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={submitting}>
                                {submitting ? 'Submitting...' : 'Submit Review'}
                                {!submitting && <Send size={18} style={{ marginLeft: '8px' }} />}
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
          display: flex;
          flex-direction: column;
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
          flex-grow: 1;
        }
        
        .review-photos {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            overflow-x: auto;
            padding-bottom: 5px;
        }
        
        .review-photo {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 8px;
            cursor: pointer;
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        .review-photo:hover {
            opacity: 0.8;
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: auto;
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
        
        @media (max-width: 600px) {
            .modal-content {
                padding: 25px;
                width: 95%;
                max-height: 90vh;
                overflow-y: auto;
            }
        }

        .modal-content {
          background: var(--color-darker);
          padding: 40px;
          border-radius: 20px;
          width: 90%;
          max-width: 550px;
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
        
        /* Custom File Input */
        .file-input-wrapper {
            position: relative;
            overflow: hidden;
            display: inline-block;
            width: 100%;
        }
        
        .file-label {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 12px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px dashed rgba(255, 255, 255, 0.3);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            color: var(--color-gray-300);
        }
        
        .file-label:hover {
            border-color: var(--color-gold);
            color: var(--color-gold);
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
