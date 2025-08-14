"use state";

import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import Link from "next/link";
import { button as buttonStyles } from "@heroui/theme";

import { CircleCheckIn } from "@/components/icons";

export default function ChoosePlan() {
  const button = buttonStyles({
    color: "secondary",
    radius: "full",
    class: "px-16 text-primary font-medium",
  });

  return (
    <main className="flex flex-col items-center text-center py-8 md:gap-4">
      {/* Header */}
      <section>
        <span className={title({ size: "sm" })}>Choose Your Success Plan</span>
        <span className={subtitle({ size: "sm" })}>
          Flexible options designed to fit your restaurant's needs and budget.
        </span>
      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mt-8 place-items-end">
        <div className="flex flex-col items-center gap-6 bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col text-center m-auto md:w-80 gap-2">
            <span className={title({ size: "sm" })}>Launch Package</span>
            <span className={subtitle({ size: "sm" })}>
              Perfect for getting started with professional basics
            </span>
          </div>
          <ul className="flex flex-col gap-4">
            <span className="text-gray-600 flex text-start gap-2">
              {" "}
              <CircleCheckIn className="text-success" /> Professional food <br className="md:hidden"/>
              photography session
            </span>
            <span className="text-gray-600 flex gap-2">
              <CircleCheckIn className="text-success" />
              Basic menu design
            </span>
            <span className="text-gray-600 flex gap-2">
              <CircleCheckIn className="text-success" />
              Google My Business setup
            </span>
            <span className="text-gray-600 flex gap-2">
              <CircleCheckIn className="text-success" />
              Basic website design
            </span>
          </ul>
          <Link href={""}>
            <button className={button}>Get Started</button>
          </Link>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-col items-center m-auto px-4 py-2 rounded-full border-t border-error">
            <span
              className={title({
                size: "price",
                class: "text-center text-error",
              })}
            >
              Most Popular
            </span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg border-4 border-secondary">
            <div className="flex flex-col m-auto gap-6 text-center w-full">
              <div className="flex flex-col text-center m-auto md:w-80 gap-2">
                <span className={title({ size: "sm" })}>Growth Plan</span>
                <span className={subtitle({ size: "sm" })}>
                  Complete digital transformation with advanced features
                </span>
              </div>
              <ul className="flex flex-col gap-4">
                {" "}
                <span className="text-gray-600 flex gap-2 text-start">
                  <CircleCheckIn size={28} className="text-success" />
                  Extended photography session
                </span>
                <span className="text-gray-600 flex gap-2 text-start">
                  <CircleCheckIn size={32} className="text-success" />
                  Premium menu design & optimization
                </span>
                <span className="text-gray-600 flex gap-2 text-start">
                  <CircleCheckIn size={28} className="text-success" />
                  Full website with online ordering
                </span>
                <span className="text-gray-600 flex gap-2">
                  <CircleCheckIn className="text-success" />
                  Multi-platform integration
                </span>
                <span className="text-gray-600 flex gap-2">
                  <CircleCheckIn className="text-success" />
                  SEO optimization
                </span>
                <span className="text-gray-600 flex gap-2">
                  <CircleCheckIn className="text-success" />
                  Brand development
                </span>
              </ul>
              <Link href={""}>
                <button className={button}>Get Started</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col md:flex-wrap justify-center items-center w-full gap-6 bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col items-center m-auto gap-2">
            <span className={title({ size: "sm" })}>Monthly Care</span>
            <span className={subtitle({ size: "sm" })}>
              Ongoing updates and support to keep you fresh
            </span>
          </div>
          <ul className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 md:w-2xl m-auto">
            <span className="text-gray-600 flex gap-2">
              <CircleCheckIn className="text-success" />
              Monthly menu updates
            </span>
            <span className="text-gray-600 flex gap-2">
              <CircleCheckIn className="text-success" />
              New photography sessions
            </span>
            <span className="text-gray-600 flex gap-2">
              <CircleCheckIn className="text-success" />
              Performance monitoring
            </span>
            <span className="text-gray-600 flex gap-2">
              <CircleCheckIn className="text-success" />
              Priority support
            </span>
            <span className="text-gray-600 flex gap-2">
              <CircleCheckIn className="text-success" />
              Content creation
            </span>
          </ul>
          <Link href={""}>
            <button className={button}>Get Started</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
