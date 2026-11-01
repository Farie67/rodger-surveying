export type ProjectCategory =
  | "Topographical"
  | "Engineering"
  | "Residential"
  | "Solar Energy"
  | "Cadastral";

export type Project = {
  slug: string;
  name: string;
  location: string;
  category: ProjectCategory;
  scope: string;
  image: string;
  imageAlt: string;
  summary: string;
  overview: string;
  scopeOfWork: string[];
};

export const projects: Project[] = [
  {
    slug: "selby-farm",
    name: "Selby Farm",
    location: "Mazowe",
    category: "Topographical",
    scope: "1,500 ha Topographical Survey",
    image: "/images/project-selby-farm.jpg",
    imageAlt: "Aerial view of rolling green terrain at Selby Farm",
    summary:
      "A broad-acre topographical survey covering 1,500 hectares of varied terrain, delivered as a reliable base for planning and design.",
    overview:
      "Rodger Surveying established control and captured detailed topographical information across 1,500 hectares at Selby Farm in Mazowe. The survey provided the client with an accurate terrain model, feature mapping and level information suitable for feasibility, design and development planning.",
    scopeOfWork: [
      "Establishment and verification of survey control",
      "Full topographical feature and level capture across 1,500 ha",
      "Digital terrain modelling and contour generation",
      "Survey drawings and coordinated data deliverables",
    ],
  },
  {
    slug: "raylands",
    name: "Raylands",
    location: "Gweru",
    category: "Residential",
    scope: "1,300 Residential Stands",
    image: "/images/project-raylands.jpg",
    imageAlt: "Aerial view of a residential neighbourhood at Raylands",
    summary:
      "Survey and layout support for a 1,300-stand residential development, from control and setting out to verification of constructed stands.",
    overview:
      "At Raylands in Gweru, we supported the delivery of a 1,300-stand residential layout. Our team provided the survey control, setting-out information and verification required to translate the approved layout into a buildable development.",
    scopeOfWork: [
      "Survey control and layout coordination",
      "Establishment and checking of 1,300 residential stands",
      "Setting-out support for roads, services and stands",
      "As-built verification and record plans",
    ],
  },
  {
    slug: "lake-chivero",
    name: "Lake Chivero",
    location: "Lake Chivero",
    category: "Engineering",
    scope: "40 km Waterline Survey",
    image: "/images/project-lake-chivero.jpg",
    imageAlt: "Calm lake water at Lake Chivero",
    summary:
      "A 40-kilometre waterline route survey providing alignment, levels and construction information across challenging terrain.",
    overview:
      "Our engineering survey team surveyed a 40-kilometre waterline route at Lake Chivero. The work combined route reconnaissance, control, level surveys and detail capture to provide the alignment and construction information required for the pipeline.",
    scopeOfWork: [
      "Route reconnaissance and survey control",
      "40 km waterline alignment and level survey",
      "Capture of crossings, services and servitude details",
      "Profile drawings and construction setting-out data",
    ],
  },
  {
    slug: "sunway-city",
    name: "Sunway City",
    location: "Harare",
    category: "Topographical",
    scope: "94 ha Topographical Survey",
    image: "/images/project-sunway-city.jpg",
    imageAlt: "Aerial view of a planned development at Sunway City",
    summary:
      "A 94-hectare topographical survey supporting master planning, earthworks and infrastructure design at Sunway City.",
    overview:
      "Rodger Surveying completed a 94-hectare topographical survey at Sunway City in Harare. The project delivered an accurate spatial base for planning and engineering design, including terrain, levels and existing site features.",
    scopeOfWork: [
      "Site-wide survey control network",
      "94 ha topographical detail and level capture",
      "Earthworks and volume support",
      "Digital mapping and design-ready deliverables",
    ],
  },
  {
    slug: "gweru-solar",
    name: "Gweru Solar Project",
    location: "Gweru",
    category: "Solar Energy",
    scope: "200 ha Solar Energy Survey",
    image: "/images/hero-aerial.jpg",
    imageAlt: "Aerial view of open land for a solar energy project",
    summary:
      "A 200-hectare topographical and constraint survey supporting the planning and layout of a utility-scale solar development.",
    overview:
      "For a 200-hectare solar energy development in Gweru, we delivered topographical survey coverage and terrain analysis to support array layout, access planning and earthworks design. The survey provided a consistent spatial base for the project's technical team.",
    scopeOfWork: [
      "200 ha site topographical survey",
      "Constraint mapping and terrain modelling",
      "Solar array layout support",
      "Earthworks quantities and setting-out data",
    ],
  },
  {
    slug: "plumtree-solar",
    name: "Plumtree Solar Project",
    location: "Plumtree",
    category: "Solar Energy",
    scope: "250 ha Solar Energy Survey",
    image: "/images/project-selby-farm.jpg",
    imageAlt: "Rolling green terrain representing the Plumtree solar survey area",
    summary:
      "A 250-hectare terrain and topographical survey for a solar project, informing array design, drainage and site access.",
    overview:
      "At Plumtree, our team surveyed 250 hectares for a solar energy project. The survey captured levels, natural drainage and existing features, giving the design team the information needed to test layouts and plan site works.",
    scopeOfWork: [
      "250 ha topographical survey",
      "Access and drainage constraint mapping",
      "Terrain analysis for array design",
      "Layout and construction survey support",
    ],
  },
  {
    slug: "caledonia",
    name: "Caledonia",
    location: "Harare",
    category: "Cadastral",
    scope: "1,200 Non-Title Survey",
    image: "/images/project-raylands.jpg",
    imageAlt: "Aerial view of a residential area at Caledonia",
    summary:
      "A non-title survey of 1,200 properties, mapping occupation, improvements and land-use patterns for planning purposes.",
    overview:
      "In Caledonia, Harare, we undertook a non-title survey covering 1,200 properties. The work documented occupation, improvements and land-use patterns, providing the client with a clear spatial record to support planning and administration.",
    scopeOfWork: [
      "1,200-property non-title survey",
      "Occupation and improvement mapping",
      "Boundary and land-use verification",
      "Survey records and digital mapping",
    ],
  },
  {
    slug: "chisipite-senior-school",
    name: "Chisipite Senior School",
    location: "Harare",
    category: "Engineering",
    scope: "Setting Out — JHS Civils",
    image: "/images/why-choose-us.jpg",
    imageAlt: "Surveying tripod set up for setting-out work",
    summary:
      "Setting-out, level control and construction verification for JHS Civils at Chisipite Senior School.",
    overview:
      "Our engineering survey team provided setting-out and level control for JHS Civils at Chisipite Senior School. The work supported accurate construction of the civil works and provided verification against the design information.",
    scopeOfWork: [
      "Setting out for JHS Civils",
      "Level and alignment control",
      "Construction verification surveys",
      "As-built records",
    ],
  },
];

export const projectCategories = [
  "All",
  "Topographical",
  "Engineering",
  "Residential",
  "Solar Energy",
  "Cadastral",
] as const;

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function requireProject(slug: string): Project {
  const project = getProject(slug);

  if (!project) {
    throw new Error(`Project data is missing for "${slug}".`);
  }

  return project;
}
