"use client";

import {
  BookOpen,
  FileText,
  Lightbulb,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Target,
  ClipboardList,
  Users,
  TrendingUp,
  Layers,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ShareButtons from "@/components/shared/ShareButtons";
import DownloadButton from "@/components/shared/DownloadButton";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";
import { researchData, chartData } from "@/data/research-data";

const COLORS = ["#C62828", "#1A1A1A", "#D97706", "#7D1414"];

export default function ResearchPage() {
  return (
    <>
      <section className="pt-32 pb-16 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="bg-white/20 text-white border-0 mb-4">Hasil Penelitian</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hasil Penelitian</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              {researchData.title}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <DownloadButton />
              <ShareButtons />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-page">
        <Tabs defaultValue="background" className="w-full">
          <TabsList className="w-full flex-wrap h-auto justify-start gap-1 mb-8 bg-transparent p-0">
            <TabsTrigger value="background" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Latar Belakang
            </TabsTrigger>
            <TabsTrigger value="methodology" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Metodologi
            </TabsTrigger>
            <TabsTrigger value="findings" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Temuan
            </TabsTrigger>
            <TabsTrigger value="charts" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Grafik
            </TabsTrigger>
            <TabsTrigger value="conclusion" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Kesimpulan
            </TabsTrigger>
          </TabsList>

          <TabsContent value="background">
            <AnimatedSection>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    Latar Belakang Penelitian
                  </h2>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {researchData.background}
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-accent" />
                    Rumusan Masalah
                  </h3>
                  <ul className="space-y-3">
                    {researchData.researchQuestions.map((q, i) => (
                      <li key={i} className="flex gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                        <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-sm font-bold">
                          {i + 1}
                        </span>
                        <p className="text-gray-700 dark:text-gray-300">{q}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Card className="sticky top-24">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                        <Layers className="h-5 w-5 inline mr-2 text-primary" />
                        Ringkasan
                      </h3>
                      <div className="space-y-4">
                        {[
                          { icon: Users, label: "Total Partisipan", value: researchData.statistics.totalParticipants },
                          { icon: TrendingUp, label: "Tingkat Kepuasan", value: `${researchData.statistics.satisfactionRate}%` },
                          { icon: BarChart3, label: "Peningkatan Skill", value: `${researchData.statistics.skillImprovement}%` },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                            <span className="text-sm text-gray-500 flex items-center gap-2">
                              <item.icon className="h-4 w-4" />
                              {item.label}
                            </span>
                            <span className="text-sm font-bold text-primary">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          </TabsContent>

          <TabsContent value="methodology">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <ClipboardList className="h-6 w-6 text-primary" />
                Metodologi Penelitian
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pendekatan</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{researchData.methodology.approach}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Jenis</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{researchData.methodology.type}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analisis</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{researchData.methodology.analysis}</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Teknik Pengumpulan Data</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {researchData.methodology.dataCollection.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </TabsContent>

          <TabsContent value="findings">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-accent" />
                Temuan Utama Penelitian
              </h2>

              <div className="space-y-6">
                {researchData.findings.map((finding, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                          {i + 1}
                        </span>
                        {finding.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{finding.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </TabsContent>

          <TabsContent value="charts">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Visualisasi Data
              </h2>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Peningkatan Keterampilan Kepemimpinan
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">Perbandingan sebelum dan sesudah program</p>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData.leadershipSkills} barGap={4}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                          <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="before" name="Sebelum" fill="#9CA3AF" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="after" name="Sesudah" fill="#C62828" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Dampak Program
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">Persentase capaian program</p>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData.programImpact} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11 }} />
                          <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={120} />
                          <Tooltip />
                          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                            {chartData.programImpact.map((_, i) => (
                              <Cell key={i} fill={COLORS[i % COLORS.length]} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Partisipasi per Kelas
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">Distribusi peserta berdasarkan kelas</p>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData.participationByClass}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                          <YAxis tick={{ fontSize: 11 }} />
                          <Tooltip />
                          <Bar dataKey="value" name="Jumlah Siswa" radius={[4, 4, 0, 0]}>
                            {chartData.participationByClass.map((_, i) => (
                              <Cell key={i} fill={COLORS[i % COLORS.length]} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </TabsContent>

          <TabsContent value="conclusion">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Target className="h-6 w-6 text-primary" />
                      Kesimpulan
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                      {researchData.conclusion}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
