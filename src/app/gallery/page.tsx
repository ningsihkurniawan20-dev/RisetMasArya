"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { useTranslation } from "@/contexts/LanguageContext";

const galleryGroups = [
  {
    id: "aryaphoria",
    key: "gallery.group.aryaphoria",
    descKey: "gallery.group.aryaphoriaDesc",
    categoryKey: "gallery.filter.event",
    images: [
      { src: "/images/event-aryaphoria.webp", alt: "Aryaphoria 2025" },
      { src: "/images/event-aryaphoria-2.webp", alt: "Aryaphoria 2025 Momen Spesial" },
    ],
  },
  {
    id: "fashion",
    key: "gallery.group.fashion",
    descKey: "gallery.group.fashionDesc",
    categoryKey: "gallery.filter.event",
    images: [
      { src: "/images/fashion-show-tl-gl.webp", alt: "Fashion Show TL GL" },
      { src: "/images/fashion-show-2.webp", alt: "Fashion Show Sesi 2" },
      { src: "/images/fashion-show-3.webp", alt: "Fashion Show Sesi 3" },
      { src: "/images/fashion-show-4.webp", alt: "Fashion Show Sesi 4" },
    ],
  },
  {
    id: "training",
    key: "gallery.group.training",
    descKey: "gallery.group.trainingDesc",
    categoryKey: "gallery.filter.internal",
    images: [
      { src: "/images/kegiatan-internal-3.webp", alt: "Training TL" },
    ],
  },
  {
    id: "produksi",
    key: "gallery.group.produksi",
    descKey: "gallery.group.produksiDesc",
    categoryKey: "gallery.filter.production",
    images: [
      { src: "/images/kegiatan-produksi-1.webp", alt: "Lini Produksi 1" },
      { src: "/images/kegiatan-produksi-2.webp", alt: "Lini Produksi 2" },
      { src: "/images/kegiatan-produksi-3.webp", alt: "Lini Produksi 3" },
      { src: "/images/kegiatan-produksi-4.webp", alt: "Lini Produksi 4" },
      { src: "/images/kegiatan-produksi-5.webp", alt: "Lini Produksi 5" },
    ],
  },
  {
    id: "meeting",
    key: "gallery.group.meeting",
    descKey: "gallery.group.meetingDesc",
    categoryKey: "gallery.filter.internal",
    images: [
      { src: "/images/kegiatan-internal-1.webp", alt: "Meeting Pagi" },
    ],
  },
];

const categories = ["gallery.filter.all", "gallery.filter.event", "gallery.filter.production", "gallery.filter.internal"];

export default function GalleryPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("gallery.filter.all");
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const catValue = (key: string) => {
    if (key === "gallery.filter.all") return "Semua";
    return t(key);
  };

  const filtered =
    activeCategory === "gallery.filter.all"
      ? galleryGroups
      : galleryGroups.filter((item) => item.categoryKey === activeCategory);

  const currentGroup = galleryGroups.find((g) => g.id === selectedGroup);

  const navigateSlide = (direction: "prev" | "next") => {
    if (!currentGroup) return;
    if (direction === "prev" && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else if (direction === "next" && slideIndex < currentGroup.images.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const openGroup = (groupId: string) => {
    setSelectedGroup(groupId);
    setSlideIndex(0);
  };

  return (
    <>
      <section className="relative pt-32 pb-16 gradient-hero text-white overflow-hidden">
        <img src="/images/image-removebg-preview.png" alt="" className="absolute right-0 top-0 h-64 opacity-15 pointer-events-none object-contain" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((group, i) => (
            <AnimatedSection key={group.id} delay={i * 0.05}>
              <motion.div
                layout
                onClick={() => openGroup(group.id)}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {imgErrors[group.images[0].src] ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                        <span className="text-white/60 text-sm">{t("common.notFound")}</span>
                      </div>
                    ) : (
                      <img
                        src={group.images[0].src}
                        alt={t(group.key)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImgErrors(prev => ({ ...prev, [group.images[0].src]: true }))}
                      />
                    )}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 border-0 shadow-sm text-xs">
                        {t(group.categoryKey)}
                      </Badge>
                    </div>
                    {group.images.length > 1 && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-black/60 text-white border-0 shadow-sm text-xs flex items-center gap-1">
                          <Images className="h-3 w-3" />
                          {group.images.length}
                        </Badge>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-primary transition-colors">
                      {t(group.key)}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t(group.descKey)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {currentGroup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedGroup(null)}
          >
            <button
              onClick={() => setSelectedGroup(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
            >
              <X className="h-8 w-8" />
            </button>
            {currentGroup.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); navigateSlide("prev"); }}
                  className="absolute left-4 text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed z-10"
                  disabled={slideIndex === 0}
                >
                  <ChevronLeft className="h-10 w-10" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); navigateSlide("next"); }}
                  className="absolute right-4 text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed z-10"
                  disabled={slideIndex === currentGroup.images.length - 1}
                >
                  <ChevronRight className="h-10 w-10" />
                </button>
              </>
            )}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[90vh]"
            >
              <div className="h-[70vh] rounded-2xl overflow-hidden bg-gray-900 mb-4 flex items-center justify-center relative">
                <img
                  src={currentGroup.images[slideIndex].src}
                  alt={currentGroup.images[slideIndex].alt}
                  className="w-full h-full object-contain"
                />
                {currentGroup.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {currentGroup.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setSlideIndex(idx); }}
                        className={`w-2 h-2 rounded-full transition-colors ${idx === slideIndex ? "bg-white" : "bg-white/40"}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-white text-center">{t(currentGroup.key)}</h3>
              <p className="text-gray-400 text-center mt-2">{t(currentGroup.descKey)}</p>
              <div className="flex justify-center mt-3 gap-2">
                <Badge className="bg-white/20 text-white border-0">{t(currentGroup.categoryKey)}</Badge>
                {currentGroup.images.length > 1 && (
                  <Badge className="bg-white/20 text-white border-0">{slideIndex + 1} / {currentGroup.images.length}</Badge>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
