"use client";

import { title } from "@/components/primitives";
import ChoosePlan from "@/components/home-page/ChoosePLan";
import TimerCounter from "@/components/home-page/TimerCounter";

export default function Prices() {
  return (
    <main className="flex flex-col gap-24">
      <ChoosePlan />
      <TimerCounter />
    </main>
  );
}
