import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { caseStudiesData } from '../data/caseStudiesData';

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="pt-20 sm:pt-32 pb-12 sm:pb-20 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <Link to="/" className="text-blue-500 hover:text-blue-400 text-sm sm:text-base">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const caseStudy = caseStudiesData[slug];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="pt-20 sm:pt-32 pb-12 sm:pb-20 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <p className="text-gray-400 mb-4">The case study "{slug}" does not exist.</p>
          <Link to="/case-study" className="text-blue-500 hover:text-blue-400 text-sm sm:text-base">
            View All Case Studies
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return <CaseStudyTemplate data={caseStudy} />;
}

