import { Metadata } from "next";
import { ContactUsPage } from "@/app/_components/contactUs";

export const metadata: Metadata = {
  title: "Altair Research Lab | Contact Us",
  description: "Altair Research Lab Contact us page",
};

export default function Page() {
  return (
    <div className="text-black min-h-screen relative overflow-hidden pt-20 bg-slate-950">
      <ContactUsPage />
    </div>
  )
}

