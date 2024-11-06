"use client";

import React, { useState, useEffect } from "react";
import Trail from "./Trail";
import { ibm } from "@/app/utils/fonts";

type Props = {};

const NavLinks = (props: Props) => {
  const [open, setOpen] = useState(false); // Local state to control animation

  useEffect(() => {
    // Set open to true after the component mounts
    const timer = setTimeout(() => {
      setOpen(true);
    }, 100); // Slight delay to allow for rendering (adjust if needed)

    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, []);
  return (
    <ul className={` ${ibm.className} mb-5`}>
      <Trail open={true}>
        <li className="relative flex items-center ">
          <span className="slash transition-transform duration-300">/</span>
          <span className="ml-2 transition-all duration-300 relative hover:text-customPink">
            About
            <span className="underline"></span>
          </span>
        </li>
        <li className="relative flex items-center">
          <span className="slash transition-transform duration-300">/</span>
          <span className="ml-2 transition-all duration-300 relative hover:text-customPink">
            View Client Portfolio
            <span className="underline"></span>
          </span>
        </li>
        <li className="relative flex items-center ">
          <span className="slash transition-transform duration-300">/</span>
          <span className="ml-2 transition-all duration-300 relative hover:text-customPink">
            Getting Started
            <span className="underline"></span>
          </span>
        </li>
        <li className="relative flex items-center">
          <span className="slash transition-transform duration-300">/</span>
          <span className="ml-2 transition-all duration-300 relative hover:text-customPink">
            FAQ
            <span className="underline"></span>
          </span>
        </li>
      </Trail>
    </ul>
  );
};

export default NavLinks;
