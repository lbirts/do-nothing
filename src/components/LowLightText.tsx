"use client";

import classNames from "../../node_modules/classnames/index";

interface Props {
  lowLights: boolean
}

export default function LowLightText({ lowLights }: Props) {
  return (
    <>
      <h1 className={classNames(lowLights ? "opacity-50" : "opacity-100", "transition-all duration-1000 font-serif text-xl sm:text-2xl font-black text-neutral-400")}>
        Greetings, Stranger
      </h1>
      <div className={classNames(lowLights ? "opacity-50" : "opacity-100", "transition-all duration-1000 sm:text-2xl text-xl font-black font-serif")}>
        <h2>Ease your mind.</h2>
        <h2>Settle into silence,</h2>
        <h2>And simply do nothing.</h2>
      </div>
    </>
  );
}
