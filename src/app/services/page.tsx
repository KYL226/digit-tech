import type { Metadata } from "next";
import { ServicesPage } from "@/components/sections/services-page";

export const metadata: Metadata = {
  title: "Services | Digit Tech Group",
  description:
    "Découvrez nos services en développement web/mobile, création visuelle, customisation, formation numérique et intelligence artificielle.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesRoutePage() {
  return <ServicesPage />;
}
