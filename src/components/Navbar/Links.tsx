"use client";
import React from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

import paths from "@/app/paths";

type Props = {
  path: string;
  linkName: string;
};

const Links = ({ linkName, path }: Props) => {
  // dropdown links
  const links = [
    { href: paths.aboutPath(), label: "Meet Kelli", id: "menu-item-0" },
    { href: paths.faqPath(), label: "FAQ", id: "menu-item-1" },
    { href: paths.pricingPath(), label: "Package Pricing", id: "menu-item-2" },
  ];

  if (linkName === "About")
    return (
      <div className="relative group">
        <li className="text-xl hover:cursor-pointer focus:outline-none">
          <span className="flex items-center hover:text-customTurquoise transition duration-300">
            About
            <BiChevronDown className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
          </span>

          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-customWhite shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="py-1 flex w-full items-end flex-col">
              {links.map(({ href, label, id }) => (
                <Link
                  key={id}
                  href={href}
                  className="w-full text-right px-4 py-2 text-sm text-black hover:bg-gray-100  hover:text-customBlue"
                  role="menuitem"
                  id={id}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </li>
      </div>
    );

  return (
    <li className="relative text-xl group hover:cursor-pointer">
      <Link
        className=" hover:text-customTurquoise transition duration-300"
        href={path}
      >
        {linkName}
      </Link>
      <span className="absolute left-1/2 -bottom-3 w-[.5rem] h-[.5rem] bg-white rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-1/2"></span>{" "}
    </li>
  );
};

export default Links;
