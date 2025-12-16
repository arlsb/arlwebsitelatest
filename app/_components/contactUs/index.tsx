'use client';
import dynamic from "next/dynamic";
import { MailIcon, MapPin, PhoneCall } from "lucide-react";

// Dynamically import the Map component with SSR disabled
const Map = dynamic(
  () =>
    import("../../_shared/Map").then((mod) => (mod as any).default ?? (mod as any).Map ?? mod),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center text-gray-500">
        Loading Map...
      </div>
    ),
  }
);

const contactData = [{
  title: 'Our Address',
  meta: 'Unit 2-1, Level 2, The Podium, Tower 3',
  icon: <MapPin color="white" size={40} />
}, {
  title: 'Phone Number',
  meta: '03-5870 4985',
  icon: <PhoneCall color="white" size={40} />
}, {
  title: 'Email',
  meta: 'info@arlsb.com',
  icon: <MailIcon color="white" size={40} />
}];

export const ContactUsPage = () => (
  <>
    {/* Why Choose Us */}
    <section className="px-3 pt-4 md:pt-28">
      <div className='max-w-7xl mx-auto'>
        <div className="flex flex-col gap-2 flex-wrap items-center w-full">
          <h2 className="text-2xl font-medium md:text-4xl text-slate-100 tracking-[2] uppercase">Contact Us</h2>
          <h2 className="text-2xl font-medium md:text-4xl tracking-[8] text-slate-500 uppercase">Let's Talk</h2>
          <p className="mt-1 max-w-3xl text-base text-slate-400 md:text-lg">
            Submit your enquiry and a member of our team will respond to you promptly.
          </p>
          <div className="my-3 flex flex-wrap gap-4">
            {contactData.map((item) => (
              <div key={item.title} className="flex flex-col flex-wrap gap-2 items-center outline-2 bg-slate-900/40 p-4 px-2 min-w-72 md:min-w-[310] max-w-64 rounded">
                <>{item.icon}</>
                <h3 className=" text-xl font-medium md:text-2xl text-slate-100">{item.title}</h3>
                <p className="text-slate-400 text-center">{item.meta}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center h-[300px] md:h-[500px] rounded-md overflow-hidden shadow-xl border-4 border-white/10 bg-white my-4">
          <Map />
        </div>
      </div>
    </section>
  </>
);
