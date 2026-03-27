const ourPartners = [
  { name: 'Dezzex', logo: '/Partners_logo/Dezzex.png' },
  { name: 'Gemini', logo: '/Partners_logo/Gemini_Generated_Image_t7t7xct7t7xct7t7-Photoroom 1.png' },
  { name: 'Gulf Edge', logo: '/Partners_logo/Gulf Edge.png' },
  { name: 'Mavenai', logo: '/Partners_logo/Mavenai.png' },
  { name: 'SMS', logo: '/Partners_logo/SMS.png' },
];

export default function OurPartners() {
  return (
    <section className="relative bg-black py-20 sm:py-28 overflow-hidden">
      {/* Subtle radial glow accents */}
      <div
        className="pointer-events-none absolute left-[-20%] top-1/3 -translate-y-1/2
        w-[500px] h-[500px] rounded-full
        bg-[radial-gradient(circle,_rgba(6,105,255,0.50)_0%,_rgba(6,105,255,0.15)_40%,_rgba(6,105,255,0)_75%)]
        blur-[120px] opacity-80 z-0"
      />
      <div
        className="pointer-events-none absolute right-[-20%] bottom-0
        w-[500px] h-[500px] rounded-full
        bg-[radial-gradient(circle,_rgba(6,105,255,0.50)_0%,_rgba(6,105,255,0.15)_40%,_rgba(6,105,255,0)_75%)]
        blur-[120px] opacity-80 z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-400 text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 font-medium">
            Trusted Collaborations
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-5">
            Our Partners
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver cutting-edge solutions and drive innovation across every project.
          </p>
        </div>

        {/* Mobile: Infinite marquee scroll */}
        <div className="overflow-hidden -mx-4 px-4 sm:hidden">
          <div
            className="flex gap-10 items-center animate-marquee"
            style={{ width: 'fit-content' }}
          >
            {[...ourPartners, ...ourPartners, ...ourPartners].map((partner, index) => (
              <div
                key={`mobile-${partner.name}-${index}`}
                className="flex items-center justify-center flex-shrink-0 min-w-[140px]
                  bg-white/5 backdrop-blur-sm rounded-xl border border-white/10
                  px-6 py-5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-auto object-contain brightness-0 invert opacity-80
                    hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout with glassmorphism cards */}
        <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
          {ourPartners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center w-full
                bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10
                px-8 py-8 hover:bg-white/10 hover:border-blue-500/40
                hover:shadow-[0_0_30px_rgba(6,105,255,0.15)]
                transition-all duration-400 ease-out cursor-default"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-14 w-auto object-contain brightness-0 invert opacity-70
                  group-hover:opacity-100 group-hover:scale-110
                  transition-all duration-400 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
