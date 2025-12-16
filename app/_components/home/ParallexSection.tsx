"use client"
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ParallaxSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150])

  return (
    <div ref={containerRef} className="relative w-full h-[600px] md:h-[800px] overflow-hidden bg-black">
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          fill
          className="object-cover"
          alt="Parallax background"
          preload
          src="/assets/home/image_3.webp"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
        <div className="space-y-6 max-w-4xl animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-balance">Building the Future with Today’s Innovation</h2>
          <p className="py-2 text-slate-300 leading-7 text-lg">
            <span className='font-bold uppercase'>At Altair RESEARCH LAB</span>, 
            we are committed to building the future by harnessing the power of today’s innovation. Our cutting-edge 
            technologies and forward-thinking solutions drive progress across industries, enabling us to shape a better 
            tomorrow. By staying ahead of trends and continually advancing our capabilities, we are creating lasting impact 
            with every step we take, ensuring that the innovations of today lay the foundation for the successes of the future.
          </p>
        </div>
      </div>
    </div>
  );
};
