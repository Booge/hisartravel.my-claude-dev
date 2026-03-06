"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome, IconPackage, IconBrandWhatsapp, IconPhone, IconMenu2 } from "@tabler/icons-react";
import { SITE } from "@/lib/constants";

const items = [
  { id: "home", label: "Utama", icon: IconHome, path: "/" },
  { id: "pakej", label: "Pakej", icon: IconPackage, path: "/pakej" },
  { id: "wa", label: "Chat", icon: IconBrandWhatsapp, href: SITE.waLink },
  { id: "tel", label: "Hubungi", icon: IconPhone, href: SITE.phoneTel },
  { id: "tentang", label: "Lagi", icon: IconMenu2, path: "/tentang-kami" },
] as const;

export function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[88] bg-white dark:bg-navy-800 border-t border-gray-200 dark:border-navy-700 md:hidden"
      style={{ paddingBottom: "calc(3px + env(safe-area-inset-bottom, 0px))" }}>
      <div className="flex justify-around py-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = "path" in item && pathname === item.path;
          if ("href" in item) {
            return (
              <a key={item.id} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                className="flex flex-col items-center gap-0.5 px-2 py-1 text-gray-500">
                <Icon size={18} stroke={1.5} /><span className="text-[8px] font-bold">{item.label}</span>
              </a>
            );
          }
          return (
            <Link key={item.id} href={item.path!}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 transition-colors ${isActive ? "text-navy dark:text-teal" : "text-gray-500"}`}>
              <Icon size={18} stroke={1.5} /><span className="text-[8px] font-bold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
