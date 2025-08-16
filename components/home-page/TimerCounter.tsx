"use client";

import { useState, useEffect } from "react";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";

export default function CTAPlans() {
  // Define the target date
  const targetDate = new Date("2025-08-30T00:00:00");

  // Helper to calculate the time left
  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      } else {
        setTimeLeft(calculateTimeLeft());
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <main className="grid md:grid-cols-2 pb-4 bg-primary rounded-2xl border-red-600">
      <section className="flex flex-col items-center md:text-center gap-4 p-4 md:p-16 w-full rounded-2xl">
        <div className="flex flex-col text-center md:text-center m-auto">
          <span className={title({ size: "md", class: "text-white -mb-2" })}>
            Get a <span className="text-secondary">Free </span>{" "}
            <br className="md:hidden" />
            Custom Video
          </span>
          <span
            className={subtitle({ size: "xl", class: "text-gray-100 text" })}
          >
            when you book before:
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex lg:flex-wrap justify-center gap-4 ">
            <div className="bg-white rounded-xl p-4 shadow-lg min-w-[80px] flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-error">
                {formatNumber(timeLeft.days)}
              </div>
              <div className="text-error text-sm font-medium uppercase tracking-wide">
                Days
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-lg min-w-[80px] flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-error">
                {formatNumber(timeLeft.hours)}
              </div>
              <div className="text-error text-sm font-medium uppercase tracking-wide">
                Hours
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-lg min-w-[80px] flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-error">
                {formatNumber(timeLeft.minutes)}
              </div>
              <div className="text-error text-sm font-medium uppercase tracking-wide">
                Mins
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-lg min-w-[80px] hidden lg:flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-error">
                {formatNumber(timeLeft.seconds)}
              </div>
              <div className="text-error text-sm font-medium uppercase tracking-wide">
                Secs
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="md:hidden mt-2">
            <Image
              src={"/videographer.png"}
              alt="Photographer Image"
              className="rounded-xl border-4 "
              priority
              width={1000}
              height={1000}
            />
          </div>
          {/* Subtext */}
          <div className="lg:w-md m-auto">
            <span className={subtitle({ size: "md", class: "text-gray-100" })}>
              From a powerful website to optimized online visibility – we help
              restaurants grow with clarity, care, and confidence.
            </span>
          </div>
        </div>
        <button
          className={buttonStyles({
            radius: "full",
            variant: "shadow",
            size: "lg",
            color: "secondary",
            class:
              "text-primary m-auto font-bold transition duration-300 hover:-translate-y-1 px-8",
          })}
        >
          Get your free consultation {"->"}
        </button>
      </section>

      <section className="p-4 hidden md:inline-block">
        <Image
          src={"/videographer.png"}
          alt="Photographer Image"
          className="rounded-xl border-4 object-cover w-full h-full"
          width={1500}
          height={1500}
        />
      </section>
    </main>
  );
}
