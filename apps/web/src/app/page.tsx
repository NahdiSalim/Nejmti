import { Navbar } from '@/components/marketing/Navbar';
import { Hero } from '@/components/marketing/Hero';
import { FeatureSection } from '@/components/marketing/FeatureSection';
import { ContactSection } from '@/components/marketing/ContactSection';
import { Footer } from '@/components/marketing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
