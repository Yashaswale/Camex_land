import { useModal } from '../contexts/ModalContext';

const partners = [
  { name: 'Cloud partner 1', logo: '/cloud_logos/logo1.png' },
  { name: 'Cloud partner 2', logo: '/cloud_logos/logo2.png' },
  { name: 'Cloud partner 3', logo: '/cloud_logos/logo3.png' },
  { name: 'Cloud partner 4', logo: '/cloud_logos/logo4.png' },
  { name: 'Cloud partner 5', logo: '/cloud_logos/logo5.png' },
  { name: 'Cloud partner 6', logo: '/cloud_logos/logo6.png' },
  { name: 'Cloud partner 7', logo: '/cloud_logos/logo7.png' },
];

export default function CloudPartners() {
  const { openModal } = useModal();

  return (
    <>
    <section className="relative bg-black py-12 sm:py-20 overflow-hidden">
      {/* Radial glow accents to match hero background */}
      <div
        className="pointer-events-none absolute left-[-25%] top-1/2 -translate-y-1/2 
        w-[700px] h-[700px] rounded-full
        bg-[radial-gradient(circle,_rgba(6,105,255,0.80)_0%,_rgba(6,105,255,0.22)_40%,_rgba(6,105,255,0)_80%)]
        blur-[150px] opacity-90 z-0"
      />
      <div
        className="pointer-events-none absolute right-[-25%] top-1/2 -translate-y-1/2 
        w-[700px] h-[700px] rounded-full
        bg-[radial-gradient(circle,_rgba(6,105,255,0.80)_0%,_rgba(6,105,255,0.22)_40%,_rgba(6,105,255,0)_80%)]
        blur-[150px] opacity-90 z-0"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-8 sm:mb-12">
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">CLOUD PARTNER</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Powered by Leading Cloud Partners</h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Camex runs on secure, scalable, enterprise-grade cloud infrastructure - trusted worldwide for performance, reliability, and data protection.
          </p>
        </div>

        {/* Mobile: Infinite marquee scroll */}
        <div className="overflow-hidden -mx-4 sm:mx-0 px-4 sm:px-0 sm:hidden">
          <div className="flex gap-6 items-center animate-marquee" style={{ width: 'fit-content' }}>
            {/* Duplicate partners array multiple times for seamless infinite scroll */}
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div key={`mobile-${partner.name}-${index}`} className="flex items-center justify-center flex-shrink-0 min-w-[120px]">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Static grid layout */}
        <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>


      <section className="bg-black py-12 sm:py-20 md:py-32 lg:py-40">
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
    </section>

    
    
    </>
  );
}
