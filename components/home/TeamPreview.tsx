import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const team = [
  {
    initials: "RC",
    name: "Rodgers Chirimbani",
    role: "Managing Director",
    division: "Executive Leadership",
    bio: "Leads the firm with more than two decades of surveying and engineering experience across Zimbabwe and the wider region.",
  },
  {
    initials: "CH",
    name: "Cadastral Head",
    role: "Cadastral Surveying",
    division: "Technical Leadership",
    bio: "Directs cadastral and land tenure work, with specialist expertise in boundary definition, subdivisions and statutory compliance.",
  },
];

export function TeamPreview() {
  return (
    <section id="team" className="scroll-mt-20 bg-brand-light py-20 sm:py-24 lg:py-28">
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our leadership"
            title="The people behind the precision."
            description="Experienced leadership, specialist technical knowledge, and a shared commitment to doing the detail right."
          />
          <Button
            href="/team"
            variant="outline-navy"
            size="sm"
            withArrow
            className="shrink-0"
          >
            Meet the full team
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="group overflow-hidden border border-brand-line bg-white transition-[border-color,box-shadow] duration-500 hover:border-brand-navy/20 hover:shadow-card"
            >
              <div className="relative h-64 overflow-hidden bg-brand-navy sm:h-72">
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
                  className="absolute -right-14 -top-16 size-64 rounded-full border border-white/10 transition-transform duration-700 ease-premium group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute -right-4 -top-6 size-44 rounded-full border border-white/10"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-6 h-10 w-[2px] bg-brand-red"
                />

                <span
                  aria-hidden="true"
                  className="absolute -bottom-7 left-5 select-none font-display text-[9rem] font-extrabold leading-none tracking-[-0.09em] text-white/[0.08] transition-colors duration-500 group-hover:text-white/[0.12] sm:text-[11rem]"
                >
                  {member.initials}
                </span>

                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
                  <span className="font-mono text-[0.55rem] tracking-[0.1em] text-white/40">
                    0{index + 1}
                  </span>
                  <span className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-[0.52rem] font-bold uppercase tracking-[0.16em] text-white/55">
                    <Compass
                      aria-hidden="true"
                      className="size-3 text-brand-red"
                      strokeWidth={1.75}
                    />
                    {member.division}
                  </span>
                </div>
              </div>

              <div className="relative p-7 sm:p-8">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-brand-red">
                  {member.role}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-brand-navy">
                  {member.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-slate">
                  {member.bio}
                </p>
                <Link
                  href="/team"
                  className="mt-6 inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-navy transition-colors hover:text-brand-red"
                >
                  View team profile
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
