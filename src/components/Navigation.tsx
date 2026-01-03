import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navLinkClass = (path: string) => {
    const baseClass = 'text-gray-300 hover:text-white transition-colors text-sm relative pb-1';
    if (isActive(path)) {
      return `${baseClass} text-white`;
    }
    return baseClass;
  };

  const mobileNavLinkClass = (path: string) => {
    const baseClass = 'block py-3 text-gray-300 hover:text-white transition-colors text-base relative';
    if (isActive(path)) {
      return `${baseClass} text-white`;
    }
    return baseClass;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A1628]/80 backdrop-blur-sm border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="/camex_logo.png"
              alt="CAMEX AI logo"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={navLinkClass('/')}
            >
              Home
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2FA7FF]"></span>
              )}
            </Link>
            <Link
              to="/developer-docs"
              className={navLinkClass('/developer-docs')}
            >
              Developer Doc
              {isActive('/developer-docs') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2FA7FF]"></span>
              )}
            </Link>
            <Link
              to="/case-study"
              className={navLinkClass('/case-study')}
            >
              Case Study
              {isActive('/case-study') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2FA7FF]"></span>
              )}
            </Link>
            <Link
              to="/pricing"
              className={navLinkClass('/pricing')}
            >
              Pricing
              {isActive('/pricing') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2FA7FF]"></span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-[#0A1628] z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-4 py-6 space-y-1">
          <Link
            to="/"
            className={mobileNavLinkClass('/')}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
            {isActive('/') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2FA7FF]"></span>
            )}
          </Link>
          <Link
            to="/developer-docs"
            className={mobileNavLinkClass('/developer-docs')}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Developer Doc
            {isActive('/developer-docs') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2FA7FF]"></span>
            )}
          </Link>
          <Link
            to="/case-study"
            className={mobileNavLinkClass('/case-study')}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Case Study
            {isActive('/case-study') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2FA7FF]"></span>
            )}
          </Link>
          <Link
            to="/pricing"
            className={mobileNavLinkClass('/pricing')}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
            {isActive('/pricing') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2FA7FF]"></span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
