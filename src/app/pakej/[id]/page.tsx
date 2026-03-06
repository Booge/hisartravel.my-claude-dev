"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { IconChevronDown, IconCheck, IconPlaneDeparture, IconBed, IconStarFilled, IconBrandWhatsapp } from "@tabler/icons-react";
import { ALL_PACKAGES, formatRM, SITE } from "@/lib/constants";
import { useState } from "react";

export default function PakejDetailPage() {
  const { id } = useParams();
  const pkg = ALL_PACKAGES.find((p) => p.id === id);
  const [openItin, setOpenItin] = useState(0);

  if (!pkg) return <div className="py-20 text-center text-gray-400">Pakej tidak dijumpai.</div>;

  const waMsg = encodeURIComponent(
    `Assalamualaikum, saya berminat dengan ${pkg.name} (${pkg.tier}).\nTarikh: ${pkg.date}\nHarga bermula: ${formatRM(pkg.quad)}`
  );

  return (
    <>
      {/* Hero */}
      <div className="relative h-[220px] md:h-[320px] overflow-hidden bg-navy-900">
        <img src={pkg.img} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
          <div className="inline-block px-2.5 py-1 text-[8px] font-extrabold tracking-wider uppercase rounded mb-2" style={{ background: pkg.tierBg }}>
            {pkg.tier}
          </div>
          <h1 className="text-xl md:text-3xl font-extrabold">{pkg.name}</h1>
          <p className="text-xs text-white/50 mt-1">{pkg.airline} · {pkg.date} · {pkg.duration}</p>
        </div>
      </div>

      <div className="max-w-[720px] mx-auto px-4 py-6 pb-24">
        {/* Breadcrumb */}
        <div className="text-[10px] text-gray-400 mb-6">
          <Link href="/" className="hover:text-teal">Utama</Link> › <Link href="/pakej" className="hover:text-teal">Pakej</Link> › {pkg.name} ({pkg.tier})
        </div>

        {/* Price table */}
        <div className="mb-8">
          <h2 className="text-sm font-extrabold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
            <IconPlaneDeparture size={16} className="text-teal" /> Maklumat Pakej
          </h2>
          <table className="w-full text-xs">
            <thead><tr className="border-b-2 border-gray-100 dark:border-navy-700"><th className="text-left py-2 text-[9px] font-bold tracking-wider uppercase text-gray-400">Bilik</th><th className="text-right py-2 text-[9px] font-bold tracking-wider uppercase text-gray-400">Harga</th></tr></thead>
            <tbody>
              {[["Quad (4 orang)", pkg.quad], ["Triple (3 orang)", pkg.triple], ["Double (2 orang)", pkg.double]].map(([label, price]) => (
                <tr key={label as string} className="border-b border-gray-50 dark:border-navy-700">
                  <td className="py-2.5 font-medium text-gray-700 dark:text-gray-300">{label as string}</td>
                  <td className="py-2.5 text-right font-bold text-navy dark:text-teal">{formatRM(price as number)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Hotels */}
        <div className="mb-8">
          <h2 className="text-sm font-extrabold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
            <IconBed size={16} className="text-teal" /> Penginapan
          </h2>
          {pkg.hotels.map((h) => (
            <div key={h.name} className="p-3 bg-gray-50 dark:bg-navy-800 rounded-lg mb-2">
              <div className="font-bold text-xs text-gray-800 dark:text-gray-200">{h.name}</div>
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: h.stars }).map((_, i) => <IconStarFilled key={i} size={10} className="fill-amber-400 text-amber-400" />)}
                <span className="text-[10px] text-gray-400 ml-2">Jarak: {h.distance}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Itinerary */}
        <div className="mb-8">
          <h2 className="text-sm font-extrabold text-gray-800 dark:text-white mb-3">📅 Itinerary</h2>
          {pkg.itinerary.map((day, i) => (
            <div key={i} className={`border rounded-lg mb-1.5 overflow-hidden transition-colors ${openItin === i ? "border-teal/30" : "border-gray-100 dark:border-navy-700"}`}>
              <button onClick={() => setOpenItin(openItin === i ? -1 : i)}
                className="w-full px-3 py-3 flex items-center justify-between text-left text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-navy-800">
                {day.split(":")[0]}
                <IconChevronDown size={14} className={`transition-transform ${openItin === i ? "rotate-180 text-teal" : "text-gray-400"}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openItin === i ? "max-h-40" : "max-h-0"}`}>
                <p className="px-3 pb-3 text-[11px] text-gray-400 leading-relaxed">{day}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Includes */}
        <div className="mb-8">
          <h2 className="text-sm font-extrabold text-gray-800 dark:text-white mb-3">✅ Termasuk</h2>
          <div className="grid grid-cols-2 gap-1">
            {pkg.includes.map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-[11px] text-gray-600 dark:text-gray-400 py-1.5">
                <IconCheck size={14} className="text-teal flex-shrink-0" /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-navy-800 border-t border-gray-100 dark:border-navy-700 px-4 py-3 flex items-center justify-between md:max-w-[720px] md:mx-auto md:left-1/2 md:-translate-x-1/2 md:rounded-t-xl md:border">
        <div>
          <div className="text-lg font-extrabold text-navy dark:text-teal">
            <small className="text-xs font-medium text-gray-400">RM </small>{pkg.quad.toLocaleString()}
          </div>
          <div className="text-[9px] text-gray-400">bermula / seorang</div>
        </div>
        <div className="flex gap-2">
          <a href={`${SITE.waLink}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold bg-teal text-white rounded-lg">
            <IconBrandWhatsapp size={14} /> Saya Berminat
          </a>
        </div>
      </div>
    </>
  );
}
