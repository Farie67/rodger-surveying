import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Rodger Surveying (Pvt) Ltd | Precision. Excellence.",
    template: "%s | Rodger Surveying",
  },
  description:
    "Rodger Surveying (Pvt) Ltd delivers precision land surveying, engineering, GIS, planning and valuation services across Zimbabwe and Southern Africa.",
  keywords: [
    "land surveying Zimbabwe",
    "engineering surveyors Harare",
    "GIS services Zimbabwe",
    "cadastral surveying",
    "topographical survey",
    "Rodger Surveying",
  ],
};

export const viewport: Viewport = {
  themeColor: "#101C32",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={plusJakartaSans.variable}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen font-sans antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
