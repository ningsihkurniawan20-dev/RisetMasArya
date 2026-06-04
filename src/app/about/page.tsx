"use client";

import {
  Building2,
  Target,
  Eye,
  Users,
  Factory,
  Shield,
  TrendingUp,
  Package,
  MapPin,
  Globe,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { useTranslation } from "@/contexts/LanguageContext";
import { companyData } from "@/data/research-data";

const statsData = [
  { icon: Users, value: "3.500+", key: "about.stats.employees" },
  { icon: Package, value: "5", key: "about.stats.brands" },
  { icon: Factory, value: "2", key: "about.stats.locations" },
  { icon: TrendingUp, value: "100%", key: "about.stats.export" },
];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative pt-32 pb-16 gradient-hero text-white overflow-hidden">
        <img src="/images/image-removebg-preview.png" alt="" className="absolute right-0 top-0 h-64 opacity-15 pointer-events-none object-contain" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <Badge className="bg-white/20 text-white border-0 mb-4">{t("about.hero.badge")}</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t("company.fullName")}</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {t("about.hero.subtitle")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-page">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t("about.sectionProfile.title")}</h2>
              <div className="space-y-5">
                {[
                  { icon: Building2, text: t("about.sectionProfile.p1"), color: "border-l-red-600", bgColor: "bg-red-50 dark:bg-red-950/20" },
                  { icon: Factory, text: t("about.sectionProfile.p2"), color: "border-l-blue-600", bgColor: "bg-blue-50 dark:bg-blue-950/20" },
                  { icon: Globe, text: t("about.sectionProfile.p3"), color: "border-l-green-600", bgColor: "bg-green-50 dark:bg-green-950/20" },
                  { icon: Heart, text: t("about.sectionProfile.p4"), color: "border-l-pink-600", bgColor: "bg-pink-50 dark:bg-pink-950/20" },
                ].map((item, i) => (
                  <Card key={i} className={`border-l-4 ${item.color} shadow-sm`}>
                    <CardContent className="p-5 flex gap-4">
                      <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center shrink-0 mt-0.5`}>
                        <item.icon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                        {item.text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-2">
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {statsData.map((stat, i) => (
                  <Card key={i} className="border-0 shadow-md bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 text-center">
                    <CardContent className="p-5">
                      <stat.icon className="h-7 w-7 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t(stat.key)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 p-5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {t("about.parentCompany")}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t("about.parentCompanyDesc")}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t("about.visionMission.title")}
            subtitle={t("about.visionMission.subtitle")}
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <Card className="h-full border-l-4 border-l-primary border-gray-200 dark:border-gray-700 shadow-md">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t("about.vision")}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                    &ldquo;{companyData.vision}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="h-full border-l-4 border-l-primary border-gray-200 dark:border-gray-700 shadow-md">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t("about.mission")}</h3>
                  <ul className="space-y-4">
                    {companyData.mission.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-600 dark:text-gray-400">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-sm font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span>{item}</span>
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
          title={t("about.values.title")}
          subtitle={t("about.values.subtitle")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.values.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.05}>
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t("about.org.title")}
            subtitle={t("about.org.subtitle")}
          />

          <AnimatedSection>
            <Card className="overflow-hidden shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3.5 px-5 text-sm font-semibold text-gray-900 dark:text-white">{t("about.org.position")}</th>
                      <th className="text-left py-3.5 px-5 text-sm font-semibold text-gray-900 dark:text-white">{t("about.org.name")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {companyData.organizationStructure.map((org, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        <td className="py-3 px-5 text-sm text-gray-600 dark:text-gray-400">{org.position}</td>
                        <td className="py-3 px-5 text-sm font-medium text-gray-900 dark:text-white">{org.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
