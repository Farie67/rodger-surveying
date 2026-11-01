"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ScanLine } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services as coreServices } from "@/lib/services";

const services = [
  ...coreServices.map((service) => ({
    slug: service.slug,
    title: service.title,
    description: service.cardDescription,
    icon: service.icon,
    href: `/services/${service.slug}`,
  })),
  {
    slug: "equipment",
    title: "Equipment Hire",
    description:
      "Calibrated total stations, GNSS receivers and UAVs supported by experienced field operators.",
    icon: ScanLine,
    href: "/equipment",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our capabilities"
            title={
              <>
                Surveying expertise,
                <br className="hidden sm:block" /> built around your project.
              </>
            }
            description="From first boundary measurement to final geospatial deliverable, one accountable team covers the full lifecycle of your project."
          />
          <Button
            href="/services"
            variant="outline-navy"
            size="sm"
            withArrow
            className="shrink-0"
          >
            View all services
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex h-full flex-col overflow-hidden border border-brand-line bg-white p-7 transition-[transform,border-color,box-shadow] duration-500 ease-premium hover:-translate-y-1 hover:border-brand-navy/25 hover:shadow-card sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center bg-brand-light text-brand-navy transition-colors duration-300 group-hover:bg-brand-navy group-hover:text-white">
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.5}
                    />
                  </span>
                  <span className="font-mono text-[0.58rem] tracking-[0.1em] text-brand-slate/50">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-display text-xl font-bold tracking-[-0.025em] text-brand-navy">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-brand-slate">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-navy transition-colors hover:text-brand-red"
                >
                  Learn more
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </Link>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-red transition-all duration-500 ease-premium group-hover:w-full"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
