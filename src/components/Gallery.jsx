import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Loader, Image as ImageIcon, X } from 'lucide-react';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = async () => {
        try {
            setLoading(true);
            // Fetch reviews that have photos (check content length)
            const { data, error } = await supabase
                .from('reviews')
                .select('photos, name')
                .not('photos', 'is', null)

            if (error) throw error;

            // Flatten the photos array
            const allPhotos = [];
            data?.forEach(review => {
                if (review.photos && Array.isArray(review.photos) && review.photos.length > 0) {
                    review.photos.forEach(photoUrl => {
                        allPhotos.push({
                            url: photoUrl,
                            author: review.name
                        });
                    });
                }
            });

            setPhotos(allPhotos);
        } catch (error) {
            console.error('Error fetching gallery photos:', error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return null; // Don't show anything while loading to avoid layout shift, or show loader

    if (photos.length === 0) return null; // Hide section if no photos

    return (
        <section id="gallery" className="section bg-dark">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">Traveler <span className="text-gold">Moments</span></h2>
                    <p className="section-subtitle">Real memories captured by our guests.</p>
                </div>

                <div className="gallery-grid">
                    {photos.map((photo, index) => (
                        <div key={index} className="gallery-item" onClick={() => setSelectedPhoto(photo)}>
                            <img src={photo.url} alt={`Photo by ${photo.author}`} loading="lazy" />
                            <div className="gallery-overlay">
                                <span>by {photo.author}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedPhoto && (
                <div className="lightbox" onClick={() => setSelectedPhoto(null)}>
                    <button className="lightbox-close">
                        <X size={32} />
                    </button>
                    <img src={selectedPhoto.url} alt="Travel Moment" onClick={(e) => e.stopPropagation()} />
                    <p className="lightbox-caption">Captured by {selectedPhoto.author}</p>
                </div>
            )}

            <style>{`
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    grid-auto-rows: 250px;
                    gap: 15px;
                }

                .gallery-item {
                    position: relative;
                    overflow: hidden;
                    border-radius: 12px;
                    cursor: pointer;
                    height: 100%;
                }

                .gallery-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }

                .gallery-item:hover img {
                    transform: scale(1.1);
                }

                .gallery-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                    padding: 20px 15px 10px;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .gallery-item:hover .gallery-overlay {
                    opacity: 1;
                }

                .gallery-overlay span {
                    color: white;
                    font-size: 0.9rem;
                    font-weight: 500;
                }

                /* Lightbox */
                .lightbox {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.95);
                    z-index: 10000;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    animation: fadeIn 0.3s ease;
                }

                .lightbox img {
                    max-width: 90%;
                    max-height: 80vh;
                    border-radius: 8px;
                    box-shadow: 0 0 20px rgba(0,0,0,0.5);
                }

                .lightbox-caption {
                    color: var(--color-gray-300);
                    margin-top: 15px;
                    font-size: 1.1rem;
                }

                .lightbox-close {
                    position: absolute;
                    top: 30px;
                    right: 30px;
                    background: transparent;
                    border: none;
                    color: white;
                    cursor: pointer;
                    transition: transform 0.2s;
                }

                .lightbox-close:hover {
                    transform: scale(1.1);
                    color: var(--color-gold);
                }
            `}</style>
        </section>
    );
};

export default Gallery;
