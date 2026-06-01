"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Heart,
  Lightbulb,
  Camera,
  BarChart3,
  FileText,
  BookOpen,
  Mail,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/home/HeroSection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const quickLinks = [
  {
    href: "/about",
    icon: Building2,
    title: "Tentang Perusahaan",
    desc: "Profil PT MAS Arya Indonesia",
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
  {
    href: "/program",
    icon: Heart,
    title: "Program CSR",
    desc: "MAS Arya Peduli",
    color: "text-secondary",
    bgColor: "bg-secondary/5",
  },
  {
    href: "/research",
    icon: Lightbulb,
    title: "Hasil Penelitian",
    desc: "Temuan & Analisis",
    color: "text-accent-600",
    bgColor: "bg-accent/5",
  },
  {
    href: "/gallery",
    icon: Camera,
    title: "Galeri",
    desc: "Dokumentasi Kegiatan",
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
  {
    href: "/impact",
    icon: BarChart3,
    title: "Dampak",
    desc: "Statistik Program",
    color: "text-secondary",
    bgColor: "bg-secondary/5",
  },
  {
    href: "/press-release",
    icon: FileText,
    title: "Press Release",
    desc: "Berita & Publikasi",
    color: "text-accent-600",
    bgColor: "bg-accent/5",
  },
];

const stats = [
  { icon: Users, value: "60+", label: "Siswa Peserta" },
  { icon: TrendingUp, value: "92%", label: "Tingkat Kepuasan" },
  { icon: Award, value: "12", label: "Sesi Pelatihan" },
  { icon: Target, value: "95%", label: "Partisipasi Aktif" },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="container-page">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <Card key={i} className="text-center border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="default" className="mb-4">Jelajahi</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Navigasi Cepat
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Temukan informasi lengkap tentang penelitian, program CSR, dan dokumentasi kegiatan
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, i) => (
              <AnimatedSection key={link.href} delay={i * 0.05}>
                <Link href={link.href}>
                  <Card className="group hover:shadow-lg transition-all duration-300 h-full hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 rounded-xl ${link.bgColor} ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <link.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {link.desc}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page">
        <AnimatedSection>
          <div className="gradient-hero rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5" />
            <div className="relative max-w-3xl">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-0">
                Publikasi Ilmiah
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Strategi Humas & CSR dalam Membangun Hubungan Masyarakat
              </h2>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Penelitian ini mengkaji bagaimana PT MAS Arya Indonesia melalui program 
                CSR &ldquo;MAS Arya Peduli&rdquo; membangun hubungan yang harmonis dengan 
                masyarakat lokal di Kendal, Jawa Tengah.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/research">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 gap-2">
                    <BookOpen className="h-5 w-5" />
                    Baca Selengkapnya
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Hubungi Kami
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
