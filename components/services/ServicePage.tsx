import Link from "next/link";
import {
  ArrowUpRight,
  Crosshair,
  Satellite,
  ScanLine,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/shared/PageHero";
import { QuoteCTA } from "@/components/shared/QuoteCTA";
import type { Service } from "@/lib/services";

const equipmentIcons = [Crosshair, Satellite, ScanLine];

const coreEquipment = [
  {
    name: "Total Stations",
    description:
      "High-accuracy angular and distance measurement for control, setting out and detail capture.",
  },
  {
    name: "GNSS RTK",
    description:
      "Centimetre-level satellite positioning for efficient boundary, control and detail surveys.",
  },
];

type ServicePageProps = {
  service: Service;
};

export function ServicePage({ service }: ServicePageProps) {
  const equipment = [...coreEquipment, service.equipmentExtra];

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.heroDescription}
        image={service.image}
        imageAlt={service.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* What we do */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeading
                eyebrow="What we do"
                title="Scope built around your project."
                description={service.intro}
              />
              <div className="mt-8 flex items-center gap-3 border-t border-brand-line pt-6">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-brand-red"
                />
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
                  Survey-grade accuracy · Practical delivery
                </span>
              </div>
            </div>

            <div className="grid gap-px bg-brand-line sm:grid-cols-2">
              {service.whatWeDo.map((item, index) => (
                <div
                  key={item.title}
                  className="group bg-white p-6 transition-colors duration-300 hover:bg-brand-light sm:p-8"
                >
                  <span className="font-mono text-[0.58rem] tracking-[0.1em] text-brand-slate/55">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-[-0.02em] text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-brand-slate">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-brand-line bg-brand-light py-20 sm:py-24 lg:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Our process"
              title="A clear path from brief to delivery."
              description="Every stage is planned, documented and checked. You always know what is happening, what comes next, and what you will receive."
            />
            <p className="hidden shrink-0 text-right text-[0.6rem] font-bold uppercase leading-5 tracking-[0.16em] text-brand-slate lg:block">
              Four stages
              <br />
              One accountable team
            </p>
          </div>

          <div className="mt-12 grid gap-x-5 gap-y-10 md:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-y-5">
            {service.process.map((step, index) => (
              <div
                key={step.title}
                className="group relative border-t border-brand-navy/15 pt-7"
              >
                <span className="absolute -top-5 left-0 grid size-10 place-items-center bg-brand-red font-mono text-[0.65rem] font-bold text-white">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold tracking-[-0.02em] text-brand-navy">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-brand-slate">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Related equipment"
              title="Calibrated tools. Trustworthy data."
              description="Our field teams work with modern, maintained instruments that are fit for the accuracy and conditions each project demands."
            />
            <Link
              href="/equipment"
              className="group inline-flex shrink-0 items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-navy transition-colors hover:text-brand-red"
            >
              Explore equipment
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {equipment.map((item, index) => {
              const Icon = equipmentIcons[index] ?? ScanLine;

              return (
                <div
                  key={item.name}
                  className="group flex flex-col border border-brand-line bg-white p-6 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-card sm:p-7"
                >
                  <span className="grid size-11 place-items-center bg-brand-light text-brand-navy transition-colors duration-300 group-hover:bg-brand-navy group-hover:text-white">
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.5}
                    />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold tracking-[-0.02em] text-brand-navy">
                    {item.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-brand-slate">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center gap-3 border-t border-brand-line pt-6 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-brand-slate">
            <ShieldCheck
              aria-hidden="true"
              className="size-4 text-brand-red"
              strokeWidth={1.75}
            />
            Calibrated, maintained and operated by experienced field personnel
          </div>

          <div className="mt-10">
            <Button href="/quote" variant="outline-navy" size="sm" withArrow>
              Discuss your requirements
            </Button>
          </div>
        </div>
      </section>

      <QuoteCTA
        title={`Need ${service.title} support?`}
        description="Share your project location, scope and programme. We will respond with a clear approach and a project-specific quotation."
      />
    </>
  );
}
