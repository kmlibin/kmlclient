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
//libraries
import { Fade } from "react-awesome-reveal";

const HomeBanner = () => {
  return (
    <div
      id="banner-section"
      className="relative w-full bg-opacity-85 py-[4rem] sm:py-[8rem] h-full flex flex-col justify-center items-center border-t-customIndigo border-t-2"
    >
      {/* rainbows */}
      <div className="absolute top-[5vh] -left-[4vw] rotate-45 rainbow-circle w-[500px] h-[500px]  rounded-full  z-1"></div>
      <div className="absolute -bottom-[10vh] sm:-right-[2vw] -right-[28vw] rotate-180 rainbow-circle w-[300px] h-[300px]  rounded-full z-1"></div>
      <Fade triggerOnce direction="up">
        <div className="w-full h-full flex justify-center items-center z-[50]">
          <div className="flex sm:flex-row flex-col w-[95%] sm:w-[90%] justify-evenly items-center  bg-customBlue border-2 border-customIndigo border-opacity-40 shadow-customSmallGrey p-5 sm:py-10 rounded-xl z-20">
            <div className="w-full sm:w-[60%] h-full flex flex-col justify-end gap-10 bg-customIndigo  bg-opacity-80 shadow-lg rounded-xl">
              <div className="sm:px-10 px-4 pt-10">
                <ZoomHeading
                  as="h2"
                  className={`text-[2rem] sm:text-5xl sm:text-left text-center text-customWhite mb-3 w-full tracking-wide leading-normal ${fredoka.className}`}
                >
                  Say Goodbye to DIY <br />
                  Website Hassles!
                </ZoomHeading>
                <p
                  className={`text-md sm:text-left  w-full ${ibmBold.className} text-purple-200 hidden sm:block`}
                >
                  {homeBanner.subheading}
                </p>

                <div className=" relative w-full flex justify-center items-center box-content sm:hidden">
                  <Image
                    loading="lazy"
                    src={smallcomp}
                    alt="small business with sign saying Our Business is Now Online!"
                  />
                  <div className="absolute h-[20px] left-[5%] top-[20%] w-[20px] bg-customWhite rounded-full pulse-circle-1 pulse-circle"></div>
                  <div className="absolute h-[15px] right-[50%] bottom-[13%] w-[15px] bg-customWhite rounded-full pulse-circle-2 pulse-circle"></div>
                  <div className="absolute h-[10px] right-[18%] top-[35%] w-[10px] bg-customWhite rounded-full pulse-circle-3 pulse-circle"></div>
                </div>
              </div>
              <div className="w-full px-10">
                <p
                  className={`text-lg w-full ${ibm.className} text-purple-100`}
                >
                  {homeBanner.mainText}
                </p>
              </div>
              <div className="w-full h-full bg-customGold rounded-bl-xl rounded-br-xl border-customDarkGold border-2">
                <div className="w-5/6 flex justify-end my-7">
                  <Button path={paths.getStartedPath()} text="Get Started" />
                </div>
              </div>
            </div>

            <div className=" relative w-1/3 justify-center box-content hidden sm:flex">
              <Image
                loading="lazy"
                src={smallcomp}
                alt="small business with sign saying Our Business is Now Online!"
              />
              <div className="absolute h-[20px] left-[5%] top-[20%] w-[20px] bg-customWhite rounded-full pulse-circle-1 pulse-circle"></div>
              <div className="absolute h-[15px] right-[50%] bottom-[13%] w-[15px] bg-customWhite rounded-full pulse-circle-2 pulse-circle"></div>
              <div className="absolute h-[10px] right-[18%] top-[35%] w-[10px] bg-customWhite rounded-full pulse-circle-3 pulse-circle"></div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HomeBanner;
