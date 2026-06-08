import { Quote } from "lucide-react";

const REVIEWS = [
  { 
    name: "Thabo M.", 
    role: "Logistics Manager", 
    text: "DNS Transportation delivered our cargo 2 days ahead of schedule. Professional team, real-time tracking, no excuses." 
  },
  { 
    name: "Naledi K.", 
    role: "Project Director", 
    text: "DNS Outdoor built our billboard and it's survived 3 storms. The fabrication quality is superior." 
  },
  { 
    name: "David R.", 
    role: "Tour Group Leader", 
    text: "Booked a 12-person trip through DNS Travel. Flights, hotels, transfers — all handled flawlessly." 
  },
];

export function Testimonials() {
  return (
    <section className="container-prose py-20">
      <div className="text-center mb-12">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)] mb-3">
          Trusted Partners
        </p>
        <h2 className="font-display text-3xl font-bold">What our clients say</h2>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        {REVIEWS.map((review, i) => (
          <div key={i} className="relative rounded-2xl border border-border bg-card p-8 shadow-soft flex flex-col">
            <Quote className="h-8 w-8 text-[var(--brand-green)]/20 absolute top-6 right-6" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 italic">
              "{review.text}"
            </p>
            <div className="border-t border-border pt-4">
              <p className="font-display font-bold text-sm text-[var(--brand-ink)]">{review.name}</p>
              <p className="text-xs text-[var(--brand-green)] font-medium mt-1">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}