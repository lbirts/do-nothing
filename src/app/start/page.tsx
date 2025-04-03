"use client";

import LowLightText from "@/components/LowLightText";
import MovementAlert from "@/components/MovementAlert";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function Start() {
  const [timer, setTimer] = useState(0);
  const [lowLights, setLowLights] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
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
  }, [lowLights]);

  const resetTimer = () => {
    setTimer(0);
    setLowLights(false);
  }

  const formatTime = (seconds: number) => {
    if (seconds < 100) {
      return seconds.toString().padStart(3, "0");
    }
    
    return seconds.toLocaleString();
  };

  return (
    <>
      <LowLightText lowLights={lowLights} />
      <h3 className={classNames("font-serif text-xl sm:text-2xl font-black text-neutral-400 transition-all duration-1000", lowLights ? "opacity-50" : "opacity-100")}>
        You&apos;ve been idle for {formatTime(timer)} second{timer === 1 ? "" : "s"}.
      </h3>
      <MovementAlert action={resetTimer} />
    </>
  );
}
