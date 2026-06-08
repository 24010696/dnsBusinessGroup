import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export function GalleryLightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((p) => (p - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors" onClick={onClose}>
        <X className="h-10 w-10" />
      </button>
      
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 bg-black/20 rounded-full" 
        onClick={(e) => { e.stopPropagation(); setIndex((p) => (p - 1 + images.length) % images.length); }}
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      
      <img 
        src={images[index]} 
        alt={`Gallery image ${index + 1}`}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 bg-black/20 rounded-full" 
        onClick={(e) => { e.stopPropagation(); setIndex((p) => (p + 1) % images.length); }}
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}