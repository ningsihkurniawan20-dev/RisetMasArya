"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from "lucide-react";

const footerLinks = {
  navigasi: [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang" },
    { href: "/program", label: "Program CSR" },
    { href: "/research", label: "Penelitian" },
    { href: "/press-release", label: "Press Release" },
  ],
  informasi: [
    { href: "/gallery", label: "Galeri" },
    { href: "/impact", label: "Dampak Program" },
    { href: "/references", label: "Referensi" },
    { href: "/contact", label: "Kontak" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-bold">
                MA
              </div>
              <div>
                <span className="text-xl font-bold text-white">MAS Arya Peduli</span>
                <span className="text-sm text-gray-400 block">
                  CSR & Public Relations Research
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              Penelitian tentang strategi hubungan masyarakat PT MAS Arya Indonesia 
              melalui program CSR dalam membangun hubungan dengan masyarakat lokal.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-3">
              {footerLinks.navigasi.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Informasi</h3>
            <ul className="space-y-3">
              {footerLinks.informasi.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MAS Arya Research. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>Kawasan Industri Kendal, Jawa Tengah</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
