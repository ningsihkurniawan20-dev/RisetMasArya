"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Moon, Sun, Globe, Home, Building2, FileText, Camera, BookOpen, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/contexts/LanguageContext";
import { useTheme } from "@/components/layout/ThemeProvider";

const navLinks = [
  { href: "/", key: "nav.home", icon: Home },
  { href: "/about", key: "nav.profile", icon: Building2 },
  { href: "/press-release", key: "nav.pressRelease", icon: FileText },
  { href: "/gallery", key: "nav.gallery", icon: Camera },
  { href: "/references", key: "nav.references", icon: BookOpen },
  { href: "/contact", key: "nav.contact", icon: Mail },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { t, locale, setLocale } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_30px_-10px_rgba(0,0,0,0.1)] dark:bg-gray-950/90 dark:shadow-[0_1px_30px_-10px_rgba(0,0,0,0.4)] border-b border-gray-200/50 dark:border-gray-800/50"
            : "bg-gradient-to-b from-black/20 to-transparent"
        )}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-800/20 to-transparent" />

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-3 group relative">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -3 }}
                className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-black/20 group-hover:shadow-black/30 transition-shadow relative overflow-hidden"
              >
                <img src="/images/logo-mas-arya.webp" alt="MAS Arya" className="w-8 h-8 object-contain" />
              </motion.div>
              <div className="block">
                <motion.span
                  className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white block leading-tight"
                  layout
                >
                  {t("company.shortName")}
                  <span className="text-red-700">.</span>
                </motion.span>
                <span className="hidden sm:block text-[10px] text-gray-500 dark:text-gray-400 tracking-widest uppercase font-medium">
                  {t("company.tagline")}
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 group",
                      isActive
                        ? "text-red-700 dark:text-red-400"
                        : "text-gray-600/90 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    )}
                  >
                    <span className="relative z-10">{t(link.key)}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-red-50/50 dark:bg-red-950/30 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute inset-x-3 bottom-1.5 h-0.5 bg-red-700/0 group-hover:bg-red-700/20 rounded-full transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-1.5">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="hidden lg:flex w-9 h-9 rounded-xl items-center justify-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={t("nav.theme")}
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setLocale(locale === "id" ? "en" : "id")}
                className="hidden lg:flex w-9 h-9 rounded-xl items-center justify-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-xs font-bold uppercase"
                aria-label={t("nav.language")}
              >
                <Globe className="h-4 w-4" />
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
              transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
              className="lg:hidden border-t border-gray-100 dark:border-gray-800 bg-white/95 backdrop-blur-xl dark:bg-gray-950/95 overflow-hidden origin-top"
            >
              <div className="max-w-7xl mx-auto px-4 py-5">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="space-y-1"
                >
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
                    return (
                      <motion.div key={link.href} variants={itemVariants}>
                        <Link
                          href={link.href}
                          className={cn(
                            "flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 group relative overflow-hidden",
                            isActive
                              ? "text-red-700 dark:text-red-400 bg-red-50/80 dark:bg-red-950/30"
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          )}
                        >
                          <div className={cn(
                            "w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 shrink-0",
                            isActive
                              ? "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-700"
                          )}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium">{t(link.key)}</span>
                          </div>
                          {isActive && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-red-600 dark:bg-red-400 rounded-full" />
                          )}
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full transition-all",
                            isActive ? "bg-red-600 dark:bg-red-400" : "bg-gray-300 dark:bg-gray-600"
                          )} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>

                <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex gap-3">
                    <button
                      onClick={toggleTheme}
                      className="flex-1 flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 border border-gray-200/50 dark:border-gray-700/50"
                    >
                      <div className="w-7 h-7 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm">
                        {theme === "dark" ? <Sun className="h-3.5 w-3.5 text-amber-500" /> : <Moon className="h-3.5 w-3.5 text-gray-600" />}
                      </div>
                      <span>{theme === "dark" ? (locale === "id" ? "Terang" : "Light") : (locale === "id" ? "Gelap" : "Dark")}</span>
                    </button>
                    <button
                      onClick={() => setLocale(locale === "id" ? "en" : "id")}
                      className="flex-1 flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 border border-gray-200/50 dark:border-gray-700/50"
                    >
                      <div className="w-7 h-7 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm">
                        <Globe className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="font-semibold uppercase">{locale === "id" ? "EN" : "ID"}</span>
                    </button>
                  </div>
                  <div className="mt-3 px-1">
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center tracking-wider uppercase">
                      {locale === "id" ? `${t("company.shortName")}. — ${t("company.tagline")}` : `${t("company.shortName")}. — ${t("company.tagline")}`}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
