import type { Metadata } from "next";
import {
  Award,
  Compass,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { QuoteCTA } from "@/components/shared/QuoteCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the experienced leadership behind Rodger Surveying (Pvt) Ltd.",
};

const leaders = [
  {
    initials: "RC",
    name: "Rodgers Chirimbani",
    role: "Managing Director",
    division: "Executive Leadership",
    bio: "Rodgers leads Rodger Surveying with a 22-year record across Angola, Zambia, Malawi and Zimbabwe. His experience spans land and engineering surveying, property development and construction project management.",
    facts: [
      { label: "Experience", value: "22 years" },
      { label: "Regional reach", value: "4 countries" },
    ],
    countries: ["Angola", "Zambia", "Malawi", "Zimbabwe"],
    qualifications: [
      "National Diploma in Land Surveying — Harare Polytechnic",
      "BSc Hons in Property Development — National University of Science and Technology (NUST)",
      "MSc in Construction Project Management — NUST",
    ],
    expertise: [
      "Land surveying",
      "Engineering surveying",
      "Property development",
      "Project management",
    ],
  },
  {
    initials: "CH",
    name: "Cadastral Head",
    role: "Cadastral Surveying",
    division: "Technical Leadership",
    bio: "Our Cadastral Head brings extensive experience in cadastral and engineering surveys, leading boundary definition, subdivision and land tenure work with technical rigour.",
    facts: [
      { label: "Education", value: "University of Zimbabwe" },
      { label: "Study period", value: "2006–2010" },
    ],
    countries: [],
    qualifications: [
      "BSc Hons Degree in Surveying — University of Zimbabwe (2006–2010)",
      "Extensive experience in cadastral and engineering surveys",
    ],
    expertise: [
      "Cadastral surveys",
      "Boundary definition",
      "Subdivisions",
      "Engineering surveys",
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Leadership, measured in experience."
        description="The technical judgement and regional experience behind every Rodger Surveying deliverable."
        image="/images/project-selby-farm.jpg"
        imageAlt="Aerial view of rolling green terrain"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Team" },
        ]}
      />

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <SectionHeading
              eyebrow="Our leadership"
              title="Two leaders. One standard."
              description="Leadership at Rodger Surveying is hands-on. Our directors and technical heads stay close to the work, the field teams and the decisions that shape each deliverable."
            />

            <div className="grid grid-cols-3 gap-px border border-brand-line bg-brand-line">
              {[
                ["22", "Years of experience"],
                ["4", "Countries worked in"],
                ["2", "Technical disciplines"],
              ].map(([value, label]) => (
                <div key={label} className="bg-brand-light px-4 py-5 sm:px-6">
                  <p className="font-display text-3xl font-extrabold tracking-[-0.05em] text-brand-navy">
                    {value}
                  </p>
                  <p className="mt-2 text-[0.55rem] font-bold uppercase leading-4 tracking-[0.14em] text-brand-slate">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-6 lg:mt-16">
            {leaders.map((leader, index) => (
              <article
                key={leader.name}
                className="grid overflow-hidden border border-brand-line bg-white lg:grid-cols-[0.72fr_1.28fr]"
              >
                <div
                  className={cn(
                    "relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-brand-navy p-7 text-white sm:p-9 lg:min-h-[430px]",
                    index % 2 === 1 && "lg:order-2",
                  )}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
                      backgroundSize: "48px 48px",
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -right-16 -top-20 size-64 rounded-full border border-white/10"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -right-4 -top-8 size-44 rounded-full border border-white/10"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-7 top-7 h-12 w-[2px] bg-brand-red sm:left-9"
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="font-mono text-[0.58rem] tracking-[0.1em] text-white/40">
                      0{index + 1}
                    </span>
                    <span className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-[0.52rem] font-bold uppercase tracking-[0.16em] text-white/55">
                      <Compass
                        aria-hidden="true"
                        className="size-3 text-brand-red"
                        strokeWidth={1.75}
                      />
                      {leader.division}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-10 left-5 select-none font-display text-[12rem] font-extrabold leading-none tracking-[-0.09em] text-white/[0.08] sm:text-[15rem]"
                  >
                    {leader.initials}
                  </span>

                  <div className="relative">
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-brand-red">
                      {leader.role}
                    </p>
                    <p className="mt-2 font-display text-3xl font-bold tracking-[-0.04em]">
                      {leader.name}
                    </p>
                  </div>
                </div>

                <div className="p-7 sm:p-9 lg:p-10">
                  <p className="text-sm leading-7 text-brand-slate">
                    {leader.bio}
                  </p>

                  <div className="mt-7 grid gap-px border border-brand-line bg-brand-line sm:grid-cols-2">
                    {leader.facts.map((fact) => (
                      <div key={fact.label} className="bg-brand-light px-5 py-4">
                        <p className="text-[0.52rem] font-bold uppercase tracking-[0.15em] text-brand-slate">
                          {fact.label}
                        </p>
                        <p className="mt-1.5 font-display text-base font-bold tracking-[-0.02em] text-brand-navy">
                          {fact.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {leader.countries.length ? (
                    <div className="mt-7">
                      <p className="flex items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
                        <MapPin
                          aria-hidden="true"
                          className="size-3.5 text-brand-red"
                          strokeWidth={1.75}
                        />
                        Regional experience
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {leader.countries.map((country) => (
                          <span
                            key={country}
                            className="border border-brand-line px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-brand-navy"
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-7">
                    <p className="flex items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
                      <GraduationCap
                        aria-hidden="true"
                        className="size-4 text-brand-red"
                        strokeWidth={1.75}
                      />
                      Qualifications
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {leader.qualifications.map((qualification) => (
                        <li
                          key={qualification}
                          className="flex gap-3 text-sm leading-6 text-brand-slate"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2.5 size-1 shrink-0 bg-brand-red"
                          />
                          {qualification}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7">
                    <p className="flex items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
                      <Sparkles
                        aria-hidden="true"
                        className="size-3.5 text-brand-red"
                        strokeWidth={1.75}
                      />
                      Expertise
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {leader.expertise.map((item) => (
                        <span
                          key={item}
                          className="bg-brand-light px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-brand-slate"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3 border-t border-brand-line pt-6 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-brand-slate">
            <Award aria-hidden="true" className="size-4 text-brand-red" strokeWidth={1.75} />
            Supported by an experienced field, technical and administrative team
          </div>
        </div>
      </section>

      <QuoteCTA
        title="Work with people who know the ground."
        description="Talk to our leadership team about your next survey, development or regional project."
        eyebrow="Meet the team"
      />
    </>
  );
}
