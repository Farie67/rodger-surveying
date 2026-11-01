import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  BadgeCheck,
  Eye,
  Handshake,
  Leaf,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { QuoteCTA } from "@/components/shared/QuoteCTA";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Rodger Surveying (Pvt) Ltd is a privately owned indigenous Zimbabwean surveying and engineering company established in 2015.",
};

const values = [
  {
    title: "Professionalism",
    description:
      "Disciplined technical judgement, clear communication and respect for every stakeholder on every commission.",
    icon: BadgeCheck,
  },
  {
    title: "Client Focus",
    description:
      "We shape our service around your objectives, your programme and the decisions you need to make.",
    icon: Handshake,
  },
  {
    title: "Integrity",
    description:
      "We are transparent, accountable and independent in the measurements and advice we provide.",
    icon: ShieldCheck,
  },
  {
    title: "Best Product / Service",
    description:
      "A commitment to continuous improvement in our methods, technology and deliverables.",
    icon: Award,
  },
];

const shePillars = [
  {
    title: "Safety",
    description:
      "Risk assessments, safe work procedures and appropriate protective equipment on every site.",
    icon: ShieldCheck,
  },
  {
    title: "Health",
    description:
      "Fit-for-work teams, clear site inductions and proactive wellbeing practices.",
    icon: Users,
  },
  {
    title: "Environment",
    description:
      "Responsible site management that minimises disturbance and protects natural systems.",
    icon: Leaf,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Rodger Surveying"
        title="We Enhance Spatial Development."
        description="A privately owned indigenous Zimbabwean surveying and engineering firm, established in 2015 and trusted by clients across Zimbabwe and Southern Africa."
        image="/images/project-sunway-city.jpg"
        imageAlt="Aerial view of a planned development"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Company story */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Our story"
                title="Built in Zimbabwe. Measured across the region."
                description="Rodger Surveying (Pvt) Ltd is a privately owned indigenous Zimbabwean company established in 2015. From our offices in Chitungwiza and Harare, we provide surveying, engineering, GIS, planning and valuation services to clients across Zimbabwe and Southern Africa."
              />

              <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-slate">
                Our team combines deep field experience with modern technology
                and a practical, client-first approach. We work on projects
                ranging from individual land transactions to large-scale
                topographical surveys, residential layouts and regional mapping
                assignments.
              </p>

              <div className="mt-9 grid gap-px border border-brand-line bg-brand-line sm:grid-cols-3">
                {[
                  ["2015", "Established"],
                  ["Private", "Indigenous owned"],
                  ["Regional", "Zimbabwe & beyond"],
                ].map(([value, label]) => (
                  <div key={label} className="bg-white px-5 py-5">
                    <p className="font-display text-xl font-extrabold tracking-[-0.03em] text-brand-navy">
                      {value}
                    </p>
                    <p className="mt-1.5 text-[0.56rem] font-bold uppercase tracking-[0.15em] text-brand-slate">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-navy">
                <Image
                  src="/images/why-choose-us.jpg"
                  alt="Surveying equipment set up in a green field"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-[0.56rem] font-bold uppercase tracking-[0.18em] text-white/45">
                    Field operations · Zimbabwe
                  </p>
                  <p className="mt-2 font-display text-2xl font-bold leading-8 tracking-[-0.03em] text-white">
                    Precision on the ground.
                    <br />
                    Clarity in the plan.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-5 hidden bg-brand-red px-6 py-5 text-white sm:block">
                <p className="font-display text-3xl font-extrabold tracking-[-0.04em]">
                  Est. 2015
                </p>
                <p className="mt-1 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-white/65">
                  Harare · Zimbabwe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="border-y border-brand-line bg-brand-light py-20 sm:py-24 lg:py-28">
        <div className="container-shell">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-brand-red" aria-hidden="true" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-brand-slate">
                Mission &amp; vision
              </span>
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-brand-navy">
              A clear direction. A higher standard.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="bg-brand-navy p-8 text-white sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <span className="grid size-11 place-items-center border border-white/15 text-brand-red">
                  <Target
                    aria-hidden="true"
                    className="size-5"
                    strokeWidth={1.5}
                  />
                </span>
                <span className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-white/35">
                  01 / Mission
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold tracking-[-0.03em]">
                Our Mission
              </h3>
              <p className="mt-4 max-w-md text-base leading-8 text-white/65">
                To provide precise, reliable and comprehensive surveying
                solutions that support responsible spatial development and create
                lasting value for our clients.
              </p>
            </div>

            <div className="border border-brand-line bg-white p-8 sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <span className="grid size-11 place-items-center bg-brand-red/10 text-brand-red">
                  <Eye
                    aria-hidden="true"
                    className="size-5"
                    strokeWidth={1.5}
                  />
                </span>
                <span className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-brand-slate/50">
                  02 / Vision
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold tracking-[-0.03em] text-brand-navy">
                Our Vision
              </h3>
              <p className="mt-4 max-w-md text-base leading-8 text-brand-slate">
                To become a client-centred, result-oriented and comprehensive
                international Land and Engineering Surveying Services providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Core values"
            title="The principles behind every measurement."
            description="Our values are not separate from the work. They shape how we plan, how we communicate and how we deliver."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group border border-brand-line bg-white p-6 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-card sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-11 place-items-center bg-brand-light text-brand-navy transition-colors duration-300 group-hover:bg-brand-navy group-hover:text-white">
                      <Icon
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={1.5}
                      />
                    </span>
                    <span className="font-mono text-[0.55rem] tracking-[0.1em] text-brand-slate/45">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-lg font-bold tracking-[-0.02em] text-brand-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-brand-slate">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SHE policy */}
      <section className="relative overflow-hidden bg-brand-navy py-20 text-white sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-[30rem] rounded-full border border-white/[0.06]"
        />
        <div className="container-shell relative">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-7 bg-brand-red" aria-hidden="true" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/50">
                  SHE policy
                </span>
              </div>
              <h2 className="mt-6 font-display text-[clamp(3.2rem,6.4vw,5.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.06em]">
                Zero
                <br />
                Harm<span className="text-brand-red">.</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
                A philosophy, not a slogan. We plan every operation around the
                safety of people, the protection of health and the responsible
                management of the environment.
              </p>
            </div>

            <div>
              <p className="max-w-2xl font-display text-xl font-medium leading-9 tracking-[-0.02em] text-white/85 sm:text-2xl sm:leading-10">
                Our Safety, Health and Environment policy is built on a
                <span className="text-brand-red"> Zero Harm</span> philosophy.
                It guides how we assess risk, prepare our teams and conduct
                ourselves on every site.
              </p>

              <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-3">
                {shePillars.map((pillar) => {
                  const Icon = pillar.icon;

                  return (
                    <div key={pillar.title} className="bg-brand-navy p-6">
                      <Icon
                        aria-hidden="true"
                        className="size-5 text-brand-red"
                        strokeWidth={1.5}
                      />
                      <h3 className="mt-5 text-sm font-bold text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-white/50">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-9">
                <Button href="/contact" variant="outline-white" withArrow>
                  Discuss SHE requirements
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteCTA
        title="Ready to build with confidence?"
        description="Work with a team that combines local knowledge, technical precision and a clear commitment to delivery."
      />
    </>
  );
}
