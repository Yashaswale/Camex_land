import CaseStudyGrid from './CaseStudyGrid';
import OnePagers from './OnePagers';

export default function CaseStudy() {
  return (
    <section id="case-study" className="bg-black py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* -------- CASE STUDIES -------- */}
        <div className="mb-16 sm:mb-20">
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2">CASE STUDY</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Camex in action</h2>
          <p className="text-gray-400 text-lg">
            Real environments. Real impact. See how AI turned CCTV into actionable intelligence.
          </p>
        </div>
        <CaseStudyGrid className="mb-20" showExcerpt={false} />
        {/* -------- ONE PAGERS -------- */}
        <div className="mb-12">
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2">USE CASE ONE-PAGERS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Quick Industry Overviews</h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Short, focused documents explaining how Camex AI solves real-world challenges across industries.
          </p>
        </div>
        <OnePagers />
      </div>
    </section>
  );
}
