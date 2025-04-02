import type { Metadata } from "next";
import { Crimson_Text, Instrument_Serif } from "next/font/google";
import "../globals.css";

const crimsonSerif = Crimson_Text({
  variable: "--font-crimson-serif",
  weight: "400"
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
    <div className={`${crimsonSerif.variable} antialiased h-screen`}>
      <div className="overflow-hidden relative py-20 sm:px-16 px-10 md:max-w-3/4 lg:max-w-1/2 m-auto flex flex-col gap-3 justify-center h-full">
        <h1 className="font-serif text-xl sm:text-2xl font-black text-neutral-400">
          Greetings, Stranger
        </h1>
        <div className="sm:text-2xl text-xl font-black font-serif">
          <h2>Ease your mind.</h2>
          <h2>Settle into silence,</h2>
          <h2>And simply do nothing.</h2>
        </div>
        {children}
      </div>
    </div>
  );
}
