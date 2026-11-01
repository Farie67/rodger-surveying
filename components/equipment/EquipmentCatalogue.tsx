"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Crosshair,
  Package,
  Radar,
  Ruler,
  Satellite,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import {
  equipmentCategories,
  equipmentProducts,
  type EquipmentCategory,
} from "@/lib/equipment";
import { cn } from "@/lib/utils";

type Category = (typeof equipmentCategories)[number];

const categoryIcons: Record<EquipmentCategory, LucideIcon> = {
  "GNSS RTK GPS": Satellite,
  "Total Stations": Crosshair,
  "Automatic Levels": Ruler,
  Drones: Radar,
  Accessories: Package,
};

export function EquipmentCatalogue() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return equipmentProducts;
    return equipmentProducts.filter(
      (product) => product.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-brand-line pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div
          role="group"
          aria-label="Filter equipment by category"
          className="flex flex-wrap gap-2"
        >
          {equipmentCategories.map((category) => {
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
          Showing {filteredProducts.length} of {equipmentProducts.length} items
        </p>
      </div>

      <motion.div
        layout
        className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => {
            const Icon = categoryIcons[product.category];

            return (
              <motion.article
                layout
                key={product.slug}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex h-full flex-col overflow-hidden border border-brand-line bg-white transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-navy">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
                      backgroundSize: "44px 44px",
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-12 -right-6 select-none font-display text-[7rem] font-extrabold uppercase leading-none tracking-[-0.08em] text-white/[0.045]"
                  >
                    {product.brand}
                  </span>
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid size-20 place-items-center rounded-full border border-white/15 bg-white/[0.035] text-white/45">
                      <Icon
                        aria-hidden="true"
                        className="size-8"
                        strokeWidth={1.15}
                      />
                    </div>
                  </div>
                  <span className="absolute left-5 top-5 border border-white/15 bg-brand-navy/50 px-3 py-2 text-[0.5rem] font-bold uppercase tracking-[0.14em] text-white/55 backdrop-blur-sm">
                    Image placeholder
                  </span>
                  <span className="absolute right-5 top-5 font-mono text-[0.55rem] tracking-[0.1em] text-white/40">
                    0{index + 1}
                  </span>
                  <span className="absolute bottom-5 left-5 text-[0.52rem] font-bold uppercase tracking-[0.16em] text-white/45">
                    {product.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[0.56rem] font-bold uppercase tracking-[0.16em] text-brand-red">
                    {product.brand}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold tracking-[-0.025em] text-brand-navy">
                    {product.model}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-brand-slate">
                    {product.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-2">
                    <Button
                      href={`/contact?subject=${encodeURIComponent(
                        `Equipment pricing — ${product.brand} ${product.model}`,
                      )}`}
                      size="sm"
                      fullWidth
                    >
                      Request price
                    </Button>
                    <a
                      href={`https://wa.me/263774769799?text=${encodeURIComponent(
                        `Hello Rodger Surveying, I would like to enquire about the ${product.brand} ${product.model}.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center justify-center gap-2 border border-[#25D366]/35 px-3 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#128C4A] transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                    >
                      <WhatsAppIcon className="size-4" />
                      WhatsApp enquiry
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
