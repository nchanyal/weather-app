import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const dmSans = localFont({
  src: [
    {
      path: "../../public/fonts/DMSans-VariableFont_opsz,wght.ttf",
      style: "normal",
      weight: "100 900", // variable weight range
    },
    {
      path: "../../public/fonts/DMSans-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const bricolageGrotesque = localFont({
  src: [
    {
      path: "../../public/fonts/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf",
      style: "normal",
      weight: "100 900", // Bricolage Grotesque supports full weight axis
    },
  ],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weather App",
  description:
    "A responsive weather app with search functionality, unit conversion, and detailed forecasts using the Open-Meteo API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
