import { HomePage } from "@/components/sections/home-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digit Tech Group | Accueil",
  description:
    "Avec Digit Tech Group, chaque création part d'une vision. Découvrez nos expertises en développement, création digitale et IA.",
};

export default function Page() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digit Tech Group",
    url: "https://digittechgroup.com",
    slogan: "Avec Digit Tech Group, chaque création part d'une vision.",
    email: "servicesclients@absolutesarl.com",
    telephone: "+237699992818",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Douala",
      addressCountry: "CM",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61586028021180",
      "https://www.linkedin.com/company/absolute-sarl/",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HomePage />
    </>
  );
}
