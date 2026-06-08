import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { DivisionHero } from "@/components/DivisionHero";
import { QuoteForm } from "@/components/QuoteForm";
import { DivisionGallery } from "@/components/DivisionGallery";
import { Wrench, Hammer, ShieldCheck, Wind } from "lucide-react";
import img from "@/assets/division-outdoor.jpg";

export const Route = createFileRoute("/outdoor")({
  head: () => ({
    meta: [
      { title: "DNS Outdoor — Outdoor services and supplies" },
      { name: "description", content: "Billboard fabrication, installation and outdoor advertising structures by DNS Outdoor." },
      { property: "og:title", content: "DNS Outdoor" },
      { property: "og:description", content: "Outdoor services and supplies." },
    ],
  }),
  component: Outdoor,
});

const OUTDOOR_GALLERY = [
  { src: "/gallery/outdoor/billboard-1.jpg", alt: "Large billboard installation" },
  { src: "/gallery/outdoor/billboard-2.jpg", alt: "Billboard steel framework" },
  { src: "/gallery/outdoor/billboard-3.jpg", alt: "Corporate signage project" },
  { src: "/gallery/outdoor/billboard-4.jpg", alt: "Night-time illuminated signage" },
  { src: "/gallery/outdoor/billboard-5.jpg", alt: "Routine maintenance inspection" },
  { src: "/gallery/outdoor/billboard-6.jpg", alt: "Large format branding" },
  { src: "/gallery/outdoor/billboard-7.jpg", alt: "Outdoor structure fabrication" },
  { src: "/gallery/outdoor/billboard-8.jpg", alt: "Completed signage installation" },
];

const services = [
  { icon: Hammer, title: "Billboard Fabrication", body: "Custom steel structures fabricated to spec." },
  { icon: Wrench, title: "Site Installation", body: "Safe installation by trained, certified crews." },
  { icon: ShieldCheck, title: "Maintenance", body: "Routine inspection and repair to keep structures safe." },
  { icon: Wind, title: "Branding & Signage", body: "Large-format branding, signage and outdoor displays." },
];

function Outdoor() {
  return (
    <PageShell>
      <DivisionHero
        eyebrow="DNS Outdoor"
        title="Built to stand. Built to be seen."
        description="Billboard fabrication, installation and outdoor advertising structures — engineered for the long haul, installed by professionals."
        image={img}
      />
      <section className="container-prose py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Capabilities</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">From fabrication to permitting and final install, we manage the full outdoor structure lifecycle.</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full gradient-brand text-white"><s.icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2"><QuoteForm division="DNS Outdoor" /></div>
        </div>
      </section>
      <DivisionGallery images={OUTDOOR_GALLERY} title="Our Outdoor Projects" />
    </PageShell>
  );
}