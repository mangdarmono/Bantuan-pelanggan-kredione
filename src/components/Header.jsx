import { MessageCircle, Menu, X } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../config';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#layanan', label: 'Layanan' },
    { href: '#tentang', label: 'Tentang' },
    { href: '#keunggulan', label: 'Keunggulan' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md' : 'bg-white/95 border-b border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[68px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <div className="text-lg font-bold">
                <span className="text-primary-600">Kredi</span>
                <span className="text-slate-800">One</span>
              </div>
              <div className="text-xs text-slate-500 hidden sm:block">Pusat Layanan Bantuan</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-slate-600 hover:text-primary-600 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_CONFIG.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi Kami</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-600 hover:text-primary-600 font-medium py-3 px-4 rounded-lg hover:bg-slate-50"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
