import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const caseStudyData = {
  'intelligent-crowd-management': {
    title: 'Intelligent Crowd Management at Scale: The Future of Public Safety & Operational Efficiency',
    shortTitle: 'Intelligent Crowd Management at Scale',
    description: 'A major enterprise implemented Camex AI to monitor high-traffic areas, automatically...',
    images: [
      'https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3651375/pexels-photo-3651375.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    intro: 'Managing large crowds has always been a challenge — from metro stations and airports to stadiums, festivals, malls, religious gatherings, political events, and public transport hubs. Traditional crowd management relies on manual monitoring, mobile radios, CCTV operators, and on-ground staff. But as crowds grow and urban spaces get denser, old methods can\'t keep up. Today, AI-powered intelligent Crowd Management is transforming how cities, organizations, and event managers predict, monitor, and control crowd movement — at massive scale and with unmatched accuracy.',
    whyNeeded: {
      title: 'Why Crowd Management Needs an Upgrade',
      intro: 'Crowd-related risks are rising due to:',
      points: [
        'Rapid urban population growth',
        'High-density gatherings',
        'Limited workforce for real-time monitoring',
        'Delayed communication between control rooms & field staff',
        'Human error in analyzing hundreds of CCTV feeds',
      ],
      conclusion: 'These challenges lead to congestion, miscommunication, stampedes, safety incidents, and poor user experience. The need for real-time, scalable, intelligent systems has never been stronger.',
    },
    whatIs: {
      title: 'What Is Intelligent Crowd Management?',
      intro: 'It is an AI-driven ecosystem that uses:',
      points: [
        'Computer Vision',
        'IoT Sensors',
        'Heatmaps & Behaviour Analytics',
        'Predictive Modeling',
        'Automated Alerts & Insights',
      ],
      conclusion: 'to monitor crowd flow, detect anomalies, and help authorities respond instantly.',
    },
    features: [
      {
        number: '1',
        title: 'Real-Time Crowd Density Monitoring',
        intro: 'AI analyzes live video feeds to detect:',
        points: [
          'Crowd count',
          'Flow direction',
          'Bottlenecks',
          'Queue lengths',
        ],
        outro: 'This helps prevent congestion before it gets dangerous.',
      },
      {
        number: '2',
        title: 'Predictive Crowd Behavior Analytics',
        intro: 'AI forecasts upcoming crowd movements based on:',
        points: [
          'Historical data',
          'Entry/exit rates',
          'Time of day',
          'Live density patterns',
        ],
        outro: 'This allows proactive planning rather than reactive management.',
      },
      {
        number: '3',
        title: 'Automated Alerts & Incident Detection',
        intro: 'Instant notifications are sent when:',
        points: [
          'Density crosses safe limit',
          'Unusual movement patterns occur',
          'An object is abandoned',
          'Sights of aggressive behavior detected',
          'Emergency exits are blocked',
        ],
      },
      {
        number: '4',
        title: 'Heatmaps for Better Decision-Making',
        intro: 'Heatmaps display crowd hotspots, helping:',
        points: [
          'Redirect people to safer zones',
          'Optimize staff deployment',
          'Improve infrastructure layout',
        ],
      },
      {
        number: '5',
        title: 'Seamless Integration With Existing CCTV',
        intro: 'AI works with existing camera networks — no need for expensive hardware upgrades.',
      },
    ],
  },
  'secured-perimeter': {
    title: 'Secured Perimeter with Real-Time Alerts',
    shortTitle: 'Secured Perimeter with Real-Time Alerts',
    description: 'A logistics facility deployed Camex to secure restricted zones and monitor...',
    images: [
      'https://images.pexels.com/photos/2252619/pexels-photo-2252619.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3860003/pexels-photo-3860003.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    intro: 'Security is critical for logistics facilities. This case study shows how AI-powered perimeter monitoring prevents unauthorized access...',
    whyNeeded: {
      title: 'Why Perimeter Security Needs an Upgrade',
      intro: 'Traditional security methods have limitations:',
      points: [
        'Manual patrol coverage is limited',
        'False alarms cause alert fatigue',
        'Delayed response times',
        'Inability to track moving threats',
        'Limited visibility at night',
      ],
      conclusion: 'Real-time AI monitoring ensures continuous, intelligent perimeter protection.',
    },
    whatIs: {
      title: 'What Is Intelligent Perimeter Security?',
      intro: 'It is an AI system that provides:',
      points: [
        'Real-time intrusion detection',
        'Thermal imaging support',
        'Motion pattern recognition',
        'Instant alerting system',
        'Integration with access controls',
      ],
      conclusion: 'to prevent unauthorized access and protect assets.',
    },
    features: [
      {
        number: '1',
        title: 'Intrusion Detection',
        intro: 'AI detects when unauthorized persons cross defined boundaries',
      },
      {
        number: '2',
        title: 'Thermal Monitoring',
        intro: 'Works in low-light and night conditions using thermal imaging',
      },
      {
        number: '3',
        title: 'Threat Assessment',
        intro: 'Automatically evaluates the threat level and prioritizes alerts',
      },
      {
        number: '4',
        title: 'Guard Integration',
        intro: 'Sends instant notifications to security personnel with location details',
      },
      {
        number: '5',
        title: 'Historical Analysis',
        intro: 'Tracks patterns to identify repeat threats and vulnerabilities',
      },
    ],
  },
  'smart-queue-analytics': {
    title: 'Smart Queue Analytics for Retail',
    shortTitle: 'Smart Queue Analytics for Retail',
    description: 'A retail chain uses Camex to analyze queue patterns, optimize staff allocation, and...',
    images: [
      'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3962282/pexels-photo-3962282.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    intro: 'Retail stores face constant challenges with queue management. Long wait times lead to customer dissatisfaction and lost sales. This case study demonstrates how AI-powered queue analytics transforms the customer experience...',
    whyNeeded: {
      title: 'Why Queue Analytics Needs an Upgrade',
      intro: 'Retail operations struggle with:',
      points: [
        'Unpredictable peak hours',
        'Inefficient staff scheduling',
        'Long customer wait times',
        'Poor queue visibility',
        'Missed sales opportunities during rush periods',
      ],
      conclusion: 'Intelligent queue analytics enables data-driven staffing decisions and better customer experiences.',
    },
    whatIs: {
      title: 'What Is Smart Queue Analytics?',
      intro: 'It is an AI system that provides:',
      points: [
        'Real-time queue length measurement',
        'Wait time prediction',
        'Staff optimization recommendations',
        'Peak hour forecasting',
        'Customer behavior analysis',
      ],
      conclusion: 'to improve customer satisfaction and operational efficiency.',
    },
    features: [
      {
        number: '1',
        title: 'Queue Length Monitoring',
        intro: 'Tracks queue lengths in real-time across all checkout areas',
      },
      {
        number: '2',
        title: 'Wait Time Estimation',
        intro: 'Predicts wait times to help customers plan their shopping',
      },
      {
        number: '3',
        title: 'Staff Optimization',
        intro: 'Recommends optimal number of open registers based on queue data',
      },
      {
        number: '4',
        title: 'Peak Hour Forecasting',
        intro: 'Predicts busy periods to enable proactive staffing',
      },
      {
        number: '5',
        title: 'Customer Flow Analysis',
        intro: 'Identifies bottlenecks and suggests layout improvements',
      },
    ],
  },
  'proactive-intelligence': {
    title: 'Transforming CCTV into Proactive Intelligence',
    shortTitle: 'Transforming CCTV into Proactive Intelligence',
    description: 'Camex was deployed to turn a traditional CCTV network into a smart, AI-driven...',
    images: [
      'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    intro: 'This organization had invested heavily in CCTV infrastructure but was still relying on manual monitoring. By implementing Camex AI, they transformed their CCTV network into a proactive intelligence system...',
    whyNeeded: {
      title: 'The Problem with Traditional CCTV',
      intro: 'Traditional CCTV has significant limitations:',
      points: [
        'Passive recording without analysis',
        'Requires dedicated security staff',
        'Slow incident response',
        'No predictive capabilities',
        'Expensive to scale to all cameras',
      ],
      conclusion: 'Organizations need AI to extract intelligence from their existing camera networks.',
    },
    whatIs: {
      title: 'What Is Proactive Intelligence?',
      intro: 'It is an AI layer that transforms passive CCTV into:',
      points: [
        'Active threat detection',
        'Automated incident response',
        'Predictive security',
        'Behavioral analytics',
        'Actionable intelligence',
      ],
      conclusion: 'without requiring hardware replacement or major infrastructure changes.',
    },
    features: [
      {
        number: '1',
        title: 'Automated Threat Detection',
        intro: 'AI continuously analyzes all feeds for suspicious behavior',
      },
      {
        number: '2',
        title: 'Instant Alert System',
        intro: 'Sends real-time notifications when threats are detected',
      },
      {
        number: '3',
        title: 'Behavioral Profiling',
        intro: 'Learns normal behavior patterns to identify anomalies',
      },
      {
        number: '4',
        title: 'Multi-Camera Tracking',
        intro: 'Tracks individuals across multiple camera feeds',
      },
      {
        number: '5',
        title: 'Forensic Analysis',
        intro: 'Provides detailed incident reports for investigations and compliance',
      },
    ],
  },
};

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const study = caseStudyData[slug as keyof typeof caseStudyData];

  if (!study) {
    return (
      <div className="min-h-screen bg-[#0A1628]">
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

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* LEFT compact but intense radial glow */}
      <div className="pointer-events-none absolute left-[-22%] top-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-[radial-gradient(circle,_rgba(6,105,255,0.80)_0%,_rgba(6,105,255,0.22)_40%,_rgba(6,105,255,0)_80%)] blur-[160px] opacity-95 z-0" />
      {/* RIGHT compact but intense radial glow */}
      <div className="pointer-events-none absolute right-[-22%] top-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-[radial-gradient(circle,_rgba(6,105,255,0.80)_0%,_rgba(6,105,255,0.22)_40%,_rgba(6,105,255,0)_80%)] blur-[160px] opacity-95 z-0" />
      <Navigation />

      <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 sm:mb-8 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all inline-flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white text-xs sm:text-sm font-medium">Back</span>
          </button>
          <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Case Study</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 leading-tight max-w-4xl">
            {study.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {study.images.map((image, index) => (
              <div key={index} className="aspect-video relative overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`Case study image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="prose prose-invert max-w-none mb-12 sm:mb-16">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {study.intro}
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8 sm:pt-12 md:pt-16 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">{study.whyNeeded.title}</h2>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">{study.whyNeeded.intro}</p>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {study.whyNeeded.points.map((point, index) => (
                <li key={index} className="flex gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                  <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm sm:text-base">{study.whyNeeded.conclusion}</p>
          </div>

          <div className="border-t border-gray-800 pt-8 sm:pt-12 md:pt-16 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">{study.whatIs.title}</h2>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">{study.whatIs.intro}</p>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {study.whatIs.points.map((point, index) => (
                <li key={index} className="flex gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                  <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm sm:text-base">{study.whatIs.conclusion}</p>
          </div>

          <div className="border-t border-gray-800 pt-8 sm:pt-12 md:pt-16 mb-12 sm:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              {study.features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                    {feature.number}. {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{feature.intro}</p>
                  {feature.points && (
                    <ul className="space-y-2">
                      {feature.points.map((point, i) => (
                        <li key={i} className="flex gap-3 text-gray-300 text-sm">
                          <span className="text-blue-500">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {feature.outro && (
                    <p className="text-gray-400 mt-4">{feature.outro}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">CASE STUDY</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Camex in action</h2>
          <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12">
            Real environments. Real impact. See how AI turned CCTV into actionable intelligence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
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
            ].map((caseStudy) => (
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
