"use client";

import { useMediaQuery } from "react-responsive";

import {
  Code,
  Menu,
  Search,
  Camera,
  Share2,
  Shield,
  TrendingUp,
  Truck,
  Headphones,
} from "lucide-react";

const iconMap = {
  code: Code,
  menu: Menu,
  seo: Search,
  camera: Camera,
  social: Share2,
  shield: Shield,
  chart: TrendingUp,
  delivery: Truck,
  support: Headphones,
};

type Service = {
  id: string;
  icon: keyof typeof iconMap;
  title: string;
  summary: string;
  slug: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
};

type ServiceCardProps = {
  service: Service;
  bgColor?: string;
};

const ServiceCard = ({ service, bgColor = "bg-gray-50" }: ServiceCardProps) => {
  const Icon = iconMap[service.icon] || Code;

  return (
    <div
      className={`${bgColor} flex flex-col justify-between rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
          {service.title}
        </h3>
      </div>

      <p className="text-gray-600 leading-relaxed text-sm mb-4">
        {service.summary}
      </p>

      <ul className="space-y-2 mb-6">
        {service.bullets.map((bullet, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm text-gray-600"
          >
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <button className="w-full bg-gradient-to-r relative bottom- border-2-4 from-blue-600 to-purple-600 text-white py-2.5 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm">
        {service.ctaLabel}
      </button>
    </div>
  );
};

export default function AstroWebServicesShowcase() {
  const services: Service[] = [
    {
      id: "restaurant-web-design",
      title: "Restaurant Website Design & Development",
      slug: "restaurant-website-design",
      icon: "code",
      summary:
        "Custom-designed, mobile-friendly websites that showcase your restaurant's unique atmosphere and menu.",
      bullets: [
        "Responsive, mobile-ready designs",
        "Fast loading & SEO-optimized",
        "Integrated with delivery platforms",
      ],
      ctaLabel: "View Designs",
      ctaHref: "/services/restaurant-web-design",
    },
    {
      id: "menu-redesign",
      title: "Menu Redesign & Optimization",
      slug: "menu-redesign",
      icon: "menu",
      summary:
        "Visually stunning, easy-to-read menus that entice customers and increase average order value.",
      bullets: [
        "High-quality menu photography",
        "Easy-to-update digital menus",
        "Optimized for upselling",
      ],
      ctaLabel: "See Menu Work",
      ctaHref: "/services/menu-redesign",
    },
    {
      id: "restaurant-seo",
      title: "Restaurant SEO",
      slug: "restaurant-seo",
      icon: "seo",
      summary:
        "Local SEO strategies to get your restaurant found on Google and maps by hungry customers nearby.",
      bullets: [
        "Local search optimization",
        "Google Business Profile setup",
        "On-page SEO for menus & specials",
      ],
      ctaLabel: "Boost Visibility",
      ctaHref: "/services/restaurant-seo",
    },
    {
      id: "photo-video",
      title: "Photography & Video Production",
      slug: "photo-video",
      icon: "camera",
      summary:
        "Professional photos and videos that make your food irresistible and your space inviting.",
      bullets: [
        "Food styling & photography",
        "Short promo videos for social media",
        "Virtual tours of your restaurant",
      ],
      ctaLabel: "See Media",
      ctaHref: "/services/photo-video",
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      slug: "social-media",
      icon: "social",
      summary:
        "Engage your customers and grow your following with consistent, on-brand social media content.",
      bullets: [
        "Content creation & scheduling",
        "Targeted ad campaigns",
        "Social community management",
      ],
      ctaLabel: "Grow Social",
      ctaHref: "/services/social-media",
    },
    {
      id: "online-reputation",
      title: "Online Reputation Management",
      slug: "online-reputation",
      icon: "shield",
      summary:
        "Protect and grow your restaurant's reputation with proactive review management and engagement.",
      bullets: [
        "Monitor reviews on major platforms",
        "Respond to customers promptly",
        "Encourage positive feedback",
      ],
      ctaLabel: "Manage Reviews",
      ctaHref: "/services/online-reputation",
    },
    {
      id: "conversion-optimization",
      title: "Conversion Rate Optimization (CRO)",
      slug: "conversion-optimization",
      icon: "chart",
      summary:
        "Turn website visitors into paying customers with optimized layouts, CTAs, and online ordering flows.",
      bullets: [
        "A/B testing for menu placement",
        "Optimized reservation forms",
        "Streamlined checkout process",
      ],
      ctaLabel: "Increase Orders",
      ctaHref: "/services/conversion-optimization",
    },
    {
      id: "delivery-platform-integration",
      title: "Delivery Platform Integration",
      slug: "delivery-integration",
      icon: "delivery",
      summary:
        "Seamless integration with UberEats, DoorDash, and Grubhub to boost your online orders.",
      bullets: [
        "Embedded ordering buttons",
        "Menu sync with delivery apps",
        "Tracking & analytics setup",
      ],
      ctaLabel: "Integrate Now",
      ctaHref: "/services/delivery-integration",
    },
    {
      id: "monthly-care-plan",
      title: "Monthly Care & Maintenance Plan",
      slug: "monthly-care-plan",
      icon: "support",
      summary:
        "Keep your website fresh and running smoothly with regular updates, security checks, and support.",
      bullets: [
        "Unlimited small updates",
        "Monthly backups & security scans",
        "Ongoing technical support",
      ],
      ctaLabel: "Get Care Plan",
      ctaHref: "/services/monthly-care",
    },
  ];

  const cardColors = [
    "bg-blue-50",
    "bg-purple-50",
    "bg-green-50",
    "bg-orange-50",
    "bg-pink-50",
    "bg-indigo-50",
    "bg-yellow-50",
    "bg-teal-50",
    "bg-red-50",
  ];

  const isSm = useMediaQuery({ maxWidth: 639 });
  const isMd = useMediaQuery({ minWidth: 640, maxWidth: 1023 });
  const isLg = useMediaQuery({ minWidth: 1024 });

  let visibleServices = services;
  if (isSm) {
    visibleServices = services.slice(0, 4);
  } else if (isMd) {
    visibleServices = services.slice(0, 6);
  } 

  return (
    <div className="min-h-screen bg-white rounded-2xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Digital Web Services
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Astro Web Services specializes in creating beautiful, functional,
            and conversion-focused websites for restaurants. From menu redesigns
            to SEO and ongoing maintenance, we help your restaurant stand out
            online and keep customers coming back.
          </p>
        </div>

        {/* Services Grid - 4 cards on mobile, 9 cards on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              bgColor={cardColors[index % cardColors.length]}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <span className="font-semibold text-lg">
              Start Your Project Today
            </span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
