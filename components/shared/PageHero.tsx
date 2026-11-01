import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  breadcrumbs?: Breadcrumb[];
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumbs,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-brand-navy pb-14 pt-32 sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-40",
        className,
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-navy/40" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,28,50,0.97)_0%,rgba(16,28,50,0.86)_48%,rgba(16,28,50,0.34)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-transparent to-brand-navy/30" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />

      <div className="container-shell relative z-10">
        {breadcrumbs?.length ? (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/45">
              {breadcrumbs.map((crumb, index) => (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                  {index > 0 ? (
                    <ChevronRight
                      aria-hidden="true"
                      className="size-3 text-white/25"
                      strokeWidth={1.75}
                    />
                  ) : null}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/75" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="mt-14 max-w-5xl sm:mt-16">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-brand-red" aria-hidden="true" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/55">
              {eyebrow}
            </span>
          </div>

          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.7rem,6vw,5.4rem)] font-extrabold leading-[0.96] tracking-[-0.055em] text-white">
            {title}
          </h1>

          {description ? (
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
