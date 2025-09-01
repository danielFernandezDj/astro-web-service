"use client";

import { title } from "@/components/primitives";
import { subtitle } from "@/components/primitives";
import TimerCounter from "@/components/home-page/TimerCounter";
import Link from "next/link";
import Image from "next/image";
import {
  RocketIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  CalendarIcon,
  MessageSquareIcon,
  HelpCircleIcon,
} from "lucide-react";

export default function SupportPage() {
  const calendly = "https://calendly.com/daniel-astrowebservice/30min";

  return (
    <main className="flex flex-col gap-34">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-content-center w-xl m-auto lg:w-auto">
        <div className="flex flex-col justify-center lg:text-start gap-6 w-full">
          <h1 className={title()}>
            Expert support. <br /> Fast response time.
          </h1>
          <div className="lg:hidden flex justify-center">
            <Image
              src={"/hero-img-corp.png"}
              alt="Astroweb Support Team"
              className="rounded-2xl border-4 border-gray-100"
              priority
              width={500}
              height={500}
            />
          </div>
          <span className={subtitle({ class: "lg:text-start" })}>
            Get the help you need when you need it. Our dedicated support team
            is here to ensure your restaurant's digital presence runs smoothly,
            so you can focus on what you do best - serving great food.
          </span>

          {/* Button */}
          <Link
            href={calendly}
            target="_blank"
            className="w-fit m-auto lg:m-none border border-primary text-primary hover:bg-secondary py-3 px-6 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex justify-center items-center gap-2">
              <RocketIcon size={18} /> Connect with us {"->"}
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex justify-center">
          <Image
            src={"/hero-img-corp.png"}
            alt="Astroweb Support Team"
            className="rounded-2xl border-4 border-gray-100"
            priority
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* Need Help? */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start md:m-auto md:w-xl lg:w-full">
        <div className="flex flex-col md:text-start gap-6">
          <div>
            <h2 className={title({ size: "md" })}>
              Need Help <span className="text-secondary">?</span>
            </h2>
            <h3 className={subtitle({ size: "md", class: "text-gray-500" })}>
              Here's how you can reach us.
            </h3>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed lg:w-md">
            Whether you have a quick question, need technical assistance, or
            want to discuss upgrading your package, we're here to help. Choose
            the method that works best for you.
          </p>

          {/* Button */}
          <Link
            href={calendly}
            target="_blank"
            className="w-70 m-4 lg:w-fit bg-primary text-white hover:bg-primary/90 py-3 px-6 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex justify-center items-center gap-2">
              Get your free consultation →
            </div>
          </Link>
        </div>

        <div className="grid grid-rows-2 gap-6">
          {/* Call Us Card */}
          <div className="bg-white lg:w-md m-auto p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center bg-accent/20 p-3 mb-4 rounded-xl">
              <PhoneIcon size={24} className="text-accent -mr-9" />
              <h4 className="text-lg self-center m-auto font-semibold text-gray-900">
                Call Us!
              </h4>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-full m-auto">
                <p className="text-gray-600">
                  Our number is{" "}
                  <span className="text-accent font-semibold">
                    (786) 307-4352
                  </span>
                  . We're available 8am to 6pm, Monday to Friday.
                </p>
              </div>
            </div>
          </div>

          {/* Email Us Card */}
          <div className="bg-white lg:w-md m-auto p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center bg-secondary/20 p-3 mb-4 rounded-xl">
              <MailIcon size={24} className="text-secondary -mr-6" />
              <h4 className="text-lg self-center m-auto font-semibold text-gray-900">
                Email Us!
              </h4>
            </div>
            <div className="flex items-start gap-4">
              <div>
                <p className="text-gray-600">
                  Email{" "}
                  <span className="text-secondary font-semibold">
                    support@astrowebservices.com
                  </span>{" "}
                  any time for quick updates or questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Schedule */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className={title({ size: "md", class: "mb-4" })}>
              Business Hours
            </h2>
            <p className="text-gray-600">When you can reach our support team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <ClockIcon size={24} className="text-primary" />
                <h3 className="text-lg font-semibold">Support Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">
                    Monday - Friday
                  </span>
                  <span className="text-primary font-semibold">
                    8:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Saturday</span>
                  <span className="text-gray-500">By appointment</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CalendarIcon size={24} className="text-secondary" />
                <h3 className="text-lg font-semibold">Response Times</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      Phone Calls
                    </span>
                    <span className="text-sm text-secondary font-semibold">
                      Immediate
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      Email Support
                    </span>
                    <span className="text-sm text-primary font-semibold">
                      Within 4 hours
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help? */}
      <section className="bg-white rounded-2xl py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className={title({ size: "md", class: "mb-4" })}>
              How can we help?
            </h2>
            <p className="text-gray-600 text-lg">
              Whether you're a current customer or just getting started, here
              are some alternative options to get the support you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Account Recovery */}
            <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <HelpCircleIcon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900">
                  Account Recovery
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Can't Access Recovery form.
              </p>
            </div>

            {/* Security Issues */}
            <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary/20 p-2 rounded-lg">
                  <HelpCircleIcon size={20} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-gray-900">
                  Security, spam, phishing, and malware
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Report any security issues, spam, phishing or malware.
              </p>
            </div>

            {/* Knowledge Base */}
            <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <HelpCircleIcon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-gray-900">Knowledge Base</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Find answers to the most frequently asked questions and answers.
              </p>
            </div>

            {/* Website Updates */}
            <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MessageSquareIcon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900">Website Updates</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Request changes to your restaurant website and menu updates.
              </p>
            </div>

            {/* Technical Issues */}
            <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary/20 p-2 rounded-lg">
                  <HelpCircleIcon size={20} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-gray-900">
                  Technical Issues
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Having technical difficulties with your website or need help
                with platform integrations.
              </p>
            </div>

            {/* Billing Support */}
            <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <HelpCircleIcon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-gray-900">
                  Billing & Subscriptions
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Questions about your monthly plan, upgrades, or billing
                information.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href={calendly}
              target="_blank"
              className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 py-3 px-8 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <CalendarIcon size={18} />
              Schedule a call with our team
            </Link>
          </div>
        </div>
      </section>

      <TimerCounter />
    </main>
  );
}
