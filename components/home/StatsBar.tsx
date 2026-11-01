"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const stats = [
  { value: "2015", suffix: "", label: "Established" },
  { value: "22", suffix: "+", label: "Years of director experience" },
  { value: "49", suffix: "", label: "Documented projects" },
  { value: "4", suffix: "", label: "Countries of regional experience" },
];

export function StatsBar() {
  return (
    <section
      id="stats"
      aria-label="Rodger Surveying at a glance"
      className="border-b border-brand-line bg-brand-light"
    >
      <div className="container-shell">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "relative px-1 py-10 sm:px-7 lg:py-14",
                index % 2 === 1 && "border-l border-brand-line",
                index >= 2 && "border-t border-brand-line lg:border-t-0",
                index > 0 && "lg:border-l lg:border-brand-line",
              )}
            >
              <span
                aria-hidden="true"
                className="block h-[2px] w-6 bg-brand-red"
              />
              <p className="mt-6 font-display text-[clamp(2.6rem,4.2vw,4rem)] font-extrabold leading-none tracking-[-0.055em] text-brand-navy">
                {stat.value}
                {stat.suffix ? (
                  <span className="text-brand-red">{stat.suffix}</span>
                ) : null}
              </p>
              <p className="mt-3 max-w-[11rem] text-[0.62rem] font-bold uppercase leading-5 tracking-[0.16em] text-brand-slate">
                {stat.label}
              </p>
              <span
                aria-hidden="true"
                className="absolute right-4 top-9 font-mono text-[0.55rem] text-brand-slate/35 sm:right-7"
              >
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
