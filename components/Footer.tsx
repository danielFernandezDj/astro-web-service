import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ChefHat,
  ArrowRight
} from 'lucide-react';

import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Link } from '@heroui/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Stay Updated with Our Latest Offers
            </h3>
            <p className="text-slate-800 mb-6 max-w-2xl mx-auto">
              Get exclusive deals, menu updates, and restaurant news delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                classNames={{
                  input: "bg-white",
                  inputWrapper: "bg-white border-white"
                }}
              />
              <Button 
                className="bg-slate-900 text-white hover:bg-slate-800 px-6"
                endContent={<ArrowRight size={16} />}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <ChefHat className="h-6 w-6 text-slate-900" />
              </div>
              <span className="text-xl font-bold">RestaurantPro</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Elevating your restaurant's digital presence with cutting-edge technology and exceptional service. From online ordering to customer management.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Services</h4>
            <ul className="space-y-2">
              {[
                'Online Ordering System',
                'Menu Design & Platform',
                'Professional Photography', 
                'Digital Marketing',
                'Website Development',
                'Customer Management',
                'Payment Processing',
                'Analytics & Reports'
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="text-slate-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Company</h4>
            <ul className="space-y-2">
              {[
                'About Us',
                'Our Story',
                'Careers',
                'Press Kit',
                'Partners',
                'Success Stories',
                'Blog',
                'Help Center'
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="text-slate-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-sm">
                  123 Business Ave<br />
                  Las Vegas, NV 89101
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <Link 
                  href="tel:+1234567890" 
                  className="text-slate-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  (123) 456-7890
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <Link 
                  href="mailto:info@restaurantpro.com" 
                  className="text-slate-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  info@restaurantpro.com
                </Link>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 10:00 AM - 4:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-slate-400 text-sm text-center sm:text-left">
              © 2025 RestaurantPro. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-6 text-sm">
              <Link href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;