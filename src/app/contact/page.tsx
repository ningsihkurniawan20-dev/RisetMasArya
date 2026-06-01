"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedSection from "@/components/shared/AnimatedSection";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@masaryaindonesia.com",
    href: "mailto:info@masaryaindonesia.com",
  },
  {
    icon: Phone,
    label: "Telepon",
    value: "+62 24 1234 5678",
    href: "tel:+622412345678",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Kawasan Industri Kendal, Jawa Tengah",
    href: "#",
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: "Senin - Jumat, 08:00 - 17:00 WIB",
    href: "#",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <section className="pt-32 pb-16 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="bg-white/20 text-white border-0 mb-4">Kontak</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Silakan hubungi kami untuk informasi lebih lanjut tentang penelitian dan program CSR
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-page">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <Card>
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        {info.label}
                      </p>
                      {info.href && info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.2}>
              <Card className="overflow-hidden">
                <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <MapPin className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Google Maps</p>
                      <p className="text-xs text-gray-400 mt-1">
                        Kawasan Industri Kendal, Jawa Tengah
                      </p>
                    </div>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.318!2d110.204!3d-7.030!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDEnNDguMCJTIDExMMKwMTInMTQuNCJF!5e0!3m2!1sid!2sid!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi PT MAS Arya Indonesia"
                    className="absolute inset-0"
                  />
                </div>
              </Card>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-3">
            <AnimatedSection delay={0.1}>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Kirim Pesan
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Isi form di bawah untuk mengirimkan pertanyaan atau pesan kepada kami
                  </p>

                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Pesan Terkirim!
                      </h3>
                      <p className="text-gray-500">
                        Terima kasih, pesan Anda telah kami terima. Kami akan menghubungi Anda segera.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                            Nama Lengkap
                          </label>
                          <Input placeholder="Masukkan nama lengkap" required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                            Email
                          </label>
                          <Input type="email" placeholder="Masukkan email" required />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Subjek
                        </label>
                        <Input placeholder="Masukkan subjek pesan" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Pesan
                        </label>
                        <Textarea placeholder="Tulis pesan Anda..." required />
                      </div>
                      <Button type="submit" size="lg" className="w-full gap-2">
                        <Send className="h-5 w-5" />
                        Kirim Pesan
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
