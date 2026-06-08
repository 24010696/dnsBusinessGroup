import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { DivisionHero } from "@/components/DivisionHero";
import { QuoteForm } from "@/components/QuoteForm";
import { DivisionGallery } from "@/components/DivisionGallery";
import img from "@/assets/division-transportation.jpg";

export const Route = createFileRoute("/transportation")({
  component: Transportation,
});

const GALLERY = [
  { src: "/gallery/transportation/vehicle-1.jpg", alt: "Truck 1" },
  { src: "/gallery/transportation/vehicle-2.jpg", alt: "Truck 2" },
];

function Transportation() {
  return (
    <PageShell>
      <DivisionHero eyebrow="DNS Transportation" title="Moving goods on time." description="Reliable transport solutions." image={img} />
      <section className="container-prose py-20">
        <QuoteForm division="DNS Transportation" />
      </section>
      <DivisionGallery images={GALLERY} title="Our Fleet" />
    </PageShell>
  );
}