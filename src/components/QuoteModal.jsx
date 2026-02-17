
import { X, Send, Calendar, Users, Car, MapPin } from 'lucide-react';
import { useState } from 'react';
import { WHATSAPP_NUMBER } from '../config';

const QuoteModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        arrivalDate: '',
        duration: '',
        pax: '',
        vehicle: 'Car',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format message for WhatsApp
        const text = `
*New Trip Inquiry* 🌴
Name: ${formData.name}
Arrival: ${formData.arrivalDate}
Duration: ${formData.duration} days
Group Size: ${formData.pax}
Vehicle: ${formData.vehicle}
Notes: ${formData.message}
        `.trim();

        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content quote-modal">
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="text-center mb-4">
                    <h3>Plan Your <span className="text-gold">Dream Trip</span></h3>
                    <p className="subtitle">Tell us what you need, and we'll handle the rest.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            required
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label><Calendar size={14} /> Arrival Date</label>
                            <input
                                type="date"
                                required
                                value={formData.arrivalDate}
                                onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label><MapPin size={14} /> Duration (Days)</label>
                            <input
                                type="number"
                                required
                                placeholder="e.g. 7"
                                value={formData.duration}
                                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label><Users size={14} /> Group Size</label>
                            <input
                                type="number"
                                required
                                placeholder="Adults + Kids"
                                value={formData.pax}
                                onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label><Car size={14} /> Vehicle Preference</label>
                            <select
                                value={formData.vehicle}
                                onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                            >
                                <option value="Car">Car (1-3 Pax)</option>
                                <option value="Van">Van (4-8 Pax)</option>
                                <option value="Mini Coach">Mini Coach (9+ Pax)</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Special Requests / Itinerary Ideas</label>
                        <textarea
                            rows="3"
                            placeholder="I want to see elephants, tea plantations, and beaches..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Get My Free Quote <Send size={18} style={{ marginLeft: '8px' }} />
                    </button>
                </form>
            </div>

            <style>{`
                .quote-modal {
                    max-width: 500px;
                    width: 95%;
                }
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                }
                .subtitle {
                    color: var(--color-gray-300);
                    font-size: 0.9rem;
                    margin-top: 5px;
                }
                .w-100 { width: 100%; }
                .mb-4 { margin-bottom: 1.5rem; }
                
                label {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                
                select {
                    width: 100%;
                    padding: 12px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: var(--color-white);
                    outline: none;
                }
                select option {
                    background: var(--color-darker);
                }
            `}</style>
        </div>
    );
};

export default QuoteModal;
