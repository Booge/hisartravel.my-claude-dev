"use client";
import Link from "next/link";
import { IconPlaneDeparture, IconBed, IconBrandWhatsapp, IconStarFilled } from "@tabler/icons-react";
import { type PackageData, formatRM, SITE } from "@/lib/constants";

export function PackageCard({ pkg }: { pkg: PackageData }) {
  const seatPct = Math.round(((pkg.totalSeats - pkg.seats) / pkg.totalSeats) * 100);
  const waMsg = encodeURIComponent(
    `Assalamualaikum, saya berminat dengan ${pkg.name} (${pkg.tier}).\nTarikh: ${pkg.date}\nHarga bermula: ${formatRM(pkg.quad)}`
  );

  return (
    <div className="border border-gray-200 dark:border-navy-700 rounded-lg overflow-hidden bg-white dark:bg-navy-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-[150px] md:h-[170px] overflow-hidden bg-navy">
        <img src={pkg.img} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
        <div className="absolute top-0 left-0 z-10 px-2.5 py-1 text-[8.5px] font-extrabold tracking-wider uppercase text-white" style={{ background: pkg.tierBg }}>{pkg.tier}</div>
        <div className="absolute top-2 right-2 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded min-w-[76px]">
          <div className="text-[8px] font-bold text-navy">{pkg.seats}/{pkg.totalSeats} tempat</div>
          <div className="h-[3px] bg-gray-200 rounded-full mt-1 overflow-hidden">
            <div className="h-full bg-teal rounded-full transition-all duration-1000" style={{ width: `${seatPct}%` }} />
          </div>
        </div>
        <div className="absolute bottom-2 left-2.5 z-10 text-white">
          <div className="text-xs font-bold">{pkg.date}</div>
          <div className="text-[9px] text-white/60">{pkg.duration}</div>
        </div>
      </div>
      <div className="p-3">
        <Link href={`/pakej/${pkg.id}`}>
          <h3 className="text-[13px] font-bold text-gray-800 dark:text-gray-100 mb-0.5 hover:text-teal-700 dark:hover:text-teal transition-colors cursor-pointer">{pkg.name}</h3>
        </Link>
        <div className="flex items-center gap-1 text-[10px] text-gray-500 dark:text-gray-400 mb-2.5">
          <IconPlaneDeparture size={12} stroke={1.5} className="text-navy dark:text-teal" /> {pkg.airline} · Fullboard
        </div>
        <div className="mb-2.5 pb-2.5 border-b border-gray-100 dark:border-navy-700">
          {pkg.hotels.map((h) => (
            <div key={h.name} className="flex items-center gap-1 text-[10px] text-gray-600 dark:text-gray-300 mb-1">
              <IconBed size={12} stroke={1.5} className="text-teal-700 dark:text-teal flex-shrink-0" />
              <span className="truncate">{h.name}</span>
              <span className="flex gap-px ml-1">{Array.from({ length: h.stars }).map((_, i) => <IconStarFilled key={i} size={8} className="text-amber-400" />)}</span>
              <span className="ml-auto text-[9px] text-gray-400 dark:text-gray-500 flex-shrink-0">{h.distance}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1 mb-2.5">
          {([["Quad", pkg.quad], ["Triple", pkg.triple], ["Double", pkg.double]] as const).map(([label, price]) => (
            <div key={label} className="text-center py-1.5 bg-gray-50 dark:bg-navy-700/50 rounded">
              <div className="text-[7.5px] font-bold tracking-wider uppercase text-gray-400">{label}</div>
              <div className="text-[11px] font-extrabold text-navy dark:text-teal mt-0.5">{formatRM(price)}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-1">
            <a href={`${SITE.waLink}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[10px] font-bold bg-teal text-white rounded-md hover:bg-teal-600 transition-colors">
              Saya Berminat
            </a>
            <a href={`${SITE.waLink}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-2 py-1.5 text-[10px] font-bold bg-[#25D366] text-white rounded-md">
              <IconBrandWhatsapp size={13} stroke={1.5} />
            </a>
          </div>
          <div className="text-right">
            <div className="text-[7px] font-bold tracking-wider uppercase text-gray-500">Bermula</div>
            <div className="text-[15px] font-extrabold text-navy dark:text-teal tracking-tight leading-none">
              <small className="text-[9px] font-medium">RM </small>{pkg.quad.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
