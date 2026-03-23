"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom complet est requis."),
  email: z.email("Veuillez entrer une adresse email valide."),
  phone: z.string().min(8, "Veuillez entrer un numéro valide."),
  subject: z.string().min(1, "Veuillez sélectionner un sujet."),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactPage() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    alert("Message envoyé avec succès ! Nous vous recontacterons bientôt.");
    reset();
  };

  return (
    <main className="flex-1">
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <section className="relative overflow-hidden py-20">
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">Contactez-nous</h1>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"><div className="rounded-lg bg-primary/10 p-3"><MapPin className="h-6 w-6 text-primary" /></div><div><h3 className="mb-1 font-semibold">Adresse</h3><p className="text-sm leading-relaxed text-muted-foreground">Cité des Palmiers, près du Collège Dauphine<br />Immeuble Jaune – 2ᵉ étage – Bureau B09<br />Douala – Cameroun</p></div></div>
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"><div className="rounded-lg bg-primary/10 p-3"><Mail className="h-6 w-6 text-primary" /></div><div className="space-y-2"><h3 className="mb-1 font-semibold">Emails</h3><a href="mailto:servicesclients@absolutesarl.com" className="block text-sm text-muted-foreground transition-colors hover:text-primary">servicesclients@absolutesarl.com</a><a href="mailto:jordan.ntouko@absolutesarl.com" className="block text-sm text-muted-foreground transition-colors hover:text-primary">jordan.ntouko@absolutesarl.com</a></div></div>
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"><div className="rounded-lg bg-primary/10 p-3"><Phone className="h-6 w-6 text-primary" /></div><div className="space-y-2"><h3 className="mb-1 font-semibold">Téléphones</h3><a href="tel:+237699992818" className="block text-sm text-muted-foreground transition-colors hover:text-primary">+237 699 99 28 18 <span className="text-xs">(Principal)</span></a><a href="tel:+237675157871" className="block text-sm text-muted-foreground transition-colors hover:text-primary">+237 675 15 78 71 <span className="text-xs">(Secondaire)</span></a><a href="https://wa.me/237699992818" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-green-600 transition-colors hover:text-green-700">WhatsApp Business</a></div></div>
                </div>
                <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6">
                  <div className="mb-4 flex items-center gap-2"><Clock className="h-5 w-5 text-primary" /><h3 className="font-semibold">Horaires d&apos;ouverture</h3></div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between"><span className="text-muted-foreground">Lundi - Vendredi</span><span className="font-medium text-foreground">08:00 - 17:00</span></div>
                    <div className="flex items-center justify-between"><span className="text-muted-foreground">Samedi</span><span className="font-medium text-foreground">08:00 - 15:00</span></div>
                    <div className="flex items-center justify-between"><span className="text-muted-foreground">Dimanche</span><span className="font-medium text-red-600">Fermé</span></div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-border bg-card p-8 shadow-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input id="name" placeholder="Votre nom complet" className="h-12" {...register("name")} />
                    {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="votre@email.com" className="h-12" {...register("email")} />
                      {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" placeholder="+237 6XX XX XX XX" className="h-12" {...register("phone")} />
                      {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Sujet de votre demande</Label>
                    <Select value={watch("subject")} onValueChange={(value) => setValue("subject", value, { shouldValidate: true })}>
                      <SelectTrigger className="h-12"><SelectValue placeholder="Sélectionnez un sujet" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="site-web">Création de site web</SelectItem>
                        <SelectItem value="app-web-mobile">Application web et mobile</SelectItem>
                        <SelectItem value="graphisme">Graphisme</SelectItem>
                        <SelectItem value="montage-video">Montage vidéo</SelectItem>
                        <SelectItem value="customisation">Customisation sur mesure</SelectItem>
                        <SelectItem value="formation">Formation sur le numérique</SelectItem>
                        <SelectItem value="ia">Intelligence artificielle</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Votre message</Label>
                    <Textarea id="message" placeholder="Décrivez-nous votre projet..." className="min-h-32 resize-none" {...register("message")} />
                    {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" className="h-12 w-full" disabled={isSubmitting}>
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Envoi..." : "Envoyer le message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Prêt à démarrer votre projet ?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact"><Button size="lg"><Calendar className="mr-2 h-5 w-5" />Planifier un appel</Button></Link>
                <a href="https://wa.me/237699992818" target="_blank" rel="noopener noreferrer"><Button size="lg" variant="outline"><MessageSquare className="mr-2 h-5 w-5" />WhatsApp Business</Button></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
