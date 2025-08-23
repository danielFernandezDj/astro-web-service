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
        <span className={title({ size: "sm" })}>
          Choose Your <br className="md:hidden" /> Success Plan
        </span>
        <span className={subtitle({ size: "sm" })}>
          Flexible options designed to fit your restaurant's needs and budget.
          All prices are starting points and can be customized.
        </span>
        {/* Savings Notice */}
        <div className="mt-6 mb-8">
          <p className="text-lg font-semibold text-error">
            💰 Save 20% with one-time payment instead of monthly plans!
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mt-8 place-items-end">
        <div className="flex flex-col items-center gap-6 bg-white rounded-2xl p-4 w-full shadow-lg">
          <div className="flex flex-col text-center m-auto md:w-80 gap-2">
            <span className={title({ size: "sm" })}>Launch Package</span>
            <span className={subtitle({ size: "sm" })}>
              Perfect for getting started with professional basics
            </span>
            {/* Price Display */}
            <div className="my-4">
              <div className="flex items-end justify-center">
                <span className="text-lg text-gray-500 mr-1">Starting at</span>
                <span className="text-4xl font-bold text-gray-900">$349</span>
                <span className="text-gray-600 ml-1 mb-1">/month</span>
              </div>
              <div className="mt-1">
                <span className="text-gray-600 text-sm">
                  Or $3,500 one-time payment
                </span>
              </div>
            </div>
          </div>
          <ul className="flex flex-col gap-4">
            <span className="text-gray-600 flex text-start gap-2">
              {" "}
              <CircleCheckIn className="text-success" /> Professional food{" "}
              <br className="lg:hidden" />
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
          <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-lg border-4 border-secondary">
            <div className="flex flex-col m-auto gap-6 text-center w-full">
              <div className="flex flex-col text-center m-auto md:w-80 gap-2">
                <span className={title({ size: "sm" })}>Growth Plan</span>
                <span className={subtitle({ size: "sm" })}>
                  Complete digital transformation with advanced features
                </span>
                {/* Price Display */}
                <div className="my-4">
                  <div className="flex items-end justify-center">
                    <span className="text-lg text-gray-500 mr-1">
                      Starting at
                    </span>
                    <span className="text-4xl font-bold text-gray-900">
                      $599
                    </span>
                    <span className="text-gray-600 ml-1 mb-1">/month</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-gray-600 text-sm">
                      Or $6,000 one-time payment
                    </span>
                  </div>
                </div>
              </div>
              <ul className="flex flex-col gap-4 text-start">
                {" "}
                <span className="text-gray-600 flex gap-2 ">
                  <CircleCheckIn size={24} className="text-success" />
                  Extended photography <br className="lg:hidden" /> session
                </span>
                <span className="text-gray-600 flex gap-2 ">
                  <CircleCheckIn size={24} className="text-success" />
                  Premium menu design <br className="lg:hidden" /> &
                  optimization
                </span>
                <span className="text-gray-600 flex gap-2 ">
                  <CircleCheckIn size={24} className="text-success" />
                  Full website with online <br className="lg:hidden" /> ordering
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
            {/* Price Display */}
            <div className="my-4">
              <div className="flex items-end justify-center">
                <span className="text-lg text-gray-500 mr-1">Starting at</span>
                <span className="text-4xl font-bold text-gray-900">$299</span>
                <span className="text-gray-600 ml-1 mb-1">/month</span>
              </div>
              <div className="mt-1">
                <span className="text-gray-600 text-sm">
                  Ongoing maintenance & support
                </span>
              </div>
            </div>
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

      {/* FAQ Section */}
      <section className="bg-white rounded-2xl py-20 mt-16 w-full">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className={title({ size: "sm", class: "mb-4" })}>
              Frequently Asked Questions
            </span>
            <span className={subtitle({ size: "sm", class: "mb-12" })}>
              Got questions? We've got answers.
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's included in the Launch Package?
                </h3>
                <p className="text-gray-600">
                  Complete website development, professional photography,
                  branding, and all essential features to get your restaurant
                  online.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How does the Growth Plan differ?
                </h3>
                <p className="text-gray-600">
                  Includes everything in Launch plus advanced features like
                  online ordering, enhanced SEO, and 3 months of free
                  maintenance.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do I need Monthly Care?
                </h3>
                <p className="text-gray-600">
                  Monthly Care ensures your website stays updated, secure, and
                  optimized. It's recommended for ongoing performance and
                  support.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I customize my package?
                </h3>
                <p className="text-gray-600">
                  Absolutely! These are starting prices. We'll customize each
                  package based on your specific needs and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
