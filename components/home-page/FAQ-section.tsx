"use client";

import { title } from "@/components/primitives";
import { subtitle } from "@/components/primitives";

export default function FAQ() {
  return (
    <main>
      <section className="bg-white rounded-2xl py-20 w-full">
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

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Why subscription instead of a one-time fee?
                </h3>
                <p className="text-gray-600">
                  Our subscription model ensures your restaurant gets continuous 
                  support, regular updates, and ongoing SEO optimization - making 
                  us your growth partner, not just a one-time vendor.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you handle delivery platform integrations?
                </h3>
                <p className="text-gray-600">
                  Yes! We set up and optimize your listings on UberEats, DoorDash, 
                  Yelp, and Google Maps to maximize your restaurant's visibility 
                  across all platforms.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How many revisions are included?
                </h3>
                <p className="text-gray-600">
                  Each package includes one comprehensive revision to ensure your 
                  website perfectly matches your vision. Additional changes can be 
                  handled through your Monthly Care plan.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What if I don't have professional photos or content?
                </h3>
                <p className="text-gray-600">
                  No problem! We specialize in working with restaurants that need 
                  everything from scratch - including professional photography, 
                  menu design, and compelling copy writing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}