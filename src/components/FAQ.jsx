import { useState } from 'react';
import { CircleHelp as HelpCircle, ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'Bagaimana cara menghubungi tim bantuan?',
    answer: 'Anda dapat menghubungi tim bantuan kami melalui WhatsApp atau email pada jam operasional. Tim kami siap membantu menjawab pertanyaan dan memberikan solusi untuk kebutuhan Anda.',
  },
  {
    question: 'Berapa lama waktu respons untuk pertanyaan saya?',
    answer: 'Kami berusaha merespons setiap pertanyaan dalam waktu kurang dari 24 jam pada hari kerja. Untuk pertanyaan yang memerlukan pengecekan lebih lanjut, tim kami akan menginformasikan estimasi waktu penyelesaian.',
  },
  {
    question: 'Apa saja informasi yang bisa saya dapatkan?',
    answer: 'Anda bisa mendapatkan informasi tentang layanan, panduan penggunaan, status permintaan, dan berbagai hal lainnya terkait penggunaan platform KrediOne.',
  },
  {
    question: 'Apakah layanan bantuan ini tersedia setiap hari?',
    answer: 'Tim bantuan kami aktif pada hari kerja, Senin hingga Jumat pukul 08.00 - 17.00 WIB. Untuk pertanyaan di luar jam operasional, kami akan merespons pada hari kerja berikutnya.',
  },
  {
    question: 'Bagaimana jika saya memiliki keluhan atau masalah?',
    answer: 'Silakan sampaikan keluhan atau masalah Anda melalui WhatsApp atau email. Tim kami akan menindaklanjuti setiap laporan dengan serius dan memberikan update perkembangan penyelesaian.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-1.5 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="text-sm font-semibold">Pertanyaan Umum</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan umum seputar layanan bantuan kami.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item bg-white border rounded-xl overflow-hidden transition-colors ${
                openIndex === index ? 'border-primary-300 open' : 'border-slate-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown className="faq-icon w-5 h-5 text-slate-400 flex-shrink-0" />
              </button>
              <div className="faq-answer">
                <div className="px-6 pb-5 pt-0 text-slate-600 border-t border-slate-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
