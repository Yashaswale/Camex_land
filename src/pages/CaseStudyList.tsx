import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CaseStudyGrid from '../components/CaseStudyGrid';
import OnePagers from '../components/OnePagers';

export default function CaseStudyList() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-20 bg-black overflow-hidden">
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
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">CASE STUDY</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Camex in action</h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Real environments. Real impact. See how AI turned CCTV into actionable intelligence.
            </p>
          </div>

          <CaseStudyGrid showExcerpt className="mb-20" />

          {/* -------- ONE PAGERS -------- */}
          <div className="mb-12">
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2">USE CASE ONE-PAGERS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Quick Industry Overviews</h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mb-8">
              Short, focused documents explaining how Camex AI solves real-world challenges across industries.
            </p>
          </div>
          <OnePagers />
        </div>
      </section>
      <Footer />
    </div>
  );
}
