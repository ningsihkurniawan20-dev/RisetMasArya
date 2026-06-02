"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t, locale } = useTranslation();

  const footerLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.profile") },
    { href: "/press-release", label: t("nav.pressRelease") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/references", label: t("nav.references") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo-mas-arya.webp" alt="MAS Arya" className="w-12 h-12 rounded-xl bg-white object-contain p-1.5" />
              <div>
                <span className="text-xl font-bold text-white">{t("company.fullName")}</span>
                <span className="text-sm text-gray-400 block">
                  MAS Holdings — {locale === "id" ? "Sri Lanka" : "Sri Lanka"}
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              {locale === "id"
                ? "Perusahaan manufaktur pakaian jadi kelas dunia yang memproduksi merek ternama seperti Nike, Lululemon, Victoria's Secret, Calvin Klein, dan Patagonia."
                : "A world-class apparel manufacturing company producing renowned brands such as Nike, Lululemon, Victoria's Secret, Calvin Klein, and Patagonia."}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">
                <a href="mailto:masarya@masholdings.com" className="hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  masarya@masholdings.com
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                {locale === "id"
                  ? "Dusun Dukuh Nglorok, Desa Campurejo, Boja, Kendal"
                  : "Dusun Dukuh Nglorok, Campurejo, Boja, Kendal"}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            {t("footer.copyright").replace("{year}", String(new Date().getFullYear()))}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <img src="/images/logo-mas-holdings.webp" alt="MAS Holdings" className="h-5 w-auto opacity-60" />
            <span>{t("footer.poweredBy")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
