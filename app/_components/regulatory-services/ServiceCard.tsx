'use client';

type IProps =  {
  title: string;
  slug: string;
  tagline: string;
  outcome: string;
  deliverables: string[];
};

export const ServiceCard = ({
  title,
  slug,
  tagline,
  outcome,
  deliverables,
}: IProps) => (
  <article className="flex h-full flex-col rounded-3xl border border-slate-600 bg-slate-900/40 p-8">
    <div className="flex items-start justify-between gap-3">
      <h3 className="mt-2 text-lg font-semibold text-slate-50">{title}</h3>
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-[11px] uppercase tracking-[0.16em] text-slate-300">
        {slug.split("-")[0]}
      </span>
    </div>

    <p className="my-2 text-sm text-slate-300">{tagline}</p>

    <div className="mt-4 flex-1">
      <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Deliverables
      </h4>
      <ul className="mt-2 space-y-1.5 text-sm text-slate-200">
        {deliverables.map((item) => (
          <li key={item} className="flex gap-2 items-center">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-4 border-t border-slate-400 pt-3">
      <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Outcome
      </h4>
      <p className="mt-1 text-xs text-slate-200">{outcome}</p>
    </div>
  </article>
);