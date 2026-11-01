import type { Metadata } from "next";
import { ArrowUpRight, MapPin, ScanLine } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Phase 1 Design Preview",
  robots: { index: false, follow: false },
};

const palette = [
  {
    name: "Midnight Navy",
    token: "brand-navy",
    hex: "#101C32",
    usage: "Primary / authority",
    isLight: false,
  },
  {
    name: "Corporate Red",
    token: "brand-red",
    hex: "#D62828",
    usage: "Action / emphasis",
    isLight: false,
  },
  {
    name: "Light Grey",
    token: "brand-light",
    hex: "#F3F5F8",
    usage: "Surfaces / balance",
    isLight: true,
  },
  {
    name: "Slate",
    token: "brand-slate",
    hex: "#64748B",
    usage: "Supporting copy",
    isLight: false,
  },
  {
    name: "White",
    token: "white",
    hex: "#FFFFFF",
    usage: "Space / clarity",
    isLight: true,
  },
];

const stats = [
  { value: "2015", label: "Established" },
  { value: "22+", label: "Years of director experience" },
  { value: "49", label: "Documented projects" },
  { value: "4", label: "Countries of regional experience" },
];

export default function PreviewPage() {
  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="relative isolate flex h-[92svh] max-h-[960px] min-h-[720px] items-end overflow-hidden bg-brand-navy">
        <div
          role="img"
          aria-label="Aerial view of a residential development"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/preview/hero-aerial.jpg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,28,50,0.98)_0%,rgba(16,28,50,0.9)_44%,rgba(16,28,50,0.46)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-brand-navy/50" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
          }}
        />

        <div className="container-shell relative z-10 w-full pb-14 pt-36 lg:pb-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-brand-red" aria-hidden="true" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/60">
                  Surveying &amp; Engineering · Zimbabwe
                </span>
              </div>

              <h1 className="mt-7 font-display text-[clamp(2.7rem,6.2vw,6.1rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.055em] text-white">
                Precision in
                <br />
                every point.
                <span className="mt-3 block text-white/40">
                  Excellence in
                  <br />
                  every project.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                A premium digital foundation for one of Zimbabwe&apos;s most
                trusted surveying and engineering firms. Built for clarity,
                precision, and confidence.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button size="lg" withArrow>
                  Request a quote
                </Button>
                <Button size="lg" variant="outline-white" withArrow>
                  Explore our services
                </Button>
              </div>
            </div>

            <div className="hidden border-l border-white/15 pl-7 lg:block">
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
            </div>
          </div>

          <div className="mt-14 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-8 border-t border-white/15 pt-7 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-extrabold tracking-[-0.04em] text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.14em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden items-center gap-3 border-l border-t border-white/15 px-5 py-4 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-white/45 lg:flex">
          Scroll to explore
          <ArrowUpRight className="size-3.5 rotate-45" strokeWidth={1.75} />
        </div>
      </section>

      {/* Colour system */}
      <section id="colour" className="scroll-mt-24 border-b border-brand-line py-20 sm:py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Phase 01 / Design system"
                title={
                  <>
                    A visual language built on{" "}
                    <span className="text-brand-red">precision.</span>
                  </>
                }
                description="A restrained corporate palette, generous space, and confident typography. The foundation for every page that follows."
              />

              <div className="mt-9 flex items-center gap-4 border-t border-brand-line pt-6">
                <span className="font-display text-4xl font-extrabold tracking-[-0.05em] text-brand-navy">
                  Aa
                </span>
                <div>
                  <p className="text-xs font-bold text-brand-navy">
                    Plus Jakarta Sans
                  </p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-brand-slate">
                    Display &amp; body / 400—800
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {palette.map((colour, index) => (
                <div key={colour.name} className="group">
                  <div
                    className={cn(
                      "relative flex aspect-[4/5] items-end border p-3.5",
                      colour.isLight ? "border-brand-line" : "border-transparent",
                    )}
                    style={{ backgroundColor: colour.hex }}
                  >
                    <span
                      className={cn(
                        "absolute right-3 top-3 font-mono text-[0.55rem]",
                        colour.isLight ? "text-brand-navy/40" : "text-white/35",
                      )}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={cn(
                        "font-display text-2xl font-extrabold tracking-[-0.04em]",
                        colour.isLight ? "text-brand-navy" : "text-white",
                        colour.name === "Corporate Red" && "text-white",
                      )}
                    >
                      Aa
                    </span>
                  </div>
                  <p className="mt-3 text-[0.68rem] font-bold text-brand-navy">
                    {colour.name}
                  </p>
                  <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.08em] text-brand-slate">
                    {colour.hex}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typography and components */}
      <section id="typography" className="scroll-mt-24 bg-brand-light py-20 sm:py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Typography"
                title="Quiet confidence. Clear hierarchy."
                description="Tight display tracking for headlines, measured body copy for detail, and a red rule as the recurring brand signature."
              />

              <div className="mt-9 space-y-3">
                {[
                  ["800", "ExtraBold / Display"],
                  ["700", "Bold / Subheads"],
                  ["500", "Medium / UI"],
                  ["400", "Regular / Body"],
                ].map(([weight, label]) => (
                  <div
                    key={weight}
                    className="flex items-center justify-between border-b border-brand-line pb-3"
                  >
                    <span
                      className="font-display text-xl text-brand-navy"
                      style={{ fontWeight: Number(weight) }}
                    >
                      Precision
                    </span>
                    <span className="font-mono text-[0.58rem] uppercase tracking-[0.1em] text-brand-slate">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden border border-brand-line bg-white p-7 sm:p-10">
              <span
                aria-hidden="true"
                className="absolute right-0 top-0 h-16 w-16 bg-brand-red"
              />
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-brand-slate">
                Display / H1
              </p>
              <p className="mt-5 max-w-2xl font-display text-[clamp(2.2rem,4.2vw,3.9rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-brand-navy">
                Built on accuracy.
                <br />
                <span className="text-brand-red">Trusted for delivery.</span>
              </p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-brand-slate">
                From cadastral surveys to regional GIS mapping, our work gives
                clients the clarity to plan, invest, and build with confidence.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-brand-line pt-7">
                <Button size="sm" withArrow>
                  Primary
                </Button>
                <Button size="sm" variant="outline-navy" withArrow>
                  Outline navy
                </Button>
                <span className="ml-auto hidden font-mono text-[0.55rem] uppercase tracking-[0.12em] text-brand-slate sm:block">
                  Button / 01—02
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Button states */}
      <section id="components" className="scroll-mt-24 py-20 sm:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Core components"
            title="Actions with intent."
            description="Three button themes, three sizes, and a consistent focus state. Every interaction is understated but unmistakable."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="border border-brand-line bg-white p-7 sm:p-9">
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-brand-slate">
                Light surface
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button withArrow>Request a quote</Button>
                <Button variant="outline-navy" withArrow>
                  Our services
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-end gap-3 border-t border-brand-line pt-7">
                <Button size="sm" variant="outline-navy">
                  Small
                </Button>
                <Button size="md" variant="outline-navy">
                  Medium
                </Button>
                <Button size="lg" variant="outline-navy">
                  Large
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden bg-brand-navy p-7 sm:p-9">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <div className="relative">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-white/40">
                  Dark surface
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button withArrow>Request a quote</Button>
                  <Button variant="outline-white" withArrow>
                    Explore our services
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap items-end gap-3 border-t border-white/15 pt-7">
                  <Button size="sm" variant="outline-white">
                    Small
                  </Button>
                  <Button size="md" variant="outline-white">
                    Medium
                  </Button>
                  <Button size="lg" variant="outline-white">
                    Large
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section heading variants */}
      <section id="headings" className="scroll-mt-24 bg-brand-navy py-20 sm:py-24">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="border-l-2 border-brand-red pl-7">
              <SectionHeading
                eyebrow="Dark theme / Left"
                title="The standard for surveying in Zimbabwe."
                description="A section heading for imagery, navy panels, and high-impact editorial moments."
                theme="dark"
              />
            </div>
            <div className="flex items-center border border-white/10 p-8 sm:p-10">
              <SectionHeading
                eyebrow="Dark theme / Centred"
                title="Precision that moves projects forward."
                description="The same system, adapted for focused, centred content."
                theme="dark"
                align="center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
