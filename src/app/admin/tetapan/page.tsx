"use client";
import { IconDeviceFloppy } from "@tabler/icons-react";
import { SITE } from "@/lib/constants";

export default function AdminTetapanPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-extrabold text-gray-900 dark:text-white">Tetapan</h1>
        <p className="text-xs text-gray-500 mt-0.5">Tetapan umum laman web.</p>
      </div>
      <div className="max-w-xl space-y-6">
        {/* Contact */}
        <div className="bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-lg p-4">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Maklumat Hubungan</h2>
          <div className="space-y-2">
            <div><label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Telefon</label>
              <input defaultValue={SITE.phone} className="w-full px-3 py-2 text-xs border border-gray-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 focus:border-teal outline-none" /></div>
            <div><label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">WhatsApp</label>
              <input defaultValue={SITE.wa} className="w-full px-3 py-2 text-xs border border-gray-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 focus:border-teal outline-none" /></div>
            <div><label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Email</label>
              <input defaultValue={SITE.email} className="w-full px-3 py-2 text-xs border border-gray-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 focus:border-teal outline-none" /></div>
            <div><label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Alamat</label>
              <textarea defaultValue={SITE.address} rows={2} className="w-full px-3 py-2 text-xs border border-gray-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 focus:border-teal outline-none resize-none" /></div>
          </div>
        </div>

        {/* Site */}
        <div className="bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-lg p-4">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Tetapan Laman</h2>
          <div className="space-y-2">
            <div><label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Nama Syarikat</label>
              <input defaultValue="Hisar Travel Malaysia" className="w-full px-3 py-2 text-xs border border-gray-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 focus:border-teal outline-none" /></div>
            <div><label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">No. Lesen</label>
              <input defaultValue={SITE.license} className="w-full px-3 py-2 text-xs border border-gray-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 focus:border-teal outline-none" /></div>
            <div><label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Tema Lalai</label>
              <select className="w-full px-3 py-2 text-xs border border-gray-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 focus:border-teal outline-none">
                <option>Light</option><option>Dark</option>
              </select></div>
          </div>
        </div>

        {/* Popup */}
        <div className="bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-lg p-4">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Pop-up Promosi</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600 dark:text-gray-300">Pop-up aktif</span>
              <div className="w-10 h-5 bg-teal rounded-full relative cursor-pointer"><div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow" /></div>
            </div>
            <div><label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Tajuk</label>
              <input defaultValue="Umrah Syawal 2026" className="w-full px-3 py-2 text-xs border border-gray-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 focus:border-teal outline-none" /></div>
            <div><label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Kekerapan</label>
              <select className="w-full px-3 py-2 text-xs border border-gray-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 focus:border-teal outline-none">
                <option>Setiap lawatan</option><option>Sekali sehari</option><option>Sekali seminggu</option>
              </select></div>
          </div>
        </div>

        <button className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold bg-teal text-white rounded-lg hover:bg-teal-600 transition-colors">
          <IconDeviceFloppy size={14} stroke={1.5} /> Simpan Tetapan
        </button>
      </div>
    </div>
  );
}
