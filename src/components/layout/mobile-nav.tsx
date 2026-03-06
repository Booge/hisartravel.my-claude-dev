"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, MessageCircle, Phone, Menu } from "lucide-react";
import { SITE } from "@/lib/constants";

const icons = { Home, Package, MessageCircle, Phone, Menu };

const items = [
  { id: "home", label: "Utama", icon: "Home", path: "/" },
  { id: "pakej", label: "Pakej", icon: "Package", path: "/pakej" },
  { id: "wa", label: "Chat", icon: "MessageCircle", href: SITE.waLink },
  { id: "tel", label: "Hubungi", icon: "Phone", href: SITE.phoneTel },
  { id: "tentang", label: "Lagi", icon: "Menu", path: "/tentang-kami" },
] as const;

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[88] bg-white dark:bg-navy-800 border-t border-gray-100 dark:border-navy-700 md:hidden"
      style={{ paddingBottom: "calc(3px + env(safe-area-inset-bottom, 0px))" }}
    >
      <div className="flex justify-around py-1">
        {items.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          const isActive = "path" in item && pathname === item.path;

          if ("href" in item) {
            return (
              <a key={item.id} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                className="flex flex-col items-center gap-0.5 px-2 py-1 text-gray-400"
              >
                <Icon size={18} />
                <span className="text-[8px] font-bold">{item.label}</span>
              </a>
            );
          }

          return (
            <Link key={item.id} href={item.path!}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 transition-colors ${
                isActive ? "text-navy dark:text-teal" : "text-gray-400"
              }`}
            >
              <Icon size={18} />
              <span className="text-[8px] font-bold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
