import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SEASONS } from "@/lib/constants";
import { PackageCard } from "@/components/ui/package-card";

export function PackagesPreview() {
  const syawal = SEASONS[1];
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-navy-900">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-[9px] font-extrabold tracking-[3px] uppercase text-teal-600 mb-1.5">PAKEJ UMRAH 2026</div>
        <h2 className="text-lg md:text-2xl font-extrabold text-gray-900 dark:text-white">
          Pilih Pakej <span className="text-teal-600">Umrah Anda</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-7">
          {syawal.packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/pakej" className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-bold bg-navy text-white rounded-lg hover:bg-navy-800 transition-all">
            Lihat Semua Pakej <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
