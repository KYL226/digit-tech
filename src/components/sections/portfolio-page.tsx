"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheck, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioProjects } from "./data";

export function PortfolioPage() {
  return (
    <main className="flex-1">
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
              <Badge className="mb-4 text-sm font-semibold sm:text-base">Nos Réalisations</Badge>
              <h1 className="mb-3 text-3xl font-bold sm:text-4xl md:text-6xl">
                Portfolio projets
              </h1>
              <p className="text-sm text-muted-foreground sm:text-lg">
                Une vue complète de réalisations récentes avec miniatures, livrables et lien direct.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {portfolioProjects.map((project) => (
                <Card key={project.title} className="overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-2xl">
                  <div className="relative h-52">
                    <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute left-3 top-3" variant="secondary">
                      {project.sector}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.objective}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {project.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start gap-2 text-sm">
                          <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                          <span className="text-muted-foreground">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="rounded-lg bg-primary/5 px-3 py-2 text-sm font-medium text-foreground">
                      {project.result}
                    </p>
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full">
                        Voir le projet
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact"><Button size="lg">
                Obtenir un devis
              </Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline">
                Planifier un appel
              </Button></Link>
              <Link href="/services"><Button size="lg" variant="secondary">
                Nos services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button></Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
