import { FileText, ClipboardList, Search, CircleHelp as HelpCircle, MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../config';

const menuItems = [
  {
    icon: FileText,
    title: 'Pusat Informasi',
    description: 'Temukan informasi lengkap tentang layanan, produk, dan fitur yang tersedia untuk Anda.',
  },
  {
    icon: ClipboardList,
    title: 'Panduan Pengguna',
    description: 'Panduan langkah demi langkah untuk menggunakan layanan dengan mudah dan efektif.',
  },
  {
    icon: Search,
    title: 'Cek Status',
    description: 'Pantau status permintaan atau aktivitas Anda secara real-time dan transparan.',
  },
  {
    icon: HelpCircle,
    title: 'Bantuan & FAQ',
    description: 'Temukan jawaban atas pertanyaan umum atau hubungi tim kami untuk bantuan lebih lanjut.',
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-1.5 mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="text-sm font-semibold">Layanan Kami</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Apa yang Bisa Kami Bantu?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tim layanan kami siap memberikan informasi dan panduan yang Anda butuhkan.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={WHATSAPP_CONFIG.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary-300 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <item.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
