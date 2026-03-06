"use client";
import { IconPlus, IconGripVertical, IconPencil, IconTrash } from "@tabler/icons-react";
import { FAQ } from "@/lib/constants";

export default function AdminFaqPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="text-xl font-extrabold text-gray-900 dark:text-white">FAQ</h1><p className="text-xs text-gray-500 mt-0.5">{FAQ.length} soalan</p></div>
        <button className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-bold bg-navy text-white rounded-lg"><IconPlus size={14} stroke={1.5} /> Tambah Soalan</button>
      </div>
      <div className="space-y-2">
        {FAQ.map((f, i) => (
          <div key={i} className="flex items-start gap-3 bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-lg p-3">
            <button className="text-gray-300 dark:text-gray-600 cursor-grab mt-1"><IconGripVertical size={16} stroke={1.5} /></button>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-gray-800 dark:text-gray-200">{f.q}</div>
              <div className="text-[10px] text-gray-400 mt-1 line-clamp-2">{f.a}</div>
            </div>
            <div className="flex gap-1 flex-shrink-0">
              <button className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 dark:hover:bg-navy-700"><IconPencil size={13} stroke={1.5} /></button>
              <button className="w-7 h-7 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-50"><IconTrash size={13} stroke={1.5} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
