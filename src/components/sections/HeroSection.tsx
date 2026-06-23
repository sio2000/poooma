"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import PremiumButton from "@/components/ui/PremiumButton";
import { EASE_LUXURY } from "@/lib/motion";

export default function HeroSection() {
  const t = useTranslations("hero");
  const tq = useTranslations("scrollQuotes");
  const locale = useLocale();

  const lines = [t("headline1"), t("headline2"), t("headline3")];
  const quotes = [
    tq("q1"),
    tq("q2"),
    tq("q3"),
    tq("q4"),
    tq("q5"),
    tq("q6"),
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] overflow-hidden flex items-start lg:items-center"
    >
      {/* ── Full-bleed background image (whole image, never cropped) ─────── */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: EASE_LUXURY }}
          className="absolute inset-0"
        >
          <Image
            src="/herosectionpik.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top lg:object-contain lg:object-[55%_50%]"
          />
        </motion.div>
        {/* Legibility overlays: darker on the left where the copy sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-plum/95 via-plum/80 to-plum/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/30 to-plum/60 lg:via-transparent" />
        <div className="absolute top-0 right-0 w-[45vw] h-[45vw] rounded-full bg-lav-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] rounded-full bg-gold-400/10 blur-3xl" />
      </div>

      {/* ── Content grid ───────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-28 pb-16 lg:pb-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-8 items-center">
        {/* LEFT — headline & CTAs */}
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE_LUXURY }}
            className="font-script text-2xl sm:text-3xl text-gold-300 mb-5"
          >
            {t("motto")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE_LUXURY }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-70 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400" />
            </span>
            <span className="text-eyebrow text-white/80">{t("tagline")}</span>
          </motion.div>

          <div className="mb-7 space-y-1">
            {lines.map((line, i) => (
              <div key={i} className="overflow-hidden py-0.5">
                <motion.h1
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1.1,
                    delay: 0.3 + i * 0.12,
                    ease: EASE_LUXURY,
                  }}
                  className={`text-display-xl block text-[clamp(2.1rem,5.2vw,4rem)] leading-[1.04] ${
                    i === 1
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-lav-300 via-lav-400 to-lav-300"
                      : "text-white"
                  }`}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: EASE_LUXURY }}
            className="text-white/75 text-base sm:text-lg max-w-lg mb-9 leading-relaxed"
          >
            {t("subtext")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 1, ease: EASE_LUXURY }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <PremiumButton href={`/${locale}/contact`} variant="primary" size="lg" className="w-full sm:w-auto">
              {t("cta1")}
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </motion.svg>
            </PremiumButton>
            <PremiumButton href="#puma" variant="ghost" size="lg" className="border-white/30 w-full sm:w-auto">
              {t("whyName")}
            </PremiumButton>
          </motion.div>
        </div>

        {/* RIGHT — compact quotes, pushed to the far right, staggered reveal */}
        <div className="w-full lg:translate-x-6 xl:translate-x-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE_LUXURY }}
            className="flex items-center justify-end gap-3 mb-5 w-full max-w-[21rem] mx-auto lg:mr-0"
          >
            <span className="h-px w-7 bg-gradient-to-l from-gold-300 to-transparent" />
            <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-gold-200/90">
              {t("quotesLabel")}
            </span>
          </motion.div>

          <ul className="space-y-6 sm:space-y-7">
            {quotes.map((quote, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.6 + i * 0.44,
                  ease: EASE_LUXURY,
                }}
                className="group flex items-start gap-3 w-full max-w-[21rem] mx-auto lg:mr-0 rounded-xl border border-white/12 bg-plum/35 backdrop-blur-md px-4 py-3 shadow-[0_10px_30px_rgba(46,31,82,0.3)] hover:bg-plum/45 hover:border-white/25 transition-colors duration-300"
              >
                <span className="font-display text-gold-300 text-3xl leading-none flex-shrink-0 -mt-1.5">
                  &ldquo;
                </span>
                <p className="font-display italic text-sm sm:text-base lg:text-[17px] text-white/90 leading-snug">
                  {quote}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
