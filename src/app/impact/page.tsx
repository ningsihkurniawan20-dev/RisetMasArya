"use client";

import {
  Users,
  TrendingUp,
  BarChart3,
  Star,
  Award,
  Heart,
  Quote,
  Target,
  Activity,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedSection from "@/components/shared/AnimatedSection";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  RadialBarChart,
  RadialBar,
} from "recharts";
import { motion } from "framer-motion";
import { researchData, chartData } from "@/data/research-data";

const impactStats = [
  {
    icon: Users,
    value: researchData.statistics.totalParticipants,
    label: "Total Peserta",
    suffix: "Siswa",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: TrendingUp,
    value: researchData.statistics.satisfactionRate,
    label: "Tingkat Kepuasan",
    suffix: "%",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
  {
    icon: Award,
    value: researchData.statistics.sessionsCompleted,
    label: "Sesi Pelatihan",
    suffix: "Sesi",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    icon: Activity,
    value: researchData.statistics.participationRate,
    label: "Partisipasi Aktif",
    suffix: "%",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const testimonials = [
  {
    name: "Ahmad Fauzi",
    role: "Kepala Sekolah SD Negeri Campurejo",
    content:
      "Program MAS Arya Peduli memberikan dampak positif yang signifikan bagi siswa-siswi kami. Mereka menjadi lebih percaya diri dan memiliki jiwa kepemimpinan yang mulai terbentuk.",
    rating: 5,
    initials: "AF",
  },
  {
    name: "Siti Nurhaliza",
    role: "Guru Kelas 5",
    content:
      "Metode pelatihan yang interaktif dan menyenangkan sangat cocok untuk anak-anak. Kami melihat perubahan positif dalam cara mereka berinteraksi dan bekerja sama.",
    rating: 5,
    initials: "SN",
  },
  {
    name: "Budi Santoso",
    role: "Orang Tua Siswa",
    content:
      "Anak saya jadi lebih berani berbicara di depan umum dan lebih percaya diri. Terima kasih PT MAS Arya Indonesia untuk program yang luar biasa ini.",
    rating: 4,
    initials: "BS",
  },
  {
    name: "Rina Wulandari",
    role: "Siswi Kelas 6",
    content:
      "Belajar kepemimpinan jadi seru! Kami belajar tentang pentingnya kerja sama tim dan bagaimana menjadi pemimpin yang baik.",
    rating: 5,
    initials: "RW",
  },
];

const improvementData = [
  { name: "Kepercayaan Diri", value: 82, fill: "#C62828" },
  { name: "Kerja Sama Tim", value: 88, fill: "#1A1A1A" },
  { name: "Komunikasi", value: 75, fill: "#D97706" },
  { name: "Empati", value: 85, fill: "#7D1414" },
  { name: "Berpikir Kritis", value: 70, fill: "#333333" },
  { name: "Tanggung Jawab", value: 80, fill: "#A11A1A" },
];

const COLORS = ["#C62828", "#1A1A1A", "#D97706", "#7D1414", "#333333"];

export default function ImpactPage() {
  return (
    <>
      <section className="pt-32 pb-16 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="bg-white/20 text-white border-0 mb-4">Dampak Program</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Dashboard Dampak</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Statistik dan hasil pengukuran dampak program CSR &ldquo;MAS Arya Peduli&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-page">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-xl ${stat.bgColor} ${stat.color} flex items-center justify-center mb-4`}
                  >
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                    <span className="text-lg text-gray-500 ml-1">{stat.suffix}</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <AnimatedSection>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Peningkatan Keterampilan Kepemimpinan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData.leadershipSkills} barGap={4}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 11 }}
                        angle={-45}
                        textAnchor="end"
                        height={80}
                      />
                      <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="before"
                        name="Sebelum"
                        fill="#9CA3AF"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="after"
                        name="Sesudah"
                        fill="#C62828"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Capaian Keterampilan (Sesudah Program)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                      cx="50%"
                      cy="50%"
                      innerRadius="20%"
                      outerRadius="90%"
                      barSize={15}
                      data={improvementData}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <RadialBar
                        label={{ fill: "#666", position: "insideStart" }}
                        background
                        dataKey="value"
                      />
                      <Legend
                        iconSize={10}
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                      />
                      <Tooltip />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <AnimatedSection>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Partisipasi per Kelas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData.participationByClass}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {chartData.participationByClass.map((_, i) => (
                          <Cell
                            key={i}
                            fill={COLORS[i % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Ringkasan Dampak Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {chartData.programImpact.map((item, i) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-400">
                          {item.name}
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {item.value}%
                        </span>
                      </div>
                      <div className="h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className={`h-full rounded-full`}
                          style={{
                            backgroundColor: COLORS[i % COLORS.length],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Testimoni"
            subtitle="Apa kata mereka tentang program MAS Arya Peduli"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <Card className="h-full group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      &ldquo;{t.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {t.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">
                          {t.name}
                        </p>
                        <p className="text-xs text-gray-500">{t.role}</p>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            className={`h-4 w-4 ${
                              j < t.rating
                                ? "text-accent fill-accent"
                                : "text-gray-200 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
