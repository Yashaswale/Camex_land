import { useState } from 'react';
import { Check } from 'lucide-react';
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
    description: 'For large deployments and enterprise needs',
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

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const toggleButtonClass = (active: boolean) =>
    `px-6 py-2.5 rounded-lg font-medium transition-all ${
      active ? 'bg-blue-500 text-white' : 'bg-transparent border border-gray-700 text-gray-400'
    }`;

  const ctaButtonClass =
    'w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all mb-8';

  function PlanCard({ plan }: { plan: typeof plans[number] }) {
    return (
      <div
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

        <Link to="/pricing" className={ctaButtonClass + ' block text-center'}>
          View Detail
        </Link>

        <div className="space-y-4">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

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
        <div className="mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">PRICING</p>
          <h2 className="text-4xl font-bold text-white mb-4">Simple, scalable pricing for every stage</h2>
          <p className="text-gray-400 text-lg">Choose a plan that fits your CCTV scale and analytics needs.</p>
        </div>

        <div className="flex items-center gap-3 mb-12">
          <button onClick={() => setBillingCycle('monthly')} className={toggleButtonClass(billingCycle === 'monthly')}>
            Monthly
          </button>
          <button onClick={() => setBillingCycle('yearly')} className={toggleButtonClass(billingCycle === 'yearly')}>
            Yearly
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
