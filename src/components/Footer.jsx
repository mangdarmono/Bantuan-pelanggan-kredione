import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG, CONTACT_CONFIG } from '../config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-lg font-bold">KrediOne</span>
            </div>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Pusat bantuan yang responsif dan terpercaya. Kami berkomitmen memberikan informasi yang transparan dan layanan yang bertanggung jawab.
            </p>
            <div className="bg-slate-800 border-l-2 border-slate-600 p-4 rounded text-xs text-slate-500 leading-relaxed">
              Pusat Layanan Bantuan KrediOne hadir untuk memberikan informasi dan dukungan kepada pengguna. Seluruh informasi yang disampaikan bersifat informatif.
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">Navigasi</h4>
            <nav className="space-y-3">
              {[
                { href: '#layanan', label: 'Layanan' },
                { href: '#tentang', label: 'Tentang' },
                { href: '#keunggulan', label: 'Keunggulan' },
                { href: '#faq', label: 'FAQ' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-slate-400 hover:text-primary-500 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">Kontak</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary-500" />
                <span>{WHATSAPP_CONFIG.getDisplay()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary-500" />
                <span>{CONTACT_CONFIG.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-primary-500" />
                <span>{CONTACT_CONFIG.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary-500" />
                <span>{CONTACT_CONFIG.location}</span>
              </div>
            </div>

            <a
              href={WHATSAPP_CONFIG.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-4 py-2 rounded-full text-sm font-semibold mt-4 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} KrediOne. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex gap-5 text-sm text-slate-500">
            <a href="#" className="hover:text-primary-500 transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Hubungi Kami</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
