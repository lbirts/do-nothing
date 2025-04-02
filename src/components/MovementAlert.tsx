"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";

type Props = {
  action: () => void;
};

export default function MovementAlert({ action }: Props) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  }, [showAlert]);

  useEffect(() => {
    const handleMouseMove = () => {
      setShowAlert(true);
      action();
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={classNames(
        "absolute transition-all duration-500 border border-neutral-800 bg-neutral-900 text-neutral-500 text-sm px-4 py-3",
        showAlert ? "bottom-5 opacity-100" : "-bottom-20 opacity-25"
      )}
    >
      That's definitely something--let's try nothing.
    </div>
  );
}
