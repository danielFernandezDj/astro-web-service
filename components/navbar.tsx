"use client";
import { useState } from "react";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo, RocketIcon } from "@/components/icons";

export const Navbar = () => {
  const calendly = "https://calendly.com/daniel-astrowebservice/30min";
  const [menuOpen, setMenuOpen] = useState(false);

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
          {siteConfig.navItems.map((item) => (
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
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full "
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2"></NavbarItem>
        <Link className="text-sm text-primary hover:cursor-pointer hover:underline decoration-solid">
          1+(702) 334-523
        </Link>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
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
        <Link className="md:hidden text-xs text-primary hover:cursor-pointer hover:underline decoration-solid">
          1+(702) 334-523
        </Link>
        {/* <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link> */}
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                href={item.href}
                size="lg"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
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
