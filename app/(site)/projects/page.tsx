import type { Metadata } from "next";

import { ProjectsGallery } from "@/components/projects/ProjectsGallery";
import { PageHero } from "@/components/shared/PageHero";
import { QuoteCTA } from "@/components/shared/QuoteCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore selected topographical, engineering, residential and solar survey projects delivered by Rodger Surveying.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected projects"
        title="Projects that move land forward."
        description="A cross-section of the topographical, engineering, residential and energy projects our teams have helped bring to life."
        image="/images/project-sunway-city.jpg"
        imageAlt="Aerial view of a planned development"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <SectionHeading
              eyebrow="The portfolio"
              title="Measured outcomes across Zimbabwe."
              description="From broad-acre terrain surveys to detailed setting out, each project is defined by the same standard of accuracy, communication and delivery."
            />

            <div className="grid grid-cols-3 gap-px border border-brand-line bg-brand-line">
              {[
                [String(projects.length), "Selected projects"],
                ["49", "Documented projects"],
                ["4", "Countries of experience"],
              ].map(([value, label]) => (
                <div key={label} className="bg-brand-light px-4 py-5 sm:px-6">
                  <p className="font-display text-3xl font-extrabold tracking-[-0.05em] text-brand-navy">
                    {value}
                  </p>
                  <p className="mt-2 text-[0.55rem] font-bold uppercase leading-4 tracking-[0.14em] text-brand-slate">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <ProjectsGallery />
          </div>
        </div>
      </section>

      <QuoteCTA
        title="Have a site with a story to tell?"
        description="Bring us the location, the constraints and the ambition. We will help define the survey scope that gets you there."
        eyebrow="Start a project"
      />
    </>
  );
}
