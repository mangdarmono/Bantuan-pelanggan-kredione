import { CircleCheck as CheckCircle, Phone, Mail, Clock, MapPin, Info as InfoIcon } from 'lucide-react';
import { WHATSAPP_CONFIG, CONTACT_CONFIG } from '../config';

export default function Info() {
  return (
    <section id="tentang" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-1.5 mb-4">
              <InfoIcon className="w-3.5 h-3.5" />
              <span className="text-sm font-semibold">Tentang Layanan</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Informasi Layanan Kami
            </h2>

            <p className="text-slate-600 mb-8 leading-relaxed">
              KrediOne berkomitmen memberikan informasi yang transparan dan akurat untuk membantu kebutuhan Anda.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                <CheckCircle className="w-3 h-3" />
                Informasi Transparan
              </span>
              <span className="inline-flex items-center gap-1.5 bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-medium">
                <CheckCircle className="w-3 h-3" />
                Layanan Profesional
              </span>
              <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                <CheckCircle className="w-3 h-3" />
                Respon Cepat
              </span>
            </div>

            {/* List */}
            <div className="space-y-4">
              {[
                'Informasi layanan yang jelas dan lengkap',
                'Panduan penggunaan yang mudah dipahami',
                'Transparansi status dan perkembangan',
                'Dukungan sepanjang proses',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-primary-600" />
                  </div>
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Contact Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-1.5 mb-6">
              <Phone className="w-3.5 h-3.5" />
              <span className="text-sm font-semibold">Kontak Layanan</span>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
                <div className="w-11 h-11 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">WhatsApp</div>
                  <div className="font-semibold text-slate-900">{WHATSAPP_CONFIG.getDisplay()}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
                <div className="w-11 h-11 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">Email</div>
                  <div className="font-semibold text-slate-900">{CONTACT_CONFIG.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
                <div className="w-11 h-11 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">Jam Operasional</div>
                  <div className="font-semibold text-slate-900">{CONTACT_CONFIG.hours}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">Lokasi</div>
                  <div className="font-semibold text-slate-900">{CONTACT_CONFIG.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
