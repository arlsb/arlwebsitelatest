import { Rocket, Satellite, CircuitBoard, Antenna, FileCheck2, Radar } from "lucide-react";

export const brand = {
  bg: "bg-slate-50",
  card: "bg-white",
  primary: "#0ea5a6", // teal
  accent: "#fb923c", // orange
  dark: "#0b1220",
};

export const features = [
  {
    icon: <Satellite className="w-6 h-6" />, 
    title: "Mission Design",
    desc: "Concept of operations, payload fit, performance budgets, and end-to-end timelines tailored to 1U–6U missions.",
  },
  {
    icon: <CircuitBoard className="w-6 h-6" />, 
    title: "Build & Integration",
    desc: "Structure, AIT, environmental test, and flight-readiness review using proven COTS + custom subsystems.",
  },
  {
    icon: <FileCheck2 className="w-6 h-6" />, 
    title: "Regulatory & Spectrum",
    desc: "ITU coordination, national licensing, frequency filings, and export compliance support.",
  },
  {
    icon: <Rocket className="w-6 h-6" />, 
    title: "Launch & LEOP",
    desc: "LV matchmaking, interface control, launch campaign logistics, and early-orbit commissioning.",
  },
  {
    icon: <Antenna className="w-6 h-6" />, 
    title: "Ground & TT&C",
    desc: "Altair Ground network across MY & LK with planned UAE points of presence; pass booking and automation.",
  },
  {
    icon: <Radar className="w-6 h-6" />, 
    title: "Operations & Data",
    desc: "Routine ops, health monitoring, tasking, downlink, and data delivery pipelines to your cloud.",
  },
];

export const steps = [
  { k: 1, t: "Define", d: "Mission goals, success criteria, payload interfaces, and budgets." },
  { k: 2, t: "Design", d: "Architecture, parts selection, analysis, and verification plan." },
  { k: 3, t: "Develop", d: "Hardware build, software, AIT, and environmental testing." },
  { k: 4, t: "Deploy", d: "Launch integration, LEOP, and commissioning." },
  { k: 5, t: "Deliver", d: "Operations, data pipelines, SLAs, and continual improvements." },
];

export const packages = [
  { u: "1U", pitch: "Entry-class technology demo, education, and rapid prototyping.", bullets: ["Basic ADCS", "UHF/VHF TM/TC", "Payload 0.5U–0.7U", "Shared ground access"], lead: "Best for proof-of-concept" },
  { u: "3U", pitch: "Balanced performance for imaging and IoT payloads.", bullets: ["3-axis ADCS", "UHF/VHF + S-band", "Payload up to 1.5U", "Priority ground access"], lead: "Most popular" },
  { u: "6U", pitch: "High-performance platform for multi-payload and hosted missions.", bullets: ["Precision ADCS", "S/X-band downlink", "Payload up to 3U", "Custom ops & SLAs"], lead: "For commercial scale" },
];