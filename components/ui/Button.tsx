import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "outline-navy" | "outline-white";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Adds a directional arrow that shifts on hover. */
  withArrow?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof ButtonBaseProps | "children"
  > & {
    href?: undefined;
  };

type ButtonAsLinkProps = ButtonBaseProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof ButtonBaseProps | "children"
  > & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const baseStyles =
  "group relative inline-flex select-none items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-[2px] border font-sans text-[0.7rem] font-bold uppercase leading-none tracking-[0.16em] transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-premium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-brand-red bg-brand-red text-white shadow-[0_12px_28px_-14px_rgba(214,40,40,0.85)] hover:border-brand-red-dark hover:bg-brand-red-dark hover:shadow-[0_16px_34px_-14px_rgba(214,40,40,0.9)] focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2",
  "outline-navy":
    "border-brand-navy/25 bg-transparent text-brand-navy hover:border-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2",
  "outline-white":
    "border-white/40 bg-transparent text-white hover:border-white hover:bg-white hover:text-brand-navy focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-[0.65rem]",
  md: "h-12 px-7",
  lg: "h-14 px-8",
};

/**
 * Brand button with three themes: solid red, navy outline, and white outline.
 * Pass `href` to render an anchor; omit it to render a semantic button.
 */
export function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  fullWidth = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {withArrow ? (
        <ArrowUpRight
          aria-hidden="true"
          strokeWidth={2.25}
          className="relative z-10 size-4 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      ) : null}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest;

    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
