import { Shield, Users, Plane, Globe, Check } from "lucide-react";

const items = [
  { icon: Shield, text: "Berlesen MOTAC" },
  { icon: Users, text: "Ahli PAPUH" },
  { icon: Plane, text: "Ahli IATA" },
  { icon: Globe, text: "35+ Cawangan" },
  { icon: Check, text: "Pasti Berangkat" },
];

export function TrustBar() {
  return (
    <div className="py-2.5 border-b border-gray-100 dark:border-navy-700 bg-white dark:bg-navy-800 overflow-x-auto">
      <div className="max-w-[1140px] mx-auto px-4 flex justify-center gap-5 md:gap-8 min-w-max">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400 whitespace-nowrap">
            <Icon size={13} className="text-navy dark:text-teal" />
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
