"use client"

import React, { useState } from "react";
import { 
  Code, 
  Camera, 
  Menu, 
  MapPin, 
  Clock, 
  Shield, 
  CheckCircle, 
  Star,
  Smartphone,
  Search,
  TrendingUp,
  Users,
  Award,
  Zap,
  Heart,
  Target
} from "lucide-react";

const RestaurantServicePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const calendly = "https://calendly.com/daniel-astrowebservice/30min";

  const coreServices = [
    {
      icon: Camera,
      title: "Photos & Video That Sell",
      description: "A small professional photo/video session to boost your brand",
      features: [
        "Mouth-watering food photography",
        "Social media ready videos",
        "Brand storytelling visuals",
        "Professional equipment & lighting"
      ]
    },
    {
      icon: Menu,
      title: "Menu Redesign & Multi-Platform",
      description: "We redesign your menu and publish it on UberEats, DoorDash, Yelp",
      features: [
        "Eye-catching menu design",
        "Multi-platform optimization",
        "Price psychology implementation",
        "Easy update system"
      ]
    },
    {
      icon: MapPin,
      title: "Google & Tech Setup + Support",
      description: "We optimize Google Maps & Workspace, and give you lifetime support",
      features: [
        "Google Business Profile optimization",
        "Local SEO setup",
        "Lifetime technical support",
        "Regular performance monitoring"
      ]
    }
  ];

  const additionalFeatures = [
    { icon: Smartphone, text: "Mobile-first responsive design" },
    { icon: Zap, text: "Lightning-fast loading speeds" },
    { icon: Search, text: "SEO optimized for local search" },
    { icon: Shield, text: "Secure hosting & SSL certificates" },
    { icon: TrendingUp, text: "Conversion-focused layouts" },
    { icon: Users, text: "Social media integration" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "We discuss your restaurant's unique needs and vision"
    },
    {
      number: "02", 
      title: "Custom Design",
      description: "We create a tailored website that reflects your brand"
    },
    {
      number: "03",
      title: "Development & Setup",
      description: "We build and optimize everything for maximum impact"
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Go live in 2 weeks with ongoing lifetime support"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a restaurant website?",
      answer: "Our typical project timeline is 2 weeks from start to launch. This includes design, development, content creation, and all technical setup. We work efficiently while maintaining the highest quality standards."
    },
    {
      question: "Do you really provide lifetime support?",
      answer: "Absolutely! We believe in long-term partnerships. Once your website is live, you'll have access to our support team for technical issues, small updates, and guidance whenever you need it - no additional cost."
    },
    {
      question: "What makes your restaurant websites different?",
      answer: "We focus on three critical areas most agencies ignore: professional food photography that actually sells, menu psychology that increases orders, and local SEO that gets you found. Plus, we handle all the technical stuff so you can focus on your restaurant."
    },
    {
      question: "Can you help with online ordering and delivery apps?",
      answer: "Yes! We integrate your website with major delivery platforms and optimize your presence on UberEats, DoorDash, and other platforms. We also help set up direct online ordering to save you commission fees."
    },
    {
      question: "What if I'm not tech-savvy?",
      answer: "Perfect! That's exactly who we built this service for. We handle 100% of the technical work and provide you with simple training. You'll be able to update your menu and hours easily, but we're always here to help."
    },
    {
      question: "Do you work with new restaurants?",
      answer: "Absolutely! Whether you're opening your first location or you've been serving the community for decades, we tailor our approach to your specific situation and goals."
    }
  ];

  const testimonialStats = [
    { number: "98%", label: "Customer Satisfaction" },
    { number: "2 Weeks", label: "Average Delivery Time" },
    { number: "24/7", label: "Support Available" },
    { number: "100%", label: "Mobile Optimized" }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-8 h-8 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                  Astro Web Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Restaurant Website Design & Development
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Custom-designed, mobile-friendly websites that showcase your restaurant's unique atmosphere and menu. Turn visitors into hungry customers with our proven approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => window.open(calendly, '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Get Your Free Consultation
                </button>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                >
                  View Our Designs
                </button>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>2-week delivery</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Lifetime support</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>100% satisfaction</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-32 bg-gradient-to-r from-orange-200 to-orange-300 rounded-lg"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 bg-blue-500 rounded w-24"></div>
                    <div className="h-8 bg-orange-500 rounded w-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Makes Our Service Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on the three critical areas that actually drive restaurant success online
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need, Nothing You Don't
            </h2>
            <p className="text-lg text-gray-600">
              We include all the essentials for a successful restaurant website
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-900">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to launch in just 2 weeks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto group-hover:bg-blue-700 transition-colors">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gray-200"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Restaurant Owners Choose Us
            </h2>
            <p className="text-blue-100 text-lg">
              We're committed to delivering exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {testimonialStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Common Questions We Get
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our restaurant website service
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className={`transform transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
                      <div className="w-6 h-6 relative">
                        <div className="absolute inset-0 w-6 h-0.5 bg-gray-400 top-1/2 transform -translate-y-1/2"></div>
                        <div className="absolute inset-0 h-6 w-0.5 bg-gray-400 left-1/2 transform -translate-x-1/2"></div>
                      </div>
                    </div>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              See Our Work in Action
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Beautiful, conversion-focused websites for restaurants like yours
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-gradient-to-br from-orange-200 via-orange-300 to-red-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <div className="bg-white rounded-full p-3">
                          <Target className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Restaurant Project #{item}</h3>
                    <p className="text-gray-600 text-sm mb-4">Modern design with integrated ordering system</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-600 font-medium">View Case Study</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => window.open(calendly, '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg"
            >
              See More Work & Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Restaurant's Online Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the smart restaurant owners who are attracting more customers with professional websites. 
            Get your free consultation today and see how we can help your restaurant thrive online.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <button 
              onClick={() => window.open(calendly, '_blank')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Your Free Consultation
            </button>
            <div className="flex items-center gap-2 text-white">
              <span className="text-lg">or call</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full font-semibold">
                (702) 334-5233
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>30-minute consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>Tailored to your restaurant</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RestaurantServicePage;