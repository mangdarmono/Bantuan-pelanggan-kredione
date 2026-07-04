import { MessageCircle, CheckCircle, ChevronDown, Headphones } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../config';

export default function Hero() {
  return (
    <section className="relative pt-[68px] pb-20 bg-gradient-to-br from-green-50 via-emerald-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 border border-primary-200 rounded-full px-4 py-1.5 mb-6">
              <CheckCircle className="w-3.5 h-3.5" />
              <span className="text-sm font-semibold">Pusat Bantuan Resmi</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Pusat Bantuan <span className="text-primary-600">KrediOne</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Kami hadir untuk membantu menjawab pertanyaan, memberikan informasi, dan mendukung kebutuhan Anda dengan layanan yang profesional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href={WHATSAPP_CONFIG.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg shadow-primary-500/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hubungi Tim Layanan</span>
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-semibold hover:border-primary-300 hover:shadow-sm transition-all"
              >
                <span>Lihat Layanan</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-left">
                <div className="text-2xl font-bold text-slate-900">50.000+</div>
                <div className="text-sm text-slate-500">Pengguna Terlayani</div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-slate-900">4.8/5</div>
                <div className="text-sm text-slate-500">Rating Kepuasan</div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-slate-900">&lt; 24 Jam</div>
                <div className="text-sm text-slate-500">Waktu Respons</div>
              </div>
            </div>
          </div>

          {/* Right Content - Service Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 w-full max-w-md">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Tim Layanan Kami</div>
                  <div className="text-sm text-slate-500">Setiap Hari, 24/7</div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  'Informasi layanan lengkap',
                  'Panduan penggunaan',
                  'Status permintaan Anda',
                  'Pertanyaan & konsultasi',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-lg px-4 py-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}