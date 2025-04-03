"use client";

import MovementAlert from "@/components/MovementAlert";
import { Usable, use, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import LowLightText from "@/components/LowLightText";

type Param = {
  slug: string;
};
type Props = {
  params: Usable<Param>;
};

export default function Start({ params }: Props) {
  const router = useRouter();
  const { slug } = use(params);
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
    } else if (timeRemaining === 0) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timeRemaining, lowLights]);

  const resetTimer = () => {
    setTimeRemaining(initialSecondsRef.current);
    setLowLights(false);
  };

  return (
    <>
      <LowLightText lowLights={lowLights} />
      <h3
        className={classNames(
          "font-serif text-xl sm:text-2xl font-black text-neutral-400 transition-all duration-1000",
          lowLights ? "opacity-50" : "opacity-100"
        )}
      >
        Please be idle for {timeRemaining} seconds.
      </h3>
      <h2
        className={classNames(
          "font-serif text-lg sm:text-xl font-black text-neutral-600 transition-all duration-500",
          timeRemaining === 0 ? "opacity-100" : "opacity-0"
        )}
      >
        Redirecting you back to do something.
      </h2>
      <MovementAlert action={resetTimer} />
    </>
  );
}
