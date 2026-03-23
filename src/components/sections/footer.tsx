"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { services } from "./data";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-muted/30 via-muted/50 to-muted">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-4">
            <div>
              <Link href="/" className="group">
                <h3 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-2xl font-bold text-transparent transition-all group-hover:from-primary/80 group-hover:to-primary sm:text-3xl">
                  Digit Tech Group
                </h3>
                <p className="mt-1 text-sm italic text-muted-foreground">Avec Digit Tech Group, chaque création part d&apos;une vision.</p>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Agence digitale spécialisée en création de sites web, applications web et mobile, graphisme,
                montage vidéo, customisation sur mesure, formation numérique et intelligence artificielle.
              </p>
              <Badge variant="outline" className="mt-4 text-xs">Digit Tech Group</Badge>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold">Suivez-Nous</h4>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=61586028021180" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-border bg-card transition-all hover:border-transparent hover:bg-blue-600 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/absolute-sarl/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-border bg-card transition-all hover:border-transparent hover:bg-blue-700 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-border bg-card transition-all hover:border-transparent hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-border bg-card transition-all hover:border-transparent hover:bg-sky-500 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-border bg-card transition-all hover:border-transparent hover:bg-red-600 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold sm:mb-6 sm:text-base">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold sm:mb-6 sm:text-base">Domaines clés</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">Développement web/mobile</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">Création visuelle</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">Formation digitale</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">Intelligence artificielle</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="mb-4 text-sm font-semibold sm:mb-6 sm:text-base">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Koudougou, Burkina Faso
              </li>
              <li>
                <a href="tel:+22657431367" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" />
                  +226 57 43 13 67
                </a>
              </li>
              <li>
                <a href="mailto:digittechgroup@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" />
                    digittechgroup@gmail.com
                  </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">© 2026 Digit Tech Group. Tous droits réservés.</p>
          <div className="flex gap-6">
            <button className="text-sm text-muted-foreground transition-colors hover:text-primary">Mentions légales</button>
            <button className="text-sm text-muted-foreground transition-colors hover:text-primary">Politique de confidentialité</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
