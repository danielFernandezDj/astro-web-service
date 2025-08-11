"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { useMediaQuery } from "react-responsive";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {
  CircleCheckIn,
  CameraIcon,
  OrigamiIcon,
  SettingsIcon,
} from "@/components/icons";
import Image from "next/image";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <main className="m-auto">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 p-4 -mt-16 bg-background">
        {/* Left */}
        <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-10 md:pl-10">
          <div className="inline-block max-w-xl justify-center">
            <span
              className={title({
                size: isMobile ? "sm" : "lg",
                class: "text-primary font-bold",
              })}
            >
              The Digital Face of <br /> Your Restaurant.
            </span>

            <div className={subtitle({ class: "mt-4 hidden md:inline-block" })}>
              Transform your restaurant's online presence with professional
              photography, optimized menus, and a website that converts visitors
              into customers.
            </div>

            <div className="inline-block md:hidden max-w-xl items-center justify-center ">
              <Image
                src={"/hero-img-corp.png"}
                alt="Hero Image"
                className="rounded-lg border-4"
                priority
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-2 font-small ">
            <span className="text-gray-600 flex gap-2">
              {" "}
              <CircleCheckIn className="text-success" /> Professional Website
            </span>
            <span className="text-gray-600 flex gap-2">
              {" "}
              <CircleCheckIn className="text-success" /> Google Optimization
            </span>
            <span className="text-gray-600 flex gap-2">
              {" "}
              <CircleCheckIn className="text-success" /> Lifetime Support
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <Link
              isExternal
              className={`${buttonStyles({
                color: "primary",
                radius: "full",
                size: "lg",
              })} px-8 bg-secondary text-primary`}
              href={siteConfig.links.docs}
            >
              Get Started
            </Link>
            <span className="text-gray-600 flex items-center gap-1">
              <span className="hidden md:inline-block">{"-->"}</span> Get your
              free consultation today
            </span>
          </div>
        </section>

        {/* Right */}
        <section className="hidden lg:flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-xl items-center justify-center">
            <Image
              src={"/hero-img-corp.png"}
              alt="Hero Image"
              className="rounded-lg border-4"
              priority
              width={500}
              height={500}
            />
          </div>
        </section>
      </div>

      {/* Service Overview */}
      <section className="flex justify-evenly gap-6">
        <div className="flex flex-col justify-center items-center gap-2 w-xs">
          <CameraIcon size={46} color="black" />
          <span
            className={title({
              size: "xs",
              class: "text-primary font-bold",
            })}
          >
            Photos & Video That Sell
          </span>
          <span className="text-gray-600 text-center">
            A small professional photo/video session to boost your brand.
          </span>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 w-xs">
          <OrigamiIcon size={46} color="black" />
          <span
            className={title({
              size: "xs",
              class: "text-primary font-bold",
            })}
          >
            Menu Redesign & Multi-Platform
          </span>
          <span className="text-gray-600 text-center">
            We redesign your menu and publish it on UberEats, DoorDash, Yelp.
          </span>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 w-xs">
          <SettingsIcon size={46} color="black" />
          <span
            className={title({
              size: "xs",
              class: "text-primary font-bold",
            })}
          >
            Google & Tech Setup + Support{" "}
          </span>
          <span className="text-gray-600 text-center">
            We optimize Google Maps & Workspace, and give you lifetime support.
          </span>
        </div>
      </section>
    </main>
  );
}
