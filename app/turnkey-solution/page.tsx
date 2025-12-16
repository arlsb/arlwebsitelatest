import { Metadata } from "next";
import { TurnkeyPage } from "@/app/_components/turnkey_solution";

export const metadata: Metadata = {
  title: "Altair Research Lab | Turnkey Solutions",
  description: "Altair Research Lab offers cutting-edge satellite solutions tailored to your unique needs. Explore our hosted payload services, advanced technology demos, and more.",
};

export default function AltairTurnkeyLanding() {
  return (
    <TurnkeyPage />
  );
};
