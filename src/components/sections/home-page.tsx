"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheck, MessageSquare, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioProjects, services, stats } from "./data";

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(28,169,201,1) 1px, transparent 1px), linear-gradient(90deg, rgba(28,169,201,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block sm:mb-8">
            <Badge
              className="px-4 py-2 text-sm font-semibold"
              style={{
                border: "1px solid rgba(28,169,201,0.4)",
                background: "rgba(28,169,201,0.08)",
                color: "#1CA9C9",
              }}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Avec Digit Tech Group, chaque création part d'une vision.
            </Badge>
          </div>

          <h1 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">
            <span
              className="animate-hero-gradient bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #1CA9C9 0%, #0e7fa0 50%, #1CA9C9 100%)",
                backgroundSize: "200% auto",
              }}
            >
              Digit Tech Group
            </span>
            <br />
            <span className="text-2xl text-foreground sm:text-3xl md:text-5xl lg:text-6xl">
              Solutions digitales modernes et performantes
            </span>
          </h1>

          <p className="mx-auto mb-6 max-w-2xl px-4 text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:text-lg md:text-xl">
            Nous accompagnons votre croissance avec la création de sites web, d'applications web et mobile,
            le graphisme, le montage vidéo, la formation numérique et l'intelligence artificielle.
          </p>

          <div className="flex flex-col flex-wrap justify-center gap-3 px-4 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex h-11 w-full items-center justify-center overflow-hidden rounded-xl px-6 text-sm font-semibold text-white sm:h-12 sm:w-auto sm:px-8 sm:text-base"
              style={{
                background: "linear-gradient(135deg, #1CA9C9, #0e7fa0)",
                boxShadow: "0 4px 20px rgba(28,169,201,0.35)",
              }}
            >
              Obtenir un devis
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </Link>

            <Link href="/contact" className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-border px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary sm:h-12 sm:w-auto sm:px-8 sm:text-base">
              Planifier un appel
            </Link>

            <Link href="/portfolio" className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-green-500 px-6 text-sm font-semibold text-white transition-colors hover:bg-green-600 sm:h-12 sm:w-auto sm:px-8 sm:text-base">
              <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="border-y border-border/50 bg-muted/30 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="group relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 blur-xl transition-all duration-300 group-hover:blur-2xl" />
              <div className="relative rounded-2xl border-2 border-border bg-card p-4 transition-all duration-300 hover:border-primary/50 sm:p-6">
                <stat.icon className="mb-2 h-6 w-6 text-primary sm:mb-3 sm:h-8 sm:w-8" />
                <div className="mb-1 text-2xl font-bold sm:text-3xl">{stat.value}</div>
                <div className="text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSectionHome() {
  return (
    <section id="services" className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <Badge className="mb-4 text-sm font-semibold sm:text-base md:text-lg">Nos Expertises</Badge>
          <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-5xl">
            Solutions Complètes et Sur Mesure
          </h2>
          <p className="text-sm text-muted-foreground sm:text-lg">
            De la conception web à l'intelligence artificielle, nous construisons des solutions alignées à votre vision.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.id} href="/services" className="block">
              <Card className="group relative h-full cursor-pointer overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div
                    className={`absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-lg backdrop-blur-sm`}
                  >
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                <CardHeader className="pt-6">
                  <CardTitle className="mb-2 text-lg transition-colors group-hover:text-primary sm:text-2xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-2">
                  {service.features.slice(0, 4).map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-xs sm:text-sm">
                      <CircleCheck className="mt-0.5 h-3 w-3 shrink-0 text-green-500 sm:h-4 sm:w-4" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section className="bg-muted/20 py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <Badge className="mb-4 text-sm font-semibold sm:text-base">Portfolio Projets</Badge>
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl md:text-5xl">Des réalisations qui parlent</h2>
          <p className="text-sm text-muted-foreground sm:text-lg">
            Quelques cas concrets pour montrer notre méthode, nos livrables et l'impact business.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {portfolioProjects.map((project) => (
            <Card key={project.title} className="h-full border-2 transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="relative h-44">
                <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <Badge variant="outline" className="w-fit">{project.sector}</Badge>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.objective}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  {project.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-2">
                      <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      <span className="text-muted-foreground">{deliverable}</span>
                    </li>
                  ))}
                </ul>
                <p className="rounded-lg bg-primary/5 px-3 py-2 text-sm font-medium text-foreground">{project.result}</p>
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full">Voir le projet</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10">
          <Link href="/contact"><Button size="lg">Obtenir un devis</Button></Link>
          <Link href="/contact"><Button size="lg" variant="outline">Planifier un appel</Button></Link>
          <Link href="/portfolio"><Button size="lg" variant="secondary">Voir nos réalisations</Button></Link>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <main className="flex-1">
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <HeroSection />
        <StatsSection />
        <ServicesSectionHome />
        <PortfolioSection />
      </div>
    </main>
  );
}
