"use client";

import { useState } from "react";
import { IconPlus, IconTrash, IconCopy, IconDownload, IconUpload, IconSearch, IconDotsVertical } from "@tabler/icons-react";
import { SEASONS, formatRM } from "@/lib/constants";

const allPkgs = SEASONS.flatMap((s) => s.packages.map((p) => ({ ...p, season: s.name })));

export default function AdminPakejPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const filtered = allPkgs.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.tier.toLowerCase().includes(search.toLowerCase()) ||
    p.season.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (id: string) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };
  const toggleAll = () => {
    setSelected(selected.length === filtered.length ? [] : filtered.map((p) => p.id));
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-xl font-extrabold text-gray-900 dark:text-white">Pakej Umrah</h1>
          <p className="text-xs text-gray-500 mt-0.5">{allPkgs.length} pakej dijumpai</p>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-bold bg-navy text-white rounded-lg hover:bg-navy-800 transition-colors">
            <IconPlus size={14} stroke={1.5} /> Tambah Pakej
          </button>
          <button className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-semibold border border-gray-200 dark:border-navy-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-navy-700 transition-colors">
            <IconUpload size={14} stroke={1.5} /> Import
          </button>
          <button className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-semibold border border-gray-200 dark:border-navy-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-navy-700 transition-colors">
            <IconDownload size={14} stroke={1.5} /> Export
          </button>
        </div>
      </div>

      {/* Search + Bulk actions */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <div className="relative flex-1">
          <IconSearch size={14} stroke={1.5} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Cari pakej..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 text-xs border border-gray-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 focus:border-teal outline-none transition-colors" />
        </div>
        {selected.length > 0 && (
          <div className="flex gap-1.5 items-center">
            <span className="text-[10px] font-bold text-gray-500">{selected.length} dipilih</span>
            <button className="px-2.5 py-2 text-[10px] font-bold text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              <IconTrash size={12} stroke={1.5} />
            </button>
            <button className="px-2.5 py-2 text-[10px] font-bold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <IconCopy size={12} stroke={1.5} />
            </button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-700/50">
                <th className="w-10 px-3 py-3 text-left">
                  <input type="checkbox" className="rounded" checked={selected.length === filtered.length && filtered.length > 0} onChange={toggleAll} />
                </th>
                <th className="px-3 py-3 text-left text-[9px] font-bold tracking-wider uppercase text-gray-500">Pakej</th>
                <th className="px-3 py-3 text-left text-[9px] font-bold tracking-wider uppercase text-gray-500">Musim</th>
                <th className="px-3 py-3 text-left text-[9px] font-bold tracking-wider uppercase text-gray-500">Tier</th>
                <th className="px-3 py-3 text-left text-[9px] font-bold tracking-wider uppercase text-gray-500">Tarikh</th>
                <th className="px-3 py-3 text-right text-[9px] font-bold tracking-wider uppercase text-gray-500">Harga (Quad)</th>
                <th className="px-3 py-3 text-center text-[9px] font-bold tracking-wider uppercase text-gray-500">Tempat</th>
                <th className="px-3 py-3 text-center text-[9px] font-bold tracking-wider uppercase text-gray-500">Status</th>
                <th className="w-10 px-3 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b border-gray-100 dark:border-navy-700 hover:bg-gray-50 dark:hover:bg-navy-700/30 transition-colors">
                  <td className="px-3 py-3">
                    <input type="checkbox" className="rounded" checked={selected.includes(p.id)} onChange={() => toggleSelect(p.id)} />
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 dark:bg-navy-700 flex-shrink-0">
                        <img src={p.img} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 dark:text-gray-200">{p.name}</div>
                        <div className="text-[9px] text-gray-400">{p.airline} · {p.duration}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-gray-600 dark:text-gray-400">{p.season}</td>
                  <td className="px-3 py-3">
                    <span className="inline-block px-2 py-0.5 text-[9px] font-bold text-white rounded" style={{ background: p.tierBg }}>{p.tier}</span>
                  </td>
                  <td className="px-3 py-3 text-gray-600 dark:text-gray-400 whitespace-nowrap">{p.date}</td>
                  <td className="px-3 py-3 text-right font-bold text-gray-800 dark:text-gray-200">{formatRM(p.quad)}</td>
                  <td className="px-3 py-3 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <div className="w-12 h-1.5 bg-gray-200 dark:bg-navy-600 rounded-full overflow-hidden">
                        <div className="h-full bg-teal rounded-full" style={{ width: `${Math.round(((p.totalSeats - p.seats) / p.totalSeats) * 100)}%` }} />
                      </div>
                      <span className="text-[9px] font-bold text-gray-500">{p.seats}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className="inline-block px-2 py-0.5 text-[9px] font-bold rounded-full bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400">Aktif</span>
                  </td>
                  <td className="px-3 py-3">
                    <button className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 dark:hover:bg-navy-700 transition-colors">
                      <IconDotsVertical size={14} stroke={1.5} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
