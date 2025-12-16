'use client';
import { FormEvent } from "react";
import { motion } from "framer-motion";
import MapIframe from "./MapIframe";


export default function Page() {
  // const [demoData, setDemoData] = useState({ name: "", email: "", org: "", message: "" });
  const handleDemoFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Demo request:", data);
    alert("Thanks! We'll reach out shortly.");
    e.currentTarget.reset();
  };

  return (
    <div className="bg-linear-to-b from-slate-50 to-slate-100 min-h-screen text-slate-900 relative overflow-hidden pt-12 w-full">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden w-full">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full brightness-75 object-cover"
          >
            <source src="/assets/maritime_video.mp4" type="video/mp4" />
          </video>
          <div className="h-full relative max-w-7xl mx-auto flex flex-1 justify-center items-center w-full">
            <div className="p-8 bg-transparent">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
                  Real-Time Maritime Awareness, <span className="text-[#0ea5a6]">Redefined</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-100 mt-3 text-right uppercase font-semibold">
                  Navisense | Navicube+ | Navibased
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-slate-300 text-slate-500 bg-white">
            Maritime Intelligence Suite
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            From Sensors to Situational Awareness — One Integrated Stack
          </h1>
          <p className="text-lg text-slate-600">
            Combine satellite & terrestrial AIS, deploy solar‑powered coastal receivers, and fly a CubeSat‑ready AIS payload — all feeding the Navisense platform for live operations and analytics.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="px-4 py-2 rounded-xl font-semibold bg-slate-900 text-white hover:bg-slate-800 transition">
              Explore Products
            </a>
            <a href="#pricing" className="px-4 py-2 rounded-xl font-semibold border border-slate-300 text-slate-900 hover:bg-slate-50 transition">
              See Pricing
            </a>
            <span className="inline-flex items-center px-3 rounded-full text-sm bg-sky-200 text-sky-800">
              Unclassified workflow • API‑first
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-white border border-slate-200 rounded-xl text-center font-semibold">
              &lt;5s ingest latency
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl text-center font-semibold">
              5+ yrs archives
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl text-center font-semibold">
              SEA‑focused coverage
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Map */}
              <div className="space-y-4">
                <MapIframe />
              </div>

              {/* API Panel */}
              <div className="space-y-4">
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden h-96">
                  <div className="flex justify-between items-center px-4 py-3 border-b border-slate-200">
                    <b>API</b>
                    <span className="text-sm text-slate-500">REST • WebSocket</span>
                  </div>
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded-b-xl overflow-auto h-full">
        GET /all
        Authorization: Bearer •••

        Response:
        {`{
          "Decoded Messages": 123,
          "Decoded": [
            {
              "mmsi": 533123456,
              "lat": 3.12,
              "lon": 101.65,
              "sog": 12.4,
              "cog": 182.0,
              "raw": "!AIVDM,...",
              "unix_timestamp": 1759808091,
              "datetime": "2025-12-06 19:00:00"
            },
            ...
          ]
        }`}
                  </pre>
                </div>
              </div>
            </div>

            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-sky-100 text-sky-800 -mt-6 ml-4">
              Beta
            </span>
          </div>
        </div>

      </section>

      {/* Products Section */}
      <section id="products" className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Products</h2>
          <p className="text-slate-600 mt-4">
            Three products — one stack. Pick what you need or deploy all three for end‑to-end Maritime Domain Awareness.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navisense */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col hover:ring-2 hover:ring-slate-900">
            <div className="flex justify-between items-center p-5 border-b border-slate-200">
              <b>Navisense</b>
              <span className="px-3 py-1 text-sm rounded-full border border-slate-300 text-slate-500 bg-white">Platform</span>
            </div>
            <div className="p-4 flex-1 flex flex-col gap-4">
              <div className="h-40 rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 flex items-center justify-center text-slate-500">
                IMAGE PLACEHOLDER — Navisense UI / map
              </div>
              <p className="text-slate-600">Subscription platform for live & historical AIS with geofences, alerts, and developer API access.</p>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>Real‑time dashboard & alerting</li>
                <li>REST & WebSocket API, SDKs</li>
                <li>Data export: CSV/GeoJSON/Parquet</li>
                <li>Role‑based access; private deployment option</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                <a href="#contact" className="px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition">Book demo</a>
                <a href="#api" className="px-4 py-2 rounded-xl border border-slate-300 text-slate-900 hover:bg-slate-50 transition">View API</a>
              </div>
            </div>
          </div>

          {/* NaviCube+ */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col hover:ring-2 hover:ring-slate-900">
            <div className="flex justify-between items-center p-5 border-b border-slate-200">
              <b>NaviCube+</b>
              <span className="px-3 py-1 text-sm rounded-full bg-slate-900 text-white border border-slate-900">Payload</span>
            </div>
            <div className="p-4 flex-1 flex flex-col gap-4">
              <div className="h-40 rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 flex items-center justify-center text-slate-500">
                IMAGE PLACEHOLDER — CubeSat AIS payload
              </div>
              <p className="text-slate-600">Compact satellite AIS receiver designed for standard CubeSat frames. Flexible interfaces; optimized for LEO missions.</p>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>Form factor: 1U/3U compatible module</li>
                <li>Frequency: AIS VHF bands (Ch A/B)</li>
                <li>Low power; radiation‑tolerant parts</li>
                <li>Data downlink via S‑band/UHF (mission‑specific)</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                <a href="#contact" className="px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition">Request datasheet</a>
                <a href="#solutions" className="px-4 py-2 rounded-xl border border-slate-300 text-slate-900 hover:bg-slate-50 transition">See use cases</a>
              </div>
            </div>
          </div>

          {/* NaviBased */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col hover:ring-2 hover:ring-slate-900">
            <div className="flex justify-between items-center p-5 border-b border-slate-200">
              <b>NaviBased</b>
              <span className="px-3 py-1 text-sm rounded-full border border-slate-300 text-slate-500 bg-white">Terrestrial Receiver</span>
            </div>
            <div className="p-4 flex-1 flex flex-col gap-4">
              <div className="h-40 rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 flex items-center justify-center text-slate-500">
                IMAGE PLACEHOLDER — Solar-powered ground station
              </div>
              <p className="text-slate-600">Low‑power AIS base station for rapid coastal deployment. Solar powered with battery, GSM backhaul, edge buffering.</p>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>Standalone solar kit + enclosure</li>
                <li>GSM/LTE connectivity; VPN capable</li>
                <li>Dual‑channel AIS; GPS‑disciplined time</li>
                <li>Edge cache for intermittent links</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                <a href="#contact" className="px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition">Get a quote</a>
                <a href="#coverage" className="px-4 py-2 rounded-xl border border-slate-300 text-slate-900 hover:bg-slate-50 transition">Coverage planning</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-black">Which one fits your mission?</h3>
          <p className="text-slate-600 mt-2">Quick comparison across the suite. Mix and match for maximum effect.</p>
        </div>
        <div className="max-w-7xl mx-auto overflow-x-auto bg-white border border-slate-200 rounded-xl px-8 py-6">
          <table className="min-w-full table-auto border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-4 text-left">Capability</th>
                <th className="border border-slate-200 px-4 py-4 text-left">Navisense</th>
                <th className="border border-slate-200 px-4 py-4 text-left">NaviCube+</th>
                <th className="border border-slate-200 px-4 py-4 text-left">NaviBased</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="hover:bg-slate-200 cursor-pointer">
                <td className="border border-slate-200 px-4 py-2">Primary role</td>
                <td className="border border-slate-200 px-4 py-2">Platform & analytics</td>
                <td className="border border-slate-200 px-4 py-2">Space AIS receiver</td>
                <td className="border border-slate-200 px-4 py-2">Coastal AIS base</td>
              </tr>
              <tr className="hover:bg-slate-200 cursor-pointer">
                <td className="border border-slate-200 px-4 py-2">Deployment</td>
                <td className="border border-slate-200 px-4 py-2">SaaS / Private</td>
                <td className="border border-slate-200 px-4 py-2">LEO CubeSat</td>
                <td className="border border-slate-200 px-4 py-2">Coastal site</td>
              </tr>
              <tr className="hover:bg-slate-200 cursor-pointer">
                <td className="border border-slate-200 px-4 py-2">Power budget</td>
                <td className="border border-slate-200 px-4 py-2">n/a</td>
                <td className="border border-slate-200 px-4 py-2">Low (payload)</td>
                <td className="border border-slate-200 px-4 py-2">Solar + battery</td>
              </tr>
              <tr className="hover:bg-slate-200 cursor-pointer">
                <td className="border border-slate-200 px-4 py-2">Connectivity</td>
                <td className="border border-slate-200 px-4 py-2">Web, API, Webhooks</td>
                <td className="border border-slate-200 px-4 py-2">Mission downlink</td>
                <td className="border border-slate-200 px-4 py-2">GSM/LTE, VPN</td>
              </tr>
              <tr className="hover:bg-slate-200 cursor-pointer">
                <td className="border border-slate-200 px-4 py-2">Latency target</td>
                <td className="border border-slate-200 px-4 py-2">&lt;5 s ingest</td>
                <td className="border border-slate-200 px-4 py-2">Orbit-dependent</td>
                <td className="border border-slate-200 px-4 py-2">&lt;10 s backhaul</td>
              </tr>
              <tr className="hover:bg-slate-200 cursor-pointer">
                <td className="border border-slate-200 px-4 py-2">Data products</td>
                <td className="border border-slate-200 px-4 py-2">Live/History, Alerts</td>
                <td className="border border-slate-200 px-4 py-2">Raw/Frames/Decoded</td>
                <td className="border border-slate-200 px-4 py-2">Live AIS, Health</td>
              </tr>
              <tr className="hover:bg-slate-200 cursor-pointer">
                <td className="border border-slate-200 px-4 py-2">Typical buyer</td>
                <td className="border border-slate-200 px-4 py-2">Ops / Intel / Analytics</td>
                <td className="border border-slate-200 px-4 py-2">Constellation / R&D</td>
                <td className="border border-slate-200 px-4 py-2">Ports / Agencies</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Solutions / Use Cases */}
      {/* <section id="solutions" className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <div className="font-semibold mb-2">Littoral MDA</div>
            <p className="text-slate-600">Fuse coastal AIS with optional S‑AIS and geofences to monitor choke points and EEZ boundaries. Cue patrols with ranked alerts.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <div className="font-semibold mb-2">IUU & HADR</div>
            <p className="text-slate-600">Detect unusual dwell/route patterns for IUU triage; reconstruct tracks during disasters to assist SAR/HADR coordination.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <div className="font-semibold mb-2">Port & Logistics</div>
            <p className="text-slate-600">ETA accuracy, anchorage dwell, and queue analytics feed into port ops dashboards and risk engines.</p>
          </div>
        </div>
      </section> */}

      {/* Coverage Planning */}
      <section id="coverage" className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Coverage & Receiver Network</h3>
            <p className="text-slate-600 mb-4">24+ terrestrial AIS sites across Peninsular Malaysia, Sabah & Sarawak, and Sri Lanka. Expand coverage with NaviBased, or add S‑AIS via partners.</p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>Dual‑channel AIS receivers, GPS‑disciplined time</li>
              <li>Secure VPN backhaul, edge buffering</li>
              <li>99.5% monthly uptime design target</li>
            </ul>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <div className="h-60 rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 flex items-center justify-center text-slate-500">
              IMAGE PLACEHOLDER — Coverage map / heatmap
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold">Transparent Pricing</h3>
          <p className="text-slate-600 mt-2">Start with the platform. Add hardware as you scale.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navisense */}
          <div className="bg-white border-2 hover:border-slate-900 rounded-xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <b>Navisense</b>
              <span className="px-2 py-1 text-sm rounded-full border border-slate-300 text-slate-500 bg-white">SaaS</span>
            </div>
            <div className="text-2xl font-bold mb-2">$299/mo</div>
            <ul className="list-disc list-inside text-slate-600 space-y-1 py-4">
              <li>Live map & alerts</li>
              <li>API access</li>
              <li>90-day history</li>
            </ul>
            <a href="#contact" className="mt-auto px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition text-center">Start subscription</a>
          </div>

          {/* NaviCube+ */}
          <div className="bg-white border-2 hover:border-slate-900 rounded-xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <b>NaviCube+</b>
              <span className="px-2 py-1 text-sm rounded-full bg-slate-900 text-white border border-slate-900">Payload</span>
            </div>
            <div className="text-2xl font-bold mb-2">POA</div>
            <ul className="list-disc list-inside text-slate-600 space-y-1 py-4">
              <li>Engineering model</li>
              <li>Flight model</li>
              <li>Integration support</li>
            </ul>
            <a href="#contact" className="mt-auto px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition text-center">Request quote</a>
          </div>

          {/* NaviBased */}
          <div className="bg-white border-2 hover:border-slate-900 rounded-xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <b>NaviBased</b>
              <span className="px-2 py-1 text-sm rounded-full border border-slate-300 text-slate-500 bg-white">Hardware</span>
            </div>
            <div className="text-2xl font-bold mb-2">$3,990</div>
            <ul className="list-disc list-inside text-slate-600 space-y-1 py-4">
              <li>Solar kit + battery</li>
              <li>GSM/LTE backhaul</li>
              <li>Edge buffering</li>
            </ul>
            <a href="#contact" className="mt-auto px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition text-center">Build a package</a>
          </div>
        </div>
        <p className="max-w-3xl mx-auto text-sm text-slate-500 mt-4">*Pricing is indicative and subject to final specs/quantities.</p>
      </section>

      {/* API Section */}
      <section id="api" className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Developer‑first API</h3>
            <p className="text-slate-600">Query live AIS, stream updates, or backfill voyages. Secure keys, rate limits, and usage analytics included.</p>
            <div className="space-y-4">
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-auto">
              {`GET /all Authorization: Bearer •••

              Response:
              {
                "Decoded Messages": 123,
                "Decoded": [
                  {
                    "mmsi": 533123456,
                    "lat": 3.12,
                    "lon": 101.65,
                    "sog": 12.4,
                    "cog": 182.0,
                    "raw": "!AIVDM,...",
                    "unix_timestamp": 1759808091,
                    "datetime": "2025-12-06 19:00:00"
                  },
                  ...
                ]
              }`}
              </pre>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <div className="flex justify-between items-center mb-2 border-b-2 px-0 py-4">
              <b>Security & Compliance</b>
              <span className="text-sm text-slate-500">Public‑sector ready</span>
            </div>
            <p className="text-slate-600 py-3">SSO (SAML/OIDC), per‑tenant encryption keys, audit logs, IP allow‑listing, and optional private deployments. Data residency by request; least‑privilege defaults.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <em className="text-slate-600">“Navisense cut our time‑to‑alert while keeping false alarms low.”</em>
            <div className="text-sm text-slate-500 mt-2">Head of Maritime Ops • Confidential</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <em className="text-slate-600">“Plug‑and‑play API — easy to integrate with our analytics.”</em>
            <div className="text-sm text-slate-500 mt-2">Data Lead • Logistics</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <em className="text-slate-600">“NaviBased made coastal coverage expansion painless.”</em>
            <div className="text-sm text-slate-500 mt-2">Port Authority • SEA</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <details className="bg-white border border-slate-200 rounded-xl p-4">
              <summary className="font-semibold cursor-pointer">Can I ingest my own satellite AIS?</summary>
              <p className="text-slate-600 mt-2">Yes. Navisense can consume partner space‑AIS and de‑duplicate with terrestrial feeds.</p>
            </details>
            <details className="bg-white border border-slate-200 rounded-xl p-4">
              <summary className="font-semibold cursor-pointer">Do you support on‑prem or air‑gapped deployments?</summary>
              <p className="text-slate-600 mt-2">Enterprise tier supports private cloud or on‑prem with hardened images and offline license servers.</p>
            </details>
            <details className="bg-white border border-slate-200 rounded-xl p-4">
              <summary className="font-semibold cursor-pointer">What are typical lead times for NaviCube+ and NaviBased?</summary>
              <p className="text-slate-600 mt-2">Payload and hardware lead times depend on configuration; contact us for current schedules.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Get a live demo</h3>
            <p className="text-slate-600">Tell us about your use case — port ops, fisheries, compliance, or insurance — and we’ll tailor a session.</p>
            <div className="space-y-2 text-slate-600">
              <div>📞 +60 ••• •• ••••</div>
              <div>✉️ hello@navisense.io</div>
            </div>
          </div>
          <form onSubmit={handleDemoFormSubmit} className="bg-white border border-slate-200 rounded-xl p-4 grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required name="name" placeholder="Name" className="px-3 py-2 border border-slate-300 rounded-lg" />
              <input required type="email" name="email" placeholder="Work Email" className="px-3 py-2 border border-slate-300 rounded-lg" />
            </div>
            <input name="org" placeholder="Organization" className="px-3 py-2 border border-slate-300 rounded-lg" />
            <textarea name="message" rows={4} placeholder="Which product(s) are you interested in?" className="px-3 py-2 border border-slate-300 rounded-lg" />
            <button type="submit" className="px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition">Request demo →</button>
            <p className="text-sm text-slate-500">By submitting, you agree to our Terms and Privacy Policy.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
