import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudyDetail from './pages/CaseStudyDetail';
import CaseStudyList from './pages/CaseStudyList';
import PricingPage from './pages/Pricing';
import { ModalProvider } from './contexts/ModalContext';
import ScrollToTop from './components/ScrollToTop';
import SecuredPerimeter from './components/casestudy/SecuredPerimeter';
import SmartQueue from './components/casestudy/SmartQueue';
import ProactiveIntelligence from './components/casestudy/ProactiveIntelligence';
import PremiumRestaurant from './components/casestudy/PremiumRestaurant';
import MultiSpecialtyHospital from './components/casestudy/MultiSpecialtyHospital';
import LargeRetailHypermarket from './components/casestudy/LargeRetailHypermarket';
import UpstreamOilGasFacility from './components/casestudy/UpstreamOilGasFacility';
import DatesProcessingFacility from './components/casestudy/DatesProcessingFacility';
import UrbanPharmacy from './components/casestudy/UrbanPharmacy';
// @ts-expect-error - JSX file without type definitions
import DeveloperDocs from './components/DeveloperDocs.jsx';

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study" element={<CaseStudyList />} />
          <Route path="/case-study/secured-perimeter" element={<SecuredPerimeter />} />
          <Route path="/case-study/smart-queue-analytics" element={<SmartQueue />} />
          <Route path="/case-study/proactive-intelligence" element={<ProactiveIntelligence />} />
          <Route path="/case-study/premium-restaurant" element={<PremiumRestaurant />} />
          <Route path="/case-study/multi-specialty-hospital" element={<MultiSpecialtyHospital />} />
          <Route path="/case-study/large-retail-hypermarket" element={<LargeRetailHypermarket />} />
          <Route path="/case-study/upstream-oil-gas-facility" element={<UpstreamOilGasFacility />} />
          <Route path="/case-study/dates-processing-facility" element={<DatesProcessingFacility />} />
          <Route path="/case-study/urban-pharmacy" element={<UrbanPharmacy />} />
          <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/developer-docs" element={<DeveloperDocs />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
