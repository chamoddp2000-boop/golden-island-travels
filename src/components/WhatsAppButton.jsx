
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../config';

const WhatsAppButton = () => {
    return (
        <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I am interested in planning a trip to Sri Lanka.`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
};

export default WhatsAppButton;
