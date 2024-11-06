"use client";
import React from "react";
import logosmall from "../../../public/images/logosmall.png";
import Portfolio from "../../Portfolio/PortfolioCube";

import cw from "../../../public/images/cw.png";
import cw2 from "../../../public/images/cw2.png";
import Link from "next/link";
import { fredoka, ibm } from "@/app/utils/fonts";
import { Gi3dGlasses } from "react-icons/gi";
import { FcIdea } from "react-icons/fc";
import Slider from "./Slider";
import { Zoom } from "react-awesome-reveal";

type Props = {};

const Portfolio2Banner = (props: Props) => {
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
          See the difference I've made for other small businesses! From
          eye-catching designs to seamless functionality, my work speaks for
          itself. Explore the projects that have helped my clients grow online
          and stand out from the competition.
        </p>
      </div>
      <Slider />
      <div className="flex justify-center mt-[3rem] items-center w-5/6">
        <Link
          href="/"
          className={` ${ibm.className}  bg-customIndigo relative overflow-hidden z-10 btn p-4 text-lightGrey flex items-center gap-3 justify-center`}
        >
          Button Here?
        </Link>
      </div>
    </div>
  );
};

export default Portfolio2Banner;
