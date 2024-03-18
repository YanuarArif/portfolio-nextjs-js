"use client";

import { useEffect, useState } from "react";
// components
import Logo from "./header/Logo";
import MobileNav from "./header/MobileNav";
import Nav from "./header/Nav";
import ThemeToggler from "./header/ThemeToggler";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    // remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`${
        header
          ? "py-2 bg-white shadow-lg dark:bg-accent"
          : "py-3 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${
        pathname === "/" && "bg-[#fef9f5]"
      }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underLineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
