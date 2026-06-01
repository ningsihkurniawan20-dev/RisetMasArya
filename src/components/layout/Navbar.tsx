"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Sun, Moon, Search, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { SearchDialog } from "@/components/shared/SearchDialog";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/program", label: "Program CSR" },
  { href: "/research", label: "Penelitian" },
  { href: "/press-release", label: "Press Release" },
  { href: "/gallery", label: "Galeri" },
  { href: "/impact", label: "Dampak" },
  { href: "/references", label: "Referensi" },
  { href: "/contact", label: "Kontak" },
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(docHeight > 0 ? (latest / docHeight) * 100 : 0);
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
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-800 to-[#3A0808] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-black/20 group-hover:shadow-black/30 transition-shadow relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_70%)]" />
                <span className="relative z-10">MA</span>
              </motion.div>
              <div className="hidden sm:block">
                <motion.span
                  className="text-lg font-bold text-gray-900 dark:text-white block leading-tight"
                  layout
                >
                  MAS Arya
                  <span className="text-red-700">.</span>
                </motion.span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 tracking-widest uppercase font-medium">
                  Research &bull; CSR &bull; Impact
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
                    <span className="relative z-10">{link.label}</span>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(true)}
                className="relative w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                aria-label="Search"
              >
                <Search className="h-4.5 w-4.5" />
                <kbd className="absolute -bottom-0.5 -right-0.5 hidden sm:inline-flex text-[9px] px-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-400 font-mono leading-none opacity-0 group-hover:opacity-100 transition-opacity">
                  ⌘K
                </kbd>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="h-4.5 w-4.5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="h-4.5 w-4.5" />
                    </motion.span>
                  )}
                </AnimatePresence>
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

        <motion.div
          className="h-[1.5px] bg-gradient-to-r from-red-800/60 via-red-600/40 to-red-800/60 origin-left"
          style={{ scaleX: scrollProgress / 100 }}
        />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-gray-100 dark:border-gray-800 bg-white/95 backdrop-blur-xl dark:bg-gray-950/95 overflow-hidden"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="max-w-7xl mx-auto px-4 py-4 space-y-0.5"
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                          isActive
                            ? "bg-gradient-to-r from-red-50/50 to-transparent text-red-700 dark:from-red-950/30 dark:text-red-400"
                            : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800/50"
                        )}
                      >
                        <span
                          className={cn(
                            "w-1.5 h-1.5 rounded-full",
                            isActive ? "bg-red-700/70" : "bg-gray-300 dark:bg-gray-600"
                          )}
                        />
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
