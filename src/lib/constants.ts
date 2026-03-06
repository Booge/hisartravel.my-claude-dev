export const SITE = {
  name: "Hisar Travel",
  tagline: "Malaysia",
  slogan: "Layanan Sempurna Ibadah Sempurna",
  license: "KPK/LN:9782",
  phone: "+6011-2182 2526",
  phoneTel: "tel:601121822526",
  wa: "+6011-7020 0026",
  waLink: "https://wa.me/601170200026",
  email: "info@hisartravel.my",
  address: "Tingkat 1, 7A, Jalan Tengku Ampuan Zabedah F 9/F, Section 9, 40100 Shah Alam, Selangor",
  linktree: "https://linktr.ee/hisartravel.my",
  waChannel: "https://whatsapp.com/channel/0029VahlyVE8kyyMRmi2cq3J",
};

export const IMG_BASE = "https://hisartravel.my/wp-content/uploads/";

export const NAV_ITEMS = [
  { id: "home", path: "/", label: "Utama" },
  { id: "pakej", path: "/pakej", label: "Pakej" },
  { id: "tentang", path: "/tentang-kami", label: "Tentang Kami" },
  { id: "galeri", path: "/galeri", label: "Galeri" },
  { id: "blog", path: "/blog", label: "Blog" },
  { id: "hubungi", path: "/hubungi-kami", label: "Hubungi" },
] as const;

export const MOBILE_NAV = [
  { id: "home", label: "Utama", icon: "Home" as const },
  { id: "pakej", label: "Pakej", icon: "Package" as const },
  { id: "wa", label: "Chat", icon: "MessageCircle" as const, href: "https://wa.me/601170200026" },
  { id: "tel", label: "Hubungi", icon: "Phone" as const, href: "tel:601121822526" },
  { id: "tentang", label: "Lagi", icon: "Menu" as const },
] as const;

export const HERO_SLIDES = [
  { img: `${IMG_BASE}2026/02/slider1.webp`, title: "Layanan Sempurna, Ibadah Sempurna", sub: "Bermula RM 6,990" },
  { img: `${IMG_BASE}2025/12/banner1.webp`, title: "Umrah Syawal 2026", sub: "Malaysia Airlines · RM 7,590" },
  { img: `${IMG_BASE}2026/02/slider5.webp`, title: "Akhir Ramadhan 1448H", sub: "Saudia Airlines · RM 8,490" },
  { img: `${IMG_BASE}2026/02/slider3.webp`, title: "Bersama Mutawwif Berpengalaman", sub: "30+ tahun pengalaman" },
  { img: `${IMG_BASE}2026/02/slider4.webp`, title: "Hotel Dekat Haram", sub: "Jarak berjalan kaki" },
];

export type PackageData = {
  id: string;
  name: string;
  tier: string;
  tierBg: string;
  date: string;
  duration: string;
  airline: string;
  img: string;
  hotels: { name: string; stars: number; distance: string }[];
  quad: number;
  triple: number;
  double: number;
  seats: number;
  totalSeats: number;
  itinerary: string[];
  includes: string[];
};

export type Season = {
  name: string;
  date: string;
  packages: PackageData[];
};

export const SEASONS: Season[] = [
  {
    name: "Umrah Akhir Ramadhan",
    date: "9 — 18 Mac 2026",
    packages: [
      { id: "ramadhan-eko", name: "Akhir Ramadhan 1448H", tier: "Ekonomi", tierBg: "#64748b", date: "9 Mac — 18 Mac", duration: "10H · 8M", airline: "Saudia Airlines", img: `${IMG_BASE}2026/02/kaaba_hisar_travel_malaysia.webp`, hotels: [{ name: "Razana Al Rawdha", stars: 4, distance: "2km" }, { name: "Maien Al Madina", stars: 4, distance: "80m" }], quad: 8490, triple: 8990, double: 9490, seats: 7, totalSeats: 25, itinerary: ["Hari 1: Berlepas dari KLIA ke Jeddah via Saudia Airlines", "Hari 2-6: Makkah — Tawaf, Saie, ziarah, Malam 27 di Makkah", "Hari 7-8: Madinah — Ziarah Masjid Nabawi, Raudhah", "Hari 9-10: Pulang ke KLIA"], includes: ["Tiket penerbangan", "Hotel 4 bintang", "Makan fullboard", "Visa", "Beg umrah", "Kursus pra-umrah", "Transmitter audio", "Mutawwif"] },
      { id: "ramadhan-brz", name: "Akhir Ramadhan 1448H", tier: "Bronze", tierBg: "#92651d", date: "9 Mac — 18 Mac", duration: "10H · 8M", airline: "Saudia Airlines", img: `${IMG_BASE}2026/02/slider5.webp`, hotels: [{ name: "Al Massa Grand", stars: 4, distance: "450m" }, { name: "Maien Al Madina", stars: 4, distance: "80m" }], quad: 11590, triple: 12390, double: 14290, seats: 7, totalSeats: 25, itinerary: ["Hari 1: Berlepas dari KLIA", "Hari 2-6: Makkah — Tawaf, Saie, ziarah", "Hari 7-8: Madinah — Masjid Nabawi", "Hari 9-10: Pulang"], includes: ["Tiket penerbangan", "Hotel 4 bintang", "Makan fullboard", "Visa", "Beg umrah", "Telekung/Jubah", "Kursus pra-umrah", "Transmitter audio", "Mutawwif", "Ziarah Thaif"] },
      { id: "ramadhan-slv", name: "Akhir Ramadhan 1448H", tier: "Silver", tierBg: "#7a8599", date: "9 Mac — 18 Mac", duration: "10H · 8M", airline: "Saudia Airlines", img: `${IMG_BASE}2026/02/slider3.webp`, hotels: [{ name: "Anjum Hotel Makkah", stars: 5, distance: "150m" }, { name: "Maien Al Madinah", stars: 4, distance: "80m" }], quad: 13290, triple: 14690, double: 16790, seats: 7, totalSeats: 25, itinerary: ["Hari 1: Berlepas KLIA", "Hari 2-6: Makkah — Hotel 150m dari Haram", "Hari 7-8: Madinah", "Hari 9-10: Pulang"], includes: ["Tiket penerbangan", "Hotel 5 bintang Makkah", "Makan fullboard", "Visa", "Beg umrah", "Telekung/Jubah", "Kursus pra-umrah", "Transmitter audio", "Mutawwif", "Ziarah lengkap"] },
    ],
  },
  {
    name: "Umrah Syawal",
    date: "24 Mac — 1 April 2026",
    packages: [
      { id: "syawal-brz", name: "Umrah Syawal 2026", tier: "Bronze", tierBg: "#92651d", date: "24 Mac — 1 Apr", duration: "9H · 7M", airline: "Malaysia Airlines", img: `${IMG_BASE}2025/12/banner1.webp`, hotels: [{ name: "Al Massa Grand", stars: 4, distance: "450m" }, { name: "Maien Al Madina", stars: 4, distance: "80m" }], quad: 7590, triple: 7950, double: 8590, seats: 15, totalSeats: 25, itinerary: ["Hari 1: KLIA → Jeddah (MAS)", "Hari 2-5: Makkah", "Hari 6-8: Madinah", "Hari 9: Pulang"], includes: ["Tiket MAS", "Hotel 4★", "Fullboard", "Visa", "Beg", "Kursus", "Audio", "Mutawwif"] },
      { id: "syawal-slv", name: "Umrah Syawal 2026", tier: "Silver", tierBg: "#7a8599", date: "24 Mac — 1 Apr", duration: "9H · 7M", airline: "Malaysia Airlines", img: `${IMG_BASE}2026/02/slider4.webp`, hotels: [{ name: "Hilton Convention", stars: 5, distance: "150m" }, { name: "Maien Al Madinah", stars: 4, distance: "80m" }], quad: 7990, triple: 8490, double: 9190, seats: 15, totalSeats: 25, itinerary: ["Hari 1: KLIA → Jeddah", "Hari 2-5: Makkah (Hilton)", "Hari 6-8: Madinah", "Hari 9: Pulang"], includes: ["Tiket MAS", "Hotel 5★", "Fullboard", "Visa", "Beg", "Jubah/Telekung", "Kursus", "Audio", "Mutawwif", "Ziarah"] },
      { id: "syawal-gld", name: "Umrah Syawal 2026", tier: "Gold", tierBg: "#C9A84C", date: "24 Mac — 1 Apr", duration: "9H · 7M", airline: "Malaysia Airlines", img: `${IMG_BASE}2026/02/slider-12.webp`, hotels: [{ name: "Dar Al Ghufran Safwah", stars: 5, distance: "50m" }, { name: "Maien Al Madina", stars: 4, distance: "80m" }], quad: 9390, triple: 9790, double: 10490, seats: 10, totalSeats: 25, itinerary: ["Hari 1: KLIA → Jeddah", "Hari 2-5: Makkah (50m Haram!)", "Hari 6-8: Madinah", "Hari 9: Pulang"], includes: ["Tiket MAS", "Hotel 5★ depan Haram", "Fullboard premium", "Visa", "Beg premium", "Jubah/Telekung", "Kursus VIP", "Audio", "Mutawwif senior", "Ziarah lengkap", "Speed train"] },
    ],
  },
  {
    name: "Umrah Awal Muharram",
    date: "Jun — Jul 2026",
    packages: [
      { id: "muharram-brz", name: "Umrah 1448H", tier: "Bronze", tierBg: "#92651d", date: "17 Jun — 26 Jun", duration: "10H · 8M", airline: "Oman Airlines", img: `${IMG_BASE}2026/02/slider9.webp`, hotels: [{ name: "Al Massa Grand", stars: 4, distance: "450m" }, { name: "Maien Al Madina", stars: 4, distance: "80m" }], quad: 6990, triple: 7290, double: 7790, seats: 20, totalSeats: 30, itinerary: ["Hari 1: KLIA → Muscat → Jeddah", "Hari 2-6: Makkah", "Hari 7-9: Madinah", "Hari 10: Pulang"], includes: ["Tiket Oman Air", "Hotel 4★", "Fullboard", "Visa", "Beg", "Kursus", "Audio", "Mutawwif"] },
      { id: "muharram-slv", name: "Umrah 1448H", tier: "Silver", tierBg: "#7a8599", date: "26 Jun — 7 Jul", duration: "11H · 10M", airline: "Saudi Airlines", img: `${IMG_BASE}2026/02/slider10.webp`, hotels: [{ name: "Hilton Convention", stars: 5, distance: "150m" }, { name: "Maien Al Madinah", stars: 4, distance: "80m" }], quad: 7590, triple: 7990, double: 8590, seats: 20, totalSeats: 30, itinerary: ["Hari 1: KLIA → Jeddah", "Hari 2-6: Makkah", "Hari 7-10: Madinah", "Hari 11: Pulang"], includes: ["Tiket Saudi", "Hotel 5★", "Fullboard", "Visa", "Beg", "Jubah", "Kursus", "Audio", "Mutawwif", "Ziarah"] },
      { id: "muharram-gld", name: "Umrah 1448H", tier: "Gold", tierBg: "#C9A84C", date: "5 Jul — 14 Jul", duration: "9H · 8M", airline: "Saudi Airlines", img: `${IMG_BASE}2026/02/slider11.webp`, hotels: [{ name: "Dar Al Ghufran Safwah", stars: 5, distance: "50m" }, { name: "Maien Al Madina", stars: 4, distance: "80m" }], quad: 8190, triple: 8590, double: 9190, seats: 15, totalSeats: 25, itinerary: ["Hari 1: KLIA → Jeddah", "Hari 2-5: Makkah (depan Haram)", "Hari 6-8: Madinah", "Hari 9: Pulang"], includes: ["Tiket Saudi", "Hotel 5★ depan Haram", "Fullboard premium", "Visa", "Beg premium", "Jubah/Telekung", "Kursus VIP", "Audio", "Mutawwif senior", "Ziarah lengkap"] },
    ],
  },
];

export const ALL_PACKAGES = SEASONS.flatMap((s) => s.packages);

export const TESTIMONIALS = [
  { text: "Saya berkerusi roda, tapi team Hisar uruskan dari airport, hotel sampai tawaf dan saie. Sangat lega dan benar-benar dijaga.", name: "Haji Idris bin Salleh", role: "Pesara Guru", img: `${IMG_BASE}2026/01/6.jpg` },
  { text: "Umrah pertama kami. Kursus pra-umrah dan bimbingan mutawwif buat kami tenang, setiap langkah diterangkan satu per satu.", name: "Puan Noraini binti Hassan", role: "Usahawan", img: `${IMG_BASE}2026/01/3.jpg` },
  { text: "Dari KLIA sampai balik, layanan sangat mesra. Group kecil, mutawwif kongsi sirah dan setiap malam ada tazkirah ringkas.", name: "Ahmad Syafiq bin Roslan", role: "Jurutera", img: `${IMG_BASE}2026/01/7.jpg` },
];

export const MUTAWWIF = [
  { name: "Firas Rarhan", img: `${IMG_BASE}2026/02/1.webp` },
  { name: "Nur Zakwan", img: `${IMG_BASE}2026/02/2.webp` },
  { name: "Mehmet Arif", img: `${IMG_BASE}2026/02/3.webp` },
  { name: "Iqbal Naim", img: `${IMG_BASE}2026/02/4.webp` },
  { name: "Faris Fathi", img: `${IMG_BASE}2026/02/5.webp` },
  { name: "Ali Imran", img: `${IMG_BASE}2026/02/6.webp` },
];

export const SERVICES = [
  "Hotel Confirm", "Transmitter Audio", "Bimbingan Umrah 3 Kali", "Ziarah Thaif",
  "Set Kelengkapan Hisar", "35 Tempat Ziarah", "Bas Terbaik", "Kursus Umrah",
];

export const GALLERY = [
  ...Array.from({ length: 5 }, (_, i) => `${IMG_BASE}2026/01/IMG_07${40 + i}.jpg`),
  ...MUTAWWIF.map((m) => m.img),
  ...[7, 8, 9].map((n) => `${IMG_BASE}2026/02/${n}.webp`),
];

export const FAQ = [
  { q: "Apakah Hisar Travel berlesen?", a: "Ya, Hisar Travel Malaysia berdaftar dengan MOTAC dan memegang lesen KPK/LN:9782. Kami juga ahli PAPUH dan IATA." },
  { q: "Berapa lama tempoh umrah?", a: "Bergantung pada pakej, biasanya antara 9 hingga 12 hari termasuk penerbangan." },
  { q: "Adakah makan disediakan?", a: "Ya, semua pakej termasuk makan fullboard — sarapan, makan tengahari dan makan malam." },
  { q: "Bagaimana cara mendaftar?", a: "Melalui WhatsApp, call center, atau borang pendaftaran di laman web." },
  { q: "Bolehkah memilih bilik?", a: "Ya — Quad (4 orang), Triple (3 orang) atau Double (2 orang) dengan harga berbeza." },
  { q: "Adakah mutawwif disediakan?", a: "Ya, setiap kumpulan disertai mutawwif terlatih dan berpengalaman." },
];

export const BLOGS = [
  { title: "Panduan Lengkap Umrah Pertama", desc: "Semua yang perlu anda tahu sebelum menunaikan umrah.", category: "Panduan", img: `${IMG_BASE}2026/02/slider1.webp` },
  { title: "Kelebihan Umrah Bulan Ramadhan", desc: "Keutamaan dan pahala umrah di bulan mulia.", category: "Keutamaan", img: `${IMG_BASE}2025/12/banner1.webp` },
  { title: "Tips Kesihatan di Tanah Suci", desc: "Cara menjaga kesihatan sepanjang perjalanan.", category: "Kesihatan", img: `${IMG_BASE}2026/02/slider3.webp` },
];

export const formatRM = (value: number) => `RM ${value.toLocaleString()}`;
export const stars = (count: number) => "★".repeat(count);
