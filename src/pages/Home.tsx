import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import LiveMonitoring from '../components/LiveMonitoring';
import Partner from '../components/Partner';
import Pricing from '../components/Pricing';
import CaseStudy from '../components/CaseStudy';
import CloudPartners from '../components/CloudPartners';
import OurPartners from '../components/OurPartners';
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A1628] overflow-x-hidden w-full">
      <Navigation />
      <Hero />
      <LiveMonitoring />
      <Partner />
      <OurPartners />
      <Pricing />
      <CaseStudy />
      <CloudPartners />
    </div>
  );
}
