# MAS Arya Peduli — CSR Research Website

> Website presentasi penelitian kualitatif tentang **Strategi Hubungan Masyarakat PT MAS Arya Indonesia melalui Program CSR "MAS Arya Peduli" dalam Membangun Hubungan dengan Masyarakat Lokal**

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Prisma](https://img.shields.io/badge/Prisma-5.22-2D3748?logo=prisma)](https://www.prisma.io)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## Daftar Isi

- [Tentang Penelitian](#tentang-penelitian)
- [Temuan Utama](#temuan-utama)
- [Teknologi](#teknologi)
- [Fitur Website](#fitur-website)
- [Instalasi Lokal](#instalasi-lokal)
- [Deploy ke Vercel](#deploy-ke-vercel)
- [Struktur Proyek](#struktur-proyek)
- [Kontribusi](#kontribusi)

---

## Tentang Penelitian

### Latar Belakang

**PT MAS Arya Indonesia** adalah perusahaan manufaktur garmen yang berlokasi di Kecamatan Kendal, Kabupaten Kendal, Jawa Tengah. Didirikan pada tahun 2015, perusahaan ini memproduksi pakaian untuk brand global seperti **Nike, Lululemon, Victoria's Secret, dan Calvin Klein**, dengan lebih dari **3.500 karyawan**.

Program CSR **"MAS Arya Peduli"** berfokus pada pengembangan **kepemimpinan dan karakter** siswa sekolah dasar (kelas 4-6) di SD Negeri Campurejo, Boja, Kendal.

### Rumusan Masalah

1. Bagaimana strategi Hubungan Masyarakat yang dilakukan PT MAS Arya Indonesia melalui program CSR "MAS Arya Peduli"?
2. Bagaimana dampak program CSR terhadap hubungan perusahaan dengan masyarakat lokal?
3. Apa saja hambatan yang dihadapi dan bagaimana solusinya?

### Metodologi

| Aspek | Detail |
|-------|--------|
| **Jenis** | Penelitian kualitatif deskriptif |
| **Metode** | Studi kasus (*case study*) |
| **Pengumpulan Data** | Wawancara mendalam, observasi, dokumentasi, studi dokumen |
| **Analisis Data** | Model Miles & Huberman (reduksi data, penyajian data, penarikan kesimpulan) |
| **Validitas** | Triangulasi sumber dan triangulasi teknik |

---

## Temuan Utama

### Statistik Program

| Indikatori | Nilai |
|------------|-------|
| Total Peserta | **60 siswa** |
| Guru Pendamping | **6 orang** |
| Fasilitator | **8 orang** |
| Durasi Pelatihan | **2 hari (16 jam, 12 sesi)** |
| Kepuasan Peserta | **92%** |
| Partisipasi Aktif | **95%** |
| Peningkatan Keterampilan | **78%** |

### Peningkatan Keterampilan Kepemimpinan

| Keterampilan | Sebelum | Sesudah | Peningkatan |
|-------------|---------|---------|-------------|
| Kepercayaan Diri | 35% | 82% | +47% |
| Kerja Sama Tim | 45% | 88% | +43% |
| Komunikasi | 30% | 75% | +45% |
| Empati | 50% | 85% | +35% |
| Berpikir Kritis | 25% | 70% | +45% |
| Tanggung Jawab | 40% | 80% | +40% |

### Kesimpulan Penelitian

1. **Strategi PR** — PT MAS Arya Indonesia menerapkan strategi PR yang efektif melalui pendekatan *community development* dengan melibatkan stakeholder lokal secara aktif
2. **Dampak Positif** — Program CSR berhasil meningkatkan hubungan baik antara perusahaan dan masyarakat, ditunjukkan oleh tingkat kepuasan 92% dan partisipasi aktif 95%
3. **Hambatan & Solusi** — Tantangan utama meliputi keterbatasan waktu dan perbedaan budaya perusahaan-masyarakat, diatasi melalui komunikasi intensif dan adaptasi kurikulum

---

## Teknologi

| Layer | Teknologi | Versi |
|-------|-----------|-------|
| Framework | Next.js (App Router) | 15.1.0 |
| UI Library | React | 19.0.0 |
| Language | TypeScript | 5.7.2 |
| Styling | Tailwind CSS | 3.4.16 |
| Components | shadcn/ui + Radix UI | — |
| Animasi | Framer Motion | 11.11.17 |
| Charts | Recharts | 2.14.1 |
| Database | SQLite via Prisma | 5.22.0 |
| Icons | Lucide React | 0.460.0 |
| i18n | Context API | — |

---

## Fitur Website

- **Halaman Utama** — Hero animasi dengan counter statistik interaktif
- **Profil Perusahaan** — Informasi lengkap PT MAS Arya Indonesia
- **Program CSR** — Detail program "MAS Arya Peduli" dengan timeline interaktif
- **Hasil Penelitian** — Tabbed interface: Latar Belakang, Metodologi, Temuan, Grafik, Kesimpulan
- **Dashboard Dampak** — Visualisasi data dengan chart bar, pie, dan radial
- **Galeri Foto** — Grid filterable dengan lightbox navigasi
- **Press Release** — Artikel resmi program pelatihan kepemimpinan
- **Daftar Pustaka** — 10 sumber akademik yang dapat dicari dan difilter
- **Kontak** — Form kontak dengan embed Google Maps
- **Dark/Light Mode** — Toggle tema gelap/terang
- **Pencarian** — Shortcut `Ctrl+K` untuk pencarian cepat
- **Responsive** — Tampilan optimal di desktop, tablet, dan mobile
- **Bahasa Indonesia / English** — Toggle bahasa dengan Context API i18n
- **Download Laporan** — Export laporan penelitian dalam format TXT
- **Share Buttons** — Bagikan ke Twitter, Facebook, LinkedIn

---

## Instalasi Lokal

### Prasyarat

- [Node.js](https://nodejs.org) v18+ (direkomendasikan v20+)
- npm, yarn, atau pnpm
- Git

### Langkah Instalasi

**1. Clone Repository**

```bash
git clone https://github.com/ningsihkurniawan20-dev/RisetMasArya.git
cd RisetMasArya
```

**2. Install Dependencies**

```bash
npm install
```

**3. Setup Environment**

File `.env` sudah disediakan dengan konfigurasi default:

```env
DATABASE_URL="file:./prisma/dev.db"
```

**4. Setup Database**

```bash
npx prisma db push
npm run db:seed
```

**5. Jalankan Development Server**

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## Deploy ke Vercel

### Opsi 1: Deploy via Vercel Dashboard (Direkomendasikan)

1. **Push kode ke GitHub** (sudah selesai)

2. **Buka [vercel.com](https://vercel.com)** dan login dengan akun GitHub

3. **Import Repository**
   - Klik **"Add New → Project"**
   - Pilih repository `RisetMasArya`
   - Klik **"Import"**

4. **Konfigurasi Project**
   - Framework Preset: **Next.js** (otomatis terdeteksi)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

5. **Tambahkan Environment Variable**
   ```
   DATABASE_URL = file:./prisma/dev.db
   ```

6. **Klik "Deploy"** — tunggu hingga selesai (~1-2 menit)

7. **Selesai!** Website live di `https://riset-mas-arya.vercel.app`

### Opsi 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy (ikuti prompt)
vercel

# Deploy ke production
vercel --prod
```

### Catatan Penting untuk Vercel

> **Database SQLite** — Vercel menggunakan serverless functions yang bersifat *read-only*. SQLite tidak persisten di Vercel. Untuk production, gunakan:
> - [Turso](https://turso.tech) (SQLite serverless, gratis)
> - [Neon](https://neon.tech) (PostgreSQL serverless, gratis)
> - [PlanetScale](https://planetscale.com) (MySQL serverless)
>
> Ubah `provider` di `prisma/schema.prisma` dan sesuaikan `DATABASE_URL`.

---

## Struktur Proyek

```
├── prisma/
│   ├── schema.prisma          # Schema database (5 model)
│   └── dev.db                 # SQLite database
├── public/
│   └── images/                # Gambar publik (logo, kegiatan, event)
├── scripts/
│   └── convert-images.js      # Konversi gambar ke WebP
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout (Navbar, Footer, Theme, i18n)
│   │   ├── page.tsx           # Halaman utama
│   │   ├── about/             # Profil perusahaan
│   │   ├── contact/           # Kontak + maps
│   │   ├── gallery/           # Galeri foto
│   │   ├── impact/            # Dashboard dampak
│   │   ├── press-release/     # Press release
│   │   ├── program/           # Detail CSR program
│   │   ├── references/        # Daftar pustaka
│   │   └── research/          # Hasil penelitian + grafik
│   ├── components/
│   │   ├── home/              # Komponen halaman utama
│   │   ├── layout/            # Navbar, Footer, ScrollToTop
│   │   ├── shared/            # AnimatedSection, SearchDialog, dll
│   │   └── ui/                # shadcn/ui components
│   ├── contexts/
│   │   └── LanguageContext.tsx # Context i18n (ID/EN)
│   ├── data/
│   │   └── research-data.ts   # Data penelitian statis
│   ├── hooks/                 # Custom hooks
│   ├── lib/
│   │   ├── prisma.ts          # Prisma client
│   │   ├── seed.ts            # Seed database
│   │   └── utils.ts           # Utility functions
│   └── locales/
│       ├── en.ts              # English translations
│       └── id.ts              # Bahasa Indonesia translations
├── .env                       # Environment variables
├── components.json            # shadcn/ui config
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Kontribusi

Penelitian ini dilakukan oleh:

- **Penulis** — [ningsihkurniawan20-dev](https://github.com/ningsihkurniawan20-dev)
- **Institusi** — Universitas (sesuaikan)
- **Tahun** — 2024/2025

---

## Lisensi

Proyek ini menggunakan lisensi MIT. Silakan gunakan untuk keperluan akademik.

---

<p align="center">
  <b>MAS Arya Peduli</b> — Membangun Kepemimpinan dan Karakter Generasi Muda
</p>
