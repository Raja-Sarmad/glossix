import type { Metadata } from "next";
import { Caveat, Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Glossix — Brighter Skin From Within",
  description:
    "Glossix is a glutathione, collagen and vitamin C dietary supplement from Inovics Healthcare for clearer, calmer, brighter-looking skin.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${hand.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f8fafc] text-[#1e1b4b]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
