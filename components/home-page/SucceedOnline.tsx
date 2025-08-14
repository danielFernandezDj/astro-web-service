"use state";

import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import { button as buttonStyles } from "@heroui/theme";

export default function RestaurantMarketingHero() {
  const CardData = [
    {
      icon: "📸",
      title: "Professional Food Photography",
      subtitle:
        "High-quality photos that make your dishes irresistible and drive more orders across all platforms.",
    },
    {
      icon: "🍽️",
      title: "Menu Design & Platform Integration",
      subtitle:
        "Optimized menus for UberEats, DoorDash, Yelp, and your website that increase average order value.",
    },
    {
      icon: "🌐",
      title: "Professional Website",
      subtitle:
        "Mobile-friendly restaurant website with online ordering, reservations, and Google integration.",
    },
    {
      icon: "🔧",
      title: "Google Maps & Tech Setup",
      subtitle:
        "Complete Google My Business optimization plus ongoing technical support and maintenance.",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:p-8 mt-16">
      <section className="flex flex-col items-center justify-center md:text-center">
        <span className={title({ size: "sm", class: "font-bold" })}>
          Everything Your Restaurant Needs to Succeed Online
        </span>
        <span
          className={subtitle({
            size: "md",
            class: "text-gray-600 md:max-w-xl",
          })}
        >
          From stunning photography to seamless online ordering, we handle every
          aspect of your digital presence.
        </span>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-cols-min auto-rows-min ">
        {CardData.map((item, index) => (
          <div
            key={index}
            className="grid place-content-start gap-2 p-8 bg-white rounded-2xl shadow-md hover:border border-secondary lg:hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center justify-center rounded-lg w-14 h-14 mb-4 bg-secondary">
              <span className="text-3xl ">{item.icon}</span>
            </div>
            <span className={title({ size: "sm" })}>{item.title}</span>
            <span className={subtitle({ size: "md" })}>{item.subtitle}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
