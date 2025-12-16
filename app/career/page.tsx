import { Metadata } from "next";
import { CareerPage } from "@/app/_components/career";

export const metadata: Metadata = {
  title: "Altair Research Lab | Career",
  description: "Altair Research Lab Career page",
};

export default function Page() {
  return (
    <div className="text-black min-h-screen relative overflow-hidden pt-20 bg-slate-950">
      <CareerPage />
    </div>
  )
}

