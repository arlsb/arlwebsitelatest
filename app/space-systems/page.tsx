'use client';
import { useEffect, useState } from "react";

const PRODUCTS = [
  "StarlingPix-1",
  "AltairEye640",
  "S-Band Patch Antenna",
  "X-Band Patch Antenna",
  "Dual S/X-Band Antenna",
  "UHF Transceiver",
  "VHF Transceiver",
  "S-Band Transceiver",
  "NaviSense",
  "NaviCubeX",
  "NaviBased",
];
const LAUNCH_DATE = new Date("2026-02-01T00:00:00Z").getTime();

const getTimeLeft = () => {
  const now = Date.now();
  const diff = LAUNCH_DATE - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export default function Page() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="p-10 font-sans bg-slate-800 pt-32 text-slate-100 w-full">
      <div className="flex flex-col gap-3 items-center max-w-7xl mx-auto w-full">
        <h1 className="text-4xl font-bold">Product Launch – 1 February 2026</h1>
        <h3 className="mt-2 text-xl font-semibold">Time Remaining:</h3>

        <div className="flex gap-5 flex-1 flex-wrap">
          <Box label="Days" value={timeLeft.days} />
          <Box label="Hours" value={timeLeft.hours} />
          <Box label="Minutes" value={timeLeft.minutes} />
          <Box label="Seconds" value={timeLeft.seconds} />
        </div>

        <h2 className="mt-6 text-2xl font-semibold">Products Launching:</h2>
        <ul className="flex flex-col items-center w-full">
          {PRODUCTS.map((p) => (
            <li key={p} className="text-base mt-1">{p}</li>
          ))}
        </ul>

      </div>
    </div>
  )
}

const Box = ({ label, value }: { label: string; value: string | number }) => (
  <div className="p-5 border border-slate-200 rounded-[10px] min-w-24 text-center">
    <div className="text-3xl">{String(value).padStart(2, "0")}</div>
    <div className="text-sm mt-1.5">{label}</div>
  </div>
);

