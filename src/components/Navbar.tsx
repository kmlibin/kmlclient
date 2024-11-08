"use client";
import React, { useState } from "react";
import { BiSolidSquareRounded, BiChevronDown } from "react-icons/bi";
import logo from "../../public/images/klbg.svg";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { ibm } from "@/app/utils/fonts";
import paths from "@/app/paths";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [rotate, setRotate] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    setRotate(true);
    setTimeout(() => setRotate(false), 500);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="relative w-full">
      <div
        className={`absolute top-2 left-0 h-[100px] w-2/3 bg-customIndigo  shadow-customSmallGrey text-white p-4 rounded-tr-lg rounded-br-lg
              transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
              transition-transform duration-300 ease-in-out z-40 flex items-center`}
      >
        <ul className={`${ibm.className} flex-grow flex w-full gap-6 items-center justify-between text-customWhite`}>
        <Link  href={paths.homePath()}><Image src={logo} alt="logo" height={75} className="ml-4 rounded-full box-content border-4 border-customGold "/></Link>
          <div className="flex mr-10 gap-24 items-center">
            <li className="relative text-xl group hover:cursor-pointer">
              <Link className="block hover:text-gray-400" href={paths.homePath()}>Home</Link>
              <span className="absolute left-1/2 -bottom-3 w-[.5rem] h-[.5rem] bg-white rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-1/2"></span>{" "}
            </li>
            <li className="relative text-xl group hover:cursor-pointer">
              <Link className="block hover:text-gray-400" href={paths.portfolioPath()}>Portfolio</Link>
              <span className="absolute left-1/2 -bottom-3 w-[.5rem] h-[.5rem] bg-white rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-1/2"></span>{" "}
            </li>
            <button
              onClick={toggleDropdown}
              className="relative text-xl group hover:cursor-pointer focus:outline-none"
            >
              <span className="flex items-center hover:text-gray-400">
                About
                <BiChevronDown
                  className={`ml-1 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>

              {dropdownOpen && (
                <Fade>
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                  >
                    <div className="py-1 flex w-full items-end flex-col" role="none">
                      <Link
                        href={paths.aboutPath()}
                        className="w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        id="menu-item-0"
                      >
                        Meet Kelli
                      </Link>
                      <Link
                        href={paths.faqPath()}
                        className="w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        id="menu-item-1"
                      >
                        FAQ
                      </Link>
                      <Link
                        href={paths.pricingPath()}
                        className="w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        id="menu-item-2"
                      >
                        Package Pricing
                      </Link>
                    </div>
                  </div>
                </Fade>
              )}
            </button>
            <li className="relative text-xl group hover:cursor-pointer">
              <Link className="block hover:text-gray-400" href={paths.contactPath()}>Contact</Link>
              <span className="absolute left-1/2 -bottom-3 w-[.5rem] h-[.5rem] bg-white rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-1/2"></span>{" "}
            </li>
          </div>
        </ul>
      </div>

      <button
        onClick={toggleNavbar}
        className={`absolute top-[2.4rem] right-6 text-customGold w-10 h-10 rounded flex items-center justify-center
              transition-transform duration-300 ease-in-out z-50 ${
                rotate ? "rotate-color-360" : ""
              }`}
      >
        <BiSolidSquareRounded size={24} />
      </button>
    </div>
  );
};

export default Navbar;
