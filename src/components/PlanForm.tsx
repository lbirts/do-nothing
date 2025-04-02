"use client";

import React, { useState } from "react";
import { PlanEnum } from "../utils/types";
import { timerOptions } from "../utils/timerOptions";

interface Props {}

export default function PlanForm({}: Props) {
  const [plans, setPlans] = useState<PlanEnum>(PlanEnum.nothing);
  const [timer, setTimer] = useState<number>(0);
  const submitPlan = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-4 sm:w-3/4 mt-10" onSubmit={submitPlan}>
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

      <button
        type="submit"
        disabled={plans === PlanEnum.something}
        className="bg-white text-black py-2 px-1 rounded-xs font-medium disabled:bg-neutral-500"
      >
        Start Doing Nothing
      </button>
    </form>
  );
}
