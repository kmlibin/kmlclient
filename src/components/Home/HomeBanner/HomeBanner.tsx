"use client";
import React from "react";
//images
import Image from "next/image";

import smallcomp from "./peoplecomputer.svg";


//fonts and utils and content
import { ibm, fredoka, ibmBold } from "@/app/utils/fonts";
import paths from "@/app/paths";
import { homeBanner } from "../homeContent";
//components
import Button from "../../Button";
import ZoomHeading from "@/components/ZoomHeading";

const HomeBanner = () => {
  return (
    <div
      id="banner-section"
      className="relative w-full bg-opacity-85 py-[8rem] h-full flex flex-col justify-center items-center border-t-customIndigo border-t-2"
    >
      <div className="absolute top-[5vh] -left-[4vw] rotate-45 rainbow-circle w-[500px] h-[500px]  rounded-full  z-10"></div>
      <div className="absolute -bottom-[10vh] -right-[2vw] rotate-180 rainbow-circle w-[300px] h-[300px]  rounded-full z-10"></div>

      <div className="flex w-[90%] justify-evenly items-center  bg-customBlue border-2 border-gray-400 shadow-customSmallGrey p-5 py-10 rounded-xl z-20">
        <div className="w-[60%] h-full flex flex-col justify-end item-end gap-10 bg-customIndigo  bg-opacity-80 shadow-lg rounded-xl">
          <div className="px-10 pt-10">
            <ZoomHeading
              as="h2"
              className={`text-5xl text-customWhite mb-4 w-full tracking-wide leading-normal ${fredoka.className}`}
            >
              Say Goodbye to DIY <br />
              Website Hassles!
            </ZoomHeading>
            <p
              className={`text-xl w-full ${ibmBold.className} text-lightIndigo`}
            >
              {homeBanner.subheading}
            </p>
          </div>
          <div className="w-full px-10">
            <p className={`text-lg w-full ${ibm.className} text-customWhite`}>
              {homeBanner.mainText}
            </p>
          </div>
          <div className="w-full h-full bg-customGold rounded-bl-xl rounded-br-xl border-customDarkGold border-2">
            <div className="w-5/6 flex justify-end my-7">
              <Button path={paths.getStartedPath()} text="Get Started" />
            </div>
          </div>
        </div>

        <div className="w-1/3 flex justify-center box-content">

            <Image
              loading="lazy"
              src={smallcomp}
              alt="small business with sign saying Our Business is Now Online!"
            />
     
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
