"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconLayoutDashboard, IconPackage, IconPhoto, IconSlideshow,
  IconSettings, IconLogout, IconMenu2,
  IconArticle, IconQuestionMark, IconChevronRight
} from "@tabler/icons-react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: IconLayoutDashboard },
  { label: "Hero Slider", href: "/admin/slider", icon: IconSlideshow },
  { label: "Pakej Umrah", href: "/admin/pakej", icon: IconPackage },
  { label: "Blog", href: "/admin/blog", icon: IconArticle },
  { label: "Galeri", href: "/admin/galeri", icon: IconPhoto },
  { label: "FAQ", href: "/admin/faq", icon: IconQuestionMark },
  { label: "Tetapan", href: "/admin/tetapan", icon: IconSettings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-900">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-50 h-full w-[240px] bg-white dark:bg-navy-800 border-r border-gray-200 dark:border-navy-700 transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-4 border-b border-gray-200 dark:border-navy-700">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-xs">H</span>
            </div>
            <div>
              <div className="font-extrabold text-sm text-gray-900 dark:text-white leading-tight">Hisar Admin</div>
              <div className="text-[8px] font-medium tracking-[1.5px] uppercase text-gray-400">Panel</div>
            </div>
          </Link>
        </div>

        <nav className="p-3 space-y-0.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href} onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[12.5px] font-medium transition-all ${
                  isActive
                    ? "bg-navy text-white"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-navy-700"
                }`}>
                <item.icon size={16} stroke={1.5} />
                {item.label}
                {isActive && <IconChevronRight size={12} className="ml-auto" />}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-200 dark:border-navy-700">
          <Link href="/" target="_blank" className="flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-navy-700 transition-colors">
            <IconLogout size={14} stroke={1.5} />
            Kembali ke Laman Web
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:ml-[240px]">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-navy-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-navy-700 px-4 h-14 flex items-center justify-between">
          <button className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-700"
            onClick={() => setSidebarOpen(true)}>
            <IconMenu2 size={18} stroke={1.5} />
          </button>
          <div className="text-sm font-bold text-gray-800 dark:text-gray-200 hidden lg:block">
            {navItems.find((n) => pathname === n.href || (n.href !== "/admin" && pathname.startsWith(n.href)))?.label || "Admin"}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
