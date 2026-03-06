"use client";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/lib/constants";

export default function GaleriPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="py-7 md:py-10 bg-navy text-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-[10px] text-white/30 mb-2"><a href="/" className="hover:text-teal">Utama</a> › Galeri</div>
          <h1 className="text-xl md:text-3xl font-extrabold">Galeri <span className="text-teal">Jemaah Hisar</span></h1>
        </div>
      </div>
      <section className="py-8 bg-white dark:bg-navy-900">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 md:gap-2.5">
            {GALLERY.map((img, i) => (
              <button key={i} onClick={() => setLightbox(i)}
                className="rounded-lg overflow-hidden aspect-square bg-gray-100 dark:bg-navy-800 relative group">
                <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4">
          <button onClick={() => setLightbox(null)} className="absolute top-3 right-3 w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white"><X size={18} /></button>
          <button onClick={() => setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white"><ChevronLeft size={20} /></button>
          <img src={GALLERY[lightbox]} alt="" className="max-w-full max-h-[85vh] object-contain rounded-lg" />
          <button onClick={() => setLightbox((lightbox + 1) % GALLERY.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white"><ChevronRight size={20} /></button>
        </div>
      )}
    </>
  );
}
