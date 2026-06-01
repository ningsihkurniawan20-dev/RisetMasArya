"use client";

import { format } from "date-fns";
import { id } from "date-fns/locale";
import { FileText, Calendar, User, Newspaper, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ShareButtons from "@/components/shared/ShareButtons";

const pressReleaseData = {
  title:
    "PT MAS Arya Indonesia Gelar Pelatihan Kepemimpinan bagi Siswa SD Negeri Campurejo",
  date: new Date("2024-11-15"),
  author: "Tim Humas PT MAS Arya Indonesia",
  location: "KENDAL",
  content: [
    {
      type: "paragraph",
      text: "PT MAS Arya Indonesia, perusahaan manufaktur pakaian jadi terkemuka yang memproduksi merek-merek global seperti Nike, Lululemon, Victoria's Secret, dan Calvin Klein, kembali menunjukkan komitmennya terhadap pengembangan masyarakat melalui program Corporate Social Responsibility (CSR) bertajuk 'MAS Arya Peduli'.",
    },
    {
      type: "paragraph",
      text: "Kali ini, program yang berfokus pada pengembangan karakter dan kepemimpinan siswa sekolah dasar tersebut digelar di SD Negeri Campurejo, Boja, Kendal. Kegiatan yang berlangsung selama dua hari ini diikuti oleh 60 siswa dari kelas 4, 5, dan 6.",
    },
    {
      type: "quote",
      text: "Kami percaya bahwa investasi terbaik adalah investasi pada generasi muda. Melalui program MAS Arya Peduli, kami ingin mencetak generasi Changemakers yang memiliki jiwa kepemimpinan, kemampuan berpikir kritis, dan empati yang tinggi.",
      speaker: "Public Relations Manager PT MAS Arya Indonesia",
    },
    {
      type: "paragraph",
      text: "Selama pelatihan, para siswa diajak untuk mengikuti berbagai aktivitas interaktif, termasuk simulasi kepemimpinan, diskusi kelompok, dan permainan peran yang dirancang untuk membangun karakter dan keterampilan sosial. Para fasilitator dari tim Public Relations PT MAS Arya Indonesia memandu setiap sesi dengan pendekatan yang menyenangkan dan partisipatif.",
    },
    {
      type: "subheading",
      text: "Dukungan Penuh dari Pihak Sekolah",
    },
    {
      type: "paragraph",
      text: "Kepala SD Negeri Campurejo menyambut baik program ini. Menurutnya, program ini memberikan pengalaman berharga bagi siswa-siswi dan melengkapi pendidikan formal yang mereka terima di sekolah.",
    },
    {
      type: "paragraph",
      text: "Program MAS Arya Peduli merupakan bagian dari strategi hubungan masyarakat PT MAS Arya Indonesia untuk membangun hubungan yang harmonis dengan masyarakat lokal, khususnya di sekitar wilayah operasional perusahaan di Kendal. Melalui program ini, perusahaan tidak hanya memberikan manfaat langsung kepada masyarakat, tetapi juga membangun citra positif dan kepercayaan publik.",
    },
    {
      type: "subheading",
      text: "Komitmen Berkelanjutan",
    },
    {
      type: "quote",
      text: "Kami berharap program ini dapat berkelanjutan dan memberikan dampak jangka panjang bagi perkembangan karakter siswa. Ini adalah bentuk nyata kontribusi kami terhadap pembangunan sumber daya manusia Indonesia.",
      speaker: "Public Relations Manager PT MAS Arya Indonesia",
    },
    {
      type: "paragraph",
      text: "Kegiatan ditutup dengan pemberian sertifikat partisipasi kepada seluruh siswa dan penyerahan bantuan perlengkapan sekolah dari PT MAS Arya Indonesia.",
    },
  ],
  tags: ["CSR", "MAS Arya Peduli", "Kepemimpinan", "Pendidikan", "Kendal"],
};

export default function PressReleasePage() {
  return (
    <>
      <section className="pt-32 pb-16 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="bg-white/20 text-white border-0 mb-4">Press Release</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Press Release</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Publikasi resmi kegiatan dan program CSR PT MAS Arya Indonesia
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-page">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <Card className="mb-8">
              <CardContent className="p-8 sm:p-12">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 uppercase tracking-wider">
                  <Newspaper className="h-4 w-4" />
                  <span>Press Release</span>
                  <span className="text-gray-300">|</span>
                  <Calendar className="h-4 w-4" />
                  <span>
                    {format(pressReleaseData.date, "d MMMM yyyy", { locale: id })}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {pressReleaseData.title}
                </h2>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <User className="h-4 w-4" />
                  <span>{pressReleaseData.author}</span>
                  <span className="text-gray-300">•</span>
                  <Building2 className="h-4 w-4" />
                  <span>{pressReleaseData.location}</span>
                </div>

                <div className="space-y-6">
                  {pressReleaseData.content.map((block, i) => {
                    if (block.type === "paragraph") {
                      return (
                        <p
                          key={i}
                          className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify"
                        >
                          {block.text}
                        </p>
                      );
                    }
                    if (block.type === "quote") {
                      return (
                        <div
                          key={i}
                          className="relative pl-6 border-l-4 border-primary bg-primary/5 rounded-r-xl p-6 my-8"
                        >
                          <p className="text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                            &ldquo;{block.text}&rdquo;
                          </p>
                          {block.speaker && (
                            <p className="text-sm font-semibold text-primary">
                              — {block.speaker}
                            </p>
                          )}
                        </div>
                      );
                    }
                    if (block.type === "subheading") {
                      return (
                        <h3
                          key={i}
                          className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4"
                        >
                          {block.text}
                        </h3>
                      );
                    }
                    return null;
                  })}
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pressReleaseData.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <ShareButtons />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
