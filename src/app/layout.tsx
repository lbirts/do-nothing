import type { Metadata } from "next";
import { Instrument_Serif, Inter, Crimson_Text } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400"
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ['latin'],
});

const crimsonSerif = Crimson_Text({
  variable: "--font-crimson-serif",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Do nothing",
  description: "Created by Lauren Birts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${interSans.variable} ${crimsonSerif.variable} antialiased h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
