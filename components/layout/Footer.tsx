import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-16 select-none font-display text-[15rem] font-extrabold leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[22rem]"
      >
        R/S
      </span>
      <div className="absolute inset-x-0 top-0 h-[3px] bg-brand-red" />

      <div className="container-shell relative">
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_1.1fr] lg:gap-12 lg:py-20">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Rodger Surveying — Home"
              className="inline-flex items-center gap-3"
            >
              <span className="font-display text-2xl font-extrabold tracking-[0.02em]">
                R/S
              </span>
              <span aria-hidden="true" className="h-9 w-px bg-white/20" />
              <span className="flex flex-col">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em]">
                  Rodger Surveying
                </span>
                <span className="mt-1 text-[0.5rem] uppercase tracking-[0.24em] text-white/40">
                  Pvt Ltd
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">
              Precision surveying, engineering and geospatial solutions for
              projects across Zimbabwe and Southern Africa.
            </p>

            <Link
              href="/quote"
              className="group mt-7 inline-flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:text-brand-red"
            >
              Start a project
              <span className="grid size-8 place-items-center border border-white/20 transition-colors group-hover:border-brand-red group-hover:bg-brand-red">
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </span>
            </Link>
          </div>

          {/* Start a project CTA */}
          <div className="border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0 lg:pl-10">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-white/40">
              Start a project
            </p>
            <h2 className="mt-4 max-w-[17rem] font-display text-2xl font-bold leading-8 tracking-[-0.03em] text-white">
              Ready to start your next project?
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/55">
              Get in touch with our team today.
            </p>
            <Link
              href="/quote"
              className="group mt-6 inline-flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-red transition-colors hover:text-white"
            >
              Request a quote
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </Link>
          </div>

          {/* Contact */}
          <div className="border-t border-white/10 pt-8 md:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h2 className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-white/40">
              Contact Us
            </h2>
            <address className="mt-6 grid gap-5 not-italic sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-brand-red"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-white/35">
                    Head Office
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/70">
                    5813 Manyame Park,
                    <br />
                    Chitungwiza
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-brand-red"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-white/35">
                    Harare Office
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/70">
                    4th Floor Vanguard House,
                    <br />
                    Harare
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-brand-red"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-white/35">
                    Call Us
                  </p>
                  <div className="mt-1 flex flex-col gap-1">
                    <a
                      href="tel:+263774769799"
                      className="inline-block text-sm text-white/70 transition-colors hover:text-white"
                    >
                      +263 774 769 799
                    </a>
                    <a
                      href="tel:+263716403330"
                      className="inline-block text-sm text-white/70 transition-colors hover:text-white"
                    >
                      +263 716 403 330
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-brand-red"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-white/35">
                    Office Hours
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Mon – Fri · 08:00 – 17:00
                  </p>
                </div>
              </div>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pb-24 pt-7 text-[0.6rem] uppercase tracking-[0.14em] text-white/35 sm:flex-row sm:items-center sm:justify-between sm:pb-7">
          <p>
            © {year} Rodger Surveying (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Precision in every point</span>
            <span aria-hidden="true" className="size-1 bg-brand-red" />
            <span>Excellence in every project</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
