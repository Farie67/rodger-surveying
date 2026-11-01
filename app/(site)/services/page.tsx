import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ScanLine } from "lucide-react";

import { QuoteCTA } from "@/components/shared/QuoteCTA";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Rodger Surveying's land surveying, engineering surveying, GIS, planning and property valuation services.",
};

const serviceCards = [
  ...services.map((service) => ({
    slug: service.slug,
    title: service.title,
    description: service.cardDescription,
    image: service.image,
    imageAlt: service.imageAlt,
    href: `/services/${service.slug}`,
    icon: service.icon,
  })),
  {
    slug: "equipment-hire",
    title: "Equipment Hire",
    description:
      "Calibrated total stations, GNSS receivers and UAVs available with experienced field operators.",
    image: "/images/hero-aerial.jpg",
    imageAlt: "Aerial view of farmland",
    href: "/equipment",
    icon: ScanLine,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Surveying and engineering, end to end."
        description="Five specialist service lines, one accountable team. Explore how we support land, infrastructure and property decisions from first measurement to final report."
        image="/images/hero-aerial.jpg"
        imageAlt="Aerial view of cultivated land"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Capabilities"
              title="The right expertise at every stage."
              description="From establishing a boundary to mapping an entire region, our teams bring the right mix of field craft, technical analysis and practical advice."
            />
            <p className="hidden shrink-0 text-right text-[0.6rem] font-bold uppercase leading-5 tracking-[0.16em] text-brand-slate lg:block">
              Five disciplines
              <br />
              One standard
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {serviceCards.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.slug}
                  className="group overflow-hidden border border-brand-line bg-white transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-card"
                >
                  <Link href={service.href} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-brand-navy">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.045]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/10 to-transparent" />
                      <span className="absolute left-5 top-5 font-mono text-[0.58rem] tracking-[0.1em] text-white/55">
                        0{index + 1}
                      </span>
                      <span className="absolute bottom-5 left-5 grid size-11 place-items-center bg-brand-red text-white">
                        <Icon
                          aria-hidden="true"
                          className="size-5"
                          strokeWidth={1.5}
                        />
                      </span>
                    </div>

                    <div className="p-6 sm:p-7">
                      <h2 className="font-display text-xl font-bold tracking-[-0.025em] text-brand-navy">
                        {service.title}
                      </h2>
                      <p className="mt-2.5 text-sm leading-6 text-brand-slate">
                        {service.description}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-navy transition-colors group-hover:text-brand-red">
                        Explore service
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-3.5 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          strokeWidth={2}
                        />
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <QuoteCTA
        title="Not sure which service you need?"
        description="Describe the land, asset or development challenge. We will point you to the right technical scope — and the right team."
        eyebrow="Talk to a specialist"
      />
    </>
  );
}
