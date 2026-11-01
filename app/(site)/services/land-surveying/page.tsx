import type { Metadata } from "next";

import { ServicePage } from "@/components/services/ServicePage";
import { requireService } from "@/lib/services";

const service = requireService("land-surveying");

export const metadata: Metadata = {
  title: service.title,
  description: service.heroDescription,
};

export default function LandSurveyingPage() {
  return <ServicePage service={service} />;
}
