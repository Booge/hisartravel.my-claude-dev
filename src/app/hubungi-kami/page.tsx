"use client";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { SITE } from "@/lib/constants";

const contacts = [
  { icon: Phone, text: SITE.phone, href: SITE.phoneTel },
  { icon: MessageCircle, text: SITE.wa, href: SITE.waLink },
  { icon: Mail, text: SITE.email, href: "mailto:" + SITE.email },
  { icon: MapPin, text: SITE.address, href: null },
];

export default function HubungiPage() {
  return (
    <>
      <div className="py-7 md:py-10 bg-navy text-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-[10px] text-white/30 mb-2"><a href="/" className="hover:text-teal">Utama</a> › Hubungi</div>
          <h1 className="text-xl md:text-3xl font-extrabold">Hubungi <span className="text-teal">Kami</span></h1>
        </div>
      </div>
      <section className="py-8 bg-white dark:bg-navy-900">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <div>
              <h2 className="text-base font-extrabold text-gray-900 dark:text-white mb-4">Maklumat</h2>
              <div className="space-y-2">
                {contacts.map(({ icon: Icon, text, href }) => {
                  const Tag = href ? "a" : "div";
                  return (
                    <Tag key={text} href={href || undefined} target={href?.startsWith("http") ? "_blank" : undefined}
                      className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-navy-800 rounded-lg">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-teal-50 dark:bg-teal-950/20 text-teal-600 flex-shrink-0">
                        <Icon size={14} />
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300 pt-1.5">{text}</div>
                    </Tag>
                  );
                })}
              </div>
              <div className="flex gap-2 mt-4">
                <a href={SITE.waLink} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-bold bg-[#25D366] text-white rounded-lg">
                  <MessageCircle size={14} /> WhatsApp
                </a>
                <a href={SITE.phoneTel}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-bold bg-navy text-white rounded-lg">
                  <Phone size={14} /> Hubungi
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-base font-extrabold text-gray-900 dark:text-white mb-4">Hantar Mesej</h2>
              <div className="space-y-2">
                <input type="text" placeholder="Nama Penuh" className="w-full px-3 py-2.5 text-xs border border-gray-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 focus:border-teal outline-none transition-colors" />
                <input type="tel" placeholder="No. Telefon" className="w-full px-3 py-2.5 text-xs border border-gray-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 focus:border-teal outline-none transition-colors" />
                <input type="email" placeholder="Email" className="w-full px-3 py-2.5 text-xs border border-gray-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 focus:border-teal outline-none transition-colors" />
                <select className="w-full px-3 py-2.5 text-xs border border-gray-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 text-gray-400 focus:border-teal outline-none transition-colors">
                  <option value="">Pakej yang diminati</option>
                  <option>Umrah Ramadhan</option>
                  <option>Umrah Syawal</option>
                  <option>Umrah 1448H</option>
                  <option>Lain-lain</option>
                </select>
                <textarea rows={3} placeholder="Mesej anda..." className="w-full px-3 py-2.5 text-xs border border-gray-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 focus:border-teal outline-none transition-colors resize-none" />
                <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold bg-teal text-white rounded-lg hover:bg-teal-600 transition-colors">
                  <Send size={14} /> Hantar Mesej
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
