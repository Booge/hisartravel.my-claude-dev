"use client";
import { Shield, Check } from "lucide-react";
import { SERVICES, MUTAWWIF } from "@/lib/constants";
import { CtaSection } from "@/components/sections/cta-section";

export default function TentangPage() {
  return (
    <>
      <div className="py-7 md:py-10 bg-navy text-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-[10px] text-white/30 mb-2"><a href="/" className="hover:text-teal">Utama</a> › Tentang Kami</div>
          <h1 className="text-xl md:text-3xl font-extrabold">Tentang <span className="text-teal">Hisar Travel</span></h1>
        </div>
      </div>
      <section className="py-8 bg-white dark:bg-navy-900">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <div>
              <h2 className="text-base font-extrabold text-gray-900 dark:text-white mb-3">Hisar Travel Malaysia</h2>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">Hisar Travel Malaysia ialah agensi pelancongan Umrah & ziarah Islamik berlesen yang berpusat di Shah Alam, Selangor. Kami berdiri dengan satu misi: melayani para tetamu Allah dengan sepenuh hati.</p>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">Dengan sokongan rangkaian Hisar antarabangsa dan pengalaman ribuan jemaah, kami memberi bimbingan lengkap — daripada kursus pra-umrah hingga jemaah pulang ke tanah air.</p>
              <p className="text-xs text-gray-400 leading-relaxed">Mutawwif kami terlatih, mesra dan berpengalaman memimpin jemaah mengikut sunnah Rasulullah ﷺ.</p>
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-bold text-teal-600 bg-teal-50 dark:bg-teal-950/20 border border-teal/10">
                <Shield size={12} /> KPK/LN:9782
              </div>
            </div>
            <div className="rounded-lg overflow-hidden h-[200px] md:h-[280px] bg-gray-100 dark:bg-navy-800">
              <img src="https://hisartravel.my/wp-content/uploads/2025/11/slice1_2.webp" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <h2 className="text-base font-extrabold text-gray-900 dark:text-white mt-12 mb-4">Perkhidmatan</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {SERVICES.map((s) => (
              <div key={s} className="bg-gray-50 dark:bg-navy-800 rounded-lg p-3.5 text-center">
                <div className="w-8 h-8 mx-auto mb-2 rounded-lg flex items-center justify-center bg-teal-50 dark:bg-teal-950/20 text-teal-600">
                  <Check size={14} />
                </div>
                <span className="text-[10.5px] font-semibold text-gray-600 dark:text-gray-300">{s}</span>
              </div>
            ))}
          </div>

          <h2 className="text-base font-extrabold text-gray-900 dark:text-white mt-12 mb-4">Mutawwif Anda</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {MUTAWWIF.map((m) => (
              <div key={m.name} className="rounded-lg overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                <p className="text-[10px] font-semibold text-gray-600 dark:text-gray-300 text-center py-1.5">{m.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
