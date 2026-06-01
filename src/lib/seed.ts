import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.galleryImage.createMany({
    data: [
      {
        title: "Pembukaan Program MAS Arya Peduli",
        description: "Acara pembukaan program CSR di SD Negeri Campurejo",
        imageUrl: "/images/gallery-1.jpg",
        category: "Acara",
      },
      {
        title: "Sesi Pelatihan Kepemimpinan",
        description: "Siswa mengikuti sesi pelatihan kepemimpinan interaktif",
        imageUrl: "/images/gallery-2.jpg",
        category: "Pelatihan",
      },
      {
        title: "Kegiatan Kelompok",
        description: "Siswa bekerja sama dalam kegiatan kelompok",
        imageUrl: "/images/gallery-3.jpg",
        category: "Kegiatan",
      },
      {
        title: "Simulasi Kepemimpinan",
        description: "Simulasi peran pemimpin dalam kelompok",
        imageUrl: "/images/gallery-4.jpg",
        category: "Simulasi",
      },
      {
        title: "Sesi Diskusi Interaktif",
        description: "Diskusi kelompok tentang nilai-nilai kepemimpinan",
        imageUrl: "/images/gallery-5.jpg",
        category: "Diskusi",
      },
      {
        title: "Penutupan Program",
        description: "Acara penutupan dan pemberian sertifikat",
        imageUrl: "/images/gallery-6.jpg",
        category: "Acara",
      },
    ],
  });

  await prisma.pressRelease.create({
    data: {
      title: "PT MAS Arya Indonesia Gelar Pelatihan Kepemimpinan bagi Siswa SD Negeri Campurejo",
      content: `KENDAL – PT MAS Arya Indonesia, perusahaan manufaktur pakaian jadi terkemuka yang memproduksi merek-merek global seperti Nike, Lululemon, Victoria's Secret, dan Calvin Klein, kembali menunjukkan komitmennya terhadap pengembangan masyarakat melalui program Corporate Social Responsibility (CSR) bertajuk "MAS Arya Peduli".

Kali ini, program yang berfokus pada pengembangan karakter dan kepemimpinan siswa sekolah dasar tersebut digelar di SD Negeri Campurejo, Boja, Kendal. Kegiatan yang berlangsung selama dua hari ini diikuti oleh 60 siswa dari kelas 4, 5, dan 6.

"Kami percaya bahwa investasi terbaik adalah investasi pada generasi muda. Melalui program MAS Arya Peduli, kami ingin mencetak generasi Changemakers yang memiliki jiwa kepemimpinan, kemampuan berpikir kritis, dan empati yang tinggi," ujar [Nama], Public Relations Manager PT MAS Arya Indonesia.

Selama pelatihan, para siswa diajak untuk mengikuti berbagai aktivitas interaktif, termasuk simulasi kepemimpinan, diskusi kelompok, dan permainan peran yang dirancang untuk membangun karakter dan keterampilan sosial. Para fasilitator dari tim Public Relations PT MAS Arya Indonesia memandu setiap sesi dengan pendekatan yang menyenangkan dan partisipatif.

Kepala SD Negeri Campurejo, [Nama Kepala Sekolah], menyambut baik program ini. "Kami sangat berterima kasih atas inisiatif PT MAS Arya Indonesia. Program ini memberikan pengalaman berharga bagi siswa-siswi kami dan melengkapi pendidikan formal yang mereka terima di sekolah."

Program MAS Arya Peduli merupakan bagian dari strategi hubungan masyarakat PT MAS Arya Indonesia untuk membangun hubungan yang harmonis dengan masyarakat lokal, khususnya di sekitar wilayah operasional perusahaan di Kendal. Melalui program ini, perusahaan tidak hanya memberikan manfaat langsung kepada masyarakat, tetapi juga membangun citra positif dan kepercayaan publik.

"Kami berharap program ini dapat berkelanjutan dan memberikan dampak jangka panjang bagi perkembangan karakter siswa. Ini adalah bentuk nyata kontribusi kami terhadap pembangunan sumber daya manusia Indonesia," tambah [Nama].

Kegiatan ditutup dengan pemberian sertifikat partisipasi kepada seluruh siswa dan penyerahan bantuan perlengkapan sekolah dari PT MAS Arya Indonesia.`,
      date: new Date("2024-11-15"),
      author: "Tim Humas PT MAS Arya Indonesia",
      slug: "pelatihan-kepemimpinan-sd-campurejo-2024",
    },
  });

  await prisma.programTimeline.createMany({
    data: [
      {
        title: "Perencanaan Program",
        description: "Tim PR melakukan assessment kebutuhan masyarakat dan merancang program",
        date: new Date("2024-06-01"),
        status: "completed",
        icon: "ClipboardList",
      },
      {
        title: "Koordinasi dengan Sekolah",
        description: "Koordinasi dengan pihak SD Negeri Campurejo dan Dinas Pendidikan",
        date: new Date("2024-07-15"),
        status: "completed",
        icon: "Handshake",
      },
      {
        title: "Persiapan Materi & Fasilitator",
        description: "Pengembangan modul pelatihan dan persiapan tim fasilitator",
        date: new Date("2024-08-01"),
        status: "completed",
        icon: "BookOpen",
      },
      {
        title: "Pelaksanaan Program",
        description: "Pelaksanaan pelatihan kepemimpinan selama 2 hari di SD Negeri Campurejo",
        date: new Date("2024-09-10"),
        status: "completed",
        icon: "CalendarCheck",
      },
      {
        title: "Monitoring & Evaluasi",
        description: "Evaluasi dampak program dan pengukuran hasil",
        date: new Date("2024-10-01"),
        status: "completed",
        icon: "BarChart3",
      },
      {
        title: "Pelaporan & Publikasi",
        description: "Penyusunan laporan hasil program dan publikasi ke publik",
        date: new Date("2024-11-01"),
        status: "completed",
        icon: "FileText",
      },
      {
        title: "Program Lanjutan 2025",
        description: "Perencanaan program lanjutan dengan cakupan yang lebih luas",
        date: new Date("2025-01-15"),
        status: "upcoming",
        icon: "Target",
      },
    ],
  });

  await prisma.testimonial.createMany({
    data: [
      {
        name: "Ahmad Fauzi",
        role: "Kepala Sekolah SD Negeri Campurejo",
        content: "Program MAS Arya Peduli memberikan dampak positif yang signifikan bagi siswa-siswi kami. Mereka menjadi lebih percaya diri dan memiliki jiwa kepemimpinan yang mulai terbentuk.",
        rating: 5,
      },
      {
        name: "Siti Nurhaliza",
        role: "Guru Kelas 5",
        content: "Metode pelatihan yang interaktif dan menyenangkan sangat cocok untuk anak-anak. Kami melihat perubahan positif dalam cara mereka berinteraksi dan bekerja sama.",
        rating: 5,
      },
      {
        name: "Budi Santoso",
        role: "Orang Tua Siswa",
        content: "Anak saya jadi lebih berani berbicara di depan umum dan lebih percaya diri. Terima kasih PT MAS Arya Indonesia untuk program yang luar biasa ini.",
        rating: 4,
      },
      {
        name: "Rina Wulandari",
        role: "Siswi Kelas 6",
        content: "Belajar kepemimpinan jadi seru! Kami belajar tentang pentingnya kerja sama tim dan bagaimana menjadi pemimpin yang baik.",
        rating: 5,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
