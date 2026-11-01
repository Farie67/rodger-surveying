import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Small label above the heading, paired with the brand-red rule. */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Semantic heading level. Defaults to h2. */
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  /** Use "dark" when the section has a navy or photographic background. */
  theme?: "light" | "dark";
  id?: string;
  className?: string;
};

/**
 * Consistent section intro used across the site: eyebrow, display heading,
 * and an optional supporting paragraph.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  align = "left",
  theme = "light",
  id,
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCentered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "flex items-center gap-3",
            isCentered && "justify-center",
          )}
        >
          <span
            aria-hidden="true"
            className="h-[2px] w-7 shrink-0 bg-brand-red"
          />
          <span
            className={cn(
              "text-[0.68rem] font-bold uppercase tracking-[0.22em]",
              isDark ? "text-white/65" : "text-brand-slate",
            )}
          >
            {eyebrow}
          </span>
        </div>
      ) : null}

      <Heading
        id={id}
        className={cn(
          "mt-5 font-display text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-[1.06] tracking-[-0.035em]",
          isDark ? "text-white" : "text-brand-navy",
        )}
      >
        {title}
      </Heading>

      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-7 sm:text-[1.0625rem] sm:leading-8",
            isCentered && "mx-auto",
            isDark ? "text-white/70" : "text-brand-slate",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
