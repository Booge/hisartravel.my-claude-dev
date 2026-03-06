import { IconBrandWhatsapp } from "@tabler/icons-react";
import { SITE } from "@/lib/constants";

export function FloatingWA() {
  return (
    <a href={SITE.waLink} target="_blank" rel="noopener noreferrer"
      className="fixed z-40 bottom-[72px] md:bottom-5 right-3 md:right-5 w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25 hover:scale-110 active:scale-95 transition-transform"
      aria-label="WhatsApp">
      <IconBrandWhatsapp size={24} stroke={1.5} className="text-white" />
    </a>
  );
}
