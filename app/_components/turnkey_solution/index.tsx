'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { brand, features, packages, steps } from "@/app/_data/turnkey-solutions";
import { Wrench, ShieldCheck, Gauge, Map, PhoneCall, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export const TurnkeyPage = () => {
  return (
    <div className={`min-h-screen ${brand.bg} text-slate-800 pt-20 w-full`}>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            fill
            preload
            loading="eager"
            alt="Rotating Satellite"
            src="/assets/turnkey_hero.png"
            className="absolute w-full h-full object-cover"
          />
          
          <div className="h-full relative mx-auto flex flex-1 justify-center items-center bg-black/50">
            <div className="p-8 bg-transparent max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-transparent">
                <span className="inline-flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-full border border-slate-200 mb-4 bg-white">
                  <ShieldCheck className="w-4 h-4" /> Turnkey Satellite Mission Delivery
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
                  From Concept to Orbit to <span style={{ color: brand.primary }}>Data Delivery</span>
                </h1>
                <p className="text-lg text-slate-200 mt-4 md:w-2xl">
                  We transform your space mission ideas into reality with configurable platforms, proven process, and operations that scale, from 1U to 6U
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 border-t border-b bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-lg">
          <div className="flex items-center gap-3"><Wrench className="w-7 h-7" /><span>AIT & environmental testing partners</span></div>
          <div className="flex items-center gap-3"><Gauge className="w-7 h-7" /><span>Flight‑proven subsystems & workflows</span></div>
          <div className="flex items-center gap-3"><Map className="w-7 h-7" /><span>Ground coverage: Malaysia & Sri Lanka; UAE planned</span></div>
        </div>
      </section>

      {/* Vision */}
      <section className="relative h-screen overflow-hidden w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            fill
            preload
            alt="Rotating Satellite"
            src="/assets/turnkey_section.png"
            className="absolute w-full h-full aspect-square object-cover"
          />
          <div className="w-full h-full relative bg-black/50">
            <div className="h-full relative max-w-7xl mx-auto flex flex-1 justify-center md:justify-end items-center w-full">
              <div className="p-8 bg-transparent">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-transparent w-full">
                  <h1 className="text-xl md:text-3xl font-extrabold leading-tight text-white">
                    Transforming Vision into <span style={{ color: brand.primary }}>Space Reality</span>
                  </h1>
                  <p className="text-sm md:text-lg text-slate-200 mt-4 md:w-2xl">
                    At Altair Research Lab, we provide turnkey satellite mission solutions, from the earliest idea to actionable data. Whether it’s a 
                    single payload or a multi-satellite constellation, our experienced team ensures every step of your journey is seamless: shaping 
                    mission goals, developing advanced platforms, launching with precision, and transforming orbital data into real-world intelligence.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-2 justify-between">
                    <Button size="lg" variant="outline" className="rounded-2xl border-slate-300 cursor-pointer py-12 flex flex-col gap-1 w-48">
                      <span className="font-bold text-lg">10+ yrs</span>
                      <span className="font-light text-base">team experience</span>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-2xl border-slate-300 cursor-pointer py-12 flex flex-col gap-1 w-48">
                      <span className="font-bold text-lg">1-6U</span>
                      <span className="font-light text-base">configurable platforms</span>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-2xl border-slate-300 cursor-pointer py-12 flex flex-col gap-1 w-48">
                      <span className="font-bold text-lg">End-to-End</span>
                      <span className="font-light flex items-center gap-2 text-base">design <ArrowRight /> data </span>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Scope */}
      <section id="features" className="grid md:grid-cols-2 gap-6 px-2 md:px-10 place-items-center py-16 w-full">
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-xl md:text-3xl font-bold">Everything you need to fly - and thrive</h2>
              <p className="text-slate-600 mt-2">Choose the full turnkey path or select specific modules to complement your in‑house capabilities.</p>
            </div>
            <div className="relative">
              <div className="absolute inset-0" aria-hidden>
              <div className="absolute -top-48 -right-48 w-xl h-144 rounded-full opacity-20" style={{ background: `radial-gradient(circle at center, ${brand.primary}, transparent 60%)` }} />
            </div>
              <div className="grid md:grid-cols-2 gap-5 mt-10">
                {features.map((f, i) => (
                  <Card key={i} className="rounded-2xl border-slate-200 hover:shadow-2xl transition-all cursor-pointer">
                    <CardContent className="px-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#e6fffe", color: brand.primary }}>
                        {f.icon}
                      </div>
                      <div className="font-semibold text-lg">{f.title}</div>
                      <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div className="w-px h-full text-red-300"></div>
        </div>
        
        <div className="relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-video brightness-75 md:mt-20"
          >
            <source src="/assets/turnkey_video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold">Everything you need to fly - and thrive</h2>
          <p className="text-slate-600 mt-2">Choose the full turnkey path or select specific modules to complement your in‑house capabilities.</p>
        </div>
        <div className="relative">
          <div className="absolute inset-0" aria-hidden>
          <div className="absolute -top-48 -right-48 w-xl h-144 rounded-full opacity-20" style={{ background: `radial-gradient(circle at center, ${brand.primary}, transparent 60%)` }} />
          {/* <div className="absolute -bottom-48 -left-24 w-xl h-144 rounded-full opacity-20" style={{ background: `radial-gradient(circle at center, ${brand.accent}, transparent 60%)` }} /> */}
        </div>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {features.map((f, i) => (
              <Card key={i} className="rounded-2xl border-slate-200 hover:shadow-2xl transition-all cursor-pointer">
                <CardContent className="px-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#e6fffe", color: brand.primary }}>
                    {f.icon}
                  </div>
                  <div className="font-semibold text-lg">{f.title}</div>
                  <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="md:flex items-end justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold">A clear, low‑risk delivery process</h2>
              <p className="text-slate-600 mt-3">Transparent milestones, gated reviews, and SLAs keep your mission on schedule and inside budget.</p>
            </div>
            <Button className="rounded-2xl mt-4 md:mt-0" style={{ backgroundColor: brand.primary }}>Request a sample timeline</Button>
          </div>
          <div className="grid md:grid-cols-5 place-items-center gap-4 mt-10">
            {steps.map((s, index) => (
              <div key={s.k} className="p-5 rounded-2xl border flex flex-col justify-between cursor-pointer hover:shadow-xl w-60">
                <div className={`text-7xl font-mono text-red-200 text-center ${!!((index + 1) %2 === 0) ? 'order-2': 'order-1'}`}>{s.k}</div>
                <div className={`flex flex-col items-center justify-between ${!!((index + 1)%2 === 0) ? 'order-1': 'order-2'}`}>
                  <p className="font-semibold text-xl mt-1">{s.t}</p>
                  <p className="text-sm text-slate-600 mt-1 w-32 text-center h-24">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages / Platforms */}
      <section id="packages" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Configured platforms, predictable outcomes</h2>
            <p className="text-slate-600 mt-3">Pick your CubeSat form factor; we tailor subsystems, radios, and ground strategy to your payload and business case.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {packages.map((p, i) => (
              <Card key={i} className="rounded-2xl border-slate-200 hover:shadow-xl transition">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold">{p.u}</span>
                    <span className="text-xs font-medium px-2 py-1 rounded-full border" style={{ borderColor: brand.primary, color: brand.primary }}>{p.lead}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-slate-600 h-14">{p.pitch}</p>
                  <ul className="mt-4 space-y-2 h-48">
                    {p.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 mt-0.5" style={{ color: brand.primary }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-2xl cursor-pointer" style={{ backgroundColor: brand.primary }}>Get specs</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold">Let’s plan your mission</h3>
            <p className="text-slate-600 mt-2">Tell us your payload, target orbit, and target date. We’ll propose architecture, schedule, and budget options.</p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2"><PhoneCall className="w-4 h-4" /><span>+971 ••• •••• / +60 ••• ••••</span></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>info@arlsb.com</span></div>
            </div>
          </div>
          <Card className="md:col-span-3 rounded-2xl border-slate-200">
            <CardContent className="p-6 grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Your name" />
                <Input placeholder="Company" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Email" />
                <Input placeholder="Phone" />
              </div>
              <Textarea placeholder="Tell us about your mission goals and payload…" rows={5} />
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-500">By submitting, you agree to be contacted about Altair services.</div>
                <Button className="rounded-2xl cursor-pointer" style={{ backgroundColor: brand.primary }}>Send</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
