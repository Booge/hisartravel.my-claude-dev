"use client";
import { IconStarFilled } from "@tabler/icons-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-navy-900/50">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-[9px] font-extrabold tracking-[3px] uppercase text-teal-700 dark:text-teal-400 mb-1.5">TESTIMONI</div>
        <h2 className="text-lg md:text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          Apa Kata <span className="text-teal-700 dark:text-teal-400">Jemaah Hisar</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-7">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-lg p-4 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-0.5 mb-2.5">
                {Array.from({ length: 5 }).map((_, j) => <IconStarFilled key={j} size={13} className="text-amber-400" />)}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-navy-700">
                  <img src={t.img} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).parentElement!.textContent = t.name[0]; }} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-800 dark:text-gray-200">{t.name}</div>
                  <div className="text-[9px] text-gray-500 dark:text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
