"use client";

import React, { useState } from "react";
import { PlanEnum } from "../utils/types";
import { timerOptions } from "../utils/timerOptions";
import Link from "../../node_modules/next/link";
import classNames from "classnames";

export default function PlanForm() {
  const [plans, setPlans] = useState<PlanEnum>(PlanEnum.nothing);
  const [timer, setTimer] = useState<number>(0);

  return (
    <div className="flex flex-col gap-4 sm:w-3/4 mt-10">
      <div className="flex flex-col gap-1">
        <label className="font-black text-sm text-neutral-500">What is your plan?</label>
        <select
          value={plans}
          onChange={(e) => setPlans(e.target.value as PlanEnum)}
          className="border-neutral-500 border rounded-sm font-serif py-2 px-2 text-lg font-semibold"
        >
          <option value={PlanEnum.nothing}>Do absolutely nothing.</option>
          <option value={PlanEnum.something}>Do something.</option>
        </select>
        {plans === PlanEnum.something ? <p className="text-sm font-semibold">Sorry, we only do nothing here.</p> : null}
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-black text-sm text-neutral-500">For how long?</label>
        <select
          value={timer}
          onChange={(e) => setTimer(Number(e.target.value))}
          className="border-neutral-500 border rounded-sm font-serif py-2 px-2 text-lg font-semibold"
        >
          {timerOptions.map((time, index) => (
            <option key={index} value={time.value}>
              {time.label}
            </option>
          ))}
        </select>
      </div>

      <Link
        href={timer === 0 ? "/start" : `/start/${timer}`}
        className={classNames("text-black py-2 px-1 rounded-xs font-medium block text-center", plans === PlanEnum.something ? "pointer-events-none bg-neutral-500" : "cursor-pointer bg-white")}
      >
        Start Doing Nothing
      </Link>
    </div>
  );
}
