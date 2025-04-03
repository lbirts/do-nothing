"use client";

import classNames from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  action: () => void;
};

export default function MovementAlert({ action }: Props) {
  const [showAlert, setShowAlert] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = useCallback(() => {
    setShowAlert(true);
    action();
  }, [action]);

  useEffect(() => {
    if (!showAlert) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [showAlert]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  
  return (
    <div className={classNames(
      "absolute transition-all duration-500 left-0 right-0 mx-6",
      showAlert ? "bottom-5 opacity-100" : "-bottom-20 opacity-25"
    )}>
       <div
      className="border border-neutral-800 bg-neutral-900 text-neutral-500 text-sm px-4 py-3 w-fit mx-auto"
    >
      That's definitely something--let's try nothing.
    </div>
    </div>
   
  );
}
