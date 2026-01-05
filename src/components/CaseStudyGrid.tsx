import { Link, useLocation } from 'react-router-dom';
import { caseStudiesData } from '../data/caseStudiesData';

interface CaseStudyGridProps {
  showExcerpt?: boolean; // true for /case-study, false for homepage
  className?: string;
}

export default function CaseStudyGrid({ showExcerpt = false, className = '' }: CaseStudyGridProps) {
  const location = useLocation();
  const studies = Object.values(caseStudiesData);

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${className}`}>
      {studies.map(study => (
        <Link
          key={study.slug}
          to={{
            pathname: `/case-study/${study.slug}`,
          }}
          state={{ from: location.pathname }} // pass where user came from
          className="group"
        >
          <div className="rounded-xl overflow-hidden bg-[#0F1F3A] border border-gray-800 hover:border-gray-700 transition-all h-full flex flex-col">
            <div className="aspect-video overflow-hidden">
              <img
                src={study.images.items[0]?.url}
                alt={study.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{study.title}</h3>
              {showExcerpt && study.operationalContext && (
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                  {study.operationalContext}
                </p>
              )}
              <span className="flex items-center gap-2 text-blue-500">
                <span className="text-sm font-medium">Read more</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" /></svg>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

