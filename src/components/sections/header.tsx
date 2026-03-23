"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Nos Réalisations" },
  { href: "/faq", label: "Faq" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto relative px-4 py-4 lg:py-5">
        <div className="flex items-center justify-between lg:justify-end">
          <div className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
            <Link href="/" className="group block">
              <div className="relative h-20 w-48">
                <Image
                  src="/logo.svg"
                  alt="Digit Tech Group"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </Link>
          </div>

          <div className="w-40 lg:hidden">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Digit Tech Group"
                width={160}
                height={64}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="ml-6 hidden items-center gap-4 lg:flex">
            <Link href="/contact" className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Demander un devis
            </Link>
          </div>

          <button
            className="p-2 text-foreground transition-colors hover:text-primary lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full border-b border-border bg-background shadow-lg lg:hidden">
            <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className={`rounded-lg px-4 py-3 text-left transition-colors ${
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
