"use client";
import { IconChevronRight } from "@tabler/icons-react";
import { BLOGS } from "@/lib/constants";

export default function BlogPage() {
  return (
    <>
      <div className="py-7 md:py-10 bg-navy text-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-[10px] text-white/30 mb-2"><a href="/" className="hover:text-teal">Utama</a> › Blog</div>
          <h1 className="text-xl md:text-3xl font-extrabold">Blog & <span className="text-teal">Artikel</span></h1>
        </div>
      </div>
      <section className="py-8 bg-white dark:bg-navy-900">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {BLOGS.map((b, i) => (
              <div key={i} className="border border-gray-100 dark:border-navy-700 rounded-lg overflow-hidden bg-white dark:bg-navy-800 hover:-translate-y-0.5 hover:shadow-lg transition-all">
                <div className="h-[140px] overflow-hidden bg-gray-100"><img src={b.img} alt="" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="p-3">
                  <div className="text-[8px] font-bold tracking-wider uppercase text-teal-600 mb-1">{b.category}</div>
                  <h3 className="text-[13px] font-bold text-gray-800 dark:text-gray-100 mb-1">{b.title}</h3>
                  <p className="text-[10.5px] text-gray-400 leading-relaxed">{b.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-teal-600 mt-2">
                    Baca Lagi <IconChevronRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
