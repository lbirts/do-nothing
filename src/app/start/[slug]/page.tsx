"use client";

import MovementAlert from "@/components/MovementAlert";
import { Usable, use, useEffect, useRef, useState } from "react";

type Param = {
  slug: string;
};
type Props = {
  params: Usable<Param>;
};

export default function Start({ params }: Props) {
  const { slug } = use(params);
  const initialSecondsRef = useRef(Number(slug) * 60);
  const [timeRemaining, setTimeRemaining] = useState(initialSecondsRef.current);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timeRemaining]);

  const resetTimer = () => {
    setTimeRemaining(initialSecondsRef.current);
  }

  return (
    <>
      <h3 className="font-serif text-xl sm:text-2xl font-black text-neutral-400">
        Please be idle for {timeRemaining} seconds.
      </h3>
      <MovementAlert action={resetTimer} />
    </>
  );
}
