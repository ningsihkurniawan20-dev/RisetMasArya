"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { enUS } from "date-fns/locale";
import { FileText, Calendar, User, Building2, Music, Camera, Clock, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { useTranslation } from "@/contexts/LanguageContext";

const articles = [
  {
    id: "csr",
    category: "CSR",
    icon: FileText,
    accentColor: "border-l-blue-600",
    headerGradient: "from-blue-600 to-blue-800",
    categoryColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    title: "MAS Arya Indonesia Cetak Generasi Pembawa Perubahan Melalui Pelatihan Kepemimpinan di Boja",
    date: new Date("2026-05-07"),
    authorKey: "press.author",
    location: "KENDAL",
    content: [
      { type: "paragraph", text: "PT MAS Arya Indonesia, produsen pakaian global terkemuka, menyelenggarakan sesi pelatihan kepemimpinan bagi siswa SD Negeri Campurejo, Boja, sebagai bagian dari komitmen berkelanjutan perusahaan untuk memberdayakan masyarakat lokal dan mencetak generasi \"Changemakers\" masa depan." },
      { type: "paragraph", text: "Kegiatan yang dilaksanakan pada awal Mei ini melibatkan puluhan siswa kelas 5 dan 6. Dalam sesi ini, para siswa dibekali keterampilan berpikir kritis, pengelolaan emosi, dan kepemimpinan berbasis empati. Inisiatif ini merupakan perwujudan nyata dari misi perusahaan untuk tidak hanya memproduksi pakaian berkualitas, tetapi juga menginspirasi SDM untuk membawa dampak positif bagi dunia." },
      { type: "quote", text: "Di MAS Arya, kami percaya bahwa kepemimpinan dimulai dari sekarang, bukan hanya untuk masa depan. Dengan membina karakter anak-anak sejak dini, kami berharap mereka dapat menjadi penggerak perubahan di komunitasnya masing-masing.", speaker: "Perwakilan Manajemen MAS Arya Indonesia" },
      { type: "paragraph", text: "Selama pelatihan, para siswa diajak berinteraksi melalui simulasi pengambilan keputusan dan diskusi kelompok yang bertujuan meningkatkan kepercayaan diri. Program ini juga merupakan bagian dari strategi komunikasi sosial perusahaan untuk mempererat hubungan dengan warga sekitar pabrik yang berlokasi di Dukuh Ngelorok, Desa Campurejo, Boja." },
      { type: "paragraph", text: "Sebagai perusahaan manufaktur yang mempekerjakan ribuan tenaga kerja lokal, PT MAS Arya Indonesia terus berupaya menyeimbangkan operasional bisnis dengan program pengembangan sosial. Melalui kampanye ini, perusahaan menegaskan posisinya sebagai mitra strategis bagi pembangunan masyarakat di Kabupaten Kendal." },
    ],
    tags: ["CSR", "MAS Arya Peduli", "Kepemimpinan", "Pendidikan", "Changemakers", "Kendal"],
  },
  {
    id: "aryaphoria",
    category: "Event Internal",
    icon: Music,
    accentColor: "border-l-purple-600",
    headerGradient: "from-purple-600 to-purple-800",
    categoryColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    title: "ARYAPHORIA 2025: Konser Musik Meriahkan Semangat Karyawan MAS ARYA Kendal",
    date: new Date("2025-12-13"),
    authorKey: "press.author",
    location: "BOJA, KENDAL",
    content: [
      { type: "paragraph", text: "Acara ini merupakan hiburan nuansa konser musik untuk karyawan internal MAS ARYA Kendal. Kegiatan ini dilaksanakan pada 13 Desember 2025 dengan guest star DJ Mentik Wangi, Jihan Audy, Pandawa Band musik lokal, serta karyawan yang ikut serta menyumbangkan suara emasnya di panggung konser Aryaphoria." },
      { type: "paragraph", text: "Kegiatan ini diselenggarakan sebagai rewarding bagi karyawan MAS ARYA Boja, yang sudah mencapai achievement target dan juga sebuah hasil dari Fire Tred yang merupakan bentuk insentif yang didapatkan dari hasil produk yang diorder oleh brand Patagonia." },
      { type: "paragraph", text: "Seluruh karyawan tentu sangat antusias untuk melihat konser ini sebagai hiburan gratis yang menyenangkan. Setelah lelah bekerja seharian lalu disuguhkan live music tentu membuat semangat kembali bergairah." },
      { type: "quote", text: "Harapannya semoga MAS ARYA Kendal sukses selalu, dan tahun depan ditunggu lagi event lainnya yang lebih meriah.", speaker: "Karyawan PT MAS Arya Indonesia" },
      { type: "paragraph", text: "Dengan adanya event konser Aryaphoria ini menunjukkan bahwa semangat kerja karyawan diapresiasi oleh perusahaan dan juga tingkat kesejahteraannya yang terjamin membuat MAS ARYA semakin menunjukkan eksistensinya dalam dunia industri ini." },
    ],
    tags: ["Event", "Konser", "Aryaphoria", "Karyawan", "Patagonia", "Fire Tred"],
  },
  {
    id: "fashion",
    category: "Event Internal",
    icon: Camera,
    accentColor: "border-l-pink-600",
    headerGradient: "from-pink-600 to-pink-800",
    categoryColor: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    title: "Acara Fashion Show TL & GL Semarakkan Bulan Ramadhan di MAS Arya Indonesia",
    date: new Date("2026-02-26"),
    authorKey: "press.author",
    location: "BOJA, KENDAL",
    content: [
      { type: "paragraph", text: "Fashion show merupakan ajang untuk berjalan di atas red karpet dan ditonton oleh banyak orang. Kali ini bukan hanya model tetapi Team Leader dan Group Leader juga unjuk diri untuk berlenggak-lenggok berjalan anggun melewati karpet panjang yang disaksikan oleh teman-teman team member yang ada di perusahaan." },
      { type: "paragraph", text: "Acara ini digelar pada 26 Februari 2026 yang diikuti oleh TL dan GL shift A maupun shift B, dengan mengenakan pakaian muslim terbaik mereka dengan riasan wajah sekreatif mungkin yang memikat para juri. Juri sendiri diambil dari staff manajemen, dan juga manager HR sebagai bagian dari penilai kompetisi. Dengan berbagai properti yang dipakai menambah meriah acara fashion show saat itu." },
    ],
    tags: ["Fashion Show", "TL", "GL", "Ramadhan", "Karyawan", "Event Internal"],
  },
  {
    id: "training",
    category: "Pengembangan SDM",
    icon: FileText,
    accentColor: "border-l-green-600",
    headerGradient: "from-green-600 to-green-800",
    categoryColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    title: "Training Team Leader: Membangun Multiskill dan Rasa Percaya Diri",
    date: new Date("2026"),
    authorKey: "press.author",
    location: "BOJA, KENDAL",
    content: [
      { type: "paragraph", text: "Di MAS ARYA Indonesia mendukung penuh seluruh karyawan dari Team Member level sampai Internal staff untuk menjadi multiskill dan upgrade diri menjadi level yang lebih baik. Salah satunya yaitu adanya training TL atau team leader sebagai bentuk untuk mempermudah manajemen mengontrol data yang sedang berjalan di produksi." },
      { type: "paragraph", text: "Satu TL bertanggungjawab untuk memegang satu lini produksi, mulai dari mempersiapkan material, proses jahit, sampai good garment, dan packing lalu dikirim ke customer." },
      { type: "paragraph", text: "Sering kali rasa percaya diri yang rendah menjadi hal sulit untuk tim ER merekrut calon TL ini. Seiring waktu pendampingan penuh dari ER untuk membangun rasa percaya diri dan empati bahwa pekerjaan ini bisa dilakukan secara teamwork dan dengan berjalannya waktu pasti kita bisa melakukan yang terbaik untuk pemenuhan standar hour dan achievement target harian." },
    ],
    tags: ["Training", "Team Leader", "SDM", "Pengembangan Karyawan", "Produksi"],
  },
];

const readingTime = (content: { type: string; text: string }[]): number => {
  const wordCount = content
    .filter(b => b.type === "paragraph")
    .reduce((sum, b) => sum + b.text.split(/\s+/).length, 0);
  return Math.max(1, Math.round(wordCount / 200));
};

const allCategories = ["Semua", "CSR", "Event Internal", "Pengembangan SDM"];

export default function PressReleasePage() {
  const { t, locale } = useTranslation();
  const dateLocale = locale === "id" ? id : enUS;
  const [expandedArticles, setExpandedArticles] = useState<Record<string, boolean>>({});
  const [filter, setFilter] = useState("Semua");
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const toggleExpand = (id: string) => {
    setExpandedArticles(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = filter === "Semua"
    ? articles
    : articles.filter(a => a.category === filter);

  const scrollTo = useCallback((index: number) => {
    if (!sliderRef.current) return;
    const cards = sliderRef.current.querySelectorAll<HTMLElement>("[data-slide]");
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      setSliderIndex(index);
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-slide]");
    let active = 0;
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      if (rect.left <= containerRect.left + 60) active = i;
    });
    setSliderIndex(active);
  }, []);

  const renderCard = (article: typeof articles[0], isExpanded: boolean, mins: number, isFeatured: boolean, toggleExpand: (id: string) => void, t: any, locale: string, dateLocale: any) => (
    <Card className={`overflow-hidden shadow-md ${isFeatured ? "border-t-4 border-t-primary" : ""}`}>
      {isFeatured && (
        <div className={`h-2 bg-gradient-to-r ${article.headerGradient}`} />
      )}
      <CardContent className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium ${article.categoryColor}`}>
            <article.icon className="h-3 w-3" />
            {article.category}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-gray-400">
            <Calendar className="h-3 w-3" />
            {format(article.date, "d MMMM yyyy", { locale: dateLocale })}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-gray-400 ml-auto">
            <Clock className="h-3 w-3" />
            {locale === "id" ? `${mins} mnt` : `${mins} min`}
          </span>
        </div>

        <h3 className={`font-bold text-gray-900 dark:text-white leading-tight mb-2 ${isFeatured ? "text-xl" : "text-base"}`}>
          {article.title}
        </h3>

        <div className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400 mb-3 pb-3 border-b border-gray-100 dark:border-gray-800">
          <User className="h-3 w-3" />
          <span className="truncate">{t(article.authorKey)}</span>
          <span className="text-gray-300 dark:text-gray-600">•</span>
          <Building2 className="h-3 w-3 shrink-0" />
          <span>{article.location}</span>
        </div>

        <div className="space-y-3">
          {article.content.map((block, i) => {
            const isPastExcerpt = i >= 2;
            if (isPastExcerpt && !isExpanded) return null;

            if (block.type === "paragraph") {
              return (
                <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify text-sm">
                  {block.text}
                </p>
              );
            }
            if (block.type === "quote") {
              return (
                <div key={i} className="relative">
                  <span className="absolute -top-2 -left-1 text-3xl text-primary/20 dark:text-primary/30 leading-none select-none font-serif">
                    &ldquo;
                  </span>
                  <div className="pl-5 border-l-4 border-primary bg-primary/5 dark:bg-primary/10 rounded-r-xl p-4">
                    <p className="text-sm italic text-gray-700 dark:text-gray-300 leading-relaxed">
                      {block.text}
                    </p>
                    {block.speaker && (
                      <p className="text-[11px] font-semibold text-primary mt-1.5">
                        — {block.speaker}
                      </p>
                    )}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        {article.content.length > 2 && (
          <button
            onClick={() => toggleExpand(article.id)}
            className="mt-3 flex items-center gap-1 text-[11px] font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {isExpanded ? (
              <><ChevronUp className="h-3 w-3" /> {locale === "id" ? "Sembunyikan" : "Hide"}</>
            ) : (
              <><ChevronDown className="h-3 w-3" /> {locale === "id" ? "Baca selengkapnya" : "Read more"}</>
            )}
          </button>
        )}

        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-wrap gap-1">
            {article.tags.map((tag) => (
              <span key={tag} className="text-[10px] text-gray-400 dark:text-gray-500 hover:text-primary transition-colors cursor-default">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <section className="pt-32 pb-16 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="bg-white/20 text-white border-0 mb-4">{t("press.hero.badge")}</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t("press.hero.title")}</h1>
            <p className="text-xl text-white/80 max-w-2xl">{t("press.hero.subtitle")}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-page">
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {allCategories.map(cat => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        <div className="lg:hidden">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollPaddingLeft: "calc((100vw - 340px) / 2)",
              scrollPaddingRight: "calc((100vw - 340px) / 2)",
            }}
          >
            {filtered.map((article, idx) => {
              const isExpanded = expandedArticles[article.id];
              const mins = readingTime(article.content);
              return (
                <div key={article.id} data-slide className="snap-center shrink-0 w-[75vw] max-w-[340px]">
                  <AnimatedSection delay={idx * 0.05}>
                    {renderCard(article, isExpanded, mins, false, toggleExpand, t, locale, dateLocale)}
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
          {filtered.length > 1 && (
            <div className="flex items-center justify-center gap-5 mt-4">
              <button
                onClick={() => scrollTo(sliderIndex - 1)}
                disabled={sliderIndex === 0}
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 border border-gray-200 dark:border-gray-700 hover:text-primary hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2 items-center">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === sliderIndex
                        ? "bg-primary w-6"
                        : "bg-gray-300 dark:bg-gray-600 w-2.5 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => scrollTo(sliderIndex + 1)}
                disabled={sliderIndex === filtered.length - 1}
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 border border-gray-200 dark:border-gray-700 hover:text-primary hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filtered.map((article, idx) => {
            const isExpanded = expandedArticles[article.id];
            const mins = readingTime(article.content);
            return (
              <AnimatedSection key={article.id} delay={idx * 0.05}>
                {renderCard(article, isExpanded, mins, false, toggleExpand, t, locale, dateLocale)}
              </AnimatedSection>
            );
          })}
        </div>
      </section>
    </>
  );
}
