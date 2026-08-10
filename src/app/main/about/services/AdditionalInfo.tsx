"use client";
import React, { useState, ReactNode } from "react";
//images
import Image from "next/image";
import info from "./images/info.svg";
//fonts and content
import { fredoka, ibm } from "@/app/utils/fonts";
import { additionalInfo } from "./servicesContent";
//css
import styles from "./services.module.css";
//icons
import { IoChevronDown } from "react-icons/io5";

type listItem = {
  content: string | ReactNode;
};

const AdditionalInfo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="z-[50] md:flex-row flex-col flex w-3/4 md:items-start items-center px-8 py-4  md:p-8 justify-center mt-12 mb-10 gap-2 md:gap-8 bg-customWhite border-2 border-gray-200 shadow-lg box-content"
      role="region"
      aria-labelledby="additional-services-heading"
    >
      <div
        className={`w-[85px] h-[85px] md:w-[200px] md:h-[200px] ${styles.infoBg} flex justify-center items-center rounded-full shrink-0`}
      >
        <Image
          src={info}
          alt="an information logo"
          className="h-[75px] w-[75px] md:h-[175px] md:w-[175px]"
        />
      </div>

      <div className="w-full md:w-4/5 flex flex-col tracking-wide">
        <button
          className="flex items-center justify-center md:pointer-events-none"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <h3
            id="additional-services-heading"
            className={`${fredoka.className} text-[16px] md:text-4xl  mb-2 w-full text-center md:text-left`}
          >
            Additional Services and Notes
          </h3>

          <IoChevronDown
            className={`md:hidden transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`
            overflow-hidden transition-all duration-300
            ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
            md:max-h-none md:opacity-100
          `}
        >
          <ul
            className={`${ibm.className} w-full flex items-start flex-col list-disc list-outside pl-10 text-xs md:text-[16px] leading-normal space-y-4`}
          >
            {additionalInfo.map((item: listItem, index) => (
              <li key={index}>{item.content}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
