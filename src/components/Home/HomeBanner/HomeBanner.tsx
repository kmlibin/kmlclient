"use client";
import React from "react";
//images
import Image from "next/image";
import nowOnline from "./nowonline.svg";
//fonts and utils
import { ibm, fredoka } from "@/app/utils/fonts";
import paths from "@/app/paths";
import { homeBanner } from "../homeContent";
//animations
import { Zoom } from "react-awesome-reveal";
//components
import Button from "../../Button";


const HomeBanner = () => {
  return (
    <div
      id="banner-section"
      className="relative w-full bg-customWhite py-[6rem] h-full flex flex-col justify-center items-center border-t-customIndigo border-t-2"
    >
      <div className="flex w-5/6 justify-center items-center">
        <div className="w-1/2 h-full flex flex-col justify-end item-end">
          <Zoom direction="down" duration={1500} triggerOnce>
            <h1
              className={`text-4xl mb-4 w-full tracking-wide ${fredoka.className}`}
            >
              Say Goodbye to DIY Website Hassles!
            </h1>
          </Zoom>

          <p className={`text-md w-full ${ibm.className}`}>
            {homeBanner.mainText}
          </p>

          <div className="w-full flex items-end justify-end mt-9">
            <Button path={paths.getStartedPath()} text="Get Started" />
          </div>
        </div>

        <div className="w-1/2 flex justify-end">
          <Image
            src={nowOnline}
            alt="small business with sign saying Our Business is Now Online!"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
