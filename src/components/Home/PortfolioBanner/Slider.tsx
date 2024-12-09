"use client";
import { useState, useEffect } from "react";
//libraries
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { Fade } from "react-awesome-reveal";
//components
import PortfolioCube from "../../../app/main/portfolio/PortfolioCube";

//content
import { sliderItems } from "./sliderCubes";
import LogoContainer from "./LogoContainer";

export default function Slider() {
  const [factIndex, setFactIndex] = useState(0);
  const [currentLogo, setCurrentLogo] = useState(sliderItems[0].logo);
  const [fadeKey, setFadeKey] = useState(0);

  //slider controls
  const showPreviousSlide = () => {
    setFactIndex((index) => (index === 0 ? sliderItems.length - 1 : index - 1));
  };

  const showNextSlide = () => {
    setFactIndex((index) => (index === sliderItems.length - 1 ? 0 : index + 1));
  };

  //get the current object being displayed in the slider, track in useEffect so the Fade is triggered
  //manipulating the key - changes in key change the dom, forcing a rerender of that element
  useEffect(() => {
    setCurrentLogo(sliderItems[factIndex].logo);
    setFadeKey((prevKey) => prevKey + 1);
  }, [factIndex]);

  return (
    <div className="flex justify-center items-center w-5/6 relative">
      <div className="absolute  hidden sm:flex right-10  z-[30] min-w-[100px] max-w-[100px] min-h-[100px] bg-customWhite border-4 shadow-customSmallGrey border-gray-200 p-10 box-content rounded-full justify-center items-center">
        <LogoContainer fadeKey={fadeKey} currentLogo={currentLogo} />
      </div>
      <Fade direction="up" triggerOnce>
        <div className="w-auto">
          <div className="flex items-start w-full flex-col">
            <div className="flex items-center flex-col justify-center w-full overflow-hidden">
              <div
                className="flex transition-transform duration-1000 w-screen"
                style={{ transform: `translateX(-${factIndex * 100}%)` }}
              >
                {sliderItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 flex-grow w-full flex justify-center sm:items-center items-start max-h-[230px] sm:max-h-full"
                    style={{ height: item.height }}
                  >
                    <PortfolioCube
                      height={item.height}
                      owner={item.owner}
                      business={item.business}
                      cube={item.cube}
                      frontImage={item.frontImage}
                      complete={item.complete}
                      link={item.link}
                      review={item.review}
                      backImage={item.backImage}
                      isHome={true}
                    />
                  </div>
                ))}
              </div>

              {/* small screen buttons */}
              <div>
                <button
                  onClick={showPreviousSlide}
                  className="sm:hidden  text-blackTextFont bottom-0 left-[4rem] hover:scale-110 transition duration-400 z-10 hover:text-brightOrange"
                >
                  <RiArrowLeftSLine size={50} />
                </button>
                <button
                  onClick={showNextSlide}
                  className="sm:hidden  text-blackTextFont bottom-0 right-[4rem] hover:scale-110 transition duration-400 hover:text-brightOrange"
                >
                  <RiArrowRightSLine size={50} />
                </button>
              </div>
            </div>

            <button
              onClick={showPreviousSlide}
              className="hidden sm:block absolute text-blackTextFont sm:top-20 left-[4rem] hover:scale-110 transition duration-400 z-10 hover:text-brightOrange"
            >
              <RiArrowLeftSLine size={50} />
            </button>
            <button
              onClick={showNextSlide}
              className="hidden sm:block absolute text-blackTextFont sm:top-20 right-[4rem] hover:scale-110 transition duration-400 hover:text-brightOrange"
            >
              <RiArrowRightSLine size={50} />
            </button>
          </div>
        </div>{" "}
      </Fade>
    </div>
  );
}
