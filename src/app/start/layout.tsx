import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";

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
    <div
      className={`${crimsonSerif.variable} antialiased h-screen overflow-hidden relative p-6`}
    >
      <Link className="block" href="/">
        <Image
          src="Logo.svg"
          alt="Nothing Logo"
          height={0}
          width={0}
          className="h-10 w-10 mb-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="md:max-w-3/4 lg:max-w-1/2 m-auto flex flex-col gap-3 justify-center h-9/10">
        {children}
      </div>
    </div>
  );
}
