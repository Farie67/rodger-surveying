import {
  Building2,
  HardHat,
  Landmark,
  Map,
  Ruler,
  type LucideIcon,
} from "lucide-react";

export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceEquipment = {
  name: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  heroDescription: string;
  cardDescription: string;
  intro: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  whatWeDo: ServiceFeature[];
  process: ServiceStep[];
  equipmentExtra: ServiceEquipment;
};

export const services: Service[] = [
  {
    slug: "land-surveying",
    title: "Land Surveying",
    eyebrow: "Services / Land Surveying",
    heroDescription:
      "Accurate, legally defensible land surveys that establish boundaries, support title and unlock confident development.",
    cardDescription:
      "Cadastral, boundary, subdivision and topographical surveys with legally defensible precision.",
    intro:
      "From a single plot to a large-scale subdivision, our land surveying team establishes and documents land boundaries with rigour. We work with private owners, developers and statutory authorities to produce survey records that stand up to scrutiny.",
    image: "/images/why-choose-us.jpg",
    imageAlt: "Surveying equipment set up in the field",
    icon: Ruler,
    whatWeDo: [
      {
        title: "Cadastral & boundary surveys",
        description:
          "Establish, re-establish and document property boundaries for registration, transfer and dispute resolution.",
      },
      {
        title: "Subdivision & consolidation",
        description:
          "Prepare survey records and layout plans for the division or amalgamation of land.",
      },
      {
        title: "Topographical surveys",
        description:
          "Capture levels, features and site constraints to inform design, planning and construction.",
      },
      {
        title: "Title & tenure support",
        description:
          "Survey documentation aligned with statutory requirements and land administration processes.",
      },
    ],
    process: [
      {
        title: "Instruction & records review",
        description:
          "We confirm the scope, title information and statutory requirements before mobilisation.",
      },
      {
        title: "Reconnaissance & control",
        description:
          "Field teams recover existing control, assess site conditions and establish the survey network.",
      },
      {
        title: "Measurement & processing",
        description:
          "Observations are captured with calibrated instruments and processed through rigorous checks.",
      },
      {
        title: "Plan production & delivery",
        description:
          "Survey records, plans and reports are prepared and issued in the required formats.",
      },
    ],
    equipmentExtra: {
      name: "Digital Levels",
      description:
        "Precise height transfer and level control for topographical and engineering survey work.",
    },
  },
  {
    slug: "engineering-surveying",
    title: "Engineering Surveying",
    eyebrow: "Services / Engineering Surveying",
    heroDescription:
      "Precise setting out, monitoring and as-built measurement for infrastructure that has to perform.",
    cardDescription:
      "Setting out, as-built surveys and deformation monitoring for civil, structural and infrastructure works.",
    intro:
      "Our engineering surveyors translate design intent into physical reality. From the first control point to the final as-built record, we provide the dimensional certainty contractors, engineers and asset owners depend on.",
    image: "/images/project-sunway-city.jpg",
    imageAlt: "Aerial view of a planned development and road network",
    icon: HardHat,
    whatWeDo: [
      {
        title: "Setting out & alignment",
        description:
          "Transfer design geometry to site for roads, structures, services and bulk earthworks.",
      },
      {
        title: "As-built surveys",
        description:
          "Verify constructed works against design and produce clear, coordinated as-built records.",
      },
      {
        title: "Deformation monitoring",
        description:
          "Repeatable monitoring programmes for structures and ground movement using precise control.",
      },
      {
        title: "Volumes & earthworks",
        description:
          "Measurement and reporting of cut, fill and stockpile quantities for commercial control.",
      },
    ],
    process: [
      {
        title: "Design & control review",
        description:
          "We review drawings, coordinate systems and tolerances and agree the survey control strategy.",
      },
      {
        title: "Control network establishment",
        description:
          "Primary and secondary control is installed, observed and validated before construction begins.",
      },
      {
        title: "Construction support",
        description:
          "Field teams provide timely setting out, verification and monitoring through the works programme.",
      },
      {
        title: "As-built verification",
        description:
          "Final measurements are checked, documented and issued with the agreed as-built deliverables.",
      },
    ],
    equipmentExtra: {
      name: "Digital Levels & Monitoring Prisms",
      description:
        "High-order level control and repeatable deformation monitoring for structures and ground.",
    },
  },
  {
    slug: "gis-spatial-solutions",
    title: "GIS & Spatial Solutions",
    eyebrow: "Services / GIS & Spatial Solutions",
    heroDescription:
      "Spatial data that turns complex land information into clear, usable intelligence.",
    cardDescription:
      "Spatial data capture, analysis and visualisation that turns location intelligence into better decisions.",
    intro:
      "We help organisations see the whole picture. Our GIS and spatial solutions combine field-accurate data with robust analysis, clear mapping and practical systems that support planning, asset management and decision-making.",
    image: "/images/project-selby-farm.jpg",
    imageAlt: "Aerial view of rolling green terrain",
    icon: Map,
    whatWeDo: [
      {
        title: "Spatial data capture",
        description:
          "Field and remote sensing data collected, cleaned and structured for reliable downstream use.",
      },
      {
        title: "Geodatabase design",
        description:
          "Organised, standards-based data models that make spatial information easier to manage.",
      },
      {
        title: "Mapping & spatial analysis",
        description:
          "Thematic mapping, overlays and analysis that reveal patterns, constraints and opportunity.",
      },
      {
        title: "Visualisation & decision support",
        description:
          "Accessible maps, dashboards and reports that translate spatial data into action.",
      },
    ],
    process: [
      {
        title: "Requirements & data audit",
        description:
          "We define the decisions the system must support and assess the data already available.",
      },
      {
        title: "Acquisition & field capture",
        description:
          "Missing information is captured using survey-grade GNSS, total stations or UAV mapping.",
      },
      {
        title: "Processing & modelling",
        description:
          "Data is validated, integrated and analysed within a documented spatial framework.",
      },
      {
        title: "Delivery & enablement",
        description:
          "Maps, databases and user guidance are handed over with the training needed to use them.",
      },
    ],
    equipmentExtra: {
      name: "UAV Mapping Systems",
      description:
        "High-resolution aerial capture for mapping, terrain modelling and site progress records.",
    },
  },
  {
    slug: "planning-development",
    title: "Planning & Development",
    eyebrow: "Services / Planning & Development",
    heroDescription:
      "Practical planning and layout solutions grounded in site reality and statutory process.",
    cardDescription:
      "Layout planning, land-use studies and development coordination from concept through to approval.",
    intro:
      "Good planning starts with an accurate understanding of the land. We combine spatial evidence, development insight and statutory awareness to help clients shape layouts that are practical, efficient and approvable.",
    image: "/images/project-raylands.jpg",
    imageAlt: "Aerial view of a residential layout",
    icon: Building2,
    whatWeDo: [
      {
        title: "Site appraisal & feasibility",
        description:
          "Constraint mapping, access review and spatial analysis to test what the site can support.",
      },
      {
        title: "Layout planning",
        description:
          "Efficient residential, commercial and mixed-use layouts informed by survey and site conditions.",
      },
      {
        title: "Land-use studies",
        description:
          "Evidence-led assessment of current use, development potential and planning implications.",
      },
      {
        title: "Statutory coordination",
        description:
          "Technical information prepared and coordinated to support approvals and stakeholder review.",
      },
    ],
    process: [
      {
        title: "Site analysis",
        description:
          "We establish the survey base, site constraints, access and surrounding context.",
      },
      {
        title: "Concept & layout",
        description:
          "Development options are tested against yields, servicing, circulation and planning requirements.",
      },
      {
        title: "Stakeholder coordination",
        description:
          "We align survey, engineering and planning inputs and prepare the supporting documentation.",
      },
      {
        title: "Submission & delivery",
        description:
          "Final layouts and technical packs are issued for approval and implementation.",
      },
    ],
    equipmentExtra: {
      name: "GIS & CAD Platforms",
      description:
        "Integrated spatial and design software for layout testing, analysis and deliverable production.",
    },
  },
  {
    slug: "property-valuation",
    title: "Property Valuation",
    eyebrow: "Services / Property Valuation",
    heroDescription:
      "Defensible valuations that support confident decisions on property, finance and development.",
    cardDescription:
      "Market-aligned valuations for sales, financing, insurance and statutory requirements.",
    intro:
      "Our valuation work combines market evidence with an accurate understanding of the physical asset. The result is clear, defensible advice for owners, lenders, insurers, developers and public institutions.",
    image: "/images/project-lake-chivero.jpg",
    imageAlt: "Lakeside property setting",
    icon: Landmark,
    whatWeDo: [
      {
        title: "Market valuations",
        description:
          "Evidence-based opinions of value for sale, purchase, estate planning and investment decisions.",
      },
      {
        title: "Statutory valuations",
        description:
          "Valuations prepared for statutory, regulatory and public-sector requirements.",
      },
      {
        title: "Insurance & asset valuations",
        description:
          "Replacement-cost and asset-value assessments to support risk and insurance programmes.",
      },
      {
        title: "Development feasibility",
        description:
          "Value-led testing of development options, costs and returns before capital is committed.",
      },
    ],
    process: [
      {
        title: "Scope & instruction",
        description:
          "We confirm the purpose, basis and date of valuation, along with the information required.",
      },
      {
        title: "Inspection & data",
        description:
          "The property is inspected, measured and documented with relevant title and planning information.",
      },
      {
        title: "Market analysis",
        description:
          "Comparable evidence and market conditions are analysed and applied to the asset.",
      },
      {
        title: "Report & advice",
        description:
          "A clear, defensible valuation report is issued with the assumptions and basis of value stated.",
      },
    ],
    equipmentExtra: {
      name: "Valuation & Property Data",
      description:
        "Structured market evidence and property records that support consistent, well-documented advice.",
    },
  },
];

export const serviceLinks = services.map((service) => ({
  title: service.title,
  href: `/services/${service.slug}`,
}));

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function requireService(slug: string): Service {
  const service = getService(slug);

  if (!service) {
    throw new Error(`Service data is missing for "${slug}".`);
  }

  return service;
}
