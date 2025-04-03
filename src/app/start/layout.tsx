import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "../globals.css";

const crimsonSerif = Crimson_Text({
  variable: "--font-crimson-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doing nothing",
  description: "Enjoy the silence.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${crimsonSerif.variable} antialiased h-screen overflow-hidden relative py-20 sm:px-16 px-10 md:max-w-3/4 lg:max-w-1/2 m-auto flex flex-col gap-3 justify-center`}>
      {children}
    </div>
  );
}
