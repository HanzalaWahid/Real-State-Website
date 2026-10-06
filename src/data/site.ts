export const site = {
  name: "RIFA",
  fullName: "RIFA Property Consultant",
  tagline: "Beyond property. Above expectations.",
  phone: "+974 5119 9139",
  whatsapp: "+974 5119 9139",
  email: "Info@rifarealestate.com",
  address: "The Eighteen Tower, Marina, Lusail, Qatar",
  licence: "MOJ License No. 963",
};

export const locations = [
  "Doha",
  "West Bay",
  "Lusail",
  "The Pearl Qatar",
  "Msheireb",
  "Al Waab",
  "Al Sadd",
  "Al Wakrah",
  "Education City",
  "Legtaifiya",
  "Marina District",
];

export const priceBands = [
  { label: "Any price", min: undefined, max: undefined },
  { label: "Up to QAR 1M", min: 0, max: 1_000_000 },
  { label: "QAR 1M – 3M", min: 1_000_000, max: 3_000_000 },
  { label: "QAR 3M – 6M", min: 3_000_000, max: 6_000_000 },
  { label: "QAR 6M+", min: 6_000_000, max: undefined },
];

export const rentBands = [
  { label: "Any rent", min: undefined, max: undefined },
  { label: "Up to QAR 8,000", min: 0, max: 8_000 },
  { label: "QAR 8,000 – 15,000", min: 8_000, max: 15_000 },
  { label: "QAR 15,000 – 30,000", min: 15_000, max: 30_000 },
  { label: "QAR 30,000+", min: 30_000, max: undefined },
];

export const popularSearches = [
  { label: "Luxury apartments in Doha", to: "/properties", search: { purpose: "buy", type: "apartment", location: "Doha" } },
  { label: "Villas in The Pearl", to: "/properties", search: { type: "villa", location: "The Pearl Qatar" } },
  { label: "Properties in Lusail", to: "/properties", search: { location: "Lusail" } },
  { label: "Commercial in West Bay", to: "/properties", search: { category: "commercial", location: "West Bay" } },
  { label: "Waterfront apartments", to: "/properties", search: { type: "apartment", location: "Legtaifiya" } },
  { label: "Off-plan investment", to: "/properties", search: { purpose: "buy", location: "Lusail", type: "penthouse" } },
  { label: "Townhouses for rent", to: "/properties", search: { purpose: "rent", type: "townhouse" } },
  { label: "Warehouses in Al Wakrah", to: "/properties", search: { type: "warehouse" } },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Browse curated residential, commercial and off-plan opportunities across every established Doha community.",
  },
  {
    number: "02",
    title: "Shortlist",
    description:
      "Save the homes and units that match your brief. Your shortlist stays with you across every visit.",
  },
  {
    number: "03",
    title: "Consult",
    description:
      "Speak with a specialist who works that community daily — on pricing, yields, service charges and ownership.",
  },
  {
    number: "04",
    title: "Move forward",
    description:
      "Arrange a viewing, place an offer, or begin reservation on an off-plan unit with full documentation support.",
  },
];

export const values = [
  {
    title: "Sophistication",
    description:
      "We deliver an elevated real estate experience with care at every stage.",
  },
  {
    title: "Discretion",
    description:
      "We handle client relationships and property representation with discretion.",
  },
  {
    title: "Attention to detail",
    description:
      "We bring meticulous attention to detail to each property and client brief.",
  },
  {
    title: "Tailored service",
    description:
      "Our real estate solutions are shaped around the aspirations of each client.",
  },
];
