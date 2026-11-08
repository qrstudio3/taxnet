import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import PlansSection from "./components/PlansSection";
import IndustriesSection from "./components/IndustriesSection";
import AwardsTrustSection from "./components/AwardsTrustSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import NewsletterModal from "./components/NewsletterModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <PlansSection />
        <IndustriesSection />
        <AwardsTrustSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <NewsletterModal />
    </>
  );
}
