"use client";
import React from "react";
//images
import Image from "next/image";
import nowOnline from "./nowonline.svg";
//fonts and utils and content
import { ibm, fredoka } from "@/app/utils/fonts";
import paths from "@/app/paths";
import { homeBanner } from "../homeContent";
//components
import Button from "../../Button";
import ZoomHeading from "@/components/ZoomHeading";

const HomeBanner = () => {
  return (
    <div
      id="banner-section"
      className="relative w-full bg-customWhite py-[6rem] h-full flex flex-col justify-center items-center border-t-customIndigo border-t-2"
    >
      <div className="flex w-5/6 justify-center items-center">
        <div className="w-1/2 h-full flex flex-col justify-end item-end">
          <ZoomHeading
            as="h2"
            className={`text-4xl mb-4 w-full tracking-wide ${fredoka.className}`}
          >
            Say Goodbye to DIY Website Hassles!
          </ZoomHeading>

          <p className={`text-md w-full ${ibm.className}`}>
            {homeBanner.mainText}
          </p>

          <div className="w-full flex items-end justify-end mt-9">
            <Button path={paths.getStartedPath()} text="Get Started" />
          </div>
        </div>

        <div className="w-1/2 flex justify-end">
          <Image
            loading="lazy"
            src={nowOnline}
            alt="small business with sign saying Our Business is Now Online!"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
