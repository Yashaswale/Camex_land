import Navigation from '../components/Navigation';
import PricingTab from '../components/PricingTab';
import Footer from '../components/Footer';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <PricingTab />
      <Footer />
    </div>
  );
}

