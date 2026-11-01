export const ENQUIRY_STATUSES = [
  "New",
  "Contacted",
  "Assessment",
  "Quotation Sent",
  "Negotiation",
  "Won",
  "Lost",
] as const;

export type EnquiryStatus = (typeof ENQUIRY_STATUSES)[number];

const statusClasses: Record<string, string> = {
  New: "border-brand-red/20 bg-brand-red/10 text-brand-red",
  Contacted: "border-sky-200 bg-sky-50 text-sky-700",
  Assessment: "border-amber-200 bg-amber-50 text-amber-700",
  "Quotation Sent": "border-indigo-200 bg-indigo-50 text-indigo-700",
  Negotiation: "border-violet-200 bg-violet-50 text-violet-700",
  Won: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Lost: "border-slate-200 bg-slate-100 text-slate-600",
};

export function getStatusClasses(status: string) {
  return statusClasses[status] ?? statusClasses.Lost;
}

export function isEnquiryStatus(value: string): value is EnquiryStatus {
  return ENQUIRY_STATUSES.includes(value as EnquiryStatus);
}

export function formatAdminDate(value: Date | string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Africa/Harare",
  }).format(new Date(value));
}

export function formatAdminDateTime(value: Date | string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Africa/Harare",
  }).format(new Date(value));
}

export function formatStoredDate(value: string) {
  const date = new Date(`${value}T00:00:00Z`);

  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
