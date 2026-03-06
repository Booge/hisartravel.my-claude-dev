"use client";
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { FAQ } from "@/lib/constants";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-navy-900">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-[9px] font-extrabold tracking-[3px] uppercase text-teal-700 dark:text-teal-400 mb-1.5">SOALAN LAZIM</div>
        <h2 className="text-lg md:text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          Soalan <span className="text-teal-700 dark:text-teal-400">Yang Sering Ditanya</span>
        </h2>
        <div className="mt-7 max-w-2xl">
          {FAQ.map((f, i) => (
            <div key={i} className={`border rounded-lg mb-1.5 overflow-hidden transition-colors ${openIdx === i ? "border-teal/40" : "border-gray-200 dark:border-navy-700"}`}>
              <button onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                className="w-full px-4 py-3.5 flex items-center justify-between text-left text-[13px] font-semibold text-gray-800 dark:text-gray-200">
                {f.q}
                <IconChevronDown size={16} stroke={1.5} className={`text-gray-400 transition-transform flex-shrink-0 ml-2 ${openIdx === i ? "rotate-180 text-teal" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIdx === i ? "max-h-40" : "max-h-0"}`}>
                <p className="px-4 pb-3.5 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
