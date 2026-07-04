import { Shield, Clock, Award, Star } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Informasi Jelas',
    description: 'Seluruh informasi disampaikan secara transparan dan mudah dipahami.',
  },
  {
    icon: Clock,
    title: 'Respon Cepat',
    description: 'Tim layanan kami siap memberikan respons yang cepat dan solusi yang tepat.',
  },
  {
    icon: Award,
    title: 'Layanan Terpercaya',
    description: 'Kami berkomitmen memberikan pelayanan yang profesional dan bertanggung jawab.',
  },
];

export default function Features() {
  return (
    <section id="keunggulan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-3.5 h-3.5" />
            <span className="text-sm font-semibold">Keunggulan Kami</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Mengapa Memilih Layanan Kami?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kami berkomitmen untuk memberikan layanan bantuan yang terbaik, responsif, dan bertanggung jawab.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:border-primary-200 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
