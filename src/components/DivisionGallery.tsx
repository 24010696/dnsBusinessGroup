import { useState } from "react";

interface DivisionGalleryProps {
  images: { src: string; alt: string }[];
  title?: string;
}

export function DivisionGallery({ images, title = "Our Work" }: DivisionGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section className="container-prose py-16">
        {title && (
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            {title}
          </h3>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-card shadow-soft cursor-pointer"
              onClick={() => setLightboxIndex(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={() => setLightboxIndex(null)}
          >
            ✕
          </button>
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
