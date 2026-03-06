import { IconPlaneDeparture, IconHeadphones, IconShieldCheck, IconGift } from "@tabler/icons-react";

const feats = [
  { icon: IconPlaneDeparture, title: "Penerbangan Terbaik", desc: "SAUDIA, Malaysia Airlines, Oman Air — standard antarabangsa.", bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-700 dark:text-blue-400" },
  { icon: IconHeadphones, title: "Mutawwif Hafiz", desc: "Berpengalaman, hafiz Al-Quran, bimbingan profesional.", bg: "bg-teal-50 dark:bg-teal-950/30", color: "text-teal-700 dark:text-teal-400" },
  { icon: IconShieldCheck, title: "Pasti Berangkat", desc: "Jaminan 100%, tiada pembatalan.", bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-700 dark:text-blue-400" },
  { icon: IconGift, title: "Bonus Eksklusif", desc: "Beg, telekung, ziarah tambahan.", bg: "bg-amber-50 dark:bg-amber-950/30", color: "text-amber-700 dark:text-amber-400" },
];

export function Features() {
  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-navy-900/50">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-[9px] font-extrabold tracking-[3px] uppercase text-teal-700 dark:text-teal-400 mb-1.5">KENAPA HISAR</div>
        <h2 className="text-lg md:text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          Kenapa Perlu Bersama <span className="text-teal-700 dark:text-teal-400">Hisar Travel?</span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mt-7">
          {feats.map(({ icon: Icon, title, desc, bg, color }) => (
            <div key={title} className="bg-white dark:bg-navy-800 rounded-lg p-4 border border-gray-200 dark:border-navy-700 hover:border-teal/30 hover:-translate-y-0.5 transition-all duration-300">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${bg}`}>
                <Icon size={18} stroke={1.5} className={color} />
              </div>
              <h3 className="text-xs font-bold text-gray-800 dark:text-gray-100 mb-1">{title}</h3>
              <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
