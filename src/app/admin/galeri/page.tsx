"use client";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { GALLERY } from "@/lib/constants";

export default function AdminGaleriPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="text-xl font-extrabold text-gray-900 dark:text-white">Galeri</h1><p className="text-xs text-gray-500 mt-0.5">{GALLERY.length} gambar</p></div>
        <button className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-bold bg-navy text-white rounded-lg"><IconPlus size={14} stroke={1.5} /> Muat Naik</button>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
        {GALLERY.map((img, i) => (
          <div key={i} className="relative group aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-navy-700">
            <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = "var(--navy)"; }} />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white"><IconTrash size={14} stroke={1.5} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
