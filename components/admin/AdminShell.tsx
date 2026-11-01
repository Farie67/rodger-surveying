import type { ReactNode } from "react";
import Link from "next/link";
import {
  ExternalLink,
  FilePlus2,
  Inbox,
  LayoutDashboard,
  LogOut,
  ShieldCheck,
} from "lucide-react";

import { logoutAction } from "@/app/admin/actions";
import { cn } from "@/lib/utils";

type AdminShellProps = {
  children: ReactNode;
  active?: "dashboard" | "enquiries";
};

const navItems = [
  {
    label: "Overview",
    href: "/admin",
    icon: LayoutDashboard,
    key: "dashboard" as const,
  },
  {
    label: "Enquiries",
    href: "/admin#enquiries",
    icon: Inbox,
    key: "enquiries" as const,
  },
];

export function AdminShell({ children, active = "dashboard" }: AdminShellProps) {
  return (
    <div className="min-h-screen bg-brand-light">
      <div className="h-1 bg-brand-red" />

      <header className="border-b border-white/10 bg-brand-navy text-white">
        <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/admin" className="flex items-center gap-3">
            <span className="font-display text-lg font-extrabold tracking-[0.04em]">
              R/S
            </span>
            <span aria-hidden="true" className="h-7 w-px bg-white/20" />
            <span className="flex flex-col">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em]">
                Administration
              </span>
              <span className="mt-1 text-[0.48rem] uppercase tracking-[0.2em] text-white/40">
                Rodger Surveying
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href="/"
              className="hidden items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-white/55 transition-colors hover:text-white sm:inline-flex"
            >
              View website
              <ExternalLink
                aria-hidden="true"
                className="size-3.5"
                strokeWidth={1.75}
              />
            </Link>

            <form action={logoutAction}>
              <button
                type="submit"
                className="inline-flex h-9 items-center gap-2 border border-white/20 px-3 text-[0.56rem] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:border-brand-red hover:bg-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <LogOut
                  aria-hidden="true"
                  className="size-3.5"
                  strokeWidth={1.75}
                />
                Log out
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="border-b border-brand-line bg-white lg:hidden">
        <nav
          aria-label="Admin navigation"
          className="mx-auto flex max-w-[90rem] gap-1 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active === item.key ? "page" : undefined}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.12em] transition-colors",
                  active === item.key
                    ? "bg-brand-navy text-white"
                    : "text-brand-slate hover:bg-brand-light hover:text-brand-navy",
                )}
              >
                <Icon
                  aria-hidden="true"
                  className="size-3.5"
                  strokeWidth={1.75}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mx-auto flex max-w-[90rem] gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <aside className="hidden w-56 shrink-0 lg:block">
          <div className="sticky top-8">
            <div className="border border-brand-line bg-white p-3">
              <p className="px-3 pb-2 pt-2 text-[0.52rem] font-bold uppercase tracking-[0.18em] text-brand-slate/60">
                Workspace
              </p>
              <nav aria-label="Admin navigation" className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-current={active === item.key ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-3 px-3 py-3 text-[0.62rem] font-bold uppercase tracking-[0.12em] transition-colors",
                        active === item.key
                          ? "bg-brand-navy text-white"
                          : "text-brand-slate hover:bg-brand-light hover:text-brand-navy",
                      )}
                    >
                      <Icon
                        aria-hidden="true"
                        className="size-4"
                        strokeWidth={1.75}
                      />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-2 border-t border-brand-line pt-2">
                <Link
                  href="/quote"
                  className="flex items-center gap-3 px-3 py-3 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-brand-slate transition-colors hover:bg-brand-light hover:text-brand-navy"
                >
                  <FilePlus2
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.75}
                  />
                  Quote form
                </Link>
              </div>
            </div>

            <div className="mt-4 border border-brand-line bg-white p-5">
              <ShieldCheck
                aria-hidden="true"
                className="size-5 text-brand-red"
                strokeWidth={1.5}
              />
              <p className="mt-3 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-brand-navy">
                Secure area
              </p>
              <p className="mt-1.5 text-xs leading-5 text-brand-slate">
                Enquiries and client information are confidential.
              </p>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
