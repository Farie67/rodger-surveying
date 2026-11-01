import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import { LoginForm } from "@/components/admin/LoginForm";
import { redirectIfAdmin } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

type AdminLoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminLoginPage({
  searchParams,
}: AdminLoginPageProps) {
  await redirectIfAdmin();
  const { error } = await searchParams;

  return (
    <div className="grid min-h-screen bg-brand-light lg:grid-cols-[1.05fr_0.95fr]">
      <div className="relative hidden overflow-hidden bg-brand-navy p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/3 size-[32rem] rounded-full border border-white/[0.06]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-1/3 size-[22rem] rounded-full border border-white/[0.06]"
        />

        <Link href="/" className="relative flex items-center gap-3">
          <span className="font-display text-xl font-extrabold tracking-[0.04em]">
            R/S
          </span>
          <span aria-hidden="true" className="h-8 w-px bg-white/20" />
          <span className="flex flex-col">
            <span className="text-[0.64rem] font-bold uppercase tracking-[0.2em]">
              Rodger Surveying
            </span>
            <span className="mt-1 text-[0.5rem] uppercase tracking-[0.22em] text-white/40">
              Administration
            </span>
          </span>
        </Link>

        <div className="relative max-w-xl">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-brand-red" aria-hidden="true" />
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/50">
              Private workspace
            </span>
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.6rem,4.6vw,4.4rem)] font-extrabold leading-[0.96] tracking-[-0.05em]">
            Every enquiry,
            <br />
            in one clear view.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
            Review quotation requests, track project status and keep every
            client conversation moving from one secure admin workspace.
          </p>
        </div>

        <div className="relative flex items-center gap-3 border-t border-white/10 pt-6 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white/35">
          <ShieldCheck
            aria-hidden="true"
            className="size-4 text-brand-red"
            strokeWidth={1.75}
          />
          Confidential client information
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-center px-5 py-12 sm:px-8">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-slate transition-colors hover:text-brand-navy lg:hidden"
          >
            <ArrowLeft aria-hidden="true" className="size-3.5" strokeWidth={2} />
            Back to website
          </Link>

          <div className="border border-brand-line bg-white p-7 shadow-card sm:p-9">
            <span className="grid size-12 place-items-center bg-brand-navy text-white">
              <ShieldCheck
                aria-hidden="true"
                className="size-5"
                strokeWidth={1.5}
              />
            </span>
            <p className="mt-7 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-brand-red">
              Secure admin access
            </p>
            <h1 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.04em] text-brand-navy">
              Welcome back.
            </h1>
            <p className="mt-3 text-sm leading-6 text-brand-slate">
              Enter your administrator password to manage Rodger Surveying
              quotation enquiries.
            </p>

            <LoginForm error={error === "1"} />
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-brand-slate sm:flex-row">
            <Link href="/" className="transition-colors hover:text-brand-navy">
              View public website
            </Link>
            <span>Rodger Surveying (Pvt) Ltd</span>
          </div>
        </div>
      </div>
    </div>
  );
}
