import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Jazz Heating, Air Conditioning and Plumbing",
  tagline: "Comfort Flows, We Make It So.",
  phone: "(925) 678-5456",
  phoneHref: "tel:+19256785456",
  email: "info@jazzhvac.com",
  address: "2158 Rheem Dr, Pleasanton, CA 94588, USA",
  serviceAreas: ["Pleasanton", "Dublin", "Livermore", "San Ramon", "Danville", "Walnut Creek"],
  license: "CA C20, C36, C46",
  since: "2007",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
  theme: "navy",
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair", desc: "Expert technicians quickly diagnose and fix all air conditioning issues.", urgent: true },
  { icon: "flame", title: "Heating Services", desc: "Reliable repair, maintenance, and installation for all types of heating systems.", urgent: false },
  { icon: "droplets", title: "Plumbing Solutions", desc: "Comprehensive plumbing services from leak repair to water heater installation.", urgent: false },
  { icon: "clock", title: "Emergency Service", desc: "24/7 rapid response for urgent heating, AC, and plumbing emergencies.", urgent: true },
  { icon: "shield-check", title: "System Maintenance", desc: "Preventative tune-ups extend system life and ensure peak performance.", urgent: false },
  { icon: "wrench", title: "New Installations", desc: "Professional installation of new HVAC systems and plumbing fixtures.", urgent: false }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah L.", location: "Pleasanton, CA", text: "Our AC went out on the hottest day of the year! Jazz HVAC responded within an hour, and their technician, Mike, had it fixed by lunchtime. He was incredibly professional and explained everything clearly. The price was fair, and we're so grateful for their quick, efficient service. Highly recommend!", rating: 5 },
  { name: "David R.", location: "Dublin, CA", text: "We had a persistent leak under our sink that other plumbers couldn't seem to fix. Jazz Plumbing sent out Alex, who not only found the source quickly but also offered a permanent solution. He was tidy, respectful of our home, and the repair has held up perfectly. Fantastic service!", rating: 5 },
  { name: "Emily P.", location: "Livermore, CA", text: "I called Jazz for a new furnace installation. From the initial quote to the final setup, the entire process was smooth and stress-free. The team was knowledgeable, helped me choose the right unit for my home, and completed the installation ahead of schedule. Our house is warmer than ever!", rating: 5 }
]

export const TRUST_BADGES: string[] = [
  "NATE Certified Technicians", "GAF Master Elite Contractor", "24/7 Emergency Service", "Licensed & Insured"
]