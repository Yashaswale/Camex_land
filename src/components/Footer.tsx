import { useModal } from '../contexts/ModalContext';
import { Twitter, Instagram, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Bottom Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-[-30%] -translate-x-1/2
        w-[700px] h-[700px] rounded-full
        bg-[radial-gradient(circle,_rgba(6,105,255,0.55)_0%,_rgba(6,105,255,0.20)_35%,_rgba(6,105,255,0)_75%)]
        blur-[160px] opacity-80 z-0"
      />

      {/* CTA Section */}
      <section className="relative z-10 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to upgrade your CCTV to AI?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Let your cameras do more than just record. Let them detect,
            understand, and guide your next decision
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-2">
            <button
              onClick={openModal}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition shadow-lg shadow-blue-500/30"
            >
              Book a Demo
            </button>

            <button
              onClick={openModal}
              className="px-8 py-3 border border-gray-600 hover:border-gray-500 rounded-lg font-medium transition"
            >
              Explore the Dashboard
            </button>
          </div>

          <div className="pt-2 text-gray-400 text-sm">
            Prefer email? Reach us at{' '}
            <a
              href="mailto:sales@camex.com"
              className="text-blue-500 hover:text-blue-400 font-medium"
            >
              sales@camex.com
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="relative z-10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="text-sm text-gray-500">
              © 2025 Camex
            </div>

            {/* Navigation */}
            <nav className="flex gap-8 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
              <Link to="/developer-docs" className="hover:text-white transition">
                Developer Docs
              </Link>
              <Link to="/case-study" className="hover:text-white transition">
                Case Study
              </Link>
              <Link to="/pricing" className="hover:text-white transition">
                Pricing
              </Link>
            </nav>

            {/* Social Icons */}
            <div className="flex gap-5 text-gray-400">
              <a href="#" className="hover:text-white transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="flex justify-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
