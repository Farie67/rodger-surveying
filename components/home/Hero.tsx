"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { MapPin, ScanLine } from "lucide-react";

import { Button } from "@/components/ui/Button";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.11,
        delayChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-brand-navy pb-14 pt-32 sm:pb-16 sm:pt-36 lg:pt-40"
    >
      <Image
        src="/images/hero-aerial.jpg"
        alt="Aerial view of a tractor working a cultivated field"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-brand-navy/55" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,28,50,0.98)_0%,rgba(16,28,50,0.92)_42%,rgba(16,28,50,0.55)_72%,rgba(16,28,50,0.35)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-brand-navy/50" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-shell relative z-10 w-full"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <motion.div variants={item} className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand-red" aria-hidden="true" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/60">
                Surveying &amp; Engineering · Zimbabwe
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 font-display text-[clamp(2.8rem,6.2vw,6.15rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.055em] text-white"
            >
              Precision in
              <br />
              every point.
              <span className="mt-3 block">
                Excellence in
                <br />
                every project.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base"
            >
              Trusted surveying, engineering and geospatial partners delivering
              certainty from first measurement to final sign-off.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Button
                href="/quote"
                size="lg"
                withArrow
                className="w-full justify-center sm:w-auto"
              >
                Request a quote
              </Button>
              <Button
                href="#services"
                variant="outline-white"
                size="lg"
                withArrow
                className="w-full justify-center sm:w-auto"
              >
                Explore our services
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="hidden border-l border-white/15 pl-7 lg:block"
          >
            <ScanLine className="size-5 text-brand-red" strokeWidth={1.5} />
            <p className="mt-5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/35">
              Reference point
            </p>
            <p className="mt-2 font-mono text-xs tracking-[0.1em] text-white/70">
              17°51&apos; S / 31°02&apos; E
            </p>
            <p className="mt-6 flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/40">
              <MapPin className="size-3.5" strokeWidth={1.75} />
              Harare, Zimbabwe
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md text-[0.6rem] font-semibold uppercase leading-5 tracking-[0.16em] text-white/35">
            Established 2015 · Serving Zimbabwe and the Southern African region
          </p>
          <a
            href="#stats"
            className="group inline-flex items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
          >
            Scroll to explore
            <span className="grid size-8 place-items-center border border-white/15 transition-colors group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="none"
                className="size-3.5 transition-transform duration-300 ease-premium group-hover:translate-y-0.5"
              >
                <path
                  d="M8 3v10M3.5 8.5 8 13l4.5-4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
