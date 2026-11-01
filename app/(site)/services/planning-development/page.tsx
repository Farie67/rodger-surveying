import type { Metadata } from "next";

import { ServicePage } from "@/components/services/ServicePage";
import { requireService } from "@/lib/services";

const service = requireService("planning-development");

export const metadata: Metadata = {
  title: service.title,
  description: service.heroDescription,
};

export default function PlanningDevelopmentPage() {
  return <ServicePage service={service} />;
}
