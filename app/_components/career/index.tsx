'use client';
import Image from "next/image";
import { CareerCard } from "./CareerCard";
import { ServicesData } from "@/app/_data/career";

export const CareerPage = () => (
  <>
    {/* Hero */}
    <section className="relative h-screen overflow-hidden w-full">
      <div className="absolute inset-0 w-full h-full">
        <Image
          fill
          preload
          loading='eager'
          alt="Rotating Satellite"
          src="/assets/hiring.jpg"
          className="absolute w-full h-full object-cover"
        />
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="mb-12 px-3">
      <div className='max-w-7xl mx-auto py-10'>
        <div className="flex flex-col gap-2 flex-wrap items-center w-full">
          <h2 className="text-xl font-semibold md:text-3xl text-slate-100">Why Choose Our Regulatory Services?</h2>
          <p className="mt-1 max-w-3xl text-sm text-slate-400 md:text-base">
            You'll work on the real missions, not just "lab exercises". From early-stage
            concept and system architecture to test campaigns and operations, our teams are
            hands-on with hardware, simulations, and real customer requirements.<br />
            We collaborate with universities, industry  partners, and national agencies;
            you'll be exposed to the full ecosystem of the space industry in Southeast Asia.
          </p>
          <div className="mt-2 flex flex-wrap gap-4">
            {[
              "End-to-end CubeSat missions",
              "Multi-disciplinary teams",
              "Mentorship & learning culture"
            ].map((item) => (
              <div key={item} className="rounded-2xl outline-2 bg-slate-900/40 p-4 py-2 text-sm text-slate-400">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Core Services */}
    <section className="mb-12 max-w-7xl mx-auto w-full px-3">
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 py-2">
        {ServicesData.map(item => (
          <CareerCard key={item.title} {...{...item }} />
        ))}
      </div>
    </section>
  </>
);
