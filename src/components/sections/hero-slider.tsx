"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { IconPackage, IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import { HERO_SLIDES, SITE } from "@/lib/constants";

export function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [countersStarted, setCountersStarted] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const targets = [35, 10, 30];
  const suffixes = ["+", "K+", "+"];
  const labels = ["Cawangan", "Jemaah", "Tahun"];

  const goSlide = useCallback((i: number) => {
    setIdx(i);
    const title = HERO_SLIDES[i].title;
    let charIdx = 0;
    setDisplayText("");
    const typeInterval = setInterval(() => {
      charIdx += 2;
      if (charIdx >= title.length) { setDisplayText(title); clearInterval(typeInterval); }
      else { setDisplayText(title.substring(0, charIdx)); }
    }, 25);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => goSlide((i + 1) % HERO_SLIDES.length), 5000);
  }, []);

  useEffect(() => { goSlide(0); return () => { if (timerRef.current) clearTimeout(timerRef.current); }; }, [goSlide]);

  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !countersStarted) {
        setCountersStarted(true);
        targets.forEach((target, ti) => {
          let cur = 0;
          const step = Math.ceil(target / 25);
          const interval = setInterval(() => {
            cur += step;
            if (cur >= target) { cur = target; clearInterval(interval); }
            setCounts((prev) => { const n = [...prev]; n[ti] = cur; return n; });
          }, 50);
        });
      }
    }, { threshold: 0.3 });
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countersStarted]);

  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}>
            <img src={slide.img} alt="" className={`w-full h-full object-cover opacity-25 ${i === idx ? "animate-ken-burns" : ""}`}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy/50 to-navy-900/85" />

      <div className="relative z-10 max-w-[1140px] mx-auto px-4 py-12 md:py-20 lg:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-[9px] font-bold tracking-wider uppercase text-teal-300 rounded bg-teal/8 border border-teal/15">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-dot" />
            Umrah 1448H / 2026
          </div>
          <h1 className="text-[26px] md:text-[44px] font-extrabold text-white leading-[1.08] tracking-tight min-h-[2.2em] md:min-h-[1.2em]">
            {displayText}<span className="type-cursor" />
          </h1>
          <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-md mt-3 mb-6">{HERO_SLIDES[idx].sub}</p>
          <div className="flex flex-col sm:flex-row gap-2 mb-10">
            <Link href="/pakej" className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[13px] font-bold bg-teal text-white rounded-lg hover:bg-teal-600 transition-all">
              <IconPackage size={16} stroke={1.5} /> Lihat Pakej
            </Link>
            <a href={SITE.waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[13px] font-bold bg-[#25D366] text-white rounded-lg transition-all">
              <IconBrandWhatsapp size={16} stroke={1.5} /> WhatsApp
            </a>
            <a href={SITE.phoneTel} className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-3 text-[13px] font-bold border border-white/20 text-white/70 rounded-lg transition-all hover:text-white hover:border-white/35">
              <IconPhone size={16} stroke={1.5} /> Hubungi
            </a>
          </div>
          <div ref={statsRef} className="flex gap-8 md:gap-12">
            {targets.map((_, i) => (
              <div key={i}>
                <div className="text-[22px] md:text-[30px] font-extrabold text-white tracking-tight leading-none">
                  {counts[i]}<span className="text-teal">{suffixes[i]}</span>
                </div>
                <div className="text-[8px] font-semibold tracking-[2px] uppercase text-white/30 mt-1">{labels[i]}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-1 mt-6">
            {HERO_SLIDES.map((_, i) => (
              <button key={i} onClick={() => goSlide(i)} className="h-[3px] rounded-full overflow-hidden max-w-[50px] flex-1 bg-white/10 cursor-pointer">
                <div className={`h-full bg-teal rounded-full`} style={{ width: i < idx ? "100%" : i === idx ? "0%" : "0%", animation: i === idx ? "progFill 5s linear forwards" : "none" }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
