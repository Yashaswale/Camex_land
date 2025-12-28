import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    slug: 'intelligent-crowd-management',
    title: 'Intelligent Crowd Management at Scale',
    description: 'A major enterprise implemented Camex AI to monitor high-traffic areas, automatically...',
    image: 'https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    slug: 'premium-restaurant',
    title: 'Premium Restaurant',
    description: 'A premium restaurant in Dubai uses Camex AI for people counting, seat occupancy tracking, and queue intelligence...',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    slug: 'multi-specialty-hospital',
    title: 'Multi-Specialty Hospital',
    description: 'A 300+ bed facility in Abu Dhabi deployed Camex for PPE detection, patient flow analytics, and access control...',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    slug: 'large-retail-hypermarket',
    title: 'Large Retail Hypermarket',
    description: 'A 10,000+ sqm store in Sharjah uses Camex AI for loitering detection, shelf engagement intelligence, and staff assistance...',
    image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    slug: 'upstream-oil-gas-facility',
    title: 'Upstream Oil & Gas Facility',
    description: 'A 24/7 operational site in Abu Dhabi Region uses Camex for PPE compliance, fall detection, and fire/smoke detection...',
    image: 'https://images.pexels.com/photos/2252619/pexels-photo-2252619.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    slug: 'dates-processing-facility',
    title: 'Dates Processing Facility',
    description: 'A high-speed production facility uses Camex AI for hygiene gatekeeping, handwashing verification, and foreign object detection...',
    image: 'https://images.pexels.com/photos/3770580/pexels-photo-3770580.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 7,
    slug: 'urban-pharmacy',
    title: 'Urban Pharmacy',
    description: 'A high-footfall pharmacy in Dubai uses Camex for controlled substance security, queue intelligence, and stock detection...',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 8,
    slug: 'secured-perimeter',
    title: 'Secured Perimeter with Real-Time Alerts',
    description: 'A logistics facility deployed Camex to secure restricted zones and monitor...',
    image: 'https://images.pexels.com/photos/2252619/pexels-photo-2252619.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 9,
    slug: 'smart-queue-analytics',
    title: 'Smart Queue Analytics for Retail',
    description: 'A retail chain uses Camex to analyze queue patterns, optimize staff allocation, and...',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 10,
    slug: 'proactive-intelligence',
    title: 'Transforming CCTV into Proactive Intelligence',
    description: 'Camex was deployed to turn a traditional CCTV network into a smart, AI-driven...',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="bg-black py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">CASE STUDY</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Camex in action</h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Real environments. Real impact. See how AI turned CCTV into actionable intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-study/${study.slug}`}
              className="group"
            >
              <div className="rounded-xl overflow-hidden bg-[#0F1F3A] border border-gray-800 hover:border-gray-700 transition-all h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 sm:mb-4 line-clamp-2 flex-grow">
                    {study.description}
                  </p>
                  <span className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors group/btn">
                    <span className="text-sm font-medium">Read more</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
