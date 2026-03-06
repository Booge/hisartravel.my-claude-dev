"use client";
import { IconPlus, IconGripVertical, IconPencil, IconTrash } from "@tabler/icons-react";
import { HERO_SLIDES } from "@/lib/constants";

export default function AdminSliderPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="text-xl font-extrabold text-gray-900 dark:text-white">Hero Slider</h1><p className="text-xs text-gray-500 mt-0.5">{HERO_SLIDES.length} slide aktif</p></div>
        <button className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-bold bg-navy text-white rounded-lg"><IconPlus size={14} stroke={1.5} /> Tambah Slide</button>
      </div>
      <div className="space-y-2">
        {HERO_SLIDES.map((s, i) => (
          <div key={i} className="flex items-center gap-3 bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-lg p-3">
            <button className="text-gray-300 dark:text-gray-600 cursor-grab"><IconGripVertical size={16} stroke={1.5} /></button>
            <div className="w-20 h-14 rounded-lg overflow-hidden bg-gray-100 dark:bg-navy-700 flex-shrink-0">
              <img src={s.img} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">{s.title}</div>
              <div className="text-[10px] text-gray-400 truncate">{s.sub}</div>
            </div>
            <div className="flex items-center gap-1">
              <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-green-50 dark:bg-green-950/30 text-green-700">Aktif</span>
              <button className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 dark:hover:bg-navy-700"><IconPencil size={13} stroke={1.5} /></button>
              <button className="w-7 h-7 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30"><IconTrash size={13} stroke={1.5} /></button>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-gray-400 mt-4">Seret untuk menyusun semula. Klik ✏ untuk edit slide.</p>
    </div>
  );
}
