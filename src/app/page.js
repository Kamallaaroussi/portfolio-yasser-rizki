import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import MilestonesSection from '@/components/portfolio/MilestonesSection';
import EducationSection from '@/components/portfolio/EducationSection';
import AwardsSection from '@/components/portfolio/AwardsSection';
import HighlightsSection from '@/components/portfolio/HighlightsSection';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white selection:bg-[#3B82F6] selection:text-white">
      <Navbar />
      <HeroSection />
      <MilestonesSection />
      <EducationSection />
      <AwardsSection />
      <HighlightsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
