import { Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

type QuoteCTAProps = {
  title?: string;
  description?: string;
  eyebrow?: string;
};

export function QuoteCTA({
  title = "Ready to move your project forward?",
  description = "Tell us what you are planning. Our team will advise on the right scope and the most efficient route to delivery.",
  eyebrow = "Start a project",
}: QuoteCTAProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-white sm:py-20 lg:py-24">
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
        className="pointer-events-none absolute -right-28 top-1/2 hidden size-[26rem] -translate-y-1/2 rounded-full border border-white/[0.06] lg:block"
      />
      <div className="absolute inset-x-0 top-0 h-[3px] bg-brand-red" />

      <div className="container-shell relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            theme="dark"
          />

          <div className="flex flex-col items-start gap-5">
            <Button href="/quote" size="lg" withArrow>
              Request a quote
            </Button>
            <a
              href="tel:+263774769799"
              className="inline-flex items-center gap-2.5 text-sm font-semibold text-white/65 transition-colors hover:text-white"
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
    </section>
  );
}
