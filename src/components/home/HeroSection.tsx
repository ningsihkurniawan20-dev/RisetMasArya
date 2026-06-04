"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Camera, Users, TrendingUp, Award, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/LanguageContext";

const floatingShapes = [
  { size: 60, x: "15%", y: "20%", delay: 0, duration: 6, color: "rgba(255,255,255,0.03)" },
  { size: 40, x: "80%", y: "30%", delay: 1, duration: 8, color: "rgba(255,255,255,0.02)" },
  { size: 80, x: "70%", y: "70%", delay: 0.5, duration: 7, color: "rgba(255,255,255,0.03)" },
  { size: 30, x: "25%", y: "75%", delay: 2, duration: 5, color: "rgba(255,255,255,0.04)" },
  { size: 50, x: "90%", y: "15%", delay: 1.5, duration: 9, color: "rgba(255,255,255,0.02)" },
  { size: 45, x: "10%", y: "55%", delay: 0.8, duration: 6.5, color: "rgba(255,255,255,0.03)" },
  { size: 70, x: "50%", y: "85%", delay: 1.2, duration: 7.5, color: "rgba(255,255,255,0.02)" },
];

const badgeText = "PT MAS Arya Indonesia";

function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    count.set(to);
    const unsubscribe = rounded.on("change", (v) => {
      setDisplay(Math.round(v).toString());
    });
    return unsubscribe;
  }, [to, count, rounded]);

  return (
    <span>
      {display}{suffix}
    </span>
  );
}

const staggerItem = (i: number) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.6 + i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  },
});

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const shapeY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const { t, locale } = useTranslation();
  const [badgeIndex, setBadgeIndex] = useState(0);
  const badges = [
    "PT MAS Arya Indonesia",
    "MAS Holdings — Sri Lanka",
    "Apparel Manufacturer Kelas Dunia",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % badges.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
        <motion.div
          className="absolute inset-0"
          style={{ y: shapeY }}
        >
          <div className="absolute inset-0">
            <img
              src="/images/event-aryaphoria.webp"
              alt=""
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#3A0808]/95 via-[#5C1010]/90 to-[#0D0D0D]/95" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.3),transparent_60%)]" />

        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
              radial-gradient(circle at 80% 30%, white 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px, 40px 40px",
          }}
        />

        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
              background: shape.color,
              border: "1px solid rgba(255,255,255,0.05)",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none" />
      <img src="/images/image-removebg-preview.png" alt="" className="absolute right-10 top-10 h-72 opacity-15 pointer-events-none object-contain z-10" />

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-sm font-medium overflow-hidden group cursor-default">
                <motion.span
                  key={badgeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-1.5"
                >
                  <Sparkles className="h-3.5 w-3.5 text-amber-300/70" />
                  {badges[badgeIndex]}
                </motion.span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="text-white/50 text-xs">#Manufacturing</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                <span className="block">{locale === "id" ? "Menjadi" : "Becoming"}</span>
                <span className="block mt-2 text-white/90">
                  {locale === "id" ? "Changemakers yang" : "Changemakers Who"}{" "}
                </span>
                <span className="relative inline-block mt-2">
                  <span className="bg-gradient-to-r from-amber-300/90 via-amber-100 to-amber-300/90 bg-clip-text text-transparent">
                    {locale === "id" ? "Memberdayakan Impian" : "Empower Dreams"}
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/30 via-amber-300/50 to-amber-500/30 rounded-full"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-lg sm:text-xl text-white/70 max-w-xl mt-6 leading-relaxed"
            >
              {locale === "id"
                ? "Kami adalah bagian dari MAS Holdings — produsen pakaian global terkemuka yang memproduksi merek kelas dunia seperti Nike, Lululemon, Victoria's Secret, Calvin Klein, dan Patagonia."
                : "We are part of MAS Holdings — a leading global apparel manufacturer producing world-class brands such as Nike, Lululemon, Victoria's Secret, Calvin Klein, and Patagonia."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link href="/about">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="bg-white text-red-800 hover:bg-gray-100 shadow-2xl shadow-black/20 gap-2.5 px-7 h-13 rounded-xl font-semibold relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <BookOpen className="h-5 w-5 relative z-10" />
                    <span className="relative z-10">{locale === "id" ? "Profil Perusahaan" : "Company Profile"}</span>
                    <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/gallery">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/25 text-white hover:bg-white/10 hover:border-white/40 gap-2.5 px-7 h-13 rounded-xl backdrop-blur-sm relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Camera className="h-5 w-5 relative z-10" />
                    <span className="relative z-10">{locale === "id" ? "Dokumentasi Kegiatan" : "Activity Gallery"}</span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { icon: Users, value: 3500, suffix: "+", label: locale === "id" ? "Karyawan" : "Employees" },
                { icon: TrendingUp, value: 5, suffix: "", label: locale === "id" ? "Merek Global" : "Global Brands" },
                { icon: Award, value: 2, suffix: "", label: locale === "id" ? "Lokasi Pabrik" : "Factory Locations" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <stat.icon className="h-4 w-4 text-amber-300/60" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-none">
                      <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-[340px] h-[340px] rounded-[32px] bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center shadow-2xl shadow-black/20 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="text-center p-8 relative z-10">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-28 h-28 rounded-[20px] bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10 backdrop-blur-sm"
                  >
                    <span className="text-5xl font-black text-white/90 tracking-tight">
                      MA
                    </span>
                  </motion.div>
                  <p className="text-white/60 text-sm leading-relaxed max-w-[220px] mx-auto">
                    &ldquo;{locale === "id" ? "Changemakers yang Memberdayakan Impian" : "Changemakers Who Empower Dreams"}&rdquo;
                  </p>
                  <div className="mt-6 flex justify-center gap-1">
                    {[1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-white/20"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -right-6 w-64 h-44 rounded-2xl bg-gradient-to-br from-white/10 to-black/40 backdrop-blur-2xl border border-white/10 p-6 shadow-2xl shadow-black/30 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <p className="text-white font-black text-3xl">
                    3500+
                  </p>
                  <p className="text-white/50 text-sm mt-1">{locale === "id" ? "Karyawan" : "Employees"}</p>
                  <div className="mt-3 flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className="w-8 h-8 rounded-full bg-white/10 border-2 border-white/20 backdrop-blur-sm flex items-center justify-center"
                      >
                        <span className="text-[10px] text-white/70 font-medium">
                          {String.fromCharCode(65 + i)}
                        </span>
                      </motion.div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                      <span className="text-[10px] text-white/70">+</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0], x: [0, 6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -left-4 w-28 h-28 rounded-2xl bg-gradient-to-br from-amber-500/10 to-white/5 backdrop-blur-2xl border border-white/10 p-4 shadow-xl"
              >
                <p className="text-amber-300/80 font-bold text-lg">1987</p>
                <p className="text-white/50 text-[10px] leading-tight mt-1">
                  {locale === "id" ? "Didirikan" : "Founded"}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium">
            Scroll
          </span>
          <div className="relative">
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-white/60"
              />
            </div>
            <motion.div
              className="absolute -inset-2 rounded-full border border-white/5"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
