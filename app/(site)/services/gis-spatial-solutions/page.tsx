import type { Metadata } from "next";

import { ServicePage } from "@/components/services/ServicePage";
import { requireService } from "@/lib/services";

const service = requireService("gis-spatial-solutions");

export const metadata: Metadata = {
  title: service.title,
  description: service.heroDescription,
};

export default function GisSpatialSolutionsPage() {
  return <ServicePage service={service} />;
}
