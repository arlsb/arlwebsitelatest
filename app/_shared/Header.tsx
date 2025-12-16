"use client"
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NavOptions = [
  { label: 'HOME', link: '/'},
  { label: 'TURNKEY SOLUTION', link: '/turnkey-solution'},
  { label: 'SPACE SYSTEMS', link: '/space-systems'},
  { label: 'HOSTED PAYLOAD', link: '/hosted-payload'},
  { label: 'REGULATORY SERVICES', link: '/regulatory-services'},
  { label: 'MARITIME INTELLIGENCE', link: '/maritime-intelligence'},
  { label: 'CAREER', link: '/career'},
  { label: 'CONTACT US', link: '/contact-us'},
];

export const Header = () => {
  const ref = useRef(null);
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show scrolled header after 300px scroll
      if (currentScrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY]);

  useEffect(() => {
    const clickOutside = (event: any) => {
      // @ts-ignore
      if (ref.current && !ref?.current?.contains?.(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [isMenuOpen]);
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900 backdrop-blur-lg border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
          <Link href="/" prefetch>
            <Image src="/logo.webp" width={110} height={80} alt="logo here" />
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            {NavOptions.map(item => (
              <Link key={item.label} href={item.link} className={`text-sm ${pathname === item.link ? 'text-[#f56163] font-semibold': 'text-[#83837e] hover:text-[#f56163]'} transition-colors relative group`} prefetch>
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ease-out mt-0.5 ${pathname === item.link ? 'bg-[#f56163] w-full': 'bg-[#f56163] group-hover:w-full'}`} />
              </Link>
            ))}
          </nav>
          <button
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="p-2 bg-slate-200/40 rounded-lg transition-colors cursor-pointer block md:hidden"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <NavBarDropdown {...{ref, isMenuOpen }} />
      </header>

      {/* Animated Header while scroll */}
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-slate-900 backdrop-blur-lg border-b border-blue-500/30 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
        <Link href="/" prefetch>
          <Image src="/logo.webp" width={110} height={80} alt="logo here" />
        </Link>
        <button
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="p-2 rounded-lg transition-colors cursor-pointer"
        >
          {isMenuOpen ? <X color="#83837e" className="w-8 h-8" /> : <Menu color="#83837e" className="w-8 h-8" />}
        </button>
      </div>
      <NavBarDropdown {...{ref, isMenuOpen, pathname }} />
    </header>
    </>
  )
};

const NavBarDropdown = ({ ref, isMenuOpen, pathname }: NavBarDropdownProps) => (
  <div
    ref={ref}
    className={`max-w-2xl absolute top-full right-8 xl:right-72 bg-slate-100 border-b border-slate-800/50 overflow-hidden backdrop-blur-lg transition-all duration-300 ${
      isMenuOpen ? "max-h-72 opacity-100 overflow-y-scroll" : "max-h-0 opacity-0"
    }`}
  >
    <nav className="flex flex-col items-end px-6 py-3 gap-1">
      {NavOptions.map((item) => (
        <Link key={item.label} href={item.link} className={`text-sm px-4 py-2 rounded-lg transition-all duration-200 underline underline-offset-4 ${pathname === item.link ? 'text-[#f56163] font-semibold': 'text-[#83837e] hover:text-[#f56163]'}`} prefetch>
          {item.label}
        </Link>
      ))}
    </nav>
  </div>
);
