"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, MessageCircle } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  useEffect(() => { setDrawerOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-navy transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/10" : ""
        }`}
      >
        <div className="max-w-[1140px] mx-auto px-4 flex items-center justify-between h-14 md:h-[58px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://hisartravel.my/wp-content/uploads/2024/07/Hisar-Website-270.png"
              alt="Hisar Travel"
              className="h-8 rounded-md"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div className="text-white">
              <div className="font-extrabold text-[13px] leading-tight tracking-tight">
                Hisar Travel
              </div>
              <div className="text-[8px] font-medium tracking-[2px] uppercase text-white/35">
                Malaysia
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className={`text-[12px] font-medium px-3 py-1.5 rounded-md transition-all ${
                  pathname === item.path
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-1.5">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            )}

            {/* Language */}
            <div className="hidden sm:flex border border-white/8 rounded overflow-hidden">
              <button className="px-2 py-1 text-[9px] font-bold bg-teal text-white">MY</button>
              <button className="px-2 py-1 text-[9px] font-bold text-white/25">EN</button>
            </div>

            {/* CTA */}
            <a
              href={SITE.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-bold bg-teal text-white rounded-md transition-all hover:bg-teal-600"
            >
              <MessageCircle size={12} />
              Daftar
            </a>

            {/* Mobile menu */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center text-white"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              {drawerOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="fixed top-0 right-0 w-[280px] h-full z-[56] bg-navy-800 p-5 overflow-y-auto md:hidden animate-slide-up">
            <div className="flex justify-between items-center mb-6">
              <div className="text-white font-extrabold text-sm">
                Hisar Travel
                <span className="block text-[8px] font-medium tracking-[2px] uppercase text-white/30">
                  Malaysia
                </span>
              </div>
              <button onClick={() => setDrawerOpen(false)} className="text-white">
                <X size={20} />
              </button>
            </div>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className={`block py-3 text-sm font-medium border-b border-white/3 ${
                  pathname === item.path ? "text-teal" : "text-white/40"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center py-3 text-sm font-bold bg-teal text-white rounded-lg"
            >
              Daftar Sekarang
            </a>
          </div>
        </>
      )}
    </>
  );
}
