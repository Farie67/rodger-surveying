import { Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";

export function ClosingCTA() {
  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden bg-brand-navy py-20 text-white sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden size-[30rem] -translate-y-1/2 rounded-full border border-white/[0.06] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-1/2 hidden size-[20rem] -translate-y-1/2 rounded-full border border-white/[0.06] lg:block"
      />
      <div className="absolute inset-x-0 top-0 h-[3px] bg-brand-red" />

      <div className="container-shell relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand-red" aria-hidden="true" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/50">
                Start a project
              </span>
            </div>

            <h2 className="mt-7 max-w-4xl font-display text-[clamp(2.5rem,5.1vw,4.8rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.055em] text-white">
              Have a project?
              <span className="mt-2 block">
                Let&apos;s discuss your requirements.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Tell us what you are planning. Our team will advise on the right
              survey, the scope of work, and the most efficient route to
              delivery.
            </p>
          </div>

          <div className="flex flex-col items-start gap-7">
            <Button href="/quote" size="lg" withArrow className="w-full sm:w-auto">
              Request a quote
            </Button>

            <div>
              <p className="text-[0.55rem] font-bold uppercase tracking-[0.18em] text-white/35">
                Speak to our team
              </p>
              <a
                href="tel:+263774769799"
                className="mt-2 inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-[-0.02em] text-white transition-colors hover:text-brand-red"
              >
                <Phone
                  aria-hidden="true"
                  className="size-4 text-brand-red"
                  strokeWidth={1.75}
                />
                +263 774 769 799
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>Harare · Chitungwiza · Regional projects</span>
          <span>Established 2015</span>
        </div>
      </div>
    </section>
  );
}
