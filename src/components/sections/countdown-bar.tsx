"use client";
import { useState, useEffect } from "react";

export function CountdownBar() {
  const [diff, setDiff] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const target = new Date("2026-03-09T00:00:00+08:00").getTime();

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      const ms = target - now;
      if (ms <= 0) return;
      setDiff({
        d: Math.floor(ms / 864e5),
        h: Math.floor((ms % 864e5) / 36e5),
        m: Math.floor((ms % 36e5) / 6e4),
        s: Math.floor((ms % 6e4) / 1e3),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="bg-gradient-to-r from-navy to-navy-800 py-4 text-center text-white">
      <div className="max-w-[1140px] mx-auto px-4">
        <h3 className="text-xs font-semibold text-white/50 mb-2">⏳ Umrah Akhir Ramadhan — Masa Terhad!</h3>
        <div className="flex gap-2 justify-center">
          {[["d", "Hari"], ["h", "Jam"], ["m", "Minit"], ["s", "Saat"]].map(([key, label]) => (
            <div key={key} className="bg-white/5 border border-white/5 rounded-lg px-3 py-2 min-w-[52px]">
              <div className="text-xl font-extrabold">{diff[key as keyof typeof diff]}</div>
              <div className="text-[7px] font-semibold tracking-wider uppercase text-white/30">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
