"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Camera,
  FileText,
  BookOpen,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/home/HeroSection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { useTranslation } from "@/contexts/LanguageContext";

const quickLinks = [
  { href: "/about", icon: Building2, key: "home.quickNav.profile", descKey: "home.quickNav.profileDesc" },
  { href: "/press-release", icon: FileText, key: "home.quickNav.pressRelease", descKey: "home.quickNav.pressReleaseDesc" },
  { href: "/gallery", icon: Camera, key: "home.quickNav.gallery", descKey: "home.quickNav.galleryDesc" },
  { href: "/references", icon: BookOpen, key: "home.quickNav.references", descKey: "home.quickNav.referencesDesc" },
  { href: "/contact", icon: Mail, key: "home.quickNav.contact", descKey: "home.quickNav.contactDesc" },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection />

      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="default" className="mb-4">{t("home.hero.cta")}</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t("home.quickNav.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t("home.quickNav.desc")}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, i) => (
              <AnimatedSection key={link.href} delay={i * 0.05}>
                <Link href={link.href}>
                  <Card className="group hover:shadow-lg transition-all duration-300 h-full hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <link.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {t(link.key)}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t(link.descKey)}
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
            <div className="relative max-w-3xl">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-0">
                {t("home.ctaSection.badge")}
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t("home.ctaSection.title")}
              </h2>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                {t("home.ctaSection.desc")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 gap-2">
                    <Building2 className="h-5 w-5" />
                    {t("home.ctaSection.profileBtn")}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    {t("home.ctaSection.contactBtn")}
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
