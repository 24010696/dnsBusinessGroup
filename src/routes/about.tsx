import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { DIVISIONS, VALUES } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DNS Business Group" },
      {
        name: "description",
        content:
          "Get to know DNS Business Group: our mission, our values, and the five divisions that make us one of the most versatile groups in the region.",
      },
      { property: "og:title", content: "About DNS Business Group" },
      {
        property: "og:description",
        content: "A diversified business group built on quality, integrity and continuous growth.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[var(--brand-ink)] py-24 text-white sm:py-32">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[var(--brand-green)]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[var(--brand-red)]/15 blur-3xl" />
        <div className="container-prose relative">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
            About the Group
          </p>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            One group, built to serve communities through many trades.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            DNS Business Group brings together five specialised divisions under one trusted brand —
            so customers, partners and communities can rely on a single name for food, transport,
            outdoor advertising, manufacturing and travel.
          </p>
        </div>
      </section>

      <section className="container-prose grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Our mission</h2>
          <p className="mt-4 text-muted-foreground">
            To build better businesses, create meaningful jobs, and deliver service that goes
            beyond what customers expect. We grow by being indispensable to the people we serve.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Our promise</h2>
          <p className="mt-4 text-muted-foreground">
            Whichever division you engage, you get the same standard: quality work, fair pricing,
            honest communication, and a team that takes pride in going above the limit.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-20">
        <div className="container-prose">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Our values</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold text-[var(--brand-green-deep)]">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-20">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Explore our divisions</h2>
        <ul className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
          {DIVISIONS.map((d) => (
            <li key={d.slug}>
              <Link
                to={d.ctaTo}
                className="group flex items-center justify-between gap-6 p-6 transition-colors hover:bg-muted/50"
              >
                <div>
                  <h3 className="font-display text-lg font-bold">{d.name}</h3>
                  <p className="text-sm text-muted-foreground">{d.short}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SITE, DIVISIONS } from "@/lib/site";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — DNS Business Group" },
      { name: "description", content: "Get in touch with DNS Business Group. Contact us for transportation, outdoor, manufacturing, or travel enquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    division: "General Enquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create the email body
    const subject = encodeURIComponent(`Enquiry: ${formData.division}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDivision: ${formData.division}\n\nMessage:\n${formData.message}`
    );

    // Open email client
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-[var(--brand-ink)] text-white py-20">
        <div className="container-prose text-center">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/80 text-lg">
            Have a question or need a quote? We're here to help across all our divisions.
          </p>
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="font-display text-2xl font-bold">Contact Information</h2>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[var(--brand-green)]/10 flex items-center justify-center text-[var(--brand-green)]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <a href={SITE.phoneHref} className="text-muted-foreground hover:text-[var(--brand-green)]">
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[var(--brand-green)]/10 flex items-center justify-center text-[var(--brand-green)]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <a href={SITE.emailHref} className="text-muted-foreground hover:text-[var(--brand-green)]">
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[var(--brand-green)]/10 flex items-center justify-center text-[var(--brand-green)]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-muted-foreground">{SITE.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[var(--brand-green)]/10 flex items-center justify-center text-[var(--brand-green)]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Hours</h3>
                  <p className="text-muted-foreground">{SITE.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h2 className="font-display text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block text-sm font-medium mb-1">Division / Department</label>
                <select
                  value={formData.division}
                  onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="General Enquiry">General Enquiry</option>
                  {/* Map over divisions from site.ts - this ensures Eatery is removed if you update site.ts */}
                  {DIVISIONS.map((div) => (
                    <option key={div.slug} value={div.name}>
                      {div.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-green)] px-4 py-3 text-sm font-bold text-white hover:bg-[var(--brand-green-deep)] transition-colors"
              >
                <Send className="h-4 w-4" /> Send Enquiry
              </button>
            </form>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Lightbulb, Users, Handshake, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { DIVISIONS, SITE, VALUES } from "@/lib/site";
import heroImg from "@/assets/hero-main.jpg";
import transportationImg from "@/assets/division-transportation.jpg";
import outdoorImg from "@/assets/division-outdoor.jpg";
import manufacturersImg from "@/assets/division-manufacturers.jpg";
import travelImg from "@/assets/division-travel.jpg";
import logo from "@/assets/dns-logo.png";

const divisionImages: Record<string, string> = {
  transportation: transportationImg,
  outdoor: outdoorImg,
  manufacturers: manufacturersImg,
  travel: travelImg,
};

const valueIcons = [Award, Lightbulb, Users, Handshake, TrendingUp];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DNS Business Group — We Go Above The Limit" },
      {
        name: "description",
        content:
          "Four specialised divisions, one trusted group. Transport, outdoor advertising, manufacturing and travel — all under DNS Business Group.",
      },
      { property: "og:title", content: "DNS Business Group — We Go Above The Limit" },
      {
        property: "og:description",
        content: "One Group. Many Solutions. Endless Possibilities.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--brand-ink)] text-white">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="DNS Business Group"
            className="h-full w-full object-cover opacity-55"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-ink)] via-[var(--brand-ink)]/85 to-[var(--brand-ink)]/30" />
        </div>

        <div className="container-prose relative grid gap-10 py-24 sm:py-32 lg:grid-cols-12 lg:py-40">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur">
              <img src={logo} className="h-4 w-auto invert brightness-0 contrast-200" alt="logo" />
              Four divisions. One trusted group.
            </div>
            <h1 className="mt-6 text-balance font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
              We Go{" "}
              <span className="bg-gradient-to-r from-[var(--brand-green)] to-[var(--brand-red)] bg-clip-text text-transparent">
                Above The Limit.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {SITE.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-ink)] shadow-soft transition-transform hover:scale-[1.02]"
              >
                About the Group <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="container-prose py-20 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
              Our Divisions
            </p>
            <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold sm:text-4xl md:text-5xl">
              Four specialised teams, one standard of excellence.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Every division is run by experts focused on a single craft — so you get specialist quality with the backing of a trusted group.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIVISIONS.map((d, idx) => (
            <Link
              key={d.slug}
              to={d.ctaTo}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant ${
                idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={divisionImages[d.image]}
                  alt={d.name}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold">{d.name}</h3>
                <p className="mt-2 text-sm font-medium text-[var(--brand-green-deep)]">
                  {d.short}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {d.ctaLabel}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-muted/40 py-20 sm:py-24">
        <div className="container-prose">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            What we stand for
          </p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold sm:text-4xl">
            Values that guide every division.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-soft"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full gradient-brand text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-prose py-20 sm:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--brand-ink)] p-10 text-white sm:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--brand-green)]/25 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[var(--brand-red)]/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl md:text-5xl">
                Building better businesses. Creating a better future.
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Whether you need logistics, fabrication, advertising or travel — reach out and let's get to work.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--brand-ink)] shadow-soft transition-transform hover:scale-[1.02]"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { DivisionHero } from "@/components/DivisionHero";
import { QuoteForm } from "@/components/QuoteForm";
import { DivisionGallery } from "@/components/DivisionGallery";
import { Factory, Cog, Flame, Ruler } from "lucide-react";
import img from "@/assets/division-manufacturers.jpg";

export const Route = createFileRoute("/manufacturers")({
  head: () => ({
    meta: [
      { title: "DNS Manufacturers — Production and manufacturing" },
      { name: "description", content: "Custom fabrication, welding and production services from DNS Manufacturers." },
      { property: "og:title", content: "DNS Manufacturers" },
      { property: "og:description", content: "Production and manufacturing services." },
    ],
  }),
  component: Manufacturers,
});

const MANUFACTURING_GALLERY = [
  { src: "/gallery/manufacturers/fabrication-1.jpg", alt: "Steel welding in progress" },
  { src: "/gallery/manufacturers/fabrication-2.jpg", alt: "Custom metal components" },
  { src: "/gallery/manufacturers/fabrication-3.jpg", alt: "Industrial fabrication workshop" },
  { src: "/gallery/manufacturers/fabrication-4.jpg", alt: "Precision cutting machinery" },
  { src: "/gallery/manufacturers/fabrication-5.jpg", alt: "Assembly line production" },

];

const services = [
  { icon: Flame, title: "Welding & Fabrication", body: "Steel fabrication for industrial and commercial use." },
  { icon: Factory, title: "Production Runs", body: "Repeatable production for parts and components." },
  { icon: Ruler, title: "Custom Builds", body: "Bespoke builds tailored to your drawings or brief." },
  { icon: Cog, title: "Repairs & Refits", body: "Maintenance, refurbishment and on-site repair work." },
];

function Manufacturers() {
  return (
    <PageShell>
      <DivisionHero
        eyebrow="DNS Manufacturers"
        title="Precision. Consistency. On every job."
        description="Custom fabrication, welding and production services for businesses that demand parts done right the first time."
        image={img}
      />
      <section className="container-prose py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What we make</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">From one-off custom pieces to ongoing production, our workshop delivers on spec and on schedule.</p>
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
          <div className="lg:col-span-2"><QuoteForm division="DNS Manufacturers" /></div>
        </div>
      </section>
      <DivisionGallery images={MANUFACTURING_GALLERY} title="Workshop & Fabrication" />
    </PageShell>
  );
}
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
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { DivisionHero } from "@/components/DivisionHero";
import { QuoteForm } from "@/components/QuoteForm";
import { DivisionGallery } from "@/components/DivisionGallery";
import { Truck, Package, Users, Clock } from "lucide-react";
import img from "@/assets/division-transportation.jpg";

export const Route = createFileRoute("/transportation")({
  head: () => ({
    meta: [
      { title: "DNS Transportation — Reliable transport solutions" },
      { name: "description", content: "Cargo, courier and passenger transport across South Africa. Request a quote from DNS Transportation." },
      { property: "og:title", content: "DNS Transportation" },
      { property: "og:description", content: "Reliable transport solutions." },
    ],
  }),
  component: Transportation,
});

const TRANSPORT_GALLERY = [
  { src: "/gallery/transportation/vehicle-1.jpg", alt: "Cargo truck on delivery route" },
  { src: "/gallery/transportation/vehicle-2.jpg", alt: "Loading cargo into vehicle" },

];

const services = [
  { icon: Truck, title: "Cargo & Freight", body: "Local and long-haul cargo movement with full tracking." },
  { icon: Package, title: "Courier Services", body: "Same-day and next-day courier for parcels and documents." },
  { icon: Users, title: "Passenger Transport", body: "Group transfers, shuttles and chartered minibus hire." },
  { icon: Clock, title: "Scheduled Routes", body: "Reliable scheduled deliveries for businesses." },
];

function Transportation() {
  return (
    <PageShell>
      <DivisionHero
        eyebrow="DNS Transportation"
        title="Moving goods and people, on time."
        description="Cargo, courier and passenger transport designed around your schedule — backed by drivers who know the roads and care about your delivery."
        image={img}
      />
      <section className="container-prose py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What we move</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">From a single parcel to full truck loads, we tailor a transport solution that fits your budget and timeline.</p>
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
          <div className="lg:col-span-2"><QuoteForm division="DNS Transportation" /></div>
        </div>
      </section>
      <DivisionGallery images={TRANSPORT_GALLERY} title="Fleet & Cargo" />
    </PageShell>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { DivisionHero } from "@/components/DivisionHero";
import { QuoteForm } from "@/components/QuoteForm";
import { DivisionGallery } from "@/components/DivisionGallery";
import { Plane, MapPin, Users, Sparkles } from "lucide-react";
import img from "@/assets/division-travel.jpg";

export const Route = createFileRoute("/travel")({
  head: () => ({
    meta: [
      { title: "DNS Travel & Tours — Travel experiences and tour packages" },
      { name: "description", content: "Curated local and international travel packages, group tours and bespoke itineraries from DNS Travel & Tours." },
      { property: "og:title", content: "DNS Travel & Tours" },
      { property: "og:description", content: "Travel experiences and tour packages." },
    ],
  }),
  component: Travel,
});

const TRAVEL_GALLERY = [
  { src: "/gallery/travel/destination-1.jpg", alt: "Scenic travel destination" },
  { src: "/gallery/travel/destination-2.jpg", alt: "Group tour excursion" },
  { src: "/gallery/travel/destination-3.jpg", alt: "Luxury accommodation view" },
  { src: "/gallery/travel/destination-4.jpg", alt: "Adventure activity setup" },
  { src: "/gallery/travel/destination-5.jpg", alt: "Cultural tour experience" },
  { src: "/gallery/travel/destination-6.jpg", alt: "Corporate retreat venue" },

];

const services = [
  { icon: MapPin, title: "Local Tours", body: "Day trips and weekend getaways across the country." },
  { icon: Plane, title: "International Packages", body: "Flights, hotels and itineraries to top destinations." },
  { icon: Users, title: "Group Travel", body: "Church, school, corporate and family group bookings." },
  { icon: Sparkles, title: "Bespoke Itineraries", body: "Tailor-made trips planned around your dream list." },
];

function Travel() {
  return (
    <PageShell>
      <DivisionHero
        eyebrow="DNS Travel & Tours"
        title="Go further. Travel better."
        description="Curated local and international travel packages, group tours and bespoke itineraries — for every budget and every milestone."
        image={img}
      />
      <section className="container-prose py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">How we travel</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">Tell us where you'd like to go — we'll build the trip, book the logistics and look after the details.</p>
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
          <div className="lg:col-span-2"><QuoteForm division="DNS Travel & Tours" /></div>
        </div>
      </section>
      <DivisionGallery images={TRAVEL_GALLERY} title="Destinations & Tours" />
    </PageShell>
  );
}
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-muted-foreground mb-4">Page not found</p>
        <Link to="/" className="text-[var(--brand-green)] hover:underline">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h1 className="text-3xl font-bold mb-4">This page didn't load</h1>
        <p className="text-muted-foreground mb-6">Something went wrong. You can try refreshing or head back home.</p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-md bg-[var(--brand-green)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--brand-green-deep)]">Try again</button>
          <Link to="/" className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium">Go home</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DNS Business Group — We Go Above The Limit" },
      { name: "description", content: "Four specialised divisions, one trusted group." },
      { property: "og:title", content: "DNS Business Group" },
      { property: "og:description", content: "One Group. Many Solutions. Endless Possibilities." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: ({ children }) => (
    <html lang="en" suppressHydrationWarning>
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  ),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>;
}
