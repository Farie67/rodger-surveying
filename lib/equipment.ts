export const equipmentCategories = [
  "All",
  "GNSS RTK GPS",
  "Total Stations",
  "Automatic Levels",
  "Drones",
  "Accessories",
] as const;

export type EquipmentCategory = Exclude<
  (typeof equipmentCategories)[number],
  "All"
>;

export type EquipmentProduct = {
  slug: string;
  brand: string;
  model: string;
  category: EquipmentCategory;
  description: string;
};

export const equipmentProducts: EquipmentProduct[] = [
  {
    slug: "chcnav-i90",
    brand: "CHCNAV",
    model: "i90",
    category: "GNSS RTK GPS",
    description:
      "A compact, full-constellation GNSS RTK receiver built for fast fixes and reliable centimetre-level positioning in the field.",
  },
  {
    slug: "hi-target-v300",
    brand: "Hi-Target",
    model: "V300",
    category: "GNSS RTK GPS",
    description:
      "A rugged GNSS RTK system for control, boundary and topographical surveys, with a practical field workflow.",
  },
  {
    slug: "nikon-total-station",
    brand: "Nikon",
    model: "Nivo C",
    category: "Total Stations",
    description:
      "Precision angle and distance measurement for setting out, control and as-built survey work.",
  },
  {
    slug: "sokkia-b40a",
    brand: "Sokkia",
    model: "B40A",
    category: "Automatic Levels",
    description:
      "A dependable automatic level for accurate height transfer, levelling and construction control.",
  },
  {
    slug: "dji-phantom-4-rtk",
    brand: "DJI",
    model: "Phantom 4 RTK",
    category: "Drones",
    description:
      "High-resolution aerial capture for site mapping, progress records and terrain modelling.",
  },
  {
    slug: "chcnav-accessories",
    brand: "CHCNAV",
    model: "Survey Accessories",
    category: "Accessories",
    description:
      "Prisms, tribrachs, tripods and practical field accessories that keep survey teams productive.",
  },
];
