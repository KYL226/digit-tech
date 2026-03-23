import type { LucideIcon } from "lucide-react";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  color: string;
  category: "development" | "creative" | "innovation";
  features: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
  category: "Services" | "Processus" | "Général";
  tags: string[];
};

export type StatItem = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export type PortfolioItem = {
  title: string;
  sector: string;
  objective: string;
  thumbnail: string;
  projectUrl: string;
  deliverables: string[];
  result: string;
};
