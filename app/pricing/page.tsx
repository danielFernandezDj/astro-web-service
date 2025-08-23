"use client";

import React from 'react';
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import Link from "next/link";
import { button as buttonStyles } from "@heroui/theme";
import { 
  Globe
} from 'lucide-react';
import { CircleCheckIn } from "@/components/icons";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  popular?: boolean;
  premium?: boolean;
  features: PlanFeature[];
  buttonText: string;
}

const PricingPage: React.FC = () => {
  const button = buttonStyles({
    color: "secondary",
    radius: "full",
    class: "px-16 text-primary font-medium",
  });

  const plans: PricingPlan[] = [
    {
      id: 'launch',
      name: 'Launch Package',
      description: 'Perfect for getting started with professional basics',
      buttonText: 'Get Started',
      features: [
        { name: 'Professional food photography session', included: true },
        { name: 'Basic menu design', included: true },
        { name: 'Google My Business setup', included: true },
        { name: 'Basic website design', included: true },
        { name: 'Mobile responsive layout', included: true },
        { name: 'SSL certificate & security', included: true },
        { name: 'Basic SEO setup', included: true },
      ]
    },
    {
      id: 'growth',
      name: 'Growth Plan',
      description: 'Complete digital transformation with advanced features',
      popular: true,
      buttonText: 'Get Started',
      features: [
        { name: 'Extended photography session', included: true },
        { name: 'Premium menu design & optimization', included: true },
        { name: 'Full website with online ordering', included: true },
        { name: 'Multi-platform integration', included: true },
        { name: 'SEO optimization', included: true },
        { name: 'Brand development', included: true },
        { name: 'Advanced analytics setup', included: true },
        { name: '3 months free maintenance', included: true },
      ]
    },
    {
      id: 'monthly-care',
      name: 'Monthly Care',
      description: 'Ongoing updates and support to keep you fresh',
      premium: true,
      buttonText: 'Get Started',
      features: [
        { name: 'Monthly menu updates', included: true },
        { name: 'New photography sessions', included: true },
        { name: 'Performance monitoring', included: true },
        { name: 'Priority support', included: true },
        { name: 'Content creation', included: true },
        { name: 'Security updates & backups', included: true },
        { name: 'SEO monitoring', included: true },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      {/* <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-warning-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-warning-500 to-warning-600 bg-clip-text text-transparent">
                Astro
              </span>
            </div>
          </div>
        </div>
      </div> */}

      <main className="flex flex-col items-center text-center py-8 md:gap-4">
        {/* Header Section */}
        <section className="max-w-4xl mx-auto px-6">
          <span className={title({ size: "sm" })}>
            Choose Your <br className="md:hidden"/> Success Plan
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

        {/* Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mt-8 place-items-end max-w-6xl mx-auto px-6">
          {/* Launch Package */}
          <div className="flex flex-col items-center gap-6 bg-white rounded-2xl p-4 w-full shadow-lg">
            <div className="flex flex-col text-center m-auto md:w-80 gap-2">
              <span className={title({ size: "sm" })}>{plans[0].name}</span>
              <span className={subtitle({ size: "sm" })}>
                {plans[0].description}
              </span>
              
              {/* Price Display */}
              <div className="my-4">
                <div className="flex items-end justify-center">
                  <span className="text-lg text-gray-500 mr-1">Starting at</span>
                  <span className="text-4xl font-bold text-gray-900">
                    $350
                  </span>
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
              {plans[0].features.map((feature, index) => (
                <span key={index} className="text-gray-600 flex text-start gap-2">
                  <CircleCheckIn className="text-success flex-shrink-0 mt-0.5" />
                  {feature.name}
                </span>
              ))}
            </ul>
            
            <Link href={""}>
              <button className={button}>{plans[0].buttonText}</button>
            </Link>
          </div>

          {/* Growth Plan */}
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-center m-auto px-4 py-2 rounded-full border-t border-error">
              <span className={title({ size: "price", class: "text-center text-error" })}>
                Most Popular
              </span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-lg border-4 border-secondary">
              <div className="flex flex-col m-auto gap-6 text-center w-full">
                <div className="flex flex-col text-center m-auto md:w-80 gap-2">
                  <span className={title({ size: "sm" })}>{plans[1].name}</span>
                  <span className={subtitle({ size: "sm" })}>
                    {plans[1].description}
                  </span>
                  
                  {/* Price Display */}
                  <div className="my-4">
                    <div className="flex items-end justify-center">
                      <span className="text-lg text-gray-500 mr-1">Starting at</span>
                      <span className="text-4xl font-bold text-gray-900">
                        $600
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
                  {plans[1].features.map((feature, index) => (
                    <span key={index} className="text-gray-600 flex gap-2">
                      <CircleCheckIn size={24} className="text-success flex-shrink-0 mt-0.5" />
                      {feature.name}
                    </span>
                  ))}
                </ul>
                
                <Link href={""}>
                  <button className={button}>{plans[1].buttonText}</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Monthly Care */}
          <div className="md:col-span-2 flex flex-col md:flex-wrap justify-center items-center w-full gap-6 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col items-center m-auto gap-2">
              <span className={title({ size: "sm" })}>{plans[2].name}</span>
              <span className={subtitle({ size: "sm" })}>
                {plans[2].description}
              </span>
              
              {/* Price Display */}
              <div className="my-4">
                <div className="flex items-end justify-center">
                  <span className="text-lg text-gray-500 mr-1">Starting at</span>
                  <span className="text-4xl font-bold text-gray-900">
                    $299
                  </span>
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
              {plans[2].features.map((feature, index) => (
                <span key={index} className="text-gray-600 flex gap-2">
                  <CircleCheckIn className="text-success flex-shrink-0 mt-0.5" />
                  {feature.name}
                </span>
              ))}
            </ul>
            
            <Link href={""}>
              <button className={button}>{plans[2].buttonText}</button>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-20 mt-16 w-full">
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
                    Complete website development, professional photography, branding, and all essential features to get your restaurant online.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How does the Growth Plan differ?
                  </h3>
                  <p className="text-gray-600">
                    Includes everything in Launch plus advanced features like online ordering, enhanced SEO, and 3 months of free maintenance.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Do I need Monthly Care?
                  </h3>
                  <p className="text-gray-600">
                    Monthly Care ensures your website stays updated, secure, and optimized. It's recommended for ongoing performance and support.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Can I customize my package?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely! These are starting prices. We'll customize each package based on your specific needs and requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PricingPage;