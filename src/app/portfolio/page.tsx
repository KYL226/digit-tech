import type { Metadata } from "next";
import { PortfolioPage } from "@/components/sections/portfolio-page";

export const metadata: Metadata = {
  title: "Nos Réalisations | Digit Tech Group",
  description:
    "Consultez nos réalisations récentes avec miniatures de projets, livrables clés et résultats obtenus.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioRoutePage() {
  return <PortfolioPage />;
}
