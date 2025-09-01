"use client";
import { JSX, SVGProps, useState } from "react";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Accordion, AccordionItem } from "@heroui/react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import NextLink from "next/link";
import clsx from "clsx";
import { Snippet } from "@heroui/snippet";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo, RocketIcon } from "@/components/icons";

import {
  Code2, // Development
  ClipboardList, // Menu Redesign
  Search, // SEO
  Camera, // Photography & Video
  Megaphone, // Marketing
  Star, // Reputation Management
  BarChart3, // Conversion Rate Optimization
  Truck, // Delivery Platform Integration
  Wrench,
  Icon, // Maintenance Plan
} from "lucide-react";

export const Navbar = () => {
  const calendly = "https://calendly.com/daniel-astrowebservice/30min";
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false)

  // Services dropdown items
  const serviceItems = [
    {
      key: "Development",
      label: "Restaurant Website Design",
      href: "/services/Web-Design-Development",
      icon: <Code2 size={16} />,
    },
    {
      key: "Optimization",
      label: "Menu Redesign",
      href: "/services/seo",
      icon: <ClipboardList size={16} />,
    },
    {
      key: "SEO",
      label: "Restaurant SEO",
      href: "/services/maintenance",
      icon: <Search size={16} />,
    },
    {
      key: "Production",
      label: "Photography & Video",
      href: "/services/consulting",
      icon: <Camera size={16} />,
    },
    {
      key: "Marketing",
      label: "Social Media Marketing",
      href: "/services/consulting",
      icon: <Megaphone size={16} />,
    },
    {
      key: "Online",
      label: "Reputation Management",
      href: "/services/consulting",
      icon: <Star size={16} />,
    },
    {
      key: "CRO",
      label: "Conversion Rate Optimization",
      href: "/services/consulting",
      icon: <BarChart3 size={16} />,
    },
    {
      key: "Delivery",
      label: "Delivery Platform Integration",
      href: "/services/consulting",
      icon: <Truck size={16} />,
    },
    {
      key: "Maintenance Plan",
      label: "Monthly Care Plan",
      href: "/services/consulting",
      icon: <Wrench size={16} />,
    },
  ];

   // Support dropdown items
  // const supportItems = [
  //   {
  //     key: "Development",
  //     label: "Restaurant Website Design",
  //     href: "/services/Web-Design-Development",
  //     icon: <Code2 size={16} />,
  //   },
  //   {
  //     key: "Optimization",
  //     label: "Menu Redesign",
  //     href: "/services/seo",
  //     icon: <ClipboardList size={16} />,
  //   },
  //   {
  //     key: "SEO",
  //     label: "Restaurant SEO",
  //     href: "/services/maintenance",
  //     icon: <Search size={16} />,
  //   },
  //   {
  //     key: "Production",
  //     label: "Photography & Video",
  //     href: "/services/consulting",
  //     icon: <Camera size={16} />,
  //   },
  // ];

  // Services dropdown items Colors
  // const cardColors = [
  //   "bg-blue-50",
  //   "bg-purple-50",
  //   "bg-green-50",
  //   "bg-orange-50",
  //   "bg-pink-50",
  //   "bg-indigo-50",
  //   "bg-yellow-50",
  //   "bg-teal-50",
  //   "bg-red-50",
  // ];

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={menuOpen}
      onMenuOpenChange={setMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo size={130} />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => {
            // Special handling for Services item
            // if (item.label === "Services") {
            //   return (
            //     <NavbarItem key={item.href}>
            //       <div
            //         onMouseEnter={() => setServicesOpen(true)}
            //         onMouseLeave={() => setServicesOpen(false)}
            //       >
            //         <Dropdown
            //           isOpen={servicesOpen}
            //           onOpenChange={setServicesOpen}
            //           trigger="press" // keeps click support; hover is controlled via isOpen
            //         >
            //           <DropdownTrigger>
            //             <Button
            //               className={clsx(
            //                 linkStyles({ color: "foreground" }),
            //                 "data-[active=true]:text-primary data-[active=true]:font-medium bg-transparent px-1 h-auto font-light rounded-lg"
            //               )}
            //               color="secondary"
            //               variant="light"
            //               endContent={
            //                 <svg
            //                   fill="none"
            //                   height="16"
            //                   viewBox="0 0 24 24"
            //                   width="16"
            //                   xmlns="http://www.w3.org/2000/svg"
            //                 >
            //                   <path
            //                     d="m6 9 6 6 6-6"
            //                     stroke="currentColor"
            //                     strokeLinecap="round"
            //                     strokeLinejoin="round"
            //                     strokeWidth="2"
            //                   />
            //                 </svg>
            //               }
            //               onFocus={() => setServicesOpen(true)}
            //               onBlur={() => setServicesOpen(false)}
            //             >
            //               {item.label}
            //             </Button>
            //           </DropdownTrigger>
            //           <DropdownMenu aria-label="Services menu">
            //             {serviceItems.map((service, index) => (
            //               <DropdownItem
            //                 key={service.key}
            //                 href={service.href}
            //                 startContent={service.icon}
            //                 className={clsx("p-3", cardColors[index])}
            //               >
            //                 {service.label}
            //               </DropdownItem>
            //             ))}
            //           </DropdownMenu>
            //         </Dropdown>
            //       </div>
            //     </NavbarItem>
            //   );
            // }

            // {
            //   siteConfig.navItems.map((item) => {
            //     // Special handling for Support item
            //     if (item.label === "Support") {
            //       return (
            //         <NavbarItem key={item.href}>
            //           <div
            //             onMouseEnter={() => setSupportOpen(true)}
            //             onMouseLeave={() => setSupportOpen(false)}
            //           >
            //             <Dropdown
            //               isOpen={supportOpen}
            //               onOpenChange={setSupportOpen}
            //               trigger="press" // keeps click support; hover is controlled via isOpen
            //             >
            //               <DropdownTrigger>
            //                 <Button
            //                   className={clsx(
            //                     linkStyles({ color: "foreground" }),
            //                     "data-[active=true]:text-primary data-[active=true]:font-medium bg-transparent px-1 h-auto font-light rounded-lg"
            //                   )}
            //                   color="secondary"
            //                   variant="light"
            //                   endContent={
            //                     <svg
            //                       fill="none"
            //                       height="16"
            //                       viewBox="0 0 24 24"
            //                       width="16"
            //                       xmlns="http://www.w3.org/2000/svg"
            //                     >
            //                       <path
            //                         d="m6 9 6 6 6-6"
            //                         stroke="currentColor"
            //                         strokeLinecap="round"
            //                         strokeLinejoin="round"
            //                         strokeWidth="2"
            //                       />
            //                     </svg>
            //                   }
            //                   onFocus={() => setSupportOpen(true)}
            //                   onBlur={() => setSupportOpen(false)}
            //                 >
            //                   {item.label}
            //                 </Button>
            //               </DropdownTrigger>
            //               <DropdownMenu aria-label="Support menu">
            //                 {supportItems.map((support, index) => (
            //                   <DropdownItem
            //                     key={support.key}
            //                     href={support.href}
            //                     startContent={support.icon}
            //                     className={clsx("p-3", cardColors[index])}
            //                   >
            //                     {support.label}
            //                   </DropdownItem>
            //                 ))}
            //               </DropdownMenu>
            //             </Dropdown>
            //           </div>
            //         </NavbarItem>
            //       );
            //     }
            //   });
            // }
            
            // Regular nav items
            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full "
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2"></NavbarItem>
        <div className="flex justify-center items-center">
          <p className="text-sm text-primary -mr-2">1+</p>
          <Snippet symbol="" className="bg-transparent">
            <p className="text-sm text-primary">(702) 334-523</p>
          </Snippet>
          <span className="border-3 border-gray-300 rounded-2xl" />
        </div>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal bg-secondary text-default-600 rounded-full"
            href={calendly}
            startContent={<RocketIcon size={16} />}
          >
            Get Started
          </Button>
        </NavbarItem>

        <NavbarItem className="hidden md:flex lg:hidden">
          <NavbarMenuToggle />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="md:hidden basis-1 pl-4 text-black"
        justify="end"
      >
        <Snippet symbol="" className="bg-transparent -m-4">
          <p className="md:hidden text-xs text-primary hover:cursor-pointer hover:underline decoration-solid">
            1+(702) 334-523
          </p>
        </Snippet>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => {
            // Handle Services dropdown in mobile menu
            if (item.label === "Services") {
              return (
                <div key={`${item}-${index}`} className="flex flex-col">
                  <Accordion>
                    <AccordionItem
                      key="1"
                      aria-label="Accordion 1"
                      title="Services"
                      className="flex flex-col -m-2"
                    >
                      {/* Sub-menu items for mobile */}
                      {serviceItems.map((service, index) => (
                        <NavbarMenuItem
                          key={service.key}
                          className="ml-4 -mt-2"
                        >
                          <Link
                            href={service.href}
                            size="md"
                            className="text-primary border-b border-gray-300 mb-4 gap-2 py-1 w-full rounded-lg px-2"
                            onClick={() => setMenuOpen(false)}
                          >
                            {service.icon}
                            {service.label}
                          </Link>
                        </NavbarMenuItem>
                      ))}
                    </AccordionItem>
                  </Accordion>
                </div>
              );
            }

            return (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  href={item.href}
                  size="lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </div>
        <Button
          isExternal
          as={Link}
          className="md:hidden text-md text-black font-normal px-10 mt-4 bg-secondary rounded-2xl"
          href={calendly}
          startContent={<RocketIcon size={16} />}
        >
          Get Started
        </Button>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
