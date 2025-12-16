import { HeroSection } from '@/app/_components/home/Hero';
import { Features } from '@/app/_components/home/Features';
import { Newsletter } from '../_components/home/Newsletter';
import { MarqueeSection } from '../_components/home/Products';
import { NewsInsightSection } from '../_components/home/NewsInsight';
import { ParallaxSection } from '../_components/home/ParallexSection';

export default function Page() {
  return (
    <div className="text-slate-50 min-h-screen relative overflow-hidden pt-12">
      <HeroSection />
      <Features />
      <ParallaxSection />
      <MarqueeSection />
      <NewsInsightSection />
      <Newsletter />
    </div>
  );
}