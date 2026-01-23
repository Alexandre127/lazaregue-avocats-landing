import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Expertises } from '@/app/components/Expertises';
import { ClientsLogos } from '@/app/components/ClientsLogos';
import { Testimonials } from '@/app/components/Testimonials';
import { News } from '@/app/components/News';
import { Newsletter } from '@/app/components/Newsletter';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-montserrat)' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertises />
        <ClientsLogos />
        <Testimonials />
        <News />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}