import { Satellite, Gauge, Radio, ShieldCheck, Cloud, CalendarDays, Workflow, ArrowRight } from "lucide-react";

export const features = [
  { icon: Satellite, title: "Up to 3U Hosted Payload", desc: "Bring your instrument, sensor, or tech demo. We provide the 6U bus; you own your payload & data rights." },
  { icon: Gauge, title: "Power & Duty Cycle", desc: "Up to ~15 W average (≈30 W peak negotiable), managed thermal/power budget, and flexible duty cycles." },
  { icon: Radio, title: "TT&C + High‑Rate Downlink", desc: "Integrated UHF/S‑band TT&C with options for X‑band payload data via partner GSaaS networks." },
  { icon: ShieldCheck, title: "Compliance & Licensing", desc: "End‑to‑end support across spectrum, payload safety, in‑country licensing, and mission assurance." },
  { icon: Cloud, title: "Data Delivery API", desc: "Secure cloud ingestion, catalogs, and webhook/API delivery with role‑based access controls." },
  { icon: CalendarDays, title: "2027 Launch Window", desc: "Target SSO rideshare (500–600 km). Integration 2026 H2, ORR 2027 H1, Launch 2027 H2." },
];

export const processFlow = [
  { step: "Initial Contact", detail: "Reach out to our mission team with your payload concept and data objectives." },
  { step: "Feasibility & Proposal", detail: "We evaluate requirements and provide a mission proposal including hosting and data delivery plan." },
  { step: "Integration & Testing", detail: "Your payload is integrated into our Altair‑1 platform with full functional and environmental testing." },
  { step: "Launch & Operation", detail: "Altair manages launch, satellite operation, and mission control for your hosted payload." },
  { step: "Data Delivery", detail: "Data is securely delivered through our subscription‑based cloud platform with API access." },
];

export const specs = [
  { k: "Platform", v: "Altair‑1 6U CubeSat (10×20×30 cm)" },
  { k: "Hosted Volume", v: "Up to 3U (10×10×30 cm equivalent)" },
  { k: "Mass Budget", v: "Up to ~4.5 kg for payload (subject to analysis)" },
  { k: "Average Power", v: "~15 W average / ~30 W peak (design dependent)" },
  { k: "Pointing", v: "Nadir‑pointing; fine pointing/ADCS upgrade available" },
  { k: "Thermal", v: "Passive baseline; heater zones available" },
  { k: "Comms", v: "UHF/S‑band TT&C; X‑band payload downlink option via partners" },
  { k: "Orbit", v: "Sun‑Synchronous Orbit ~500–600 km (target)" },
  { k: "Ops Life", v: "3 years (operational design life)" },
];

export const tiers = [
  {
    name: "Tech Demo",
    price: "US$ 250k–350k",
    tagline: "Shared 1U–2U time‑sliced access",
    bullets: [
      "Sub‑1U/1U payloads (shared bay)",
      "Duty cycle allocation",
      "Standard data delivery",
      "Group regulatory support",
    ],
    cta: "Enquire",
  },
  {
    name: "Standard (up to 2U)",
    price: "US$ 700k–950k",
    tagline: "Exclusive up to 2U hosting for 24–36 months",
    bullets: [
      "Exclusive bay (≤2U)",
      "Priority power & passes",
      "Private data pipeline/API",
      "Full regulatory & integration support",
    ],
    featured: true,
    cta: "Book a call",
  },
  {
    name: "Enterprise (up to 3U)",
    price: "Custom",
    tagline: "Higher power/data & options on 6U bus",
    bullets: [
      "X‑band downlink option",
      "Enhanced ADCS pointing",
      "On‑orbit reprogramming",
      "Premium mission assurance",
    ],
    cta: "Talk to sales",
  },
];