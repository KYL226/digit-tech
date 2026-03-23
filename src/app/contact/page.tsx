import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/contact-page";

export const metadata: Metadata = {
  title: "Contact | Digit Tech Group",
  description:
    "Contactez Digit Tech Group pour obtenir un devis, planifier un appel ou discuter de votre projet digital.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactRoutePage() {
  return <ContactPage />;
}
