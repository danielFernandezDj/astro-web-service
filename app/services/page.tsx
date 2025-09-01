"use client";

import { title } from "@/components/primitives";
import DigitalShowcase from "@/components/home-page/DigitalShowcase";
import TimerCounter from "@/components/home-page/TimerCounter";
import FAQ from "@/components/home-page/FAQ-section";

export default function Services() {
  return (
    <main className="flex flex-col gap-24">
      <DigitalShowcase />
      <FAQ />
      <TimerCounter />
    </main>
  );
}
