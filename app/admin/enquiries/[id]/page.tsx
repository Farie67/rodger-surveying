import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileText,
  Hash,
  Mail,
  MapPin,
  Phone,
  Ruler,
  UserRound,
} from "lucide-react";

import { AdminShell } from "@/components/admin/AdminShell";
import { updateEnquiryStatusAction } from "@/app/admin/actions";
import { requireAdmin } from "@/lib/admin-auth";
import {
  ENQUIRY_STATUSES,
  formatAdminDateTime,
  formatStoredDate,
  getStatusClasses,
} from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Enquiry Details",
};

export const dynamic = "force-dynamic";

type EnquiryDetailPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ updated?: string; error?: string }>;
};

function DetailItem({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-[0.53rem] font-bold uppercase tracking-[0.15em] text-brand-slate/70">
        {label}
      </p>
      <div className="mt-1.5 text-sm leading-6 text-brand-navy">{children}</div>
    </div>
  );
}

export default async function EnquiryDetailPage({
  params,
  searchParams,
}: EnquiryDetailPageProps) {
  await requireAdmin();

  const { id } = await params;
  const { updated, error } = await searchParams;

  const enquiry = await prisma.enquiry.findUnique({ where: { id } });

  if (!enquiry) {
    notFound();
  }

  return (
    <AdminShell active="enquiries">
      <Link
        href="/admin"
        className="group inline-flex items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-brand-slate transition-colors hover:text-brand-navy"
      >
        <ArrowLeft
          aria-hidden="true"
          className="size-3.5 transition-transform duration-300 ease-premium group-hover:-translate-x-0.5"
          strokeWidth={2}
        />
        Back to dashboard
      </Link>

      <div className="mt-6 flex flex-col gap-5 border-b border-brand-line pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-brand-slate">
              {enquiry.reference}
            </span>
            <span
              className={cn(
                "inline-flex border px-2.5 py-1.5 text-[0.53rem] font-bold uppercase tracking-[0.12em]",
                getStatusClasses(enquiry.status),
              )}
            >
              {enquiry.status}
            </span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.045em] text-brand-navy sm:text-4xl">
            {enquiry.fullName}
          </h1>
          <p className="mt-2 text-sm text-brand-slate">
            {enquiry.companyName || "Individual client"} ·{" "}
            {enquiry.serviceRequired}
          </p>
        </div>

        <div className="text-left sm:text-right">
          <p className="text-[0.53rem] font-bold uppercase tracking-[0.14em] text-brand-slate/60">
            Submitted
          </p>
          <p className="mt-1 text-xs font-medium text-brand-navy">
            {formatAdminDateTime(enquiry.createdAt)}
          </p>
        </div>
      </div>

      {updated === "1" ? (
        <div
          role="status"
          className="mt-6 flex items-center gap-3 border-l-2 border-emerald-500 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
        >
          <CheckCircle2
            aria-hidden="true"
            className="size-4 shrink-0"
            strokeWidth={1.75}
          />
          Status updated successfully.
        </div>
      ) : null}

      {error ? (
        <div
          role="alert"
          className="mt-6 border-l-2 border-brand-red bg-brand-red/5 px-4 py-3 text-sm text-brand-red"
        >
          {error === "invalid-status"
            ? "The selected status was invalid. Please try again."
            : "We could not update the status. Please try again."}
        </div>
      ) : null}

      <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_0.42fr] lg:items-start">
        <div className="space-y-5">
          <section className="border border-brand-line bg-white">
            <div className="flex items-center gap-3 border-b border-brand-line px-5 py-4 sm:px-6">
              <UserRound
                aria-hidden="true"
                className="size-4 text-brand-red"
                strokeWidth={1.75}
              />
              <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-brand-navy">
                Client details
              </h2>
            </div>
            <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
              <DetailItem label="Full name">{enquiry.fullName}</DetailItem>
              <DetailItem label="Company">
                {enquiry.companyName || "Not provided"}
              </DetailItem>
              <DetailItem label="Email">
                <a
                  href={`mailto:${enquiry.email}`}
                  className="inline-flex items-center gap-2 break-all text-brand-navy underline decoration-brand-line underline-offset-4 transition-colors hover:text-brand-red"
                >
                  <Mail
                    aria-hidden="true"
                    className="size-3.5 shrink-0 text-brand-red"
                    strokeWidth={1.75}
                  />
                  {enquiry.email}
                </a>
              </DetailItem>
              <DetailItem label="Phone">
                <a
                  href={`tel:${enquiry.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 text-brand-navy transition-colors hover:text-brand-red"
                >
                  <Phone
                    aria-hidden="true"
                    className="size-3.5 text-brand-red"
                    strokeWidth={1.75}
                  />
                  {enquiry.phone}
                </a>
              </DetailItem>
            </div>
          </section>

          <section className="border border-brand-line bg-white">
            <div className="flex items-center gap-3 border-b border-brand-line px-5 py-4 sm:px-6">
              <ClipboardList
                aria-hidden="true"
                className="size-4 text-brand-red"
                strokeWidth={1.75}
              />
              <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-brand-navy">
                Project details
              </h2>
            </div>
            <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
              <DetailItem label="Province">
                <span className="inline-flex items-center gap-2">
                  <MapPin
                    aria-hidden="true"
                    className="size-3.5 text-brand-red"
                    strokeWidth={1.75}
                  />
                  {enquiry.province}
                </span>
              </DetailItem>
              <DetailItem label="Town / location">
                <span className="inline-flex items-center gap-2">
                  <Building2
                    aria-hidden="true"
                    className="size-3.5 text-brand-red"
                    strokeWidth={1.75}
                  />
                  {enquiry.town}
                </span>
              </DetailItem>
              <DetailItem label="Service required">
                {enquiry.serviceRequired}
              </DetailItem>
              <DetailItem label="Project size">
                <span className="inline-flex items-center gap-2">
                  <Ruler
                    aria-hidden="true"
                    className="size-3.5 text-brand-red"
                    strokeWidth={1.75}
                  />
                  {enquiry.projectSize}
                </span>
              </DetailItem>
              <DetailItem label="Expected commencement">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays
                    aria-hidden="true"
                    className="size-3.5 text-brand-red"
                    strokeWidth={1.75}
                  />
                  {formatStoredDate(enquiry.commencementDate)}
                </span>
              </DetailItem>
              <DetailItem label="Current status">
                <span
                  className={cn(
                    "inline-flex border px-2.5 py-1.5 text-[0.53rem] font-bold uppercase tracking-[0.12em]",
                    getStatusClasses(enquiry.status),
                  )}
                >
                  {enquiry.status}
                </span>
              </DetailItem>
            </div>
          </section>

          <section className="border border-brand-line bg-white">
            <div className="flex items-center gap-3 border-b border-brand-line px-5 py-4 sm:px-6">
              <FileText
                aria-hidden="true"
                className="size-4 text-brand-red"
                strokeWidth={1.75}
              />
              <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-brand-navy">
                Project description
              </h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="whitespace-pre-line text-sm leading-7 text-brand-navy">
                {enquiry.description}
              </p>
            </div>
          </section>

          <section className="border border-brand-line bg-white">
            <div className="flex items-center gap-3 border-b border-brand-line px-5 py-4 sm:px-6">
              <ClipboardList
                aria-hidden="true"
                className="size-4 text-brand-red"
                strokeWidth={1.75}
              />
              <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-brand-navy">
                Additional requirements
              </h2>
            </div>
            <div className="p-5 sm:p-6">
              <p className="whitespace-pre-line text-sm leading-7 text-brand-slate">
                {enquiry.additionalRequirements ||
                  "No additional requirements were provided."}
              </p>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-8">
          <section className="border border-brand-line bg-white">
            <div className="border-b border-brand-line px-5 py-4">
              <p className="text-[0.53rem] font-bold uppercase tracking-[0.15em] text-brand-slate">
                Workflow
              </p>
              <h2 className="mt-1 font-display text-lg font-bold tracking-[-0.02em] text-brand-navy">
                Update status
              </h2>
            </div>

            <form action={updateEnquiryStatusAction} className="p-5">
              <input type="hidden" name="id" value={enquiry.id} />
              <label
                htmlFor="enquiry-status"
                className="mb-2 block text-[0.55rem] font-bold uppercase tracking-[0.15em] text-brand-navy"
              >
                Status
              </label>
              <select
                id="enquiry-status"
                name="status"
                defaultValue={enquiry.status}
                className="h-11 w-full border border-brand-line bg-white px-3 text-sm text-brand-navy outline-none transition-[border-color,box-shadow] focus:border-brand-red focus:ring-2 focus:ring-brand-red/10"
              >
                {ENQUIRY_STATUSES.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>

              <Button
                type="submit"
                withArrow
                className="mt-4 w-full justify-center"
              >
                Save status
              </Button>

              <p className="mt-3 text-[0.6rem] leading-5 text-brand-slate">
                Changes are saved immediately to the enquiry record.
              </p>
            </form>
          </section>

          <section className="border border-brand-line bg-white">
            <div className="flex items-center gap-3 border-b border-brand-line px-5 py-4">
              <Clock3
                aria-hidden="true"
                className="size-4 text-brand-red"
                strokeWidth={1.75}
              />
              <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-brand-navy">
                Record details
              </h2>
            </div>
            <div className="space-y-4 p-5">
              <div>
                <p className="text-[0.53rem] font-bold uppercase tracking-[0.15em] text-brand-slate/70">
                  Reference
                </p>
                <p className="mt-1.5 flex items-center gap-2 font-mono text-xs text-brand-navy">
                  <Hash
                    aria-hidden="true"
                    className="size-3.5 text-brand-red"
                    strokeWidth={1.75}
                  />
                  {enquiry.reference}
                </p>
              </div>
              <div>
                <p className="text-[0.53rem] font-bold uppercase tracking-[0.15em] text-brand-slate/70">
                  Created
                </p>
                <p className="mt-1.5 text-xs leading-5 text-brand-navy">
                  {formatAdminDateTime(enquiry.createdAt)}
                </p>
              </div>
              <div>
                <p className="text-[0.53rem] font-bold uppercase tracking-[0.15em] text-brand-slate/70">
                  Record ID
                </p>
                <p className="mt-1.5 break-all font-mono text-[0.6rem] leading-5 text-brand-slate">
                  {enquiry.id}
                </p>
              </div>
            </div>
          </section>

          <div className="border border-brand-line bg-brand-navy p-5 text-white">
            <p className="text-[0.53rem] font-bold uppercase tracking-[0.15em] text-white/40">
              Quick contact
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={`mailto:${enquiry.email}`}
                className="inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
              >
                <Mail
                  aria-hidden="true"
                  className="size-4 text-brand-red"
                  strokeWidth={1.75}
                />
                Email client
              </a>
              <a
                href={`tel:${enquiry.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
              >
                <Phone
                  aria-hidden="true"
                  className="size-4 text-brand-red"
                  strokeWidth={1.75}
                />
                Call client
              </a>
            </div>
          </div>
        </aside>
      </div>
    </AdminShell>
  );
}
