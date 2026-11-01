"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { projectCategories, projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

type Category = (typeof projectCategories)[number];

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-brand-line pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2"
        >
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={cn(
                  "border px-4 py-2.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2",
                  isActive
                    ? "border-brand-navy bg-brand-navy text-white"
                    : "border-brand-line bg-white text-brand-slate hover:border-brand-navy/30 hover:text-brand-navy",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-slate">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>

      <motion.div
        layout
        className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{
                duration: 0.35,
                delay: index * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group overflow-hidden border border-brand-line bg-white transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-card"
            >
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View ${project.name} project`}
                className="relative block aspect-[4/3] overflow-hidden bg-brand-navy"
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/10 to-transparent" />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                  <span className="border border-white/20 bg-brand-navy/55 px-3 py-2 text-[0.52rem] font-bold uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className="font-mono text-[0.55rem] tracking-[0.1em] text-white/50">
                    0{index + 1}
                  </span>
                </div>
                <span className="absolute bottom-5 right-5 grid size-10 place-items-center rounded-full border border-white/25 text-white transition-colors duration-300 group-hover:border-brand-red group-hover:bg-brand-red">
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                  />
                </span>
              </Link>

              <div className="p-6">
                <div className="flex items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-brand-slate">
                  <MapPin
                    aria-hidden="true"
                    className="size-3.5 text-brand-red"
                    strokeWidth={1.75}
                  />
                  {project.location}
                </div>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-brand-navy">
                  {project.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-brand-slate">
                  {project.scope}
                </p>

                <div className="mt-6">
                  <Button
                    href={`/projects/${project.slug}`}
                    variant="outline-navy"
                    size="sm"
                    withArrow
                  >
                    View project
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
