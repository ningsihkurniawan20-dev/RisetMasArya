"use client";

import { useState } from "react";
import { BookOpen, Book, FileText, Globe, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { useTranslation } from "@/contexts/LanguageContext";
import { references } from "@/data/research-data";

const typeIcons: Record<string, any> = {
  Buku: Book,
  "Artikel Berita": Globe,
  Artikel: FileText,
  Dokumen: BookOpen,
};

const typeColors: Record<string, string> = {
  Buku: "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300",
  "Artikel Berita": "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300",
  Artikel: "bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-300",
  Dokumen: "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300",
};

export default function ReferencesPage() {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("Semua");

  const filtered = references.filter((ref) => {
    const matchesSearch =
      ref.title.toLowerCase().includes(search.toLowerCase()) ||
      ref.author.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === "Semua" || ref.type === filterType;
    return matchesSearch && matchesType;
  });

  const types = ["Semua", "Buku", "Artikel Berita", "Artikel", "Dokumen"];

  return (
    <>
      <section className="pt-32 pb-16 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Badge className="bg-white/20 text-white border-0 mb-4">{t("references.hero.badge")}</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t("references.hero.title")}</h1>
            <p className="text-xl text-white/80 max-w-2xl">{t("references.hero.subtitle")}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-page">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder={t("references.search")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {types.map((type) => (
                <Button
                  key={type}
                  variant={filterType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterType(type)}
                >
                  {type === "Semua" ? t("references.filter.all") : type}
                </Button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {filtered.map((ref, i) => {
            const Icon = typeIcons[ref.type] || BookOpen;
            return (
              <AnimatedSection key={ref.id} delay={i * 0.03}>
                <Card className="group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-5 flex gap-4">
                    <div className="shrink-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${typeColors[ref.type] || "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300"}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug">
                            {ref.url ? (
                              <a href={ref.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                {ref.title}
                              </a>
                            ) : (
                              ref.title
                            )}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {ref.author} ({ref.year})
                          </p>
                        </div>
                        <Badge variant="secondary" className="shrink-0 dark:bg-gray-700 dark:text-gray-300">
                          {ref.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 italic">
                        {ref.publisher}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">{t("references.empty")}</p>
          </div>
        )}
      </section>
    </>
  );
}
