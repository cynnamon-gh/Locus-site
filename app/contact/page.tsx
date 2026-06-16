import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Contact — Locus",
  description:
    "Get in touch with Locus, a group house and event space in West Philadelphia — about the open room, a short-term stay, visiting, or hosting an event.",
};

export default function ContactPage() {
  // Intentionally not passing a contact email: submissions are delivered
  // to CONTACT_EMAIL server-side, so our addresses stay private and out of
  // reach of scrapers.
  return (
    <>
      <SiteNav />
      <main className="pt-16 md:pt-[4.25rem]">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
