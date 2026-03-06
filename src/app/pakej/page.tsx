"use client";
import { useState } from "react";
import { IconCalendar } from "@tabler/icons-react";
import { SEASONS } from "@/lib/constants";
import { PackageCard } from "@/components/ui/package-card";

const filters = ["Semua", "Ramadhan", "Syawal", "Muharram"];

export default function PakejPage() {
  const [filter, setFilter] = useState("Semua");
  const filtered = filter === "Semua" ? SEASONS : SEASONS.filter((s) => s.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <div className="py-7 md:py-10 bg-navy text-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-[10px] text-white/30 mb-2">
            <a href="/" className="hover:text-teal">Utama</a> › Pakej Umrah
          </div>
          <h1 className="text-xl md:text-3xl font-extrabold">
            Pakej Umrah <span className="text-teal">2026</span>
          </h1>
          <p className="text-xs text-white/35 mt-1">Pilih pakej yang sesuai untuk anda dan keluarga.</p>
        </div>
      </div>
      <section className="py-8 bg-gray-50 dark:bg-navy-900">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto pb-2 mb-6">
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-2 text-[11px] font-semibold whitespace-nowrap rounded-md transition-all ${
                  filter === f ? "bg-navy text-white" : "bg-white dark:bg-navy-800 text-gray-400 border border-gray-100 dark:border-navy-700"
                }`}>
                {f}
              </button>
            ))}
          </div>
          {filtered.map((season) => (
            <div key={season.name} className="mb-10">
              <h3 className="text-sm font-extrabold text-navy dark:text-teal mb-4 pb-2 inline-flex items-center gap-1.5 border-b-2 border-teal">
                <IconCalendar size={14} stroke={1.5} className="text-teal" />
                {season.name} · {season.date}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {season.packages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
