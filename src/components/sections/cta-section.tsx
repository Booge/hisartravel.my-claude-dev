"use client";
import { MessageCircle, Phone } from "lucide-react";
import { SITE, IMG_BASE } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-navy-900 text-center text-white">
      <div className="absolute inset-0 opacity-5">
        <img src={IMG_BASE + "2026/02/slider9.webp"} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 max-w-[1140px] mx-auto px-4">
        <h2 className="text-lg md:text-2xl font-extrabold mb-2">Bersedia Menunaikan Umrah?</h2>
        <p className="text-xs text-white/35 max-w-sm mx-auto mb-6 leading-relaxed">Hubungi kami untuk konsultasi percuma.</p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <a href={SITE.waLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[13px] font-bold bg-[#25D366] text-white rounded-lg transition-all">
            <MessageCircle size={16} /> WhatsApp Sekarang
          </a>
          <a href={SITE.phoneTel}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[13px] font-bold border border-white/12 text-white/55 rounded-lg transition-all hover:text-white">
            <Phone size={16} /> Hubungi
          </a>
        </div>
      </div>
    </section>
  );
}
