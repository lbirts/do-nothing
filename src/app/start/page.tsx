"use client";

import LowLightText from "@/components/LowLightText";
import MovementAlert from "@/components/MovementAlert";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function Start() {
  const [timer, setTimer] = useState(0);
  const [lowLights, setLowLights] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setTimer((prevTime) => {
        const newTime = prevTime + 1;

        if (newTime >= 7 && !lowLights) {
          setLowLights(true);
        }
        return newTime;
      });
    }, 1000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const resetTimer = () => {
    setTimer(0);
    setLowLights(false);
  }

  return (
    <>
      <LowLightText lowLights={lowLights} />
      <h3 className={classNames("font-serif text-xl sm:text-2xl font-black text-neutral-400 transition-all duration-1000", lowLights ? "opacity-50" : "opacity-100")}>
        You've been idle for {timer} seconds.
      </h3>
      <MovementAlert action={resetTimer} />
    </>
  );
}
