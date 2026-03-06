import { BookOpen, Building2, UtensilsCrossed, Users, Globe, Clock } from "lucide-react";

const items = [
  { icon: BookOpen, title: "Bimbingan Lengkap", desc: "Kursus pra-umrah, tazkirah harian." },
  { icon: Building2, title: "Hotel Dekat Haram", desc: "Jarak berjalan kaki." },
  { icon: UtensilsCrossed, title: "Makan Fullboard", desc: "3x sehari, halal & lazat." },
  { icon: Users, title: "Kumpulan Kecil", desc: "Layanan peribadi." },
  { icon: Globe, title: "35+ Cawangan", desc: "30+ tahun pengalaman." },
  { icon: Clock, title: "Sokongan 24/7", desc: "WA, telefon, di lokasi." },
];

export function WhyHisar() {
  return (
    <section className="py-12 md:py-16 bg-navy-900 text-white">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-[9px] font-extrabold tracking-[3px] uppercase text-teal mb-1.5">KELEBIHAN</div>
        <h2 className="text-lg md:text-2xl font-extrabold">
          Kenapa <span className="text-teal">10,000+ Jemaah</span> Pilih Hisar?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 mt-7">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-4 bg-white/[0.02] border border-white/[0.03] rounded-lg hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 bg-teal/5 border border-teal/6">
                <Icon size={15} className="text-teal" />
              </div>
              <h3 className="text-xs font-bold mb-1">{title}</h3>
              <p className="text-[10.5px] text-white/30 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
