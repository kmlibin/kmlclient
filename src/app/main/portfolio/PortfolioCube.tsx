"use client";
import React, { useState, useRef, useEffect } from "react";
//images
import Image, { StaticImageData } from "next/image";
//components
import Bubbles from "./Bubbles";
//libraries
import { IoStarSharp } from "react-icons/io5";
import { RiExternalLinkLine } from "react-icons/ri";
import { Fade } from "react-awesome-reveal";
//fonts
import { fredoka, ibm } from "@/app/utils/fonts";
//css
import "./Portfolio.css";
//routing
import Link from "next/link";
import paths from "../../paths";
//components
import Button from "@/components/Button";


type CubeProps = {
  frontImage?: StaticImageData | string;
  backImage?: StaticImageData | string;
  height?: string;
  complete?: boolean;
  review?: string;
  link?: string;
  bubbles?: boolean;
  cube?: boolean;
  logo?: StaticImageData | string;
  owner?: string;
  business?: string;
  isHome?: boolean;
};

const Cube = ({
  frontImage,
  backImage,
  height,
  complete,
  cube,
  review,
  link,
  isHome,
  bubbles,
  owner,
  business,
}: CubeProps) => {
  const [currentSide, setCurrentSide] = useState("show-front");
  const [cubeDepth, setCubeDepth] = useState("175px");
  const [showFullReview, setShowFullReview] = useState(false);
  const [popup, setPopup] = useState(false);
  //change value from height to "isCube"

  const cubeRef = useRef<HTMLDivElement>(null);

  // truncates text to 30 words, use for small cubes
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };
  // const shouldTruncate = cube && !isLarge;

  const handleToggleReviewOn = () => {
    setPopup(true);
    setTimeout(() => {
      setShowFullReview(!showFullReview);
    }, 1000);
  };

  // toggle review
  const handleToggleReviewOff = () => {
    setShowFullReview(false);
    setPopup(false);
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
      <div className="scene w-auto h-auto overflow-hidden z-[30] ">
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
            className="cube__face cube__face--front cursor-pointer absolute w-[100%] h-[100%] border-2 border-gray-200 text-3xl text-center text-customWhite"
            src={frontImage ? frontImage :  ""}
            alt="CW"
          />

          <div className="cube__face cube__face--bottom absolute w-[100%] h-[100%]">
            <Image
              className="absolute w-full h-full"
              src={backImage ? backImage : ""}
              alt="Back Image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 bg-gray-900 bg-opacity-60 to-transparent z-10"></div>

            <div
              className={`${ibm.className} absolute tracking-wide inset-0 z-20 flex flex-col items-center justify-center text-customWhite text-xl gap-5`}
            >
              <h3 className="text-4xl">{owner}</h3>
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
                <div className={`flex w-full gap-4 justify-center mb-4`}>
                  {[...Array(5)].map((_, index) => (
                    <IoStarSharp key={index} size={35} color={"#fec246"} />
                  ))}
                </div>
              )}

              <p className="text-lg w-2/3 bg-customWhite text-blackTextFont p-7 relative">
                {review && truncateText(review, 40)}

                {/* show more button only if the text is truncated */}
                {review && !showFullReview && review.split(" ").length > 30 && (
                  <span
                    className="text-customBlue hover:underline cursor-pointer"
                    onClick={handleToggleReviewOn}
                  >
                    .see more
                  </span>
                )}
              </p>
              {/* popover for show more */}
              {popup && (
                <Fade duration={500}>
                  <div className="absolute flex flex-col items-center justify-center -top-2 left-0 mt-2 p-4 h-full bg-customWhite shadow-lg border border-gray-300 w-full z-30">
                    <p
                      className={`${
                        isHome ? "w-[70%]" : "w-5/6"
                      } text-lg text-blackTextFont`}
                    >
                      {review}
                    </p>
                    <button
                      onClick={handleToggleReviewOff}
                      className="text-customBlue hover:underline mt-2 absolute  bottom-0 right-0 p-6 "
                    >
                      ...show less
                    </button>
                  </div>
                </Fade>
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
          width: "58%",
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
        className={`flex flex-col w-3/4 bg-customWhite p-10 tracking-wider justify-between 3xl:w-2/3`}
        style={{
          height: height,
        }}
      >
        <div className="flex flex-col w-full gap-4">
          <h3 className={`${fredoka.className} text-4xl`}>
            Ready to create something amazing?
          </h3>
          <p className={`${ibm.className} text-[15px]`}>
            You&apos;ve seen what a difference the right website can make. If you're
            ready to elevate your business with a customized site, reach out
            today, and let&apos;s start building something great together!
          </p>
        </div>
        <div>
          <Button path={paths.getStartedPath()} text="Get Started" />
        </div>
      </div>
    );
  }
};

export default Cube;
