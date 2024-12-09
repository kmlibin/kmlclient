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
        <li className="text-2xl md:text-xl hover:cursor-pointer focus:outline-none">
          <div
            className="flex justify-end items-center hover:text-customTurquoise transition duration-300 md:group-hover:text-customTurquoise"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span>About</span>
            <BiChevronDown
              className={`ml-1 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              } md:group-hover:rotate-180`}
            />
          </div>
          <Fade
            triggerOnce
            duration={400}
            className={`md:block ${isOpen ? "block" : "hidden"}`}
          >
            <div
              className={`
              mt-2 flex flex-col bg-customWhite rounded-md shadow-lg
              md:absolute md:right-0 w-[15rem] md:w-56 md:mt-0 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity
              ${isOpen ? "block" : "hidden"} md:block
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
    <li className="relative text-2xl md:text-xl group hover:cursor-pointer">
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
