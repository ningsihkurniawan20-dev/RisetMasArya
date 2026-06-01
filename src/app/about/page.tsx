"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  Target,
  Eye,
  Users,
  Factory,
  Package,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { companyData } from "@/data/research-data";

const statsData = [
  { icon: Factory, value: "3.500+", label: "Karyawan" },
  { icon: Package, value: "4", label: "Merek Global" },
  { icon: Shield, value: "9+", label: "Tahun Beroperasi" },
  { icon: TrendingUp, value: "100%", label: "Ekspor Internasional" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="bg-white/20 text-white border-0 mb-4">Tentang Perusahaan</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">PT MAS Arya Indonesia</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Perusahaan manufaktur pakaian jadi terkemuka yang memproduksi merek-merek global
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Profil Perusahaan</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                PT MAS Arya Indonesia adalah perusahaan manufaktur pakaian jadi (garment) yang 
                berdiri sejak 2015 dan berlokasi di Kawasan Industri Kendal, Jawa Tengah. 
                Perusahaan memproduksi berbagai merek internasional ternama seperti Nike, 
                Lululemon, Victoria&apos;s Secret, dan Calvin Klein.
              </p>
              <p>
                Dengan lebih dari 3.500 karyawan, PT MAS Arya Indonesia berkomitmen untuk 
                memproduksi pakaian jadi berkualitas tinggi yang memenuhi standar internasional 
                serta menerapkan praktik bisnis yang bertanggung jawab secara sosial dan lingkungan.
              </p>
              <p>
                Sebagai bagian dari komitmen terhadap masyarakat sekitar, perusahaan menjalankan 
                program Corporate Social Responsibility (CSR) bertajuk &ldquo;MAS Arya Peduli&rdquo; 
                yang berfokus pada pengembangan karakter dan kepemimpinan generasi muda.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {statsData.map((stat, i) => (
                <Card key={i} className="border-0 shadow-md bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Visi & Misi"
            subtitle="Landasan dan arah perusahaan dalam menjalankan bisnis"
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <Card className="h-full border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <Eye className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Visi</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {companyData.vision}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="h-full border-l-4 border-l-secondary">
                <CardContent className="p-8">
                  <Target className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Misi</h3>
                  <ul className="space-y-3">
                    {companyData.mission.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-600 dark:text-gray-400">
                        <span className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 text-sm font-bold">
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="container-page">
        <SectionTitle
          title="Nilai Perusahaan"
          subtitle="Prinsip yang menjadi pedoman dalam setiap langkah perusahaan"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.values.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.05}>
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Struktur Organisasi"
            subtitle="Tim manajemen PT MAS Arya Indonesia"
          />

          <AnimatedSection>
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">Jabatan</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">Nama</th>
                      </tr>
                    </thead>
                    <tbody>
                      {companyData.organizationStructure.map((org, i) => (
                        <tr
                          key={i}
                          className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                        >
                          <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{org.position}</td>
                          <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">{org.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
