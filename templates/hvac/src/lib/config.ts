import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "JAZZ Heating, Cooling & Plumbing",
  tagline: "Your Comfort, Our Priority. Expert HVAC & Plumbing Services.",
  phone: "(209) 832-5200",
  phoneHref: "tel:+12098325200",
  email: "info@jazzhvacplumbing.com",
  address: "Tracy, CA",
  serviceAreas: ["Tracy", "Mountain House", "Lathrop", "Manteca", "Ripon", "Salida", "Modesto", "Stockton", "Livermore", "Pleasanton", "Dublin"],
  license: "CA CSLB #999999",
  since: "2005",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
  theme: "ember",
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair & Installation", desc: "Expert air conditioning services to keep your home cool and comfortable all summer long.", urgent: true },
  { icon: "flame", title: "Heating System Services", desc: "Reliable furnace repair, maintenance, and new heating system installations for optimal warmth.", urgent: false },
  { icon: "droplets", title: "Plumbing Repairs & Drains", desc: "Comprehensive plumbing solutions from leaky faucets to complex drain cleaning and water heater services.", urgent: true },
  { icon: "shield-check", title: "Preventative Maintenance", desc: "Regular HVAC and plumbing tune-ups to extend system life and prevent costly breakdowns.", urgent: false }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah M.", location: "Tracy, CA", text: "JAZZ Heating, Cooling & Plumbing provided excellent service when our AC broke down. Fast, professional, and very fair pricing. Highly recommend!", rating: 5 },
  { name: "David L.", location: "Mountain House, CA", text: "We've used JAZZ for both our furnace repair and a new water heater installation. Their technicians are always knowledgeable and courteous. Fantastic company!", rating: 5 },
  { name: "Emily R.", location: "Lathrop, CA", text: "Called for an emergency plumbing issue, and they were at my house within an hour. Solved the problem quickly and efficiently. A true lifesaver!", rating: 5 }
]

export const TRUST_BADGES: string[] = [
  "Licensed & Insured", "Same-Day Service", "5-Star Rated", "24/7 Emergency"
]