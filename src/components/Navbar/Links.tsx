"use client";
import React, { useState } from "react";
//routing
import Link from "next/link";
import paths from "@/app/paths";
//libraries
import { BiChevronDown } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";

type Props = {
  path: string;
  linkName: string;
  linkClickToggle: () => void

};

const Links = ({ linkName, path, linkClickToggle}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  // dropdown links
  const links = [
    { href: paths.aboutPath(), label: "Meet Kelli", id: "menu-item-0" },
    { href: paths.faqPath(), label: "FAQ", id: "menu-item-1" },
    { href: paths.pricingPath(), label: "Package Pricing", id: "menu-item-2" },
  ];

  if (linkName === "About")
    return (
      <div className="relative group">
        <li className="text-2xl sm:text-xl hover:cursor-pointer focus:outline-none">
          <div
            className="flex justify-end items-center hover:text-customTurquoise transition duration-300 sm:group-hover:text-customTurquoise"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span>About</span>
            <BiChevronDown
              className={`ml-1 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              } sm:group-hover:rotate-180`}
            />
          </div>
          <Fade
            triggerOnce
            duration={400}
            className={`sm:block ${isOpen ? "block" : "hidden"}`}
          >
            <div
              className={`
              mt-2 flex flex-col bg-customWhite rounded-md shadow-lg
              sm:absolute sm:right-0 w-[15rem] sm:w-56 sm:mt-0 sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity
              ${isOpen ? "block" : "hidden"} sm:block
            `}
            >
              {" "}
              <div className="py-1 flex w-full items-end flex-col">
                {links.map(({ href, label, id }) => (
                  <Link
                    key={id}
                    href={href}
                    className="w-full text-right px-4 py-2 text-sm text-blackTextFont hover:bg-gray-100  hover:text-customBlue"
                    role="menuitem"
                    id={id}
                    onClick={linkClickToggle}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </Fade>
        </li>
      </div>
    );

  return (
    <li className="relative text-2xl sm:text-xl group hover:cursor-pointer">
      <Link
        className=" hover:text-customTurquoise transition duration-300"
        href={path}
        onClick={linkClickToggle}
      >
        {linkName}
      </Link>
      <span className="absolute left-1/2 -bottom-3 w-[.5rem] h-[.5rem] bg-white rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-1/2"></span>{" "}
    </li>
  );
};

export default Links;
