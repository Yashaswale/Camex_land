import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

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
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600',
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
    image: 'https://images.pexels.com/photos/3737615/pexels-photo-3737615.jpeg?auto=compress&cs=tinysrgb&w=600',
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleStudies = 4;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(caseStudies.length - visibleStudies, prev + 1));
  };

  return (
    <section id="case-study" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">CASE STUDY</p>
          <h2 className="text-4xl font-bold text-white mb-4">Camex in action</h2>
          <p className="text-gray-400 text-lg">
            Real environments. Real impact. See how AI turned CCTV into actionable intelligence.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleStudies)}%)` }}
            >
              {caseStudies.map((study) => (
                <Link
                  key={study.id}
                  to={`/case-study/${study.slug}`}
                  className="flex-shrink-0 w-[calc(25%-18px)] min-w-[280px]"
                >
                  <div className="rounded-xl overflow-hidden bg-[#0F1F3A] border border-gray-800 hover:border-gray-700 transition-all group">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                        {study.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
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

          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= caseStudies.length - visibleStudies}
              className="p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-all"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
