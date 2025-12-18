import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudyDetail from './pages/CaseStudyDetail';
import CaseStudyList from './pages/CaseStudyList';
import PricingPage from './pages/Pricing';
import { ModalProvider } from './contexts/ModalContext';
import ScrollToTop from './components/ScrollToTop';
// @ts-expect-error - JSX file without type definitions
import SecuredPerimeterCaseStudy from './components/SecuredPerimeterCaseStudy.jsx';
// @ts-expect-error - JSX file without type definitions
import SmartQueueAnalyticsCaseStudy from './components/SmartQueueAnalyticsCaseStudy.jsx';
// @ts-expect-error - JSX file without type definitions
import ProactiveIntelligenceCaseStudy from './components/ProactiveIntelligenceCaseStudy.jsx';
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
          <Route path="/case-study/secured-perimeter" element={<SecuredPerimeterCaseStudy />} />
          <Route path="/case-study/smart-queue-analytics" element={<SmartQueueAnalyticsCaseStudy />} />
          <Route path="/case-study/proactive-intelligence" element={<ProactiveIntelligenceCaseStudy />} />
          <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/developer-docs" element={<DeveloperDocs />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
