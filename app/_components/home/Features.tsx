"use client"
import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { useEffect, useRef, useState } from "react"

const services = [
  {
    id: 0,
    title: "TurnKey Solution",
    description: "We transform your space mission ideas into reality with configurable solutions, built on years of innovation and proven reliability.",
    linkText: "FIND OUT MORE",
    image: "/assets/home/image_6.webp",
    link: '/turnkey-solution'
  },
  {
    id: 1,
    title: "Space Systems",
    description: "Designing and manufacturing cutting-edge satellite payloads and subsystems tailored for Low Earth Orbit (LEO) missions.",
    linkText: "FIND OUT MORE",
    image: "/assets/home/image_8.webp",
    link: '/space-systems'
  },
  {
    id: 2,
    title: "Hosted Payload",
    description: "Enabling access to space through our hosted payload missions in Low Earth Orbit (LEO).",
    linkText: "FIND OUT MORE",
    image: "/assets/home/image_4.webp",
    link: '/hosted-payload'
  },
  {
    id: 3,
    title: "Maritime Intelligence",
    description: "Satellite AIS data, seamlessly combined with terrestrial feeds for maritime intelligence.",
    linkText: "FIND OUT MORE",
    image: "/assets/home/image_5.webp",
    link: '/maritime-intelligence'
  },
  {
    id: 4,
    title: "Ragulatory Services",
    description: "Our expert regulatory team ensures seamless satellite and ground program execution globally.",
    linkText: "FIND OUT MORE",
    image: "/assets/home/image_1.webp",
    link: '/regulatory-services'
  },
];

export const Features = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, []);

  return (
    <section ref={ref} data-section="features" className="py-24 bg-white px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-1 flex-col gap-1">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-slate-900 animate-fade-in-up">
            WHAT WE DO
          </h2>
          <h3 className="text-base md:text-lg font-normal text-center text-slate-900 mb-8 animate-fade-in-up">
            Founded on over 15 years of experience in satellite and space technology.
          </h3>
        </div>

        {/* Description */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 md:gap-0 flex-1 justify-between mb-16">
          <div className="flex flex-1 flex-col gap-2 items-center w-full md:w-[45%]">
            <h4 className="text-xl text-black font-bold leading-relaxed">Behind the Vision</h4>
            <p className="text-lg text-slate-700 leading-relaxed">
              ALTAIR RESEARCH LAB is an innovative provider of tailored satellite solutions offering design, manufacturing, and operational support 
              for businesses, governments, and organizations, driven by advanced technology and a commitment to innovation
            </p>

          </div>
          <div className="flex flex-1 flex-col gap-2 items-center leading-relaxed w-full md:w-[45%]">
            <h4 className="text-xl text-black font-bold leading-relaxed">What Drives Us</h4>
            <p className="text-lg text-slate-700 leading-relaxed">
              We provide comprehensive satellite services, including regulatory support for space and ground compliance, licensing, and frequency 
              management. Our end-to-end mission solutions cover concept to deployment and operations. We also deliver innovative downstream 
              applications in remote sensing and maritime domains to enable data-driven decision-making
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-5 gap-2">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-80 overflow-hidden rounded-md bg-slate-900">
                {/* Image */}
                <Image
                  alt={service.title}
                  src={service.image}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-[#0000008c] transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="flex flex-1 flex-col justify-end">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base font-bold group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-200 mb-4 line-clamp-4 group-hover:text-white transition-colors h-24">
                        {service.description}
                      </p>
                    </div>
                    <Link href={service.link} prefetch className="text-xs font-semibold text-gray-300 hover:text-blue-300 transition-colors flex items-center gap-2 underline underline-offset-6 hover:underline-offset-4 hover:duration-300">
                      <span>{service.linkText}</span>
                      <MoveRight size={20} />
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
