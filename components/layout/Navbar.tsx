"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { serviceLinks } from "@/lib/services";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Equipment", href: "/equipment" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";
  const isSolid = scrolled || !isHome || open;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500",
        isSolid
          ? "border-b border-brand-line bg-white/95 shadow-[0_10px_35px_-25px_rgba(16,28,50,0.4)] backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-brand-navy/80 via-brand-navy/35 to-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container-shell flex h-20 items-center justify-between"
      >
        <Link
          href="/"
          aria-label="Rodger Surveying — Home"
          className={cn(
            "group flex items-center gap-3 transition-colors",
            isSolid ? "text-brand-navy" : "text-white",
          )}
        >
          <span className="font-display text-lg font-extrabold leading-none tracking-[0.04em]">
            R/S
          </span>
          <span
            aria-hidden="true"
            className={cn(
              "h-7 w-px transition-colors",
              isSolid ? "bg-brand-navy/20" : "bg-white/25",
            )}
          />
          <span className="flex flex-col">
            <span className="text-[0.62rem] font-bold uppercase leading-none tracking-[0.2em]">
              Rodger Surveying
            </span>
            <span
              className={cn(
                "mt-1.5 text-[0.48rem] uppercase leading-none tracking-[0.24em] transition-colors",
                isSolid ? "text-brand-slate" : "text-white/50",
              )}
            >
              Pvt Ltd
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => {
            const linkClasses = cn(
              "group relative flex items-center gap-1.5 py-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] transition-colors",
              isSolid
                ? isActive(link.href)
                  ? "text-brand-navy"
                  : "text-brand-slate hover:text-brand-navy"
                : isActive(link.href)
                  ? "text-white"
                  : "text-white/60 hover:text-white",
            );

            if (link.label !== "Services") {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={linkClasses}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-[2px] origin-left bg-brand-red transition-transform duration-300 ease-premium",
                      isActive(link.href)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              );
            }

            return (
              <div key={link.label} className="group relative">
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={linkClasses}
                >
                  {link.label}
                  <ChevronDown
                    aria-hidden="true"
                    className="size-3 transition-transform duration-300 group-hover:rotate-180"
                    strokeWidth={2}
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-[2px] origin-left bg-brand-red transition-transform duration-300 ease-premium",
                      isActive(link.href)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>

                <div className="invisible absolute left-1/2 top-full z-50 w-[23rem] -translate-x-1/2 pt-4 opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="border border-brand-line bg-white p-2 shadow-lift">
                    <p className="px-4 pb-2 pt-3 text-[0.55rem] font-bold uppercase tracking-[0.18em] text-brand-slate/60">
                      Our services
                    </p>
                    {serviceLinks.map((service, index) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="group/item flex items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-brand-light"
                      >
                        <span className="flex items-center gap-3">
                          <span className="font-mono text-[0.55rem] tracking-[0.08em] text-brand-slate/45">
                            0{index + 1}
                          </span>
                          <span className="text-sm font-semibold text-brand-navy">
                            {service.title}
                          </span>
                        </span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-3.5 text-brand-slate transition-colors group-hover/item:text-brand-red"
                          strokeWidth={1.75}
                        />
                      </Link>
                    ))}
                    <div className="mt-2 border-t border-brand-line pt-2">
                      <Link
                        href="/services"
                        className="flex items-center justify-between px-4 py-3 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-brand-red transition-colors hover:bg-brand-light"
                      >
                        All services
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden xl:block">
          <Button href="/quote" size="sm" withArrow>
            Request a quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className={cn(
            "grid size-11 place-items-center border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 xl:hidden",
            isSolid
              ? "border-brand-line text-brand-navy hover:border-brand-navy"
              : "border-white/25 text-white hover:border-white",
          )}
        >
          {open ? (
            <X aria-hidden="true" className="size-5" strokeWidth={1.75} />
          ) : (
            <Menu aria-hidden="true" className="size-5" strokeWidth={1.75} />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-brand-line bg-white xl:hidden"
          >
            <div className="container-shell min-h-[calc(100svh-5rem)] max-h-[calc(100svh-5rem)] overflow-y-auto py-5">
              <div className="grid gap-1">
                {navLinks.map((link, index) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between border-b border-brand-line py-4 text-sm font-bold uppercase tracking-[0.14em] transition-colors",
                        isActive(link.href)
                          ? "text-brand-red"
                          : "text-brand-navy hover:text-brand-red",
                      )}
                    >
                      <span className="flex items-center gap-4">
                        <span className="font-mono text-[0.55rem] font-normal text-brand-slate/60">
                          0{index + 1}
                        </span>
                        {link.label}
                      </span>
                      <span aria-hidden="true" className="text-brand-slate/40">
                        ↗
                      </span>
                    </Link>

                    {link.label === "Services" ? (
                      <div className="mb-2 ml-6 border-l border-brand-line pl-4">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between border-b border-brand-line/70 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-brand-slate transition-colors hover:text-brand-red"
                          >
                            {service.title}
                            <span aria-hidden="true" className="text-brand-slate/30">
                              ↗
                            </span>
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => setOpen(false)}
                          className="mt-3 inline-flex text-[0.58rem] font-bold uppercase tracking-[0.14em] text-brand-red"
                        >
                          All services →
                        </Link>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button
                  href="/quote"
                  fullWidth
                  withArrow
                  onClick={() => setOpen(false)}
                >
                  Request a quote
                </Button>
              </div>

              <div className="mt-6 flex flex-col gap-1 text-[0.62rem] uppercase tracking-[0.16em] text-brand-slate">
                <span>5813 Manyame Park, Chitungwiza</span>
                <div className="mt-1 flex flex-col gap-1">
                  <a
                    href="tel:+263774769799"
                    className="font-semibold text-brand-navy transition-colors hover:text-brand-red"
                  >
                    +263 774 769 799
                  </a>
                  <a
                    href="tel:+263716403330"
                    className="font-semibold text-brand-navy transition-colors hover:text-brand-red"
                  >
                    +263 716 403 330
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
