"use client";

import { button as buttonStyles } from "@heroui/theme";
import Link from "next/link";

export default function CTAContact() {
  const calendly = "https://calendly.com/daniel-astrowebservice/30min";

  return (
    <main>
      <Link href={calendly} target="_blank">
        <button
          className={buttonStyles({
            radius: "full",
            variant: "shadow",
            size: "lg",
            color: "secondary",
            class:
              "text-primary font-bold transition duration-300 hover:-translate-y-1 px-8",
          })}
        >
          Get your free consultation {"->"}
        </button>
      </Link>
    </main>
  );
}
