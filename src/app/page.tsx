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
    email: "digittechgroup@gmail.com",
    telephone: "+22677710804",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Koudougou",
      addressCountry: "Burkina Faso",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61577532456580",
      "https://www.linkedin.com/",
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
