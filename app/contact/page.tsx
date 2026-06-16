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
  const contactEmail = process.env.CONTACT_EMAIL;

  return (
    <>
      <SiteNav />
      <main className="pt-16 md:pt-[4.25rem]">
        <ContactForm contactEmail={contactEmail} />
      </main>
      <Footer />
    </>
  );
}
