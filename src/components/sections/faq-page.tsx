"use client";

import { useState } from "react";
import { CircleCheck, CircleQuestionMark, Clock, Sparkles, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { faqData } from "./data";

export function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = [
    { id: "all", label: "Toutes les questions", count: faqData.length, color: "from-blue-500 to-blue-700" },
    { id: "Processus", label: "Processus", count: faqData.filter((f) => f.category === "Processus").length, color: "from-indigo-500 to-purple-600" },
    { id: "Services", label: "Services", count: faqData.filter((f) => f.category === "Services").length, color: "from-pink-500 to-rose-600" },
    { id: "Général", label: "Général", count: faqData.filter((f) => f.category === "Général").length, color: "from-green-500 to-emerald-600" },
  ];
  const filteredFAQ = activeCategory === "all" ? faqData : faqData.filter((f) => f.category === activeCategory);

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
              <Badge className="mb-6 px-4 py-2 text-sm font-semibold"><Sparkles className="mr-2 h-4 w-4" />Centre d&apos;aide</Badge>
              <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl"><span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">Questions Fréquentes</span></h1>
            </div>
          </div>
        </section>

        <section className="border-y border-border/50 bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              <div className="rounded-2xl border-2 border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/50"><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10"><CircleQuestionMark className="h-6 w-6 text-primary" /></div><div className="mb-1 text-2xl font-bold">25+</div><div className="text-sm text-muted-foreground">Questions</div></div>
              <div className="rounded-2xl border-2 border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/50"><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10"><Clock className="h-6 w-6 text-primary" /></div><div className="mb-1 text-2xl font-bold">24/7</div><div className="text-sm text-muted-foreground">Disponibilité</div></div>
              <div className="rounded-2xl border-2 border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/50"><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10"><Users className="h-6 w-6 text-primary" /></div><div className="mb-1 text-2xl font-bold">3</div><div className="text-sm text-muted-foreground">Experts</div></div>
              <div className="rounded-2xl border-2 border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/50"><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10"><CircleCheck className="h-6 w-6 text-primary" /></div><div className="mb-1 text-2xl font-bold">98%</div><div className="text-sm text-muted-foreground">Satisfaction</div></div>
            </div>
          </div>
        </section>

        <section className="bg-muted/20 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative rounded-2xl border-2 p-4 text-left transition-all duration-300 ${activeCategory === cat.id ? "border-primary/50 bg-primary/5 shadow-lg" : "border-border bg-card hover:border-primary/30"}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} shadow-md`}>
                      <CircleQuestionMark className="h-6 w-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-sm font-semibold md:text-base">{cat.label}</h3>
                      <p className="text-xs text-muted-foreground">{cat.count} questions</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQ.map((item, index) => (
                  <AccordionItem key={item.question} value={`item-${index}`} className="rounded-xl border-2 border-border bg-card px-6 transition-all hover:border-primary/30">
                    <AccordionTrigger className="py-6 hover:no-underline">
                      <div className="flex items-start gap-4 text-left">
                        <div className="mt-1 shrink-0"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/10"><CircleQuestionMark className="h-4 w-4 text-primary" /></div></div>
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-foreground md:text-lg">{item.question}</h3>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="bg-muted/50 text-xs">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pl-12">
                      <p className="leading-relaxed text-muted-foreground">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
