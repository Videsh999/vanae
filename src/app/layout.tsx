import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://vanae.luxury'),
  title: "VANAE — The Art of Rooted Living | Kollur, ORR Exit 2, Hyderabad",
  description:
    "An ultra-luxury residential marvel in Kollur, Hyderabad by ORR Exit 2. 36 floors across 6 towers, with residences elevated from the 6th floor, 1,00,000 sq.ft clubhouse, and 50+ lifestyle amenities.",
  keywords: [
    "VANAE",
    "Vanae Kollur",
    "Luxury apartments Hyderabad",
    "ORR Exit 2",
    "Rooted Living",
    "Nestmakers",
    "Elegans Group",
    "3 BHK luxury Kollur",
    "4 BHK luxury Hyderabad",
    "Kollur residential towers"
  ],
  authors: [{ name: "VANAE" }],
  openGraph: {
    title: "VANAE — The Art of Rooted Living",
    description:
      "A colossal symbol of elegance rising 36 floors across 6 towers in Kollur, Hyderabad. Ultra-luxury 3 & 4 BHK residences elevated above 5 levels of stilt parking.",
    type: "website",
    locale: "en_IN",
    siteName: "VANAE Luxury Residences",
    images: [
      {
        url: "/assets/hero-cloud-towers.jpg",
        width: 1800,
        height: 1200,
        alt: "VANAE — Architectural towers rising in mist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VANAE — The Art of Rooted Living",
    description: "36 floors across 6 towers in Kollur, Hyderabad by ORR Exit 2. Ultra-luxury 3 & 4 BHK residences.",
    images: ["/assets/hero-cloud-towers.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} h-full antialiased selection:bg-[#c5a880] selection:text-[#061811]`}
    >
      <body className="min-h-full bg-[#FAF8F5] text-[#141C18] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
