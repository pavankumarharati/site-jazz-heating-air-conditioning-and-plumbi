import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Jazz Heating, Air Conditioning and Plumbing",
  tagline: "Comfort, Solved. Always There.",
  phone: "(925) 678-5456",
  phoneHref: "tel:+19256785456",
  email: "info@jazzhvac.com",
  address: "2158 Rheem Dr, Pleasanton, CA 94588, USA",
  serviceAreas: ["Pleasanton", "Dublin", "Livermore", "San Ramon", "Danville", "Walnut Creek"],
  license: "CA C20, C36, C46",
  since: "1988",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
  theme: "navy",
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair", desc: "Expert technicians diagnose and fix all air conditioning issues quickly.", urgent: true },
  { icon: "flame", title: "Heating Services", desc: "Reliable repair, maintenance, and installation for all types of heating systems.", urgent: false },
  { icon: "droplets", title: "Plumbing Solutions", desc: "Comprehensive plumbing services from leak repair to water heater installation.", urgent: true },
  { icon: "zap", title: "Emergency Service", desc: "24/7 rapid response for urgent heating, AC, and plumbing breakdowns.", urgent: true },
  { icon: "shield-check", title: "Maintenance Plans", desc: "Preventative maintenance keeps your systems running efficiently year-round.", urgent: false },
  { icon: "wrench", title: "System Installation", desc: "Professional installation of new HVAC systems and plumbing fixtures.", urgent: false }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah J.", location: "Pleasanton, CA", text: "Our AC went out on the hottest day of the year. Jazz HVAC responded within an hour, and their technician, Mark, had it fixed by lunchtime. He explained everything clearly and the price was very fair. So grateful for their quick and professional service!", rating: 5 },
  { name: "David L.", location: "Dublin, CA", text: "Had a persistent leak under our sink that other plumbers couldn't seem to fix. Jazz Plumbing sent out Alex, who found the source immediately and repaired it perfectly. No more drips! Excellent attention to detail and very friendly service.", rating: 5 },
  { name: "Emily R.", location: "Livermore, CA", text: "We've used Jazz for our furnace maintenance for years. They are always on time, thorough, and their technicians are incredibly knowledgeable. Last week, they caught a small issue before it became a major problem. Highly recommend their service plans!", rating: 5 }
]

export const TRUST_BADGES: string[] = [
  "NATE Certified Technicians", "GAF Master Elite Contractor", "Licensed & Insured", "24/7 Emergency Service"
]