"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const searchItems = [
  { title: "Beranda", href: "/", category: "Halaman" },
  { title: "Tentang Perusahaan", href: "/about", category: "Halaman" },
  { title: "Program CSR", href: "/program", category: "Halaman" },
  { title: "Hasil Penelitian", href: "/research", category: "Halaman" },
  { title: "Press Release", href: "/press-release", category: "Halaman" },
  { title: "Galeri Kegiatan", href: "/gallery", category: "Halaman" },
  { title: "Dampak Program", href: "/impact", category: "Halaman" },
  { title: "Referensi", href: "/references", category: "Halaman" },
  { title: "Kontak", href: "/contact", category: "Halaman" },
  {
    title: "Press Release: Pelatihan Kepemimpinan SD Campurejo",
    href: "/press-release",
    category: "Press Release",
  },
];

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filtered = query.trim()
    ? searchItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchItems;

  const handleSelect = useCallback(
    (href: string) => {
      onOpenChange(false);
      setQuery("");
      router.push(href);
    },
    [router, onOpenChange]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Cari halaman atau artikel</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Ketik untuk mencari..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
            autoFocus
          />
        </div>
        <div className="max-h-80 overflow-y-auto space-y-1">
          {filtered.length === 0 ? (
            <p className="text-center text-sm text-gray-500 py-8">
              Tidak ditemukan hasil untuk &ldquo;{query}&rdquo;
            </p>
          ) : (
            filtered.map((item) => (
              <button
                key={item.href + item.title}
                onClick={() => handleSelect(item.href)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <FileText className="h-4 w-4 text-gray-400 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))
          )}
        </div>
        <p className="text-xs text-gray-400 text-center">
          Tekan <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono">Ctrl+K</kbd> untuk membuka pencarian
        </p>
      </DialogContent>
    </Dialog>
  );
}
