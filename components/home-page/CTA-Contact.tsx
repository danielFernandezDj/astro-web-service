"use client";

import { button as buttonStyles } from "@heroui/theme";

export default function CTAContact() {
  return (
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
  );
}
