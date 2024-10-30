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
        <li>/ About</li>
        <li>/ View Client Portfolio</li>
        <li>/ Getting Started</li>
        <li>/ FAQ</li>
      </Trail>
    </ul>
  );
};

export default NavLinks;
