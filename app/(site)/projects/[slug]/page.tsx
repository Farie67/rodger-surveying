import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, MapPin } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { QuoteCTA } from "@/components/shared/QuoteCTA";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProject, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={`${project.category} / Project`}
        title={project.name}
        description={`${project.location} · ${project.scope}`}
        image={project.image}
        imageAlt={project.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.name },
        ]}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-slate transition-colors hover:text-brand-navy"
          >
            <ArrowLeft
              aria-hidden="true"
              className="size-3.5 transition-transform duration-300 ease-premium group-hover:-translate-x-0.5"
              strokeWidth={2}
            />
            Back to all projects
          </Link>

          <div className="mt-8 overflow-hidden bg-brand-navy">
            <div className="relative aspect-[16/9]">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 border border-white/20 bg-brand-navy/60 px-3 py-2 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm">
                <MapPin
                  aria-hidden="true"
                  className="size-3.5 text-brand-red"
                  strokeWidth={1.75}
                />
                {project.location}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.42fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Project overview"
                title="Scope delivered with precision."
                description={project.overview}
              />

              <div className="mt-10 border-t border-brand-line pt-8">
                <h2 className="font-display text-xl font-bold tracking-[-0.025em] text-brand-navy">
                  Scope of work
                </h2>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                  {project.scopeOfWork.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-red/10 text-brand-red">
                        <Check
                          aria-hidden="true"
                          className="size-3"
                          strokeWidth={2.5}
                        />
                      </span>
                      <span className="text-sm leading-6 text-brand-slate">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="h-fit border border-brand-line bg-brand-light">
              <div className="border-b border-brand-line p-6">
                <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
                  Project snapshot
                </p>
              </div>
              <div className="divide-y divide-brand-line">
                <div className="p-6">
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
                    Location
                  </p>
                  <p className="mt-2 font-display text-lg font-bold tracking-[-0.02em] text-brand-navy">
                    {project.location}
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
                    Category
                  </p>
                  <p className="mt-2 font-display text-lg font-bold tracking-[-0.02em] text-brand-navy">
                    {project.category}
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
                    Scope
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-navy">
                    {project.scope}
                  </p>
                </div>
              </div>
              <div className="border-t border-brand-line p-6">
                <Button href="/quote" variant="outline-navy" size="sm" withArrow>
                  Discuss this project
                </Button>
              </div>
            </aside>
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-brand-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-brand-slate">
              Looking for a similar scope? Tell us about your site and we will
              help define the right survey approach.
            </p>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-navy transition-colors hover:text-brand-red"
            >
              Browse more projects
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
      </section>

      <QuoteCTA
        title="Discuss a Similar Project"
        description="Share the location, scale and intended use of your site. We will respond with a clear survey scope and quotation."
        eyebrow="Project enquiry"
      />
    </>
  );
}
