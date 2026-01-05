import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudyList from './pages/CaseStudyList';
import CaseStudyPage from './pages/CaseStudyPage';
import PricingPage from './pages/Pricing';
import TermsPage from './pages/Terms';
import PrivacyPage from './pages/Privacy';
import { ModalProvider } from './contexts/ModalContext';
import ScrollToTop from './components/ScrollToTop';
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
          <Route path="/case-study/:slug" element={<CaseStudyPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/developer-docs" element={<DeveloperDocs />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
