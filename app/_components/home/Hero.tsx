"use client"
import { motion } from 'framer-motion';
import { ChevronDown } from "lucide-react"

export const HeroSection = () => {

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('[data-section="features"]')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  };

  return (
    <div className="relative h-screen bg-linear-to-b from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* {randomVideo &&  */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        // style={{ filter: "brightness(0.6)" }}
      >
        <source src="/assets/home/altair_bg_video.mp4" type="video/mp4" />
      </video>
      {/* } */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-20 opacity-30 block md:hidden"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
      >
        <img
          alt="Rotating Satellite"
          src="https://www.arlsb.com/img/satellite.png"
          className="w-60 h-60 md:w-[500px] md:h-[500px] mx-auto drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]"
        />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <div className="flex flex-col gap-2">
          <h1 className='text-2xl md:text-4xl font-bold animate-fade-in'>Welcome to <b className='text-cyan-300 font-bold uppercase'>Altair RESEARCH LAB</b></h1>
          <h1 className='text-2xl md:text-4xl font-bold text-center animate-fade-in'>Shaping the Future of Satellite Solutions to Meet Your Unique Needs</h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in">
            Explore the unknown, innovate with passion, and deliver groundbreaking solutions that drive the future of space exploration.
          </p>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:opacity-100 transition-opacity"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="text-white opacity-60 hover:opacity-100 w-8 h-8 transition-opacity" />
        </button>
      </div>
    </div>
  )
}
