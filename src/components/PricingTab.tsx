import { Check, X } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    description: 'For small camera setups and early-stage deployment',
    price: { monthly: 29, yearly: 290 },
    features: [
      'Up to 5 cameras',
      'Basic AI analytics',
      'Email alerts',
      '30-day data retention',
      'Community support',
    ],
  },
  {
    name: 'Standard',
    description: 'Scale your AI-powered security with advanced features',
    price: { monthly: 59, yearly: 590 },
    popular: true,
    features: [
      'Up to 20 cameras',
      'Advanced AI analytics',
      'Real-time alerts (Email & SMS)',
      '90-day data retention',
      'Priority support',
      'Custom integrations',
    ],
  },
  {
    name: 'Premium',
    description: 'For small camera setups and early-stage deployment',
    price: { monthly: 79, yearly: 790 },
    features: [
      'Unlimited cameras',
      'Full AI suite',
      'Multi-channel alerts',
      '180-day data retention',
      '24/7 dedicated support',
      'API access',
      'Custom AI models',
    ],
  },
];

const comparisonFeatures = [
  { category: 'Camex AI Web Dashboard Access', basic: 'Limited view', standard: 'Full access', premium: 'Full access + custom dashboards' },
  { category: 'Mobile App Access', basic: false, standard: true, premium: true },
  { category: 'People Counting (In/Out)', basic: true, standard: true, premium: true },
  { category: 'Face mask + Glove compliance', basic: false, standard: true, premium: true },
  { category: 'Queue length / Serving time monitoring', basic: false, standard: true, premium: true },
  { category: 'Staff Presence / Zone Compliance', basic: false, standard: true, premium: true },
  { category: 'Theft & Suspicious Behavior Detection', basic: false, standard: false, premium: true },
  { category: 'After-Hours Intrusion Alerts', basic: false, standard: false, premium: true },
  { category: 'Tailgating Detection', basic: false, standard: false, premium: true },
  { category: 'Object Left Behind / Removed', basic: false, standard: false, premium: true },
  { category: 'Number of AI Models Supported', basic: '1 (People Counting)', standard: '3', premium: '5' },
  { category: 'Email Reports', basic: 'Daily summary only', standard: 'Daily/Weekly (customizable)', premium: 'Unlimited scheduled (PDF/CSV)' },
  { category: 'Real-Time Alerts (Email/SMS)', basic: false, standard: true, premium: true },
  { category: 'Data Retention', basic: '7 days', standard: '30 days', premium: '12 month' },
  { category: 'API Access', basic: false, standard: 'Basic', premium: 'Full REST API + Webhooks' },
  { category: 'Multi-Store Management', basic: false, standard: false, premium: 'Centralized dashboard (unlimited locations)' },
  { category: 'Cross-Store Analytics & Benchmarking', basic: false, standard: false, premium: 'Compare footfall & multi-store analytics' },
  { category: 'Role-Based User Access', basic: false, standard: false, premium: 'Owner, Manager, Security, Regional Admin' },
  { category: 'Compliance Reporting (e.g., occupancy logs)', basic: false, standard: false, premium: true },
  { category: 'Dedicated Support', basic: 'Email only', standard: 'Business hours', premium: '24/7 + Dedicated Success Manager' },
  { category: 'Works with Existing IP Cameras', basic: 'ONVIF compliant', standard: true, premium: true },
  { category: 'GDPR/CCPA-Compliant (Face Anonymization)', basic: true, standard: true, premium: true },
  { category: 'Hosting', basic: 'On-prem PC', standard: 'Cloud', premium: 'Cloud' },
];

export default function PricingTab() {

  const renderFeatureCell = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-blue-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-600 mx-auto" />
      );
    }
    return <span className="text-gray-300 text-sm">{value}</span>;
  };

  return (
    <section id="pricing" className="relative bg-black py-12 sm:py-20 overflow-hidden">
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
        <div className="mb-4">
          <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Pricing</span>
          </div>
        </div>

        <div className="mb-8 sm:mb-12">
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">PRICING</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Simple, scalable pricing for every stage</h2>
          <p className="text-gray-400 text-base sm:text-lg">Choose a plan that fits your CCTV scale and analytics needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 sm:p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-blue-500/10 to-transparent border-2 border-blue-500'
                  : 'bg-[#0F1F3A] border border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-4 sm:right-6 px-3 sm:px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://calendly.com/dezzex2/camex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all text-sm sm:text-base text-center block mt-auto"
              >
                Inquire Now
              </a>
            </div>
          ))}
        </div>

        <div className="mb-12 bg-[#0F1F3A] rounded-xl overflow-hidden border border-gray-800">
          <div className="bg-blue-500 text-white p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="sm:col-span-1">
              <h3 className="text-base sm:text-lg font-bold mb-2">Compare Plans</h3>
              <p className="text-xs sm:text-sm">Choose your workspace plan according to your organisational plan</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg sm:text-xl font-bold">Basic</h4>
            </div>
            <div className="text-center">
              <h4 className="text-lg sm:text-xl font-bold">Standard</h4>
            </div>
            <div className="text-center">
              <h4 className="text-lg sm:text-xl font-bold">Premium</h4>
            </div>
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <table className="w-full">
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr
                      key={feature.category}
                      className={`border-t border-gray-700 ${
                        index % 2 === 0 ? 'bg-[#0F1F3A]' : 'bg-[#0A1628]'
                      }`}
                    >
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-300 font-medium text-xs sm:text-sm min-w-[200px]">{feature.category}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-center min-w-[120px]">{renderFeatureCell(feature.basic)}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-center min-w-[120px]">{renderFeatureCell(feature.standard)}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-center min-w-[120px]">{renderFeatureCell(feature.premium)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#0F1F3A] border-t border-gray-700 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="hidden sm:block"></div>
            <a
              href="https://calendly.com/dezzex2/camex"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all text-sm sm:text-base text-center"
            >
              Inquire Now
            </a>
            <a
              href="https://calendly.com/dezzex2/camex"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all text-sm sm:text-base text-center"
            >
              Inquire Now
            </a>
            <a
              href="https://calendly.com/dezzex2/camex"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all text-sm sm:text-base text-center"
            >
              Inquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
