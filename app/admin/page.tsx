import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Eye,
  FilePlus2,
  Inbox,
  Sparkles,
  Trophy,
} from "lucide-react";

import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdmin } from "@/lib/admin-auth";
import { formatAdminDate, getStatusClasses } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dashboard",
};

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  await requireAdmin();

  const enquiries = await prisma.enquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  const total = enquiries.length;
  const newCount = enquiries.filter(
    (enquiry) => enquiry.status === "New",
  ).length;
  const wonCount = enquiries.filter(
    (enquiry) => enquiry.status === "Won",
  ).length;

  const stats = [
    {
      label: "Total enquiries",
      value: total,
      note: "All time",
      icon: Inbox,
      highlight: false,
    },
    {
      label: "New enquiries",
      value: newCount,
      note: "Awaiting first contact",
      icon: Sparkles,
      highlight: true,
    },
    {
      label: "Won enquiries",
      value: wonCount,
      note: "Successfully converted",
      icon: Trophy,
      highlight: false,
    },
  ];

  return (
    <AdminShell active="dashboard">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-brand-slate">
            Admin dashboard
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.045em] text-brand-navy sm:text-4xl">
            Enquiries overview.
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-brand-slate">
            Review quotation requests, follow their progress and keep every
            client conversation moving.
          </p>
        </div>
        <Link
          href="/quote"
          className="group inline-flex h-10 shrink-0 items-center gap-2 self-start border border-brand-navy px-4 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-brand-navy transition-colors hover:bg-brand-navy hover:text-white sm:self-auto"
        >
          <FilePlus2
            aria-hidden="true"
            className="size-3.5"
            strokeWidth={1.75}
          />
          Open quote form
          <ArrowUpRight
            aria-hidden="true"
            className="size-3.5 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.75}
          />
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="relative overflow-hidden border border-brand-line bg-white p-5 sm:p-6"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-0 top-0 h-[3px]",
                  stat.highlight ? "bg-brand-red" : "bg-brand-navy",
                )}
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.56rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
                    {stat.label}
                  </p>
                  <p className="mt-4 font-display text-4xl font-extrabold tracking-[-0.055em] text-brand-navy">
                    {stat.value}
                  </p>
                </div>
                <span
                  className={cn(
                    "grid size-10 place-items-center",
                    stat.highlight
                      ? "bg-brand-red/10 text-brand-red"
                      : "bg-brand-light text-brand-navy",
                  )}
                >
                  <Icon
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.5}
                  />
                </span>
              </div>
              <p className="mt-3 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-brand-slate/60">
                {stat.note}
              </p>
            </div>
          );
        })}
      </div>

      <section
        id="enquiries"
        className="mt-8 scroll-mt-24 border border-brand-line bg-white"
      >
        <div className="flex flex-col gap-3 border-b border-brand-line p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h2 className="font-display text-xl font-bold tracking-[-0.03em] text-brand-navy">
              All enquiries
            </h2>
            <p className="mt-1 text-xs text-brand-slate">
              {total === 1 ? "1 enquiry" : `${total} enquiries`} · Latest first
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-brand-slate">
            <span
              aria-hidden="true"
              className="size-1.5 bg-brand-red"
            />
            Live database
          </span>
        </div>

        {enquiries.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="border-b border-brand-line bg-brand-light">
                  {[
                    "Date",
                    "Reference",
                    "Client name",
                    "Service",
                    "Status",
                    "Action",
                  ].map((heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="px-5 py-3 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-brand-slate"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {enquiries.map((enquiry) => (
                  <tr
                    key={enquiry.id}
                    className="transition-colors hover:bg-brand-light/70"
                  >
                    <td className="whitespace-nowrap px-5 py-4 text-xs text-brand-slate">
                      {formatAdminDate(enquiry.createdAt)}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 font-mono text-[0.65rem] text-brand-navy">
                      {enquiry.reference}
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm font-semibold text-brand-navy">
                        {enquiry.fullName}
                      </p>
                      {enquiry.companyName ? (
                        <p className="mt-0.5 text-[0.65rem] text-brand-slate">
                          {enquiry.companyName}
                        </p>
                      ) : null}
                    </td>
                    <td className="px-5 py-4 text-xs text-brand-slate">
                      {enquiry.serviceRequired}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={cn(
                          "inline-flex border px-2.5 py-1.5 text-[0.53rem] font-bold uppercase tracking-[0.12em]",
                          getStatusClasses(enquiry.status),
                        )}
                      >
                        {enquiry.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/admin/enquiries/${enquiry.id}`}
                        aria-label={`View enquiry ${enquiry.reference}`}
                        className="inline-flex h-8 items-center gap-1.5 border border-brand-line px-3 text-[0.55rem] font-bold uppercase tracking-[0.12em] text-brand-navy transition-colors hover:border-brand-navy hover:bg-brand-navy hover:text-white"
                      >
                        <Eye
                          aria-hidden="true"
                          className="size-3.5"
                          strokeWidth={1.75}
                        />
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <span className="grid size-14 place-items-center bg-brand-light text-brand-slate">
              <Inbox
                aria-hidden="true"
                className="size-6"
                strokeWidth={1.5}
              />
            </span>
            <h2 className="mt-5 font-display text-xl font-bold tracking-[-0.03em] text-brand-navy">
              No enquiries yet.
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-6 text-brand-slate">
              New quotation requests will appear here as soon as they are
              submitted through the public quote form.
            </p>
            <Link
              href="/quote"
              className="mt-6 inline-flex h-10 items-center gap-2 bg-brand-red px-5 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-brand-red-dark"
            >
              Open quote form
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5"
                strokeWidth={1.75}
              />
            </Link>
          </div>
        )}
      </section>
    </AdminShell>
  );
}
