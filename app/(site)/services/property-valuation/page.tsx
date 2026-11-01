import type { Metadata } from "next";

import { ServicePage } from "@/components/services/ServicePage";
import { requireService } from "@/lib/services";

const service = requireService("property-valuation");

export const metadata: Metadata = {
  title: service.title,
  description: service.heroDescription,
};

export default function PropertyValuationPage() {
  return <ServicePage service={service} />;
}
