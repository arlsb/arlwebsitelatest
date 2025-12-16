'use client';
import Link from "next/link";
import Image from "next/image";
import { Headphones, MailIcon, MapPin } from "lucide-react"
import { GetInTouchModal } from "@/components/GetInTouchModal";

export const Footer = () => {
  return (
    <>
      <footer className="relative bottom-0 w-full bg-[#2b2340] text-slate-100 text-base text-center">
        <div className="mx-auto max-w-7xl py-8 flex flex-col flex-wrap gap-10 items-center px-3 md:px-0">
          {/* <Image src="/logo.webp" alt="logo here" width={100} height={60} /> */}
          <div className="flex flex-1 flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-start w-full">
            <div className="flex gap-4 items text-base">
              <Headphones className="ml-1" size={30} />
              <div className="flex flex-col gap-1 items-start text-sm">
                <h5 className="text-base font-bold text-neutral-100 capitalize">Contact us</h5>
                <Link href="tel:0358704985" referrerPolicy="no-referrer" className="text-left hover:underline hover:underline-offset-2 cursor-pointer text-cyan-300">Phone: 03-5870 4985</Link>
                <p className="text-left">Let’s Explore Your Ideas</p>
                <p className="text-left">For All Business and General Queries</p>
                <GetInTouchModal />
              </div>
            </div>
        
            <div className="flex flex-col gap-5 items-center">
              <div className="flex gap-3 items-center text-base">
                <MailIcon size={25} className="ml-1" />
                <Link href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@arlsb.com" referrerPolicy="no-referrer" className="underline underline-offset-2 text-cyan-300 font-semibold">info@arlsb.com</Link>
              </div>
              <div className="flex flex-1 flex-wrap gap-2 pl-16">
                <Image src="/assets/linkedin.png" width={35} height={35} alt="linkedin" className="cursor-pointer" />
                <Image src="/assets/facebook.png" width={35} height={35} alt="facebook" className="cursor-pointer" />
                <Image src="/assets/twitter.png" width={35} height={35} alt="twitter" className="cursor-pointer" />
                <Image src="/assets/instagram.png" width={35} height={35} alt="instagram" className="cursor-pointer" />
              </div>
            </div>
            
            <div className="flex gap-4 items text-base">
              <MapPin size={40} />
              <div className="flex flex-col gap-1 items-start text-sm">
                <p className="text-left">Unit 2-1, Level 2, The Podium, Tower 3,</p>
                <p className="text-left">UOA Business Park, No. 1, Jalan Pengaturcara U1/51A,</p>
                <p className="text-left">Seksyen U1, 40150 Shah Alam,</p>
                <p className="text-left">Selangor Darul Ehsan, Malaysia.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-4 border-slate-700/50 py-4">
          <div className="mx-auto max-w-6xl text-sm">
            &copy; {new Date().getFullYear()} Altair Research Lab. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};