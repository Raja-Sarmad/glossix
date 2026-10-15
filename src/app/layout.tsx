import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Glossix — Expert Nutrition for Natural Skin Whitening",
  description:
    "Glossix is a glutathione, collagen and vitamin C dietary supplement from Inovics Healthcare. Crafted to support a brighter complexion, calmer skin and everyday antioxidant care.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-[#152238]">{children}</body>
    </html>
  );
}
