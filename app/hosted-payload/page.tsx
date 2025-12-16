import { Metadata } from "next";
import { HostedPayloadPage } from "@/app/_components/hosted-payload";

export const metadata: Metadata = {
  title: "Altair Research Lab | Hosted Payload",
  description: "Altair Research Lab offers cutting-edge satellite solutions tailored to your unique needs. Explore our hosted payload services, advanced technology demos, and more.",
};

export default function HostedPayload() {
  return (
    <div className="bg-slate-950 text-slate-50 w-full">
      <HostedPayloadPage />
    </div>
  );
}
