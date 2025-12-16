'use client';
import { CustomButton, CustomInput } from "@/components/ui";

export const Newsletter = () => (
  <section id="cta" className="w-full px-4 py-20 text-center bg-[#152451e5]">
    <h2 className="text-3xl font-bold text-white uppercase underline underline-offset-8 decoration-[5px] decoration-white">Sign up</h2>
    <p className="py-4 text-base text-slate-100">Sign up to our newsletters for the latest news, projects and more delivered straight to your inbox</p>
    <div className='flex items-center justify-center'>
      <form className="mt-3 grid gap-4 md:grid-cols-3" onSubmit={(e) => { e.preventDefault(); alert('Interest submitted — replace with real handler'); }}>
        <CustomInput placeholder="Contact email" className='md:col-span-2' />
        <CustomButton type="submit">Submit interest</CustomButton>
      </form>
    </div>
  </section>
);
