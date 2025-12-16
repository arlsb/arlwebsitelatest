'use client';
import { JSX } from "react";
import { CareerDetailModal } from "@/components/CareerModal";

type OtherDetailTypes = {
  title: string;
  perks: string[];
  location: string;
  keywords: string[];
  requirements: string[];
  description: JSX.Element;
};

type IProps =  {
  id: number;
  title: string;
  slug: string;
  tagline: string;
  outcome: string;
  location: string;
  apply: JSX.Element;
  keywords: string[];
  otherDetails: OtherDetailTypes
};

export const CareerCard = ({
  id,
  title,
  slug,
  tagline,
  apply,
  location,
  keywords,
  otherDetails
}: IProps) => (
  <article className="flex h-full flex-col rounded-3xl border border-slate-600 bg-slate-900/40 py-6 px-4">
    <div className="flex items-baseline justify-between gap-3 h-24 mb-2">
      <div className="flex flex-col gap-2">
        <h3 className="mt-2 text-sm md:text-lg font-semibold text-slate-50">{title}</h3>
        <span className="inline-flex items-center justify-center text-xs text-slate-300">
          {location}
        </span>
      </div>
      <span className={`inline-flex rounded-full px-3 py-1 border ${id === 0 ? 'text-cyan-300 border-cyan-400' :'text-slate-300 border-slate-700'} text-xs uppercase `}>
        {slug}
      </span>
    </div>

    <p className="my-2 text-sm text-slate-300 h-20">{tagline}</p>

    <div className="mt-4 h-40">
      <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Keywords
      </h4>
      <div className="flex gap-2.5 flex-wrap mt-2 text-slate-200">
        {keywords.map((item) => (
          <span key={item} className="text-xs rounded-full outline-2 px-3 py-1.5">
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="flex justify-end w-full">
      {/* <CustomButton className="px-6 rounded-full!" variant='secondary'>Details</CustomButton> */}
      <CareerDetailModal {...{ ...otherDetails }} />
    </div>

    <div className="mt-4 border-t border-slate-400 pt-3">
      <p className="mt-1 text-xs text-slate-300">{apply}</p>
    </div>
  </article>
);