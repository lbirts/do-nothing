"use client";

import MovementAlert from "@/components/MovementAlert";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import LowLightText from "@/components/LowLightText";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Start() {
  const params = useParams();
  const slug = params.slug as string;
  const initialSecondsRef = useRef(Number(slug) * 60);
  const [timeRemaining, setTimeRemaining] = useState(initialSecondsRef.current);
  const [lowLights, setLowLights] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          const newTime = prevTime - 1;

          if (initialSecondsRef.current - newTime === 6 && !lowLights) {
            setLowLights(true);
          }

          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timeRemaining, lowLights]);

  const resetTimer = () => {
    setTimeRemaining(initialSecondsRef.current);
    setLowLights(false);
  };

  const formatTime = (seconds: number) => {
    if (seconds < 100) {
      return seconds.toString().padStart(3, "0");
    }
    
    return seconds.toLocaleString();
  };

  return timeRemaining === 0 ? (
    <>
      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-center">
        Great job!
      </h3>
      <h2 className="font-bold font-serif text-neutral-500 text-center text-lg sm:text-xl">You&apos;ve been idle for {formatTime(initialSecondsRef.current)} seconds.</h2>
      <Link
        href="/"
        className="decoration-dotted underline font-serif text-white block text-center text-lg sm:text-xl"
      >
        Go back to doing something.
      </Link>
    </>
  ) : (
    <>
      <LowLightText lowLights={lowLights} />
      <h3
        className={classNames(
          "font-serif text-xl sm:text-2xl font-semibold text-neutral-400 transition-all duration-1000",
          lowLights ? "opacity-50" : "opacity-100"
        )}
      >
        Please be idle for {formatTime(timeRemaining)} second
        {timeRemaining === 1 ? "" : "s"}.
      </h3>
      <MovementAlert action={resetTimer} />
    </>
  );
}
