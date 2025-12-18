import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../contexts/ModalContext';

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
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const { openModal } = useModal();

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
    <section id="pricing" className="relative bg-black py-20 overflow-hidden">
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
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Pricing</span>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">PRICING</p>
          <h2 className="text-4xl font-bold text-white mb-4">Simple, scalable pricing for every stage</h2>
          <p className="text-gray-400 text-lg">Choose a plan that fits your CCTV scale and analytics needs.</p>
        </div>

        <div className="flex items-center gap-3 mb-12">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              billingCycle === 'monthly'
                ? 'bg-blue-500 text-white'
                : 'bg-transparent border border-gray-700 text-gray-400'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              billingCycle === 'yearly'
                ? 'bg-blue-500 text-white'
                : 'bg-transparent border border-gray-700 text-gray-400'
            }`}
          >
            Yearly
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-blue-500/10 to-transparent border-2 border-blue-500'
                  : 'bg-[#0F1F3A] border border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6 px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">${plan.price[billingCycle]}</span>
                  <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                </div>
              </div>

              <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all mb-8">
                View Detail
              </button>

              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 bg-[#0F1F3A] rounded-xl overflow-hidden border border-gray-800">
          <div className="bg-blue-500 text-white p-6 grid grid-cols-4 gap-4">
            <div>
              <h3 className="text-lg font-bold mb-2">Compare Plans</h3>
              <p className="text-sm">Choose your workspace plan according to your organisational plan</p>
            </div>
            <div className="text-right">
              <p className="font-bold">$29 /month</p>
              <p className="text-sm">Basic</p>
            </div>
            <div className="text-right">
              <p className="font-bold">$59 /month</p>
              <p className="text-sm">Standard</p>
            </div>
            <div className="text-right">
              <p className="font-bold">$79 /month</p>
              <p className="text-sm">Premium</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr
                    key={feature.category}
                    className={`border-t border-gray-700 ${
                      index % 2 === 0 ? 'bg-[#0F1F3A]' : 'bg-[#0A1628]'
                    }`}
                  >
                    <td className="px-6 py-4 text-gray-300 font-medium text-sm">{feature.category}</td>
                    <td className="px-6 py-4 text-center">{renderFeatureCell(feature.basic)}</td>
                    <td className="px-6 py-4 text-center">{renderFeatureCell(feature.standard)}</td>
                    <td className="px-6 py-4 text-center">{renderFeatureCell(feature.premium)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#0F1F3A] border-t border-gray-700 p-6 grid grid-cols-4 gap-4">
            <div></div>
            <button
              onClick={openModal}
              className="py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all"
            >
              Get Access
            </button>
            <button
              onClick={openModal}
              className="py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all"
            >
              Get Access
            </button>
            <button
              onClick={openModal}
              className="py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all"
            >
              Get Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
