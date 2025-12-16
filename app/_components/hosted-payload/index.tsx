'use client';
import { motion } from "framer-motion";
import { Workflow } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { features, processFlow, specs, tiers } from "@/app/_data/hoste-payload";

export const HostedPayloadPage = () => (
  <>
    {/* Hero */}
    <section className="relative h-screen overflow-hidden w-full">
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full brightness-75 object-cover"
          // style={{ filter: "brightness(0.6)" }}
        >
          <source src="/assets/hosted_payload.mp4" type="video/mp4" />
        </video>
        <div className="h-full relative max-w-7xl mx-auto flex flex-1 justify-center items-center w-full">
          <div className="p-8 bg-transparent">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-transparent">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
                Space Access <span className="text-[#0ea5a6]">Made Simple</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mt-4 text-right">
                A complete hosted‑payload solution
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="mx-auto max-w-6xl px-4 py-16 text-center">
      <h1 className="text-2xl font-bold sm:text-4xl">
        Put Your <span className="text-cyan-300">Up to 3U Payload</span> in Orbit on <span className="text-cyan-300">Altair‑1</span>
      </h1>
      <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
        A complete hosted‑payload solution — from your first contact to secure data delivery. Altair provides not only the satellite platform but also full mission operation and data subscription service for up to 3 years.
      </p>
    </section>

    <section id="process" className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-2xl font-bold text-center text-cyan-300">From Contact to Data</h2>
      <p className="mt-3 text-slate-300 text-center">Our streamlined process ensures a smooth journey from concept to receiving your data through our secure delivery system.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-5">
        {processFlow.map((p, index) => (
          <div key={p.step} className="rounded-2xl border border-cyan-900/40 bg-slate-900/40 p-4 text-center shadow-xl flex flex-col justify-between cursor-pointer hover:border-slate-100 hover:shadow-2xl/10">
            <h2 className={`text-7xl font-mono text-slate-400 ${!!((index + 1) %2 === 0) ? 'order-2': 'order-1'}`}>{index + 1}</h2>
            <div className={`flex flex-col justify-between ${!!((index + 1)%2 === 0) ? 'order-1': 'order-2'}`}>
              <div className="flex items-center">
                <Workflow className="mx-auto h-6 w-6 text-cyan-400" />
                <h3 className="mt-3 font-semibold text-slate-100 text-base">{p.step}</h3>
              </div>
              <p className="mt-2 text-slate-300/90 text-sm h-32 text-center">{p.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section id="features" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold text-center text-cyan-300 uppercase py-4">Mission Overview</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-cyan-900/40 bg-slate-900/40 p-6 shadow">
            <f.icon className="h-8 w-8 text-cyan-400" />
            <h3 className="mt-4 text-lg font-semibold text-slate-100">{f.title}</h3>
            <p className="mt-2 text-slate-300/90 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="specs" className="mx-auto max-w-4xl px-4 py-12">
      <h2 className="text-2xl font-bold text-center text-cyan-300">Baseline Specifications</h2>
      <p className="mt-3 text-slate-300">Baseline allocations for the hosted payload bay on the Altair‑1 6U bus. Final values subject to ICD and joint analysis.</p>
      <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {specs.map((s) => (
          <div key={s.k} className="flex gap-2.5 md:gap-4 items-start border-b border-slate-700/50 pb-2">
            <dt className="text-slate-400 text-sm w-28 md:w-32">{s.k}</dt>
            <dd className="text-slate-200 text-sm text-left! font-medium w-44 md:w-64">{s.v}</dd>
          </div>
        ))}
      </dl>
    </section>

    <section id="tiers" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-bold text-center text-cyan-300">Hosting Packages (Subscription‑Based)</h2>
      <p className="mt-3 text-slate-300 text-center">Each hosting plan includes full satellite operation and data delivery service for up to 3 years.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className={`rounded-2xl border p-6 shadow ${t.featured ? 'border-cyan-500 bg-slate-900/60' : 'border-cyan-900/40 bg-slate-900/40'}`}>
            <h3 className="text-xl font-semibold text-slate-100">{t.name}</h3>
            <p className="mt-1 text-cyan-300 font-bold">{t.price}</p>
            <p className="mt-1 text-slate-400 text-sm">{t.tagline}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300/90 min-h-32">
              {t.bullets.map((b) => (<li key={b}>• {b}</li>))}
            </ul>
            <Button className="mt-6 w-full cursor-pointer bg-cyan-300 text-black hover:text-white" variant='default'>{t.cta}</Button>
          </div>
        ))}
      </div>
    </section>

    <section id="cta" className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h2 className="text-3xl font-bold text-cyan-300">Reserve Your Payload Slot</h2>
      <p className="mt-4 text-slate-300">Tell us your payload size, power, and desired launch window (2027). We'll reach out to start your 3‑year hosted mission journey.</p>
      <form className="mt-6 grid gap-4 sm:grid-cols-3">
        <Input placeholder="Volume (max 3U)" />
        <Input placeholder="Power (W)" />
        <Input placeholder="Contact email" />
        <Button variant="default" type="button" className="bg-cyan-300 text-black hover:text-white sm:col-span-3 cursor-pointer">Submit interest</Button>
      </form>
    </section>
  </>
);
