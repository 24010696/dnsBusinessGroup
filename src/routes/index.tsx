import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { DIVISIONS, SITE } from "@/lib/site";
import heroImg from "@/assets/hero-main.jpg";
import logo from "@/assets/dns-logo.png";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <section className="relative bg-[var(--brand-ink)] text-white py-20">
        <div className="container-prose text-center">
          <img src={logo} alt="DNS" className="h-16 mx-auto invert" />
          <h1 className="text-4xl font-bold mt-6">We Go Above The Limit</h1>
          <p className="mt-4 text-white/80">{SITE.description}</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link to="/about" className="px-6 py-3 bg-white text-[var(--brand-ink)] rounded-full font-semibold">About</Link>
            <Link to="/contact" className="px-6 py-3 border border-white/30 rounded-full">Contact</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}