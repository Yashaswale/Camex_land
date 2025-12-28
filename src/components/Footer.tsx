import { useModal } from '../contexts/ModalContext';

export default function Footer() {
  const { openModal } = useModal();

  return (
    <>
      <section className="bg-black py-12 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to upgrade your CCTV to AI?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
              Let your cameras do more than just record. Let them detect, understand, and guide your next decision
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
              <button
                onClick={openModal}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30 text-sm sm:text-base"
              >
                Book a Demo
              </button>
              <button
                onClick={openModal}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-gray-600 hover:border-gray-500 text-white rounded-lg font-medium transition-all text-sm sm:text-base"
              >
                Explore the Dashboard
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-gray-400 text-sm sm:text-base px-4">
              <span>Prefer email?</span>
              <span className="hidden sm:inline">Reach us at</span>
              <span className="sm:hidden">Reach us at</span>
              <a href="mailto:sales@camex.com" className="text-blue-500 hover:text-blue-400 transition-colors font-medium break-all">
                sales@camex.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center text-gray-500 text-xs sm:text-sm">
            © 2025 Camex • AI-powered CCTV Analytics
          </div>
        </div>
      </footer>
    </>
  );
}
