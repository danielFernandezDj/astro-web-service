"use client";

import { title } from "@/components/primitives";
import { subtitle } from "@/components/primitives";
import Link from "next/link";
import Image from "next/image";

import { RocketIcon } from "@/components/icons";

export default function PricingPage() {
  const calendly = "https://calendly.com/daniel-astrowebservice/30min";

  return (
    <main className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="grid grid-cols-2 gap-6 place-content-center">
        <div className="flex flex-col justify-center text-start gap-2 w-full">
          <h1 className={title()}>More support.</h1>
          <h1 className={title()}>Less waiting time.</h1>
          <span className={subtitle({class: "text-start"})}>I need to type something here. "asfhudiof <br /> asf as as as fa sf asiduhfan isduhffmaps <br />asduhf apsdf ik vaosdfa pasfasf is.</span>

          {/* Button */}
          <Link
            href={calendly}
            target="_blank"
            className="w-xs border border-primary text-primary hover:bg-secondary py-2.5 px-4 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex justify-center items-center gap-2 ">
              <RocketIcon size={16} /> Connect with us.
            </div>
          </Link>
        </div>

        <div>
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
