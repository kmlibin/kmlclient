"use client";
import { useState, useEffect } from "react";
//libraries
import { Fade } from "react-awesome-reveal";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
//components
import PortfolioCube from "../../../app/main/portfolio/PortfolioCube";
//images
import Image from "next/image";
//content
import { sliderItems } from "./sliderCubes";

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
      <div className="absolute right-10  z-[30] min-w-[100px] max-w-[100px] min-h-[100px] bg-customIndigo border-4 shadow-customSmallGrey border-gray-200 p-10 box-content rounded-full flex justify-center items-center">
        <Fade key={fadeKey} duration={1500}>
          <Image
            loading="lazy"
            alt="Concierge Wellness Logo"
            className="object-cover"
            src={currentLogo}
          />
        </Fade>
      </div>
      <div className="w-auto">
        <div className="flex items-center w-full">
          <div className="flex items-center justify-center w-full overflow-hidden">
            <div
              className="flex transition-transform duration-1000 w-screen"
              style={{ transform: `translateX(-${factIndex * 100}%)` }}
            >
              {sliderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 flex-grow w-full flex justify-center"
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
          </div>
          <button
            onClick={showPreviousSlide}
            className="absolute text-blackTextFont -left-[4rem] hover:scale-110 transition duration-400 z-10 hover:text-brightOrange"
          >
            <RiArrowLeftSLine size={50} />
          </button>
          <button
            onClick={showNextSlide}
            className="absolute text-blackTextFont -right-[4rem] hover:scale-110 transition duration-400 hover:text-brightOrange"
          >
            <RiArrowRightSLine size={50} />
          </button>
        </div>
      </div>
    </div>
  );
}
