import { useModal } from '../contexts/ModalContext';

export default function Partner() {
  const { openModal } = useModal();

  return (
    <section className="bg-black py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">CONNECT</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Become a Camex Partner</h2>
          <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
            Join our network of technology, security, and integration partners helping businesses unlock AI-powered CCTV intelligence.
          </p>
          <button
            onClick={openModal}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30 text-sm sm:text-base"
          >
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}
