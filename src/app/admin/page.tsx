"use client";

import { IconPackage, IconUsers, IconBrandWhatsapp, IconEye, IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";
import { SEASONS } from "@/lib/constants";

const stats = [
  { label: "Jumlah Pakej", value: SEASONS.flatMap(s => s.packages).length.toString(), icon: IconPackage, change: "+2", up: true, color: "bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400" },
  { label: "Pakej Aktif", value: SEASONS.flatMap(s => s.packages).length.toString(), icon: IconEye, change: "0", up: true, color: "bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-400" },
  { label: "WA Inquiry (bulan ini)", value: "47", icon: IconBrandWhatsapp, change: "+12", up: true, color: "bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400" },
  { label: "Pengunjung (bulan ini)", value: "1,234", icon: IconUsers, change: "+18%", up: true, color: "bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400" },
];

const recentActivity = [
  { action: "Pakej baru ditambah", detail: "Umrah Syawal Gold", time: "2 jam lalu" },
  { action: "Harga dikemaskini", detail: "Akhir Ramadhan Bronze — RM 11,590", time: "5 jam lalu" },
  { action: "Blog baru diterbitkan", detail: "Panduan Lengkap Umrah Pertama", time: "1 hari lalu" },
  { action: "Slider ditambah", detail: "Promosi Syawal 2026", time: "2 hari lalu" },
  { action: "FAQ dikemaskini", detail: "2 soalan baru", time: "3 hari lalu" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-extrabold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Selamat datang ke panel pentadbiran Hisar Travel.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${s.color}`}>
                <s.icon size={16} stroke={1.5} />
              </div>
              <div className={`flex items-center gap-0.5 text-[10px] font-bold ${s.up ? "text-green-600" : "text-red-500"}`}>
                {s.up ? <IconArrowUpRight size={12} /> : <IconArrowDownRight size={12} />}
                {s.change}
              </div>
            </div>
            <div className="text-xl font-extrabold text-gray-900 dark:text-white">{s.value}</div>
            <div className="text-[10px] font-medium text-gray-500 dark:text-gray-400 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Recent activity + Quick actions */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Activity */}
        <div className="bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-lg p-4">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Aktiviti Terkini</h2>
          <div className="space-y-3">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-100 dark:border-navy-700 last:border-0 last:pb-0">
                <div className="w-2 h-2 rounded-full bg-teal mt-1.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">{a.action}</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 truncate">{a.detail}</div>
                </div>
                <div className="text-[9px] text-gray-400 flex-shrink-0">{a.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-lg p-4">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Tindakan Pantas</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Tambah Pakej", href: "/admin/pakej", icon: IconPackage, color: "bg-blue-50 dark:bg-blue-950/30 text-blue-700" },
              { label: "Tambah Slider", href: "/admin/slider", icon: IconEye, color: "bg-teal-50 dark:bg-teal-950/30 text-teal-700" },
              { label: "Tulis Blog", href: "/admin/blog", icon: IconBrandWhatsapp, color: "bg-green-50 dark:bg-green-950/30 text-green-700" },
              { label: "Tetapan", href: "/admin/tetapan", icon: IconUsers, color: "bg-amber-50 dark:bg-amber-950/30 text-amber-700" },
            ].map((a) => (
              <a key={a.label} href={a.href}
                className="flex items-center gap-2.5 p-3 rounded-lg border border-gray-200 dark:border-navy-700 hover:bg-gray-50 dark:hover:bg-navy-700 transition-colors">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${a.color}`}>
                  <a.icon size={14} stroke={1.5} />
                </div>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{a.label}</span>
              </a>
            ))}
          </div>

          {/* Seat summary */}
          <div className="mt-4 p-3 bg-gray-50 dark:bg-navy-700/50 rounded-lg">
            <h3 className="text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-2">Tempat Tersedia</h3>
            {SEASONS.map((s) => (
              <div key={s.name} className="mb-2 last:mb-0">
                <div className="text-[10px] font-semibold text-gray-600 dark:text-gray-300 mb-1">{s.name}</div>
                {s.packages.map((p) => {
                  const pct = Math.round(((p.totalSeats - p.seats) / p.totalSeats) * 100);
                  return (
                    <div key={p.id} className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] text-gray-500 w-14 truncate">{p.tier}</span>
                      <div className="flex-1 h-1.5 bg-gray-200 dark:bg-navy-600 rounded-full overflow-hidden">
                        <div className="h-full bg-teal rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-[9px] font-bold text-gray-500">{p.seats}/{p.totalSeats}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
