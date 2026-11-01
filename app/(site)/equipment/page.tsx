import type { Metadata } from "next";

import { EquipmentCatalogue } from "@/components/equipment/EquipmentCatalogue";
import { PageHero } from "@/components/shared/PageHero";
import { QuoteCTA } from "@/components/shared/QuoteCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Equipment",
  description:
    "Browse Rodger Surveying's GNSS RTK receivers, total stations, automatic levels, drones and survey accessories.",
};

export default function EquipmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipment catalogue"
        title="Equipment built for certainty."
        description="Calibrated, maintained instruments for precise field data — available for hire with experienced operators or as part of a complete survey scope."
        image="/images/why-choose-us.jpg"
        imageAlt="Surveying equipment set up in the field"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Equipment" },
        ]}
      />

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <SectionHeading
              eyebrow="Field technology"
              title="The right instrument for the job."
              description="From GNSS control to aerial mapping, our equipment supports accurate, efficient survey work across every terrain."
            />

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-brand-line pt-5 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-brand-slate lg:border-t-0 lg:pt-0">
              {["CHCNAV", "Hi-Target", "Nikon", "Sokkia", "DJI"].map(
                (brand) => (
                  <span key={brand}>{brand}</span>
                ),
              )}
            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <EquipmentCatalogue />
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-brand-line pt-6 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-brand-slate sm:flex-row sm:items-center sm:justify-between">
            <span>Calibrated · maintained · field-ready</span>
            <span>Availability subject to project programme</span>
          </div>
        </div>
      </section>

      <QuoteCTA
        title="Need help specifying the right equipment?"
        description="Tell us what you are measuring, the site conditions and the accuracy you need. We will recommend the right instrument and workflow."
        eyebrow="Equipment advice"
      />
    </>
  );
}
