'use client";'
import { JSX, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { CustomButton } from "./ui";

type IProps = {
  title: string;
  perks: string[];
  location: string;
  keywords: string[];
  description: JSX.Element;
  requirements: string[];
};

export const CareerDetailModal = ({ title, description, location, keywords, perks, requirements }: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <CustomButton className="mt-2 px-6" variant='secondary'>Details</CustomButton>
      </DialogTrigger>

      <DialogContent className="max-w-5xl!">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-3xl font-bold text-center">
            {title}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-slate-600!">{description}</DialogDescription>

        <div className="flex flex-col flex-wrap gap-3">
          <p>Location: {location}</p>

          <div className="flex-1">
            <h4 className="my-2 text-base md:text-lg font-semibold uppercase tracking-wide text-slate-600">
              What You’ll Do
            </h4>
            <ul className="space-y-1.5 text-sm md:text-base text-slate-700">
              {keywords.map((item) => (
                <li key={item} className="flex gap-2 items-center">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h4 className="my-2 text-base md:text-lg font-semibold uppercase tracking-wide text-slate-600">
              Requirements
            </h4>
            <ul className="space-y-1.5 text-sm md:text-base text-slate-700">
              {requirements.map((item) => (
                <li key={item} className="flex gap-2 items-center">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h4 className="my-2 text-base md:text-lg font-semibold uppercase tracking-wide text-slate-600">
              What You’ll Gain
            </h4>
            <ul className="space-y-1.5 text-sm md:text-base text-slate-700">
              {perks.map((item) => (
                <li key={item} className="flex gap-2 items-center">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
