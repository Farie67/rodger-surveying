import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
  {
    slug: "selby-farm",
    title: "Selby Farm",
    scope: "1,500 ha Topographical Survey",
    category: "Topographical",
    image: "/images/project-selby-farm.jpg",
    alt: "Rolling green hills representing the Selby Farm survey area",
  },
  {
    slug: "raylands",
    title: "Raylands",
    scope: "1,300 Residential Stands",
    category: "Residential Layout",
    image: "/images/project-raylands.jpg",
    alt: "Aerial view of a residential neighbourhood",
  },
  {
    slug: "lake-chivero",
    title: "Lake Chivero",
    scope: "40 km Waterline Survey",
    category: "Engineering Survey",
    image: "/images/project-lake-chivero.jpg",
    alt: "Calm lake water representing the Lake Chivero waterline survey",
  },
  {
    slug: "sunway-city",
    title: "Sunway City",
    scope: "94 ha Topographical Survey",
    category: "Topographical",
    image: "/images/project-sunway-city.jpg",
    alt: "Aerial view of a planned residential development",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured projects"
            title={
              <>
                Work measured
                <br className="hidden sm:block" /> in real outcomes.
              </>
            }
            description="From broad-acre topographical surveys to serviced residential layouts, our work turns complex land questions into clear, buildable answers."
          />
          <Button
            href="/projects"
            variant="outline-navy"
            size="sm"
            withArrow
            className="shrink-0"
          >
            View all projects
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group relative overflow-hidden border border-brand-line bg-brand-navy"
            >
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View ${project.title} project`}
                className="block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.045]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-brand-navy/10" />
                  <div className="absolute inset-0 bg-brand-navy/10 transition-colors duration-500 group-hover:bg-brand-navy/0" />

                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                    <span className="border border-white/20 bg-brand-navy/45 px-3 py-2 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="font-mono text-[0.58rem] tracking-[0.1em] text-white/50">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/45">
                          {project.scope}
                        </p>
                        <h3 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">
                          {project.title}
                        </h3>
                      </div>
                      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/25 text-white transition-all duration-300 ease-premium group-hover:border-brand-red group-hover:bg-brand-red">
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-4 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          strokeWidth={1.75}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[3px] w-0 bg-brand-red transition-all duration-500 ease-premium group-hover:w-full"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
