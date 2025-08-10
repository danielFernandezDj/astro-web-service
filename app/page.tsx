"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { useMediaQuery } from "react-responsive";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { CircleCheckIn } from "@/components/icons";
import { LocationMap } from "@/components/icons";
import Image from "next/image";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 p-4 -mt-16 bg-background">
      {/* Left */}
      <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-10 md:pl-10">
        <div className="inline-block max-w-xl justify-center">
          <span
            className={title({
              size: isMobile ? "sm" : "lg",
              class: "text-primary",
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
    </main>
  );
}
