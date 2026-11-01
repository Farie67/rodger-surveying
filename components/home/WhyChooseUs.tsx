import Image from "next/image";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Experienced Personnel",
    description:
      "Qualified surveyors and engineers with deep regional field experience.",
  },
  {
    title: "Modern Equipment",
    description:
      "Calibrated GNSS, total stations and UAV technology for reliable data.",
  },
  {
    title: "Comprehensive Services",
    description:
      "One accountable partner from survey and planning through to valuation.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Clear, project-specific quotations with no hidden extras.",
  },
  {
    title: "Client-Focused",
    description:
      "Responsive communication and deliverables shaped around your programme.",
  },
  {
    title: "Safety — SHE Policy",
    description:
      "Safety, health and environmental controls embedded in every site operation.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden border-t border-brand-line bg-brand-light py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-12 hidden size-[32rem] rounded-full border border-brand-navy/[0.04] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-28 hidden size-[20rem] rounded-full border border-brand-navy/[0.04] lg:block"
      />

      <div className="container-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_1fr] lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-navy lg:aspect-[4/5]">
              <Image
                src="/images/why-choose-us.jpg"
                alt="Surveying equipment set up in the field"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/65 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 border border-white/25 bg-brand-navy/70 px-3 py-2 backdrop-blur-md">
                <span className="size-1.5 bg-brand-red" aria-hidden="true" />
                <span className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-white/75">
                  Field operations · Zimbabwe
                </span>
              </div>
              <p className="absolute bottom-6 left-6 max-w-[16rem] font-display text-lg font-bold leading-6 tracking-[-0.02em] text-white">
                Precision on the ground.
                <br />
                Clarity in the plan.
              </p>
            </div>

            <span
              aria-hidden="true"
              className="absolute -left-2 top-10 h-20 w-[3px] bg-brand-red"
            />

            <div className="absolute -bottom-6 right-4 hidden w-52 bg-brand-navy p-6 text-white shadow-lift sm:block lg:-right-7">
              <p className="font-display text-4xl font-extrabold tracking-[-0.05em]">
                22<span className="text-brand-red">+</span>
              </p>
              <p className="mt-2 text-[0.58rem] font-bold uppercase leading-5 tracking-[0.15em] text-white/50">
                Years of director experience
              </p>
            </div>
          </div>

          <div className="lg:pl-2">
            <SectionHeading
              eyebrow="Why Rodger Surveying"
              title={
                <>
                  Certainty, from first survey to{" "}
                  <span className="text-brand-red">final sign-off.</span>
                </>
              }
              description="We combine technical precision with practical, on-the-ground insight. The result is dependable data, clear advice, and projects that move forward without surprises."
            />

            <div className="mt-9 grid gap-x-7 gap-y-6 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-red/10 text-brand-red">
                    <Check
                      aria-hidden="true"
                      className="size-3"
                      strokeWidth={2.5}
                    />
                  </span>
                  <div>
                    <h3 className="text-[0.82rem] font-bold tracking-[-0.01em] text-brand-navy">
                      {reason.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-5 text-brand-slate">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-5 border-t border-brand-line pt-7">
              <Button
                href="/about"
                variant="outline-navy"
                size="sm"
                withArrow
              >
                Meet our team
              </Button>
              <p className="flex items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-brand-slate">
                <span
                  aria-hidden="true"
                  className="size-1.5 bg-brand-red"
                />
                SHE compliant operations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
