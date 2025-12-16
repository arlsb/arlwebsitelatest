"use client"
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { blogCards } from "@/app/_data/home";
import { CustomButton } from "@/components/ui";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export const NewsInsightSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
  }, [])

  return (
    <section ref={ref} className="py-24 bg-linear-to-b from-slate-50 to-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Layout */}
        <div className="flex flex-col md:grid md:grid-cols-4 md:gap-12 md:items-center gap-8">
          {/* Left Column - Content */}
          <div
            className={`transition-all duration-700 order-1 md:order-0 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6">Blogs</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Explore our latest insights
            </p>

            <Link href={"/"}>
              <CustomButton type="button" className="flex items-center gap-1.5 my-3 py-3 px-6">
                <span>View All Blogs </span>
                <ArrowRight size={20} />
              </CustomButton>
            </Link>
            {/* <a
              href="#"
              className="inline-block mt-8 px-8 py-3 bg-primary text-white font-semibold rounded-lg transition-colors"
            >
              View All Blogs →
            </a> */}
          </div>

          {/* Right Column - Carousel */}
          <div
            className={`transition-all duration-700 order-3 md:order-0 md:col-span-3 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {blogCards.map((blog) => (
                  <CarouselItem key={blog.id} className="basis-full md:basis-1/3">
                    <div className="group cursor-pointer">
                      <div className="relative h-[300px] overflow-hidden rounded-lg bg-slate-900">
                        {/* Image */}
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-slate-900 via-slate-900/70 to-transparent group-hover:from-slate-900 transition-colors duration-500" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 h-2/3 flex flex-col justify-end p-6 text-white">
                          <h3 className="text-base font-bold group-hover:text-blue-400 transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-sm text-gray-200 mb-4 line-clamp-2 group-hover:text-white transition-colors h-20">
                            {blog.description}
                          </p>
                          <Link
                            href="#"
                            className="text-xs font-semibold text-gray-300 hover:text-blue-300 transition-colors inline-block"
                          >
                            {blog.linkText} →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Carousel Controls */}
              <div className="flex justify-center order-2 md:order-0 mt-6">
                <CarouselPrevious className="relative position-static  bg-slate-400 hover:bg-slate-500 border-none cursor-pointer" />
                <CarouselNext className="relative position-static bg-slate-400 hover:bg-slate-500 border-none cursor-pointer" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
