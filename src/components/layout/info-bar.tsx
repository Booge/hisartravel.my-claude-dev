"use client";

export function InfoBar() {
  const items = [
    "🕋 Mekke 38°C ☀",
    "🕌 Medine 35°C",
    "Subuh 04:52",
    "Zohor 12:18",
    "Asar 15:38",
    "Maghrib 18:42",
    "Isyak 20:12",
    "GMT+3",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="bg-navy-900 text-white/50 text-[10px] font-medium overflow-hidden h-7 flex items-center">
      <div className="flex gap-6 animate-marquee whitespace-nowrap px-4 md:animate-none md:justify-center md:w-full md:gap-8">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-1">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
