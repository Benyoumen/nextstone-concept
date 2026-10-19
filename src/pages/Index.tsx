
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ForDevelopers from '@/components/ForDevelopers';
import ForFunds from '@/components/ForFunds';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import PartnerLogos from '@/components/PartnerLogos';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ForDevelopers />
      <ForFunds />
      <Testimonials />
      <PartnerLogos />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
