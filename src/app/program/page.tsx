"use client";

import {
  Heart,
  Target,
  GraduationCap,
  Users,
  Calendar,
  CheckCircle2,
  Clock,
  BookOpen,
  Handshake,
  ClipboardList,
  CalendarCheck,
  BarChart3,
  FileText,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedSection from "@/components/shared/AnimatedSection";

const programGoals = [
  "Mengembangkan jiwa kepemimpinan (leadership) siswa sejak usia dini",
  "Membentuk karakter berpikir kritis dan kemampuan memecahkan masalah",
  "Menanamkan nilai-nilai empati dan kepedulian sosial",
  "Mencetak agen perubahan (Changemakers) yang siap berkontribusi bagi masyarakat",
  "Membangun kepercayaan diri dan kemampuan komunikasi siswa",
  "Mendorong kreativitas dan inovasi dalam menyelesaikan masalah",
];

const programTargets = [
  { icon: Users, label: "Sasaran Utama", value: "Siswa SD Negeri Campurejo" },
  { icon: GraduationCap, label: "Tingkat Pendidikan", value: "Kelas 4-6 SD" },
  { icon: Users, label: "Jumlah Peserta", value: "60 Siswa" },
  { icon: MapPin, label: "Lokasi", value: "Boja, Kendal, Jawa Tengah" },
];

const benefits = [
  {
    title: "Bagi Siswa",
    items: [
      "Pengembangan keterampilan kepemimpinan",
      "Peningkatan kepercayaan diri",
      "Kemampuan berpikir kritis",
      "Keterampilan komunikasi",
      "Pemahaman tentang kerja sama tim",
    ],
  },
  {
    title: "Bagi Sekolah",
    items: [
      "Program pengembangan karakter siswa",
      "Peningkatan kualitas pendidikan non-formal",
      "Dukungan fasilitas dan perlengkapan",
      "Relasi dengan dunia industri",
    ],
  },
  {
    title: "Bagi Perusahaan",
    items: [
      "Penguatan hubungan dengan masyarakat",
      "Peningkatan citra perusahaan",
      "Terpenuhinya tanggung jawab sosial",
      "Membangun brand awareness positif",
    ],
  },
];

const timelineData = [
  {
    icon: ClipboardList,
    title: "Perencanaan Program",
    date: "Juni 2024",
    status: "completed",
    desc: "Tim PR melakukan assessment kebutuhan masyarakat dan merancang program",
  },
  {
    icon: Handshake,
    title: "Koordinasi dengan Sekolah",
    date: "Juli 2024",
    status: "completed",
    desc: "Koordinasi dengan pihak SD Negeri Campurejo dan Dinas Pendidikan",
  },
  {
    icon: BookOpen,
    title: "Persiapan Materi & Fasilitator",
    date: "Agustus 2024",
    status: "completed",
    desc: "Pengembangan modul pelatihan dan persiapan tim fasilitator",
  },
  {
    icon: CalendarCheck,
    title: "Pelaksanaan Program",
    date: "September 2024",
    status: "completed",
    desc: "Pelaksanaan pelatihan kepemimpinan selama 2 hari di SD Negeri Campurejo",
  },
  {
    icon: BarChart3,
    title: "Monitoring & Evaluasi",
    date: "Oktober 2024",
    status: "completed",
    desc: "Evaluasi dampak program dan pengukuran hasil",
  },
  {
    icon: FileText,
    title: "Pelaporan & Publikasi",
    date: "November 2024",
    status: "completed",
    desc: "Penyusunan laporan hasil program dan publikasi ke publik",
  },
  {
    icon: Target,
    title: "Program Lanjutan 2025",
    date: "Januari 2025",
    status: "upcoming",
    desc: "Perencanaan program lanjutan dengan cakupan yang lebih luas",
  },
];

function MapPin(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function ProgramPage() {
  return (
    <>
      <section className="pt-32 pb-16 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="bg-white/20 text-white border-0 mb-4">Program CSR</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">MAS Arya Peduli</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Program Corporate Social Responsibility PT MAS Arya Indonesia dalam 
              mengembangkan karakter dan kepemimpinan generasi muda
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-page">
        <SectionTitle
          title="Tentang Program"
          subtitle="Program CSR 'MAS Arya Peduli' merupakan wujud komitmen PT MAS Arya Indonesia dalam berkontribusi pada pengembangan sumber daya manusia Indonesia sejak dini."
        />

        <AnimatedSection>
          <div className="gradient-primary rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="relative">
              <Heart className="h-12 w-12 text-white/20 mb-4" />
              <p className="text-lg leading-relaxed text-white/90 max-w-4xl">
                Program &ldquo;MAS Arya Peduli&rdquo; berfokus pada pengembangan karakter 
                dan kepemimpinan siswa SD Negeri Campurejo di Boja, Kendal. Program ini 
                bertujuan mencetak generasi muda yang berjiwa pemimpin, berpikir kritis, 
                memiliki empati, dan menjadi agen perubahan (Changemakers). 
                Kegiatan dirancang dengan pendekatan interaktif dan partisipatif agar 
                siswa dapat belajar sambil bermain.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Tujuan Program"
            subtitle="Tujuan yang ingin dicapai melalui program MAS Arya Peduli"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programGoals.map((goal, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <Card className="h-full group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{goal}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page">
        <SectionTitle
          title="Sasaran Program"
          subtitle="Target dan sasaran dari program CSR MAS Arya Peduli"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programTargets.map((target, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mx-auto mb-4">
                    <target.icon className="h-7 w-7" />
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{target.label}</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{target.value}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Manfaat Program"
            subtitle="Dampak positif program bagi seluruh pemangku kepentingan"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      {benefit.title}
                    </h3>
                    <ul className="space-y-3">
                      {benefit.items.map((item, j) => (
                        <li key={j} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page">
        <SectionTitle
          title="Timeline Kegiatan"
          subtitle="Kronologi pelaksanaan program MAS Arya Peduli"
        />

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block" />

          <div className="space-y-8">
            {timelineData.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex gap-6">
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        item.status === "completed"
                          ? "bg-secondary text-white"
                          : "bg-accent text-white"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <Badge
                        variant={item.status === "completed" ? "success" : "warning"}
                      >
                        {item.status === "completed" ? "Selesai" : "Akan Datang"}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">
                      <Clock className="h-3.5 w-3.5 inline mr-1" />
                      {item.date}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
