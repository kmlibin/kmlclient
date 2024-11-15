import React from "react";
//fonts and utils
import { fredoka } from "@/app/utils/fonts";
import paths from "@/app/paths";


//libraries
import { FcIdea } from "react-icons/fc";
//components
import Slider from "./Slider";
import Button from "@/components/Button";
import ZoomHeading from "@/components/ZoomHeading";

const Portfolio2Banner = () => {
  return (
    <div
      id="portfolio-section"
      className="relative flex flex-col justify-center items-center w-full pb-[4rem]"
    >
      <div className="absolute -bottom-[10vh] -right-[10vw] rainbow-circle w-[500px] rounded-full h-[500px] -z-1"></div>
      <ZoomHeading
        as="h3"
        className={`${fredoka.className} text-5xl w-full tracking-wide flex items-center justify-center gap-3 pt-10  mb-10 z-10`}
      >
        Bringing Ideas to Life <FcIdea />
      </ZoomHeading>

      {/* <div className="w-2/3 text-[16px] bg-customWhite bg-opacity-55 shadow-indigo rounded-xl p-5 my-10">
        <p className={`${ibm.className} text-center px-5`}>
          {portfolioBanner.mainText}
        </p>
      </div> */}
      <Slider />
      <div className="flex justify-center mt-[3rem] items-center w-5/6">
        <Button path={paths.portfolioPath()} text="See More" />
      </div>
    </div>
  );
};

export default Portfolio2Banner;
