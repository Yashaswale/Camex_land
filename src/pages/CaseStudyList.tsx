import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const caseStudies = [
  {
    title: 'Intelligent Crowd Management at Scale',
    slug: 'intelligent-crowd-management',
    image: 'https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Premium Restaurant',
    slug: 'premium-restaurant',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Multi-Specialty Hospital',
    slug: 'multi-specialty-hospital',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Large Retail Hypermarket',
    slug: 'large-retail-hypermarket',
    image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Upstream Oil & Gas Facility',
    slug: 'upstream-oil-gas-facility',
    image: 'https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Dates Processing Facility',
    slug: 'dates-processing-facility',
    image: 'https://images.pexels.com/photos/3770580/pexels-photo-3770580.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Urban Pharmacy',
    slug: 'urban-pharmacy',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Secured Perimeter with Real-Time Alerts',
    slug: 'secured-perimeter',
    image: 'https://images.pexels.com/photos/2252619/pexels-photo-2252619.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Smart Queue Analytics for Retail',
    slug: 'smart-queue-analytics',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Transforming CCTV into Proactive Intelligence',
    slug: 'proactive-intelligence',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {caseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                to={`/case-study/${caseStudy.slug}`}
                className="group"
              >
                <div className="rounded-xl overflow-hidden bg-[#0F1F3A] border border-gray-800 hover:border-gray-700 transition-all">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 line-clamp-2">
                      {caseStudy.title}
                    </h3>
                    <button className="text-blue-500 hover:text-blue-400 transition-colors text-xs sm:text-sm font-medium">
                      Read more →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

