import { About } from "@/components/About";
import { CalendarSection } from "@/components/CalendarSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { House } from "@/components/House";
import { Living } from "@/components/Living";
import { MobileCTA } from "@/components/MobileCTA";
import { SiteNav } from "@/components/SiteNav";
import { WhyPhilly } from "@/components/WhyPhilly";

export default function HomePage() {
  const contactEmail = process.env.CONTACT_EMAIL;

  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <House />
        <Living />
        <WhyPhilly />
        <CalendarSection />
        <Gallery />
        <ContactForm contactEmail={contactEmail} />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
