"use client";
import React from "react";
//fonts and utils
import { fredoka, ibm } from "@/app/utils/fonts";
import paths from "@/app/paths";
import { portfolioBanner } from "../homeContent";
//libraries
import { FcIdea } from "react-icons/fc";
import { Zoom } from "react-awesome-reveal";
//components
import Slider from "./Slider";
import Button from "@/components/Button";




const Portfolio2Banner = () => {
  return (
    <div
      id="portfolio-section"
      className="relative bg-gradient-to-t from-customIndigoRGBA to-customWhite flex flex-col justify-center items-center w-full pb-[4rem]"
    >
      <Zoom direction="down" duration={1500} triggerOnce>
        <h3
          className={`${fredoka.className} text-5xl w-full tracking-wide flex items-center justify-center gap-3`}
        >
          Bringing Ideas to Life <FcIdea />
        </h3>
      </Zoom>
      <div className="w-2/3 text-md  bg-customWhite bg-opacity-55 shadow-indigo rounded-xl p-5 my-10">
        <p className={`${ibm.className} text-center px-5`}>
          {portfolioBanner.mainText}
        </p>
      </div>
      <Slider />
      <div className="flex justify-center mt-[3rem] items-center w-5/6">
        <Button path={paths.portfolioPath()} text="See More" />
      </div>
    </div>
  );
};

export default Portfolio2Banner;
