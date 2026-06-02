"use client";

import { Mail, Phone, MapPin, Building2, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { useTranslation } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useTranslation();

  const contactInfo = [
    { icon: Mail, label: t("contact.email"), value: "masarya@masholdings.com", href: "mailto:masarya@masholdings.com" },
    { icon: Phone, label: t("contact.phone"), value: "+62 815-6626-868 / +62 294 572877", href: "tel:+628156626868" },
    { icon: Globe, label: t("contact.website"), value: "masholdings.com", href: "https://masholdings.com" },
    { icon: MapPin, label: t("contact.address"), value: t("contact.addressPlant1"), href: "#" },
    { icon: Building2, label: t("contact.parentCompany"), value: "MAS Holdings — Sri Lanka", href: "https://masholdings.com" },
  ];

  return (
    <>
      <section className="pt-32 pb-16 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="bg-white/20 text-white border-0 mb-4">{t("contact.hero.badge")}</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t("contact.hero.title")}</h1>
            <p className="text-xl text-white/80 max-w-2xl">{t("contact.hero.subtitle")}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-page">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <Card className="h-full">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{info.label}</p>
                      {info.href && info.href !== "#" ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{info.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <Card className="mt-8 overflow-hidden">
              <div className="h-80 w-full">
                <iframe
                  src="https://www.google.com/maps?q=PT+MAS+Arya+Indonesia+Dukuh+Nglorok+Campurejo+Boja+Kendal&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi PT MAS Arya Indonesia"
                />
              </div>
              <div className="p-5 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{t("contact.plant1")}</p>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">{t("contact.addressPlant1")}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{t("contact.plant2")}</p>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">{t("contact.addressPlant2")}</p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
