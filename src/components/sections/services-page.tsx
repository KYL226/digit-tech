"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Calendar,
  CircleCheck,
  Globe,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { portfolioProjects, services } from "./data";

export function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const filteredServices =
    activeTab === "all" ? services : services.filter((service) => service.category === activeTab);

  return (
    <main className="flex-1">
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-10 top-20 h-72 w-72 animate-pulse rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-20 right-10 h-96 w-96 animate-pulse rounded-full bg-primary/5 blur-3xl" />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-6 px-4 py-2 text-sm font-semibold">
                <Sparkles className="mr-2 h-4 w-4" />
                Avec Digit Tech Group, chaque création part d'une vision.
              </Badge>
              <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Nos Services
                </span>
                <br />
                <span className="text-foreground">Digitaux</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="border-y border-border/50 bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              <div className="rounded-2xl border-2 border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"><Users className="mb-3 h-8 w-8 text-primary" /><div className="mb-1 text-3xl font-bold">1000+</div><div className="text-sm text-muted-foreground">Clients satisfaits</div></div>
              <div className="rounded-2xl border-2 border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"><Globe className="mb-3 h-8 w-8 text-primary" /><div className="mb-1 text-3xl font-bold">4</div><div className="text-sm text-muted-foreground">Pays d&apos;expertise</div></div>
              <div className="rounded-2xl border-2 border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"><Award className="mb-3 h-8 w-8 text-primary" /><div className="mb-1 text-3xl font-bold">98%</div><div className="text-sm text-muted-foreground">Taux de satisfaction</div></div>
              <div className="rounded-2xl border-2 border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"><TrendingUp className="mb-3 h-8 w-8 text-primary" /><div className="mb-1 text-3xl font-bold">24/7</div><div className="text-sm text-muted-foreground">Support disponible</div></div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">Portfolio de Services</h2>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
              <TabsList className="mx-auto grid h-auto w-full max-w-3xl grid-cols-4 p-1">
                <TabsTrigger value="all" className="py-3">Tous</TabsTrigger>
                <TabsTrigger value="development" className="py-3">Développement</TabsTrigger>
                <TabsTrigger value="creative" className="py-3">Création</TabsTrigger>
                <TabsTrigger value="innovation" className="py-3">Innovation</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid gap-8 md:grid-cols-2">
              {filteredServices.map((service) => (
                <Card key={service.id} className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className={`absolute bottom-4 left-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardHeader className="pt-6">
                    <CardTitle className="mb-2 text-2xl transition-colors group-hover:text-primary">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="block">
                    <Button className="w-full">
                      Demander un devis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/20 py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h3 className="mb-3 text-2xl font-bold md:text-4xl">Portfolio projets</h3>
              <p className="text-muted-foreground">
                Des cas d'usage représentatifs de notre savoir-faire technique et créatif.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {portfolioProjects.map((project) => (
                <Card key={project.title} className="border-2 transition-all hover:border-primary/50">
                  <div className="relative h-44">
                    <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit">{project.sector}</Badge>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.objective}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {project.deliverables.map((deliverable) => (
                      <div key={deliverable} className="flex items-start gap-2 text-sm">
                        <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                        <span className="text-muted-foreground">{deliverable}</span>
                      </div>
                    ))}
                    <p className="pt-2 text-sm font-medium">{project.result}</p>
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="block pt-1">
                      <Button variant="outline" className="w-full">Voir le projet</Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Prêt à démarrer votre projet ?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"><Button size="lg"><Calendar className="mr-2 h-5 w-5" />Obtenir un devis</Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline"><ArrowRight className="mr-2 h-5 w-5" />Planifier un appel</Button></Link>
              <Link href="/portfolio"><Button size="lg" variant="secondary"><MessageSquare className="mr-2 h-5 w-5" />Voir nos réalisations</Button></Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
