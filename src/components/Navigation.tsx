import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A1628]/80 backdrop-blur-sm border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="/camex_logo.png"
              alt="CAMEX AI logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={navLinkClass('/')}
            >
              Product
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2FA7FF]"></span>
              )}
            </Link>
            <Link to="/developer-docs" className="text-gray-300 hover:text-white transition-colors text-sm">
              Developer Doc
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
        </div>
      </div>
    </nav>
  );
}
