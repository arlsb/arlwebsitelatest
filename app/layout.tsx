import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import {Header, Footer, CookiesBanner } from "./_shared";
import "./globals.css";

const tomorrow = Tomorrow({
  variable: '--font-tomorrow',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Altair Research Lab | Innovative Satellite Solutions",
  description: "Altair Research Lab offers cutting-edge satellite solutions tailored to your unique needs. Explore our hosted payload services, advanced technology demos, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tomorrow.className} antialiased min-w-80 w-full`} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />

        {/* Cookie Banner Component */}
        <CookiesBanner />
      </body>
    </html>
  );
}
