import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary';
};

export const CustomButton = ({ children, className = '', variant = 'default', ...rest }: Props) =>{
  const base = 'rounded-lg px-4 py-2 font-semibold shadow cursor-pointer';
  const variantClass = variant === 'default'
    ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-500'
    : 'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700';

  return (
    <button className={`${base} ${variantClass} ${className}`} {...rest}>
      {children}
    </button>
  );
}