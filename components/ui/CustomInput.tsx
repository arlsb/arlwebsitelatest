import { InputHTMLAttributes } from "react";

export const CustomInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={`w-full rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${props.className ?? ''}`}
    />
  );
}