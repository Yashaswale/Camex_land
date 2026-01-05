import { FileText, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import PDFModal from './PDFModal';
import { onePagersData } from '../data/onePagersData';

export default function OnePagers() {
  const [selectedPDF, setSelectedPDF] = useState<{ pdfUrl: string; title: string } | null>(null);

  const handlePDFClick = (pdfUrl: string, title: string) => {
    setSelectedPDF({ pdfUrl, title });
  };

  const handleClosePDF = () => {
    setSelectedPDF(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {onePagersData.map((pager) => (
          <button
            key={pager.id}
            onClick={() => handlePDFClick(pager.pdfUrl, pager.title)}
            className="group text-left"
          >
            <div className="rounded-xl overflow-hidden bg-[#0F1F3A] border border-gray-800 hover:border-gray-700 transition-all h-full flex flex-col hover:-translate-y-1">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={pager.image}
                  alt={pager.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/70 text-xs px-3 py-1 rounded-full text-white">
                  {pager.industry}
                </div>
                <div className="absolute top-3 right-3 bg-blue-500/90 rounded-lg p-2">
                  <FileText className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">{pager.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{pager.description}</p>
                <span className="flex items-center gap-2 text-blue-500 mt-auto">
                  <span className="text-sm font-medium">View use case PDF</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedPDF && (
        <PDFModal
          isOpen={!!selectedPDF}
          onClose={handleClosePDF}
          pdfUrl={selectedPDF.pdfUrl}
          title={selectedPDF.title}
        />
      )}
    </>
  );
}

