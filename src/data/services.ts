import type { Service } from "@/types/service";
import { img } from "./images";

export const services: Service[] = [
  {
    id: "s1",
    slug: "luxury-sales-leasing",
    number: "01",
    title: "Luxury Residential & Commercial Sales & Leasing",
    summary:
      "Residential and commercial real estate sales and leasing, tailored to each client's requirements.",
    description:
      "RIFA Property Consultant represents luxury residential and commercial properties in Qatar, pairing clients with opportunities suited to their goals and requirements.",
    image: img.propApartment,
    points: [
      "Luxury residential property sales and leasing",
      "Commercial property sales and leasing",
      "Tailored support for buyers, tenants, owners and landlords",
    ],
  },
  {
    id: "s2",
    slug: "exclusive-marketing-representation",
    number: "02",
    title: "Exclusive Property Marketing & Representation",
    summary:
      "Discreet, considered marketing and representation for distinctive properties.",
    description:
      "Each property is represented with care and attention to detail, with marketing shaped around its character and the aspirations of its owner.",
    image: img.projectPearl,
    points: [
      "Exclusive property marketing",
      "Tailored property representation",
      "Discreet client and owner service",
    ],
  },
  {
    id: "s3",
    slug: "bespoke-real-estate-advisory",
    number: "03",
    title: "Bespoke Real Estate Advisory",
    summary:
      "Personalized real estate guidance shaped around each client's priorities.",
    description:
      "Our advisory approach is built on trusted relationships, discretion and meticulous attention to detail, delivering real estate solutions that reflect each client's aspirations.",
    image: img.propTownhouse,
    points: [
      "Bespoke real estate advisory",
      "Discreet, relationship-led guidance",
      "Solutions aligned with client aspirations",
    ],
    image: img.propOffice,
  },
];
