"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Bubbles from "./Bubbles";
import { IoStarSharp } from "react-icons/io5";
import { RiExternalLinkLine } from "react-icons/ri";

import { fredoka, ibm } from "@/app/utils/fonts";

import "./Portfolio.css";
import Link from "next/link";

import { PiArrowFatLinesRightFill } from "react-icons/pi";

type CubeProps = {
  frontImage?: any;
  backImage?: any;
  height?: string;
  complete?: boolean;
  review?: string;
  link?: string;
  bubbles?: boolean;
  cube?: boolean;
  logo?: any;
  owner?: string;
  business?: string;
  isLarge?: boolean;
};
//@ts-ignore
const Cube = ({
  frontImage,
  backImage,
  height,
  complete,
  cube,
  review,
  link,
  logo,
  bubbles,
  owner,
  business,
  isLarge,
}: CubeProps) => {
  const [currentSide, setCurrentSide] = useState("show-front");
  const [cubeDepth, setCubeDepth] = useState("175px");
  const [showFullReview, setShowFullReview] = useState(false);
  //change value from height to "isCube"

  const cubeRef = useRef<HTMLDivElement>(null);

  // truncates text to 30 words, use for small cubes
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };
  const shouldTruncate = cube && !isLarge;
  // toggle review
  const handleToggleReview = () => {
    setShowFullReview(!showFullReview);
  };

  const handleMouseEnter = () => {
    setCurrentSide("show-bottom");
  };

  const handleMouseLeave = () => {
    setCurrentSide("show-front");
  };

  //check the height of the cube, which then calculates the height of the cube, divides by two and sends to css
  useEffect(() => {
    if (cubeRef.current) {
      const cubeHeight = cubeRef.current.offsetHeight;
      setCubeDepth(`${cubeHeight / 2}px`);
    }
  }, [cubeRef]);

  if (cube) {
    return (
      <div className="scene w-auto h-auto overflow-hidden z-[20] ">
        <div
          ref={cubeRef}
          className={`cube ${currentSide} w-auto relative transition-transform duration-1000`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={
            { "--cube-depth": cubeDepth, height: height } as React.CSSProperties
          }
        >
          <Image
            className="cube__face cube__face--front cursor-pointer absolute w-[100%] h-[100%] border-2 border-black text-3xl text-center text-white"
            src={frontImage}
            alt="CW"
          />

          <div className="cube__face cube__face--bottom absolute w-[100%] h-[100%]">
            <Image
              className="absolute w-full h-full"
              src={backImage}
              alt="Back Image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 bg-gray-900 bg-opacity-60 to-transparent z-10"></div>

            <div
              className={`${ibm.className} absolute tracking-wide inset-0 z-20 flex flex-col items-center justify-center text-white text-xl gap-5`}
            >
              {isLarge && <h3 className="text-4xl">{owner}</h3>}
              <Link
                href={link ? link : ""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl cursor-pointer flex items-center gap-4 hover:text-customTurquoise hover:underline transition duration-300 hover:underline-offset-4"
              >
                {business}
                {complete && <RiExternalLinkLine />}
              </Link>
              {complete && (
                <div
                  className={`flex w-full gap-4 justify-center ${
                    cube && isLarge ? "mb-4" : "mb-0"
                  }`}
                >
                  {[...Array(5)].map((_, index) => (
                    <IoStarSharp
                      key={index}
                      size={`${cube && isLarge ? 35 : 15}`}
                      color={"#fec246"}
                    />
                  ))}
                </div>
              )}
              <p
                className={`${
                  cube && isLarge ? "text-lg w-2/3" : "text-xs w-5/6"
                } bg-customWhite text-black p-7 relative`}
              >
                {review && shouldTruncate && !showFullReview
                  ? truncateText(review, 30)
                  : review}
                {review && shouldTruncate && review.split(" ").length > 30 && (
                  <span
                    className="text-customBlue hover:underline cursor-pointer"
                    onClick={handleToggleReview}
                  >
                    .see more
                  </span>
                )}
              </p>
              {/* popover for show more */}
              {showFullReview && (
                <div className="absolute flex flex-col items-center justify-center -top-2 left-0 mt-2 p-4 h-full bg-customWhite shadow-lg border border-gray-300 w-full z-30">
                  <p className="text-xs text-black">{review}</p>
                  <button
                    onClick={handleToggleReview}
                    className="text-customBlue hover:underline mt-2 absolute  bottom-0 right-0 p-6 "
                  >
                    ...show less
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (bubbles) {
    return (
      <div
        style={{
          width: "100%",
          height: height,
          cursor: "pointer",
          zIndex: "20",
        }}
      >
        <Bubbles id={review ? review : "string"} />
      </div>
    );
  } else {
    //template for non-cube and non-bubble
    return (
      <div
        className={`flex flex-col w-[546px] bg-customWhite p-10 tracking-wider justify-between`}
        style={{
          height: height,
        }}
      >
        <div className="flex flex-col w-full gap-4">
        <h3 className={`${fredoka.className} text-3xl`}>
          Ready to create something amazing?
        </h3>
        <p className={`${ibm.className} text-[15px]`}>
          You've seen what a difference the right website can make. If you're
          ready to elevate your business with a customized site, reach out
          today, and let’s start building something great together!
        </p>
       </div>
       <div>
       <Link
        className={` ${ibm.className}  bg-customIndigo relative overflow-hidden z-10 btn p-4 text-lightGrey flex items-center gap-3 justify-center`}
        href="/about/faq/#getStarted"
      >
        <span className="flex justify-center items-center gap-3">Get Started <PiArrowFatLinesRightFill />
        </span>
      </Link>
        </div>
      </div>
    );
  }
};

export default Cube;
