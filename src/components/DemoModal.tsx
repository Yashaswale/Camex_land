import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import BookingForm from './BookingForm';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [showCalendly, setShowCalendly] = useState(false);
  const [formData, setFormData] = useState<{ companyName: string; email: string; phone: string; countryCode: string } | null>(null);

  useEffect(() => {
    if (isOpen && showCalendly) {
      // Check if Calendly script is already loaded
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      
      if (!existingScript) {
        // Load Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [isOpen, showCalendly]);

  useEffect(() => {
    if (!isOpen) {
      setShowCalendly(false);
      setFormData(null);
    }
  }, [isOpen]);

  const handleFormSubmit = (data: { companyName: string; email: string; phone: string }) => {
    setFormData(data);
    setShowCalendly(true);
    
    // You can send form data to your backend here
    console.log('Form submitted:', data);
  };

  if (!isOpen) return null;

  // Show form first, then Calendly after submission
  if (!showCalendly) {
    return <BookingForm onSubmit={handleFormSubmit} onClose={onClose} />;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[#0A1628] rounded-lg border border-gray-800 w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Calendly Widget */}
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/dezzex2/camex" 
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </div>
  );
}

