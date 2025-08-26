"use client";

import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import { button as buttonStyles } from "@heroui/theme";

export default function RestaurantMarketingHero() {
  const ResultsList = [
    {
      title: "3x ",
      subtitle: "Increase in Online Orders",
    },
    {
      title: "98% ",
      subtitle: "Client Satisfaction",
    },
    {
      title: "24/7 ",
      subtitle: "Online Presence",
    },
  ];

  const ListAnimation = "transition duration-300 hover:translate-x-3";

  return (
    <main className="flex flex-col items-center justify-center gap-8 lg:p-8 mt-16">
      <section className="md:text-center w-full p-4 py-8 lg:p-16 bg-primary text-white rounded-2xl">
        {/* Header */}
        <div className="flex flex-col md:items-center justify-center gap-4 m-auto">
          <div className="lg:w-4xl">
            <span className={title({ size: "sm" })}>
              Most restaurants lose customers because their photos don't reflect
              their <span className="text-secondary">food's quality</span>.
            </span>
          </div>
          <div className="lg:w-2xl">
            <span className={subtitle({ size: "md", class: "text-white" })}>
              With Astro Web Services, your restaurant will stand out online in
              less than 2 weeks – with photos that spark appetite, a menu that
              generates orders, and a web presence customers can trust.
            </span>
          </div>
          <span
            className={buttonStyles({
              radius: "full",
              variant: "shadow",
              size: "lg",
              color: "secondary",
              class: "text-primary text-2xl font-bold animate-bounce mt-4",
            })}
          >
            ↓
          </span>
        </div>
      </section>

      <section className="flex flex-col w-full gap-4 lg:p-8 mt-4">
        <div className="flex flex-col items-center justify-center gap-2 m-auto md:w-md">
          <span className={title({ size: "sm", class: "font-bold" })}>
            Why Select Us?
          </span>
          <span className={subtitle({ size: "sm", class: "text-center" })}>
            We help restaurants create a strong online presence that converts
            visitors into loyal customers.
          </span>
        </div>

        <div className="grid grid-col-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-8">
          {/* Common Restaurant Struggles */}
          <div className="flex flex-col items-start justify-start gap-10 p-8 bg-white rounded-3xl shadow-xl border-l-5 border-error">
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-red-500 py-2.5 px-3.5 text-2xl">
                📉
              </span>
              <span className={title({ size: "cardTitle" })}>
                Common Restaurant Struggles
              </span>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-2 p-2 w-full relative rounded-xl shadow-lg">
              <div className="w-auto h-auto">
                <Image
                  src={"/z-1.png"}
                  alt="Hero Image"
                  className="rounded-lg h-50 object-cover"
                  priority
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-auto h-auto  ">
                <Image
                  src={"/z-2.png"}
                  alt="Hero Image"
                  className="rounded-lg h-50 object-cover"
                  priority
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-error">
                ❌ Poor quality photos that don't attract customers
              </div>
              <hr className="text-gray-200" />
              <div className="text-error">
                ❌ Low online orders and website traffic
              </div>
              <hr className="text-gray-200" />
              <div className="text-error">❌ Invisible online presence</div>
              <hr className="text-gray-200" />
              <div className="text-error">
                ❌ Menus that don't work on mobile
              </div>
              <hr className="text-gray-200" />
              <div className="text-error">
                ❌ No technical support when needed
              </div>
            </div>
          </div>

          {/* How We Help You Succeed */}
          <div className="flex flex-col items-start justify-start gap-10 p-8 bg-white rounded-3xl shadow-xl border-l-5 border-green-400">
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-green-400 py-2.5 px-3.5 text-2xl">
                🚀
              </span>
              <span className={title({ size: "cardTitle" })}>
                How We Help You Succeed
              </span>
            </div>
            <div className="flex justify-between gap-2 p-2 w-full relative rounded-xl shadow-lg">
              <div className="w-auto h-auto">
                <Image
                  src={"/c-1.jpg"}
                  alt="Hero Image"
                  className="rounded-lg h-50 object-cover"
                  priority
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-auto h-auto hidden md:flex">
                <Image
                  src={"/c-3.jpg"}
                  alt="Hero Image"
                  className="rounded-lg h-50 object-cover"
                  priority
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className={`text-success py-3 ${ListAnimation}`}>
                ✅ We take care of your restaurant with high-quality photos
              </div>
              <hr className="text-gray-200" />
              <div className={`text-success py-3 ${ListAnimation}`}>
                ✅ We create a menu that works on all platforms
              </div>
              <hr className="text-gray-200" />
              <div className={`text-success py-3 ${ListAnimation}`}>
                ✅ We make sure your restaurant is always online and visible
              </div>
              <hr className="text-gray-200" />
              <div className={`text-success py-3 ${ListAnimation}`}>
                ✅ We help you increase online orders and website traffic
              </div>
              <hr className="text-gray-200" />
              <div className={`text-success py-3 ${ListAnimation}`}>
                ✅ We provide 24/7 support to ensure your success
              </div>
              <hr className="text-gray-200" />
              <div className={`text-success py-3 ${ListAnimation}`}>
                ✅ We create websites that convert visitors into customers
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center text-center rounded-2xl p-8 bg-linear-to-t from-secondary to-transparent to-85%">
        <div className="md:w-md lg:w-1/2 mb-8 lg:mb-0 lg:text-start">
          <span className={title({ size: "sm", class: "font-bold" })}>
            Results That Speak For Themselves
          </span>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-rows-1 gap-8">
          {ResultsList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 rounded-xl bg-primary"
            >
              <span className={title({ size: "md", class: "text-secondary" })}>
                {item.title}
              </span>
              <span
                className={subtitle({
                  size: "lg",
                  class: "text-secondary text-center",
                })}
              >
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
