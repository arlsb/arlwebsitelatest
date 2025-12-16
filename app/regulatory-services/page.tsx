'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { ServiceCard } from '@/app/_components/regulatory-services/ServiceCard';
import { ShieldCheck } from 'lucide-react';
import { GetInTouchModal } from '@/components/GetInTouchModal';

const ServicesData = [{
  title: "Satellite Licensing",
  slug: "satellite-licensing",
  tagline: "ITU filings, spectrum coordination & payload registration.",
  outcome: "Your network achieves compliant, interference-free registration within ITU and national databases, ensuring long-term spectrum rights and operational authorization.",
  deliverables: ["Preparation and submission of ITU API/CR/C notice packages", "Coordination analysis reports for frequency overlap cases","National AA / license application packages"],
}, {
  title: "Ground Station Permitting",
  slug: "ground-station-permitting",
  tagline: "Licensing, spectrum allocation & coordination for ground stations.",
  outcome: "Your ground stations are fully authorized and spectrum-aligned for both national and international operations, reducing approval delays and compliance risks.",
  deliverables: ["Ground station license application package preparation","Frequency coordination reports between satellite and earth station links","Importation permit support (Type Approval / SIRIM / customs)","Site coordination and interference assessment reports"],
}, {
  title: "Payload Compliance",
  slug: "payload-compliance",
  tagline: "Regulatory alignment for hosted or standalone payload missions.",
  outcome: "Your payload mission achieves end-to-end regulatory assurance—from compliance checks to mission integration and in-orbit operation, meeting ITU, export, and national standards.",
  deliverables: ["Payload agreement compliance checklists (frequency, ITU, export)","Payload registration documentation via host or mission operator","Coordination letters and national authorization requests","RF compatibility and interference mitigation reports","Regulatory interface support between payload provider and satellite operator"],
}, {
  title: "Launch & Post-Launch",
  slug: "launch-post-launch",
  tagline: "Full-spectrum launch compliance from export to in-orbit reporting.",
  outcome: "Altair ensures complete compliance from launch clearance to orbital operations, maintaining transparency and alignment with ITU BR, UNOOSA, and national authorities.",
  deliverables: ["Export control screening documents (EAR/ITAR or national equivalents)","Regulatory Readiness Review (RRR) reports for final launch approval","Frequency allocation and coordination packages (range safety, GNSS/RF)","Space object registration dossiers (UN Registry / national focal point)","Post-launch de-orbit and anomaly compliance reports","Continuous spectrum monitoring and interference log submissions"],
}];

export default function Page() {
  return (
    <>
      <div className="text-black min-h-screen relative overflow-hidden pt-20 bg-slate-950">
        {/* Hero */}
        <section className="relative h-screen overflow-hidden w-full">
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full brightness-75 object-cover"
            >
              <source src="/assets/regulatory_services.mp4" type="video/mp4" />
            </video>
            <div className="h-full relative mx-auto flex flex-1 justify-center items-center bg-black/50">
              <div className="p-8 bg-transparent max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-transparent">
                  <div className="flex flex-col gap-6 md:flex-row md:justify-between">
                    <div>
                      <span className="inline-flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-full border border-slate-200 mb-4 bg-white">
                        <ShieldCheck className="w-4 h-4" /> Regulatory & Licensing Services
                      </span>
                      {/* <span className="text-sm font-bold uppercase tracking-[0.19em] text-cyan-400 bg-amber-50/20 p-3 px-4 rounded-lg">
                        Regulatory & Licensing Services
                      </span> */}
                      <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl text-[#0ea5a6]">
                        <span className='text-white'>Global Satellite</span> Regulatory & Licensing Solutions
                      </h1>
                      <p className="mt-4 max-w-2xl text-base text-slate-200">
                        Seamless compliance for every stage of your mission—from ITU filings and
                        ground station permits to launch approvals and in-orbit regulatory
                        assurance.
                      </p>
                    </div>
                    <div className="mt-4 w-full md:mt-0 md:w-[40%]">
                      <div className="relative overflow-hidden rounded-sm border border-slate-800 bg-linear-to-br from-slate-900 via-slate-900/40 to-cyan-900/20 p-5 shadow-xl">
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-cyan-500/40" />
                        <div className="absolute bottom-0 right-4 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl" />
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                          Mission Coverage
                        </p>
                        <h2 className="mt-3 text-lg font-semibold text-slate-50">
                          End-to-end compliance for space missions
                        </h2>
                        <ul className="mt-4 space-y-2 text-sm text-slate-300">
                          <li>
                            • ITU filings, national licensing & spectrum coordination
                          </li>
                          <li>
                            • Ground station, payload, launch & post-launch compliance
                          </li>
                          <li>
                            • Startups, universities, agencies & commercial operators
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12 px-3">
          <div className='max-w-7xl mx-auto border-t py-10'>
            <div className='flex flex-col gap-2 items-center w-full'>
              <h2 className="text-xl font-semibold md:text-3xl text-slate-100">Why Choose Our Regulatory Services?</h2>
              <p className="mt-2 max-w-4xl text-sm text-slate-300 md:text-base">
                We help de-risk your mission by navigating complex regulatory frameworks
                across ITU, national regulators, and export control regimes. From first
                concept to in-orbit operations, our team ensures your spectrum, payloads,
                and ground segment remain fully compliant.
              </p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Expertise across ITU & national regulatory processes",
                "Experience with CubeSat, microsatellite & commercial constellations",
                "End-to-end support covering spectrum, payloads, ground & launch",
                "Reduced approval timelines and minimized coordination risk",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-base text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* career cards */}
        <section className="mb-12 max-w-7xl mx-auto w-full px-3">
          <div className="flex flex-col gap-2 items-center sm:justify-between">
            <h2 className="text-xl font-semibold md:text-3xl text-slate-100">Core Service Pillars</h2>
            <p className="mb-2 max-w-2xl text-sm text-slate-300 md:text-base">
              Four integrated pillars to support every regulatory milestone in your
              mission lifecycle.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-2 py-2">
            {ServicesData.map(item => (
              <ServiceCard {...{key: item.title, ...item }} />
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section className="mb-12 px-3">
          <div className='max-w-7xl mx-auto py-10'>
            <div className='flex flex-col gap-2 items-center w-full'>
              <h2 className="text-xl font-semibold md:text-3xl text-slate-100">End-to-End Workflow</h2>
              <p className="mt-1 max-w-3xl text-sm text-slate-300 md:text-base">
                Our structured workflow ensures nothing is missed—from initial mission
                review through to ongoing, in-orbit regulatory support.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <ol className="flex min-w-[640px] items-stretch justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/40 px-6 py-5 text-sm">
                {[
                  "Mission review & requirement capture",
                  "Regulatory mapping & strategy",
                  "Documentation drafting & filing",
                  "Authority coordination & responses",
                  "License issuance & activation",
                  "Ongoing monitoring & compliance updates",
                ].map((step, index) => (
                  <li key={step} className="flex flex-1 flex-col items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400 bg-slate-950 text-sm font-bold text-cyan-300">
                      {index + 1}
                    </div>
                    <p className="mt-3 text-sm font-medium text-slate-200 md:text-base">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Who We Support */}
        <section className="mb-12 px-3">
          <div className='max-w-7xl mx-auto py-10'>
            <div className='flex flex-col gap-2 items-center w-full'>
              <h2 className="text-xl font-semibold md:text-3xl text-slate-100">Who We Support</h2>
              <p className="mt-2 max-w-3xl text-slate-300 text-sm md:text-base">
                Our services are tailored for organizations across the global space
                ecosystem.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "NewSpace startups and emerging satellite operators",
                "Universities and research missions",
                "National space agencies and government programs",
                "Commercial satellite and constellation operators",
                "Ground station owners, integrators and teleport operators",
                "Payload developers and hosted payload customers",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm md:text-base text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA Footer */}
        <section className="my-8 rounded-3xl border border-cyan-500/40 bg-linear-to-r from-cyan-500/10 via-slate-900 to-slate-900/80 px-6 py-8 text-center sm:px-10 max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold md:text-2xl text-slate-100">
            Ready to Secure Your Mission&apos;s Regulatory Pathway?
          </h2>
          <p className="mt-3 text-sm text-slate-200 sm:text-base">
            Speak with our regulatory specialists to map out the licensing and
            compliance strategy for your upcoming mission.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <GetInTouchModal {...{ btnText: 'Contact Us' }} />
            {/* <button className="rounded-xl border border-cyan-400 bg-cyan-400 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-transparent hover:text-cyan-300 cursor-pointer">
              Schedule a Consultation
            </button> */}

            {/* <Link href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@arlsb.com" referrerPolicy="no-referrer" className="underline underline-offset-2 text-cyan-300 font-semibold">
              <button className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300 cursor-pointer">
                Contact Us by Email
              </button>
            </Link> */}

          </div>
        </section>
      </div>
    </>
  )
}
