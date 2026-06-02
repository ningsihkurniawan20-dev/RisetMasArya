"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { useTranslation } from "@/contexts/LanguageContext";

const galleryItems = [
  { id: 1, imageUrl: "/images/kegiatan-csr-campurejo.webp", key: "gallery.item.csr", descKey: "gallery.item.csrDesc", categoryKey: "gallery.filter.csr" },
  { id: 2, imageUrl: "/images/event-aryaphoria.webp", key: "gallery.item.aryaphoria", descKey: "gallery.item.aryaphoriaDesc", categoryKey: "gallery.filter.event" },
  { id: 3, imageUrl: "/images/fashion-show-tl-gl.webp", key: "gallery.item.fashion", descKey: "gallery.item.fashionDesc", categoryKey: "gallery.filter.event" },
  { id: 4, imageUrl: "/images/kegiatan-produksi-1.webp", key: "gallery.item.prod1", descKey: "gallery.item.prod1Desc", categoryKey: "gallery.filter.production" },
  { id: 5, imageUrl: "/images/kegiatan-produksi-2.webp", key: "gallery.item.prod2", descKey: "gallery.item.prod2Desc", categoryKey: "gallery.filter.production" },
  { id: 6, imageUrl: "/images/kegiatan-produksi-3.webp", key: "gallery.item.prod3", descKey: "gallery.item.prod3Desc", categoryKey: "gallery.filter.production" },
  { id: 7, imageUrl: "/images/kegiatan-produksi-4.webp", key: "gallery.item.prod4", descKey: "gallery.item.prod4Desc", categoryKey: "gallery.filter.production" },
  { id: 8, imageUrl: "/images/kegiatan-internal-1.webp", key: "gallery.item.int1", descKey: "gallery.item.int1Desc", categoryKey: "gallery.filter.internal" },
  { id: 9, imageUrl: "/images/kegiatan-internal-2.webp", key: "gallery.item.int2", descKey: "gallery.item.int2Desc", categoryKey: "gallery.filter.internal" },
  { id: 10, imageUrl: "/images/kegiatan-internal-3.webp", key: "gallery.item.int3", descKey: "gallery.item.int3Desc", categoryKey: "gallery.filter.internal" },
];

const categories = ["gallery.filter.all", "gallery.filter.csr", "gallery.filter.event", "gallery.filter.production", "gallery.filter.internal"];

export default function GalleryPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("gallery.filter.all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const catValue = (key: string) => {
    if (key === "gallery.filter.all") return "Semua";
    return t(key);
  };

  const filtered =
    activeCategory === "gallery.filter.all"
      ? galleryItems
      : galleryItems.filter((item) => item.categoryKey === activeCategory);

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
            <Badge className="bg-white/20 text-white border-0 mb-4">{t("gallery.hero.badge")}</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t("gallery.hero.title")}</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {t("gallery.hero.subtitle")}
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
              {catValue(cat)}
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
                  <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {imgErrors[item.id] ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                        <span className="text-white/60 text-sm">{t("common.notFound")}</span>
                      </div>
                    ) : (
                      <img
                        src={item.imageUrl}
                        alt={t(item.key)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImgErrors(prev => ({ ...prev, [item.id]: true }))}
                      />
                    )}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 border-0 shadow-sm text-xs">
                        {t(item.categoryKey)}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-primary transition-colors">
                      {t(item.key)}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t(item.descKey)}</p>
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
              onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
              className="absolute left-4 text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={filtered.findIndex((i) => i.id === selectedItem.id) === 0}
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate("next"); }}
              className="absolute right-4 text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={filtered.findIndex((i) => i.id === selectedItem.id) === filtered.length - 1}
            >
              <ChevronRight className="h-10 w-10" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[90vh]"
            >
              <div className="h-[70vh] rounded-2xl overflow-hidden bg-gray-900 mb-4 flex items-center justify-center">
                <img
                  src={selectedItem.imageUrl}
                  alt={t(selectedItem.key)}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white text-center">{t(selectedItem.key)}</h3>
              <p className="text-gray-400 text-center mt-2">{t(selectedItem.descKey)}</p>
              <div className="flex justify-center mt-3">
                <Badge className="bg-white/20 text-white border-0">{t(selectedItem.categoryKey)}</Badge>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
