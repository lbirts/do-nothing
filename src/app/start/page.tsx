"use client";

import MovementAlert from "@/components/MovementAlert";
import { useEffect, useState } from "react";

export default function Start() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  const resetTimer = () => {
    setTimer(0);
  }

  return (
    <>
      <h3 className="font-serif text-xl sm:text-2xl font-black text-neutral-400">
        You've been idle for {timer} seconds.
      </h3>
      <MovementAlert action={resetTimer} />
    </>
  );
}
