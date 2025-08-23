"use client";

import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import Link from "next/link";

export default function CTAPlans() {
  const calendly = "https://calendly.com/daniel-astrowebservice/30min";

  return (
    <main>
      <section className="flex flex-col md:flex-row md:items-center md:justify-evenly gap-4 p-4 bg-gradient-to-b md:bg-gradient-to-r from-secondary from-40 md:from-70% to-transparent text-center rounded-2xl">
        <div className="p-2">
          <span className={title({ size: "sm" })}>
            Choose a Plan that's right for you
          </span>
          <span className={subtitle({ size: "md" })}>
            Find your perfect balance of collaboration, performance, and support
            with a 'US'.
          </span>
        </div>
        <Link href={calendly} target="_blank">
          <button
            className={buttonStyles({
              radius: "full",
              variant: "shadow",
              size: "lg",
              color: "primary",
              class:
                "text-white font-bold transition duration-300 hover:-translate-y-1 px-8",
            })}
          >
            Find pricing {"->"}
          </button>
        </Link>
      </section>
    </main>
  );
}
