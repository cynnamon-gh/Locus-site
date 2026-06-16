import { CalendarSection } from "@/components/CalendarSection";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Hosting } from "@/components/Hosting";
import { Intro } from "@/components/Intro";
import { MobileCTA } from "@/components/MobileCTA";
import { SiteNav } from "@/components/SiteNav";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Intro />
        <Hosting />
        <Gallery />
        <CalendarSection />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
