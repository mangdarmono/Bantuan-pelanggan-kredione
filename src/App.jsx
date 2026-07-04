import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Info from './components/Info';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Info />
        <Features />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
