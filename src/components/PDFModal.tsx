import { X } from 'lucide-react';
import { useEffect } from 'react';

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export default function PDFModal({ isOpen, onClose, pdfUrl, title }: PDFModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Full Screen Modal */}
      <div className="relative bg-[#0A1628] w-full h-full overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-800">
          <h3 className="text-lg sm:text-xl font-semibold text-white truncate pr-4">{title}</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors bg-gray-800 hover:bg-gray-700 rounded-lg p-2 sm:p-3"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* PDF Viewer - Full Screen */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={pdfUrl}
            className="w-full h-full border-0"
            title={title}
          />
        </div>
      </div>
    </div>
  );
}


