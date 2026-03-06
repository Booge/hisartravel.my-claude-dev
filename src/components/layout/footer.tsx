"use client";
import Link from "next/link";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { SITE, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#0a111d] text-white/30 pt-10 pb-4">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-8 border-b border-white/3">
          <div className="col-span-2 md:col-span-1">
            <div className="font-extrabold text-white text-sm leading-tight">
              Hisar Travel
              <span className="block text-[8px] font-medium tracking-[2px] uppercase text-white/25">Malaysia</span>
            </div>
            <p className="text-[11px] leading-relaxed mt-3 max-w-[240px]">{SITE.slogan}</p>
            <div className="mt-3 inline-block px-2.5 py-1 text-[8px] font-bold tracking-wider text-teal bg-teal/3 border border-teal/5 rounded">
              {SITE.license}
            </div>
          </div>

          <div>
            <h4 className="text-[9px] font-extrabold tracking-[2px] uppercase text-white/45 mb-4">Pautan</h4>
            <ul className="space-y-1.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link href={item.path} className="text-[11px] hover:text-teal transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] font-extrabold tracking-[2px] uppercase text-white/45 mb-4">Perkhidmatan</h4>
            <ul className="space-y-1.5 text-[11px]">
              {["Umrah Biasa", "Umrah Plus Turki", "Badal Haji", "Kursus Umrah"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] font-extrabold tracking-[2px] uppercase text-white/45 mb-4">Hubungi</h4>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center gap-2"><Phone size={11} className="text-teal-600" /> {SITE.phone}</div>
              <div className="flex items-center gap-2"><MessageCircle size={11} className="text-teal-600" /> {SITE.wa}</div>
              <div className="flex items-center gap-2"><Mail size={11} className="text-teal-600" /> {SITE.email}</div>
            </div>
          </div>
        </div>
        <div className="text-center text-[9px] text-white/8 py-4">
          © 2026 Hisar Travel Malaysia. Hak Cipta Terpelihara.
        </div>
      </div>
    </footer>
  );
}
