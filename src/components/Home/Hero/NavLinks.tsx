"use client";
import React, { useState, useEffect } from "react";
//components
import Trail from "./Trail";
//fonts
import { ibm } from "@/app/utils/fonts";
//routing
import paths from "@/app/paths";
import Link from "next/link";
//css
import "./Home.css"

const NavLinks = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // set open to true after the component mounts
    const timer = setTimeout(() => {
      setOpen(true);
    }, 20); // slight delay to allow for rendering (adjust if needed)

    return () => clearTimeout(timer); // clean up timeout on unmount
  }, []);

  //links
  const navItems = [
    { label: "About", path: paths.aboutPath() },
    { label: "Pricing", path: paths.pricingPath() },
    { label: "FAQ", path: paths.faqPath() },
    { label: "View Client Portfolio", path: paths.portfolioPath() },
    { label: "Getting Started", path: paths.getStartedPath() },
  ];
  return (
    <ul className={` ${ibm.className} mb-5 `}>
      <Trail open={open}>
        {navItems.map(({ label, path }, index) => (
          <li
            key={index}
            className="relative flex items-center text-blackTextFont text-2xl"
          >
            <span className="slash transition-transform duration-300">/</span>
            <Link
              href={path}
              className="ml-2 transition-all duration-300 relative hover:text-customPink"
              aria-label={`link to ${label}`}
            >
              {label}
              <span className="underline"></span>
            </Link>
          </li>
        ))}
      </Trail>
    </ul>
  );
};

export default NavLinks;
