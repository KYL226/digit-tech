import {
  Award,
  Bot,
  Clapperboard,
  GraduationCap,
  Globe,
  Heart,
  LaptopMinimal,
  MonitorSmartphone,
  Palette,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import type { FAQItem, PortfolioItem, ServiceItem, StatItem } from "./types";

export const services: ServiceItem[] = [
  {
    id: "site-web",
    title: "Création de Sites Web",
    description:
      "Conception de sites web professionnels, modernes et orientés conversion pour votre activité.",
    image: "/services/marketing-digital.jpg",
    icon: LaptopMinimal,
    color: "from-blue-500 to-blue-700",
    category: "development",
    features: [
      "Site vitrine et corporate",
      "Design responsive",
      "Optimisation SEO de base",
      "Déploiement et maintenance",
    ],
  },
  {
    id: "app-web-mobile",
    title: "Applications Web & Mobile",
    description:
      "Développement d'applications web et mobile modernes, performantes et évolutives.",
    image: "/services/immigration.jpg",
    icon: MonitorSmartphone,
    color: "from-pink-500 to-rose-600",
    category: "development",
    features: [
      "Applications métier sur mesure",
      "UX fluide et rapide",
      "Architecture évolutive",
      "Support post-lancement",
    ],
  },
  {
    id: "graphisme",
    title: "Graphisme",
    description:
      "Création d'identités visuelles professionnelles pour valoriser votre marque.",
    image: "/services/infographie.jpg",
    icon: Palette,
    color: "from-purple-500 to-violet-600",
    category: "creative",
    features: [
      "Identité visuelle",
      "Logos & chartes graphiques",
      "Supports marketing",
      "Visuels réseaux sociaux",
    ],
  },
  {
    id: "montage-video",
    title: "Montage Vidéo",
    description:
      "Production et montage de vidéos dynamiques pour vos campagnes et contenus digitaux.",
    image: "/services/e-secretariat.jpg",
    icon: Clapperboard,
    color: "from-green-500 to-emerald-600",
    category: "creative",
    features: [
      "Montage court et long format",
      "Habillage et transitions",
      "Sous-titrage et formats sociaux",
      "Optimisation de diffusion",
    ],
  },
  {
    id: "customisation",
    title: "Customisation sur Mesure",
    description:
      "Personnalisation d'appareils et accessoires pour renforcer l'identité de votre marque.",
    image: "/services/marketing-digital.jpg",
    icon: WandSparkles,
    color: "from-orange-500 to-amber-600",
    category: "creative",
    features: [
      "Customisation d'appareils",
      "Personnalisation d'accessoires",
      "Finitions premium",
      "Valorisation visuelle de marque",
    ],
  },
  {
    id: "formation-numerique",
    title: "Formation sur le Numérique",
    description:
      "Programmes de formation pratiques pour monter en compétences sur les outils digitaux.",
    image: "/services/infographie.jpg",
    icon: GraduationCap,
    color: "from-cyan-500 to-sky-600",
    category: "innovation",
    features: [
      "Initiation et perfectionnement",
      "Ateliers orientés pratique",
      "Parcours pour particuliers et équipes",
      "Accompagnement personnalisé",
    ],
  },
  {
    id: "intelligence-artificielle",
    title: "Intelligence Artificielle",
    description:
      "Intégration de solutions IA pour automatiser, analyser et accélérer vos opérations.",
    image: "/services/immigration.jpg",
    icon: Bot,
    color: "from-fuchsia-500 to-purple-700",
    category: "innovation",
    features: [
      "Automatisation de tâches",
      "Assistants IA métiers",
      "Optimisation des processus",
      "Conseil et déploiement progressif",
    ],
  },
];

export const faqData: FAQItem[] = [
  {
    question: "Quels services propose Digit Tech Group ?",
    answer:
      "Digit Tech Group propose la création de sites web, des applications web et mobile, le graphisme, le montage vidéo, la customisation sur mesure, la formation numérique et l'intelligence artificielle.",
    category: "Services",
    tags: ["Services", "Présentation"],
  },
  {
    question: "Proposez-vous des solutions sur mesure ?",
    answer:
      "Oui. Nous concevons des prestations adaptées à votre besoin, votre budget et vos objectifs métier, avec une approche progressive et personnalisée.",
    category: "Processus",
    tags: ["Sur mesure", "Accompagnement"],
  },
  {
    question: "Développez-vous des applications web et mobile performantes ?",
    answer:
      "Absolument. Nous construisons des applications modernes en mettant l'accent sur la performance, la maintenabilité et l'expérience utilisateur.",
    category: "Services",
    tags: ["Web", "Mobile", "Performance"],
  },
  {
    question: "La formation numérique est-elle adaptée aux débutants ?",
    answer:
      "Oui. Nos formations vont de l'initiation au perfectionnement, avec des modules pratiques pour étudiants, entrepreneurs et entreprises.",
    category: "Services",
    tags: ["Formation", "Numérique", "Débutants"],
  },
  {
    question: "Pouvez-vous intervenir sur le graphisme et le montage vidéo ?",
    answer:
      "Oui, nous réalisons des identités visuelles, des supports de communication et des montages vidéo optimisés pour les réseaux sociaux et les campagnes marketing.",
    category: "Services",
    tags: ["Graphisme", "Vidéo", "Communication"],
  },
  {
    question: "Où êtes-vous situés physiquement ?",
    answer:
      "Notre bureau principal se trouve à Koudougou, Burkina Faso : Derrière la Cité FasoTex et en centre ville juste à côté du la place des nations de koudougou. Nous travaillons également à distance avec des clients internationaux.",
    category: "Général",
    tags: ["Localisation", "Koudougou", "Burkina Faso"],
  },
  {
    question: "Comment se déroule l'accompagnement de projet ?",
    answer:
      "Nous commençons par un échange de cadrage, puis nous proposons une stratégie claire, une exécution itérative et un suivi continu jusqu'à la livraison finale.",
    category: "Processus",
    tags: ["Processus", "Méthodologie", "Livraison"],
  },
  {
    question: "Quels sont vos tarifs ?",
    answer:
      "Nos tarifs varient selon le service et la complexité du dossier. Nous proposons des forfaits transparents adaptés à chaque situation. Contactez-nous pour un diagnostic gratuit et un devis personnalisé.",
    category: "Général",
    tags: ["Tarifs", "Devis", "Prix"],
  },
];

export const stats: StatItem[] = [
  { icon: Award, value: "2026", label: "Agence active" },
  { icon: Sparkles, value: "7", label: "Domaines d'expertise" },
  { icon: Globe, value: "100%", label: "Projets digitaux" },
  { icon: Heart, value: "98%", label: "Satisfaction Client" },
];

export const portfolioProjects: PortfolioItem[] = [
  {
    title: "Plateforme e-commerce locale",
    sector: "Retail",
    objective: "Créer un canal de vente digital rapide et fiable.",
    thumbnail: "/services/marketing-digital.jpg",
    projectUrl: "https://example.com/projet/ecommerce-locale",
    deliverables: [
      "Site e-commerce responsive",
      "Tableau de bord de gestion produits",
      "Intégration paiements et notifications",
    ],
    result: "+42% de commandes en ligne après 3 mois.",
  },
  {
    title: "Application mobile de réservation",
    sector: "Services",
    objective: "Digitaliser les prises de rendez-vous clients.",
    thumbnail: "/services/immigration.jpg",
    projectUrl: "https://example.com/projet/app-reservation",
    deliverables: [
      "Application mobile Android/iOS",
      "Back-office d'administration",
      "Automatisation des rappels clients",
    ],
    result: "-55% d'appels manuels et meilleure satisfaction client.",
  },
  {
    title: "Refonte identité visuelle + vidéo",
    sector: "Communication",
    objective: "Moderniser l'image de marque et la présence sociale.",
    thumbnail: "/services/infographie.jpg",
    projectUrl: "https://example.com/projet/refonte-identite",
    deliverables: [
      "Charte graphique complète",
      "Templates réseaux sociaux",
      "Montages vidéos promotionnels",
    ],
    result: "Engagement social multiplié par 2 en 8 semaines.",
  },
];
