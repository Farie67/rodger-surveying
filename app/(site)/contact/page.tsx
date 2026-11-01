import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Rodger Surveying for project enquiries, quotations and surveying support in Zimbabwe.",
};

const offices = [
  {
    label: "Head Office",
    address: "5813 Manyame Park, Chitungwiza",
  },
  {
    label: "Operations",
    address: "4th Floor, Vanguard House, Harare",
  },
];

const phones = [
  { label: "+263 774 769 799", href: "tel:+263774769799" },
  { label: "+263 716 403 330", href: "tel:+263716403330" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's discuss your project."
        description="Share the location, scope and timing of your project. Our team will advise on the right survey approach and prepare a clear quotation."
        image="/images/project-raylands.jpg"
        imageAlt="Aerial view of a residential development"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Project enquiry"
                title="Tell us what you're planning."
                description="Complete the form and our team will come back to you with the right technical direction. Fields marked required help us respond accurately."
              />
              <ContactForm />
            </div>

            <aside className="h-fit">
              <div className="border border-brand-line bg-brand-light">
                <div className="border-b border-brand-line p-7">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
                    Contact details
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-brand-navy">
                    Talk to our team.
                  </h2>
                </div>

                <div className="divide-y divide-brand-line">
                  {offices.map((office) => (
                    <div key={office.label} className="flex gap-3 p-7">
                      <MapPin
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-brand-red"
                        strokeWidth={1.75}
                      />
                      <div>
                        <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
                          {office.label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-brand-navy">
                          {office.address}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="flex gap-3 p-7">
                    <Phone
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-brand-red"
                      strokeWidth={1.75}
                    />
                    <div>
                      <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
                        Phone
                      </p>
                      <div className="mt-2 flex flex-col gap-1.5">
                        {phones.map((phone) => (
                          <a
                            key={phone.href}
                            href={phone.href}
                            className="text-sm font-medium text-brand-navy transition-colors hover:text-brand-red"
                          >
                            {phone.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 p-7">
                    <Clock
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-brand-red"
                      strokeWidth={1.75}
                    />
                    <div>
                      <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
                        Office hours
                      </p>
                      <p className="mt-2 text-sm text-brand-navy">
                        Monday – Friday · 08:00 – 17:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-brand-line p-7">
                  <a
                    href="https://wa.me/263774769799?text=Hello%20Rodger%20Surveying%2C%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-navy transition-colors hover:text-[#128C4A]"
                  >
                    <span className="grid size-8 place-items-center rounded-full bg-[#25D366] text-white">
                      <WhatsAppIcon className="size-4" />
                    </span>
                    WhatsApp enquiry
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-3.5 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={2}
                    />
                  </a>
                </div>
              </div>

              <div className="mt-5 bg-brand-navy p-7 text-white">
                <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-white/40">
                  Ready to start?
                </p>
                <p className="mt-3 max-w-xs font-display text-xl font-bold leading-7 tracking-[-0.02em]">
                  Tell us about your site. We&apos;ll tell you what it needs.
                </p>
              </div>
            </aside>
          </div>

          <div className="mt-16">
            <div className="flex flex-col gap-4 border-b border-brand-line pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
                  Find us
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-brand-navy">
                  Vanguard House, Harare
                </h2>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Vanguard+House+Harare"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-navy transition-colors hover:text-brand-red"
              >
                Open in Google Maps
                <ExternalLink
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </a>
            </div>

            <div
              role="img"
              aria-label="Google Map placeholder for Vanguard House, Harare"
              className="relative mt-6 min-h-[340px] overflow-hidden border border-brand-line bg-brand-light"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(16,28,50,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,28,50,0.06) 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-navy/[0.06]"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 size-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-navy/[0.06]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-1/3 h-px bg-brand-navy/[0.08]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-1/3 w-px bg-brand-navy/[0.08]"
              />
              <div className="relative flex min-h-[340px] flex-col items-center justify-center px-6 text-center">
                <span className="grid size-14 place-items-center rounded-full bg-brand-red text-white shadow-[0_14px_35px_-10px_rgba(214,40,40,0.65)]">
                  <MapPin aria-hidden="true" className="size-6" strokeWidth={1.75} />
                </span>
                <p className="mt-5 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-brand-slate">
                  Google Map Placeholder
                </p>
                <p className="mt-2 font-display text-xl font-bold tracking-[-0.025em] text-brand-navy">
                  4th Floor, Vanguard House, Harare
                </p>
                <p className="mt-2 max-w-sm text-xs leading-5 text-brand-slate">
                  The interactive map will be embedded here once the final
                  Google Maps location is confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
