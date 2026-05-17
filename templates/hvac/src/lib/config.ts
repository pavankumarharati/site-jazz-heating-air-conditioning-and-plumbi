import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "JAZZ Heating, Cooling, Plumbing",
  tagline: "Expert Comfort, Always Reliable.",
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "info@jazzhvacplumbing.com",
  address: "123 Comfort Lane, Anytown, CA 90210",
  serviceAreas: ["Anytown", "Comfortville", "Harmony City"],
  license: "CA Lic. #123456",
  since: "2023",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "Air Conditioning Services", desc: "We provide comprehensive AC repair, maintenance, and new system installations to keep your home cool.", urgent: false },
  { icon: "flame", title: "Heating System Solutions", desc: "From furnace repairs to new heat pump installations, our experts ensure your home stays warm and cozy all winter.", urgent: false },
  { icon: "droplets", title: "Water Heater Services", desc: "Expert installation, repair, and maintenance for tankless, electric, and gas water heaters, ensuring hot water on demand.", urgent: false },
  { icon: "wrench", title: "Professional Plumbing Repair", desc: "Our skilled plumbers handle everything from leaky faucets and clogged drains to complex sewer line repairs with precision.", urgent: false },
  { icon: "shield-check", title: "Indoor Air Quality", desc: "Improve your home's air with our advanced filtration, UV lighting, and air handler services for a healthier environment.", urgent: false },
  { icon: "clock", title: "24/7 Emergency Services", desc: "When unexpected breakdowns occur, our team is ready around the clock to restore your comfort and peace of mind.", urgent: true }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah M.", location: "Anytown, CA", text: "JAZZ Heating, Cooling, Plumbing saved our summer! Our AC went out on the hottest day, and their technician arrived within hours. He was incredibly professional, diagnosed the issue quickly, and had it fixed before dinner. The price was fair, and the service was exceptional. We're so grateful for their prompt and efficient work!", rating: 5 },
  { name: "David R.", location: "Comfortville, CA", text: "We had a persistent leak under our sink that other plumbers couldn't seem to fix. JAZZ Plumbing sent out a fantastic plumber who not only found the obscure source of the leak but also explained everything clearly. He was tidy, respectful, and the problem hasn't returned since. Highly recommend their expertise!", rating: 5 },
  { name: "Emily P.", location: "Harmony City, CA", text: "Our old furnace was on its last legs, and we were dreading the replacement process. JAZZ made it incredibly easy. They helped us choose the perfect new system for our home and installed it flawlessly. The team was friendly, efficient, and left our home spotless. We're enjoying much better heating and lower energy bills now!", rating: 5 }
]

export const TRUST_BADGES: string[] = [
  "NATE Certified Technicians",
  "CA Licensed & Insured",
  "4.9-Star Google Rated",
  "24/7 Emergency Service"
]