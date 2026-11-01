import type { Metadata } from "next";
import { Check, Phone } from "lucide-react";

import { QuoteWizard } from "@/components/quote/QuoteWizard";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell us about your project and receive a reference number for a tailored surveying or engineering quotation.",
};

const nextSteps = [
  {
    title: "Tell us about the project",
    description:
      "Share the location, scope and timing. The wizard takes about two minutes.",
  },
  {
    title: "We review the requirements",
    description:
      "Our team checks the project details and confirms the right technical scope.",
  },
  {
    title: "We prepare your response",
    description:
      "You receive a clear next step and a project-specific quotation from our team.",
  },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="A smarter way to scope your project."
        description="Answer a few focused questions and give our team the information needed to prepare a tailored surveying or engineering quotation."
        image="/images/project-selby-farm.jpg"
        imageAlt="Aerial view of rolling terrain"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Request a quote" },
        ]}
      />

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
            <div>
              <QuoteWizard />
            </div>

            <aside className="space-y-6">
              <div className="border border-brand-line bg-brand-light p-7 sm:p-8">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
                  What happens next
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-brand-navy">
                  From brief to reference in minutes.
                </h2>

                <div className="mt-7 space-y-6">
                  {nextSteps.map((item, index) => (
                    <div key={item.title} className="flex gap-4">
                      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-brand-line bg-white font-mono text-[0.58rem] font-bold text-brand-red">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-brand-navy">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-xs leading-5 text-brand-slate">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-2 border-t border-brand-line pt-5 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-brand-slate">
                  <Check
                    aria-hidden="true"
                    className="size-3.5 text-brand-red"
                    strokeWidth={2.5}
                  />
                  Your details stay confidential
                </div>
              </div>

              <div className="bg-brand-navy p-7 text-white sm:p-8">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-white/40">
                  Need to talk it through?
                </p>
                <h2 className="mt-3 font-display text-xl font-bold leading-7 tracking-[-0.02em]">
                  Speak directly with our team.
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  If your project is urgent or you would prefer to discuss the
                  scope first, call us.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href="tel:+263774769799"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-white"
                  >
                    <Phone
                      aria-hidden="true"
                      className="size-4 text-brand-red"
                      strokeWidth={1.75}
                    />
                    +263 774 769 799
                  </a>
                  <a
                    href="tel:+263716403330"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-white"
                  >
                    <Phone
                      aria-hidden="true"
                      className="size-4 text-brand-red"
                      strokeWidth={1.75}
                    />
                    +263 716 403 330
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
