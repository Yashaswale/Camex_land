import { useModal } from '../contexts/ModalContext';
import Footer from './Footer';

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
    <section className="relative bg-black py-20 sm:py-40 overflow-hidden">
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


    </section>
    <Footer />

    
    
    </>
  );
}
