"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadButton() {
  const handleDownload = () => {
    const content = `LAPORAN PENELITIAN
STRATEGI HUBUNGAN MASYARAKAT PT MAS ARYA INDONESIA
MELALUI PROGRAM CSR "MAS ARYA PEDULI"

Latar Belakang
${`PT MAS Arya Indonesia merupakan perusahaan manufaktur pakaian jadi yang memproduksi berbagai merek internasional seperti Nike, Lululemon, Victoria's Secret, dan Calvin Klein. Perusahaan menjalankan program CSR bernama "MAS Arya Peduli" yang berfokus pada pengembangan karakter dan kepemimpinan siswa SD Negeri Campurejo di Boja, Kendal.`}

Rumusan Masalah:
1. Bagaimana strategi hubungan masyarakat yang diterapkan PT MAS Arya Indonesia melalui program CSR "MAS Arya Peduli"?
2. Apa dampak program CSR "MAS Arya Peduli" terhadap hubungan PT MAS Arya Indonesia dengan masyarakat lokal?
3. Hambatan apa yang dihadapi dalam pelaksanaan program CSR "MAS Arya Peduli" dan bagaimana solusinya?

Metodologi:
- Pendekatan: Kualitatif dengan metode studi kasus
- Pengumpulan data: Wawancara mendalam, observasi, dokumentasi, studi dokumen
- Analisis: Model Miles dan Huberman

Kesimpulan:
Program CSR "MAS Arya Peduli" merupakan implementasi strategi hubungan masyarakat yang efektif dalam membangun hubungan harmonis antara PT MAS Arya Indonesia dengan masyarakat lokal.`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Laporan_Penelitian_MAS_Arya_Peduli.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button onClick={handleDownload} variant="outline" className="gap-2">
      <Download className="h-4 w-4" />
      Download Laporan PDF
    </Button>
  );
}
