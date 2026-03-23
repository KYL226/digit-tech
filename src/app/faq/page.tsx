import type { Metadata } from "next";
import { FAQPage } from "@/components/sections/faq-page";

export const metadata: Metadata = {
  title: "FAQ | Digit Tech Group",
  description:
    "Retrouvez les réponses aux questions fréquentes sur nos services, notre processus et nos modalités d'accompagnement.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQRoutePage() {
  return <FAQPage />;
}
