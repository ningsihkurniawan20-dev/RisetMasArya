"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { prisma } from "@/lib/prisma";

const galleryItems = [
  {
    id: 1,
    title: "Pembukaan Program MAS Arya Peduli",
    description: "Acara pembukaan program CSR di SD Negeri Campurejo",
    imageUrl: "/images/gallery-1.jpg",
    category: "Acara",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Sesi Pelatihan Kepemimpinan",
    description: "Siswa mengikuti sesi pelatihan kepemimpinan interaktif",
    imageUrl: "/images/gallery-2.jpg",
    category: "Pelatihan",
    color: "from-green-500 to-green-600",
  },
  {
    id: 3,
    title: "Kegiatan Kelompok",
    description: "Siswa bekerja sama dalam kegiatan kelompok",
    imageUrl: "/images/gallery-3.jpg",
    category: "Kegiatan",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 4,
    title: "Simulasi Kepemimpinan",
    description: "Simulasi peran pemimpin dalam kelompok",
    imageUrl: "/images/gallery-4.jpg",
    category: "Simulasi",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 5,
    title: "Sesi Diskusi Interaktif",
    description: "Diskusi kelompok tentang nilai-nilai kepemimpinan",
    imageUrl: "/images/gallery-5.jpg",
    category: "Diskusi",
    color: "from-teal-500 to-teal-600",
  },
  {
    id: 6,
    title: "Penutupan Program",
    description: "Acara penutupan dan pemberian sertifikat",
    imageUrl: "/images/gallery-6.jpg",
    category: "Acara",
    color: "from-red-500 to-red-600",
  },
  {
    id: 7,
    title: "Sesi Ice Breaking",
    description: "Permainan interaktif untuk mencairkan suasana",
    imageUrl: "/images/gallery-7.jpg",
    category: "Kegiatan",
    color: "from-pink-500 to-pink-600",
  },
  {
    id: 8,
    title: "Presentasi Kelompok",
    description: "Siswa mempresentasikan hasil diskusi kelompok",
    imageUrl: "/images/gallery-8.jpg",
    category: "Pelatihan",
    color: "from-indigo-500 to-indigo-600",
  },
];

const categories = ["Semua", "Acara", "Pelatihan", "Kegiatan", "Simulasi", "Diskusi"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered =
    activeCategory === "Semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const selectedItem = selectedImage !== null
    ? galleryItems.find((item) => item.id === selectedImage)
    : null;

  const navigate = (direction: "prev" | "next") => {
    if (!selectedItem) return;
    const currentIndex = filtered.findIndex((item) => item.id === selectedItem.id);
    if (direction === "prev" && currentIndex > 0) {
      setSelectedImage(filtered[currentIndex - 1].id);
    } else if (direction === "next" && currentIndex < filtered.length - 1) {
      setSelectedImage(filtered[currentIndex + 1].id);
    }
  };

  return (
    <>
      <section className="pt-32 pb-16 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="bg-white/20 text-white border-0 mb-4">Galeri</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Galeri Kegiatan</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Dokumentasi kegiatan program CSR &ldquo;MAS Arya Peduli&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-page">
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.03}>
              <motion.div
                layout
                onClick={() => setSelectedImage(item.id)}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:scale-110 transition-transform duration-500`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="h-12 w-12 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                        {item.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("prev");
              }}
              className="absolute left-4 text-white/70 hover:text-white"
              disabled={filtered.findIndex((i) => i.id === selectedItem.id) === 0}
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("next");
              }}
              className="absolute right-4 text-white/70 hover:text-white"
              disabled={
                filtered.findIndex((i) => i.id === selectedItem.id) ===
                filtered.length - 1
              }
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full"
            >
              <div
                className={`h-80 rounded-2xl bg-gradient-to-br ${selectedItem.color} flex items-center justify-center mb-4`}
              >
                <Camera className="h-20 w-20 text-white/30" />
              </div>
              <h3 className="text-xl font-bold text-white text-center">
                {selectedItem.title}
              </h3>
              <p className="text-gray-400 text-center mt-2">{selectedItem.description}</p>
              <div className="flex justify-center mt-3">
                <Badge className="bg-white/20 text-white border-0">
                  {selectedItem.category}
                </Badge>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
