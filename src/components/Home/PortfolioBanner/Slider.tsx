"use client";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import Image from "next/image";
import logosmall from "../../../../public/images/logosmall.png";

import cw from "../../../../public/images/cw.png";
import cw2 from "../../../../public/images/cw2.png";
import Portfolio from "../../../app/portfolio/PortfolioCube";
import fittees from "../../../../public/images/fittees.png";
import fitteeslogo from "../../../../public/images/goldpng.png";
import right from "../../../../public/images/fwdarrow.svg";
import left from "../../../../public/images/leftarrow.svg";

const portfolioItems = [
  {
    id: 5,
    logo: fitteeslogo,
    height: "70vh",
    owner: "Dr. Christian Wade",
    business: "Concierge Wellness",
    cube: true,
    frontImage: fittees,
    complete: true,
    link: "https://conciergewellnessandpt.com/",
    review:
      "Kelli has been outstanding with all of her help building my company website! She far exceeded any of my expectations and went above and beyond. I’m so thankful for her knowledge and attention to detail because it made the whole process so much easier for me. She even helped me figure out how to activate my company email and all other IT questions I had. I highly recommend Kelli for any web development or anything related!",
    backImage: cw2,
    isLarge: true,
  },
  {
    id: 6,
    height: "70vh",
    logo: logosmall,
    owner: "Dr. Christian Wade",
    business: "Concierge Wellness",
    cube: true,
    frontImage: cw2,
    complete: true,
    link: "https://conciergewellnessandpt.com/",
    review:
      "Kelli has been outstanding with all of her help building my company website! She far exceeded any of my expectations and went above and beyond. I’m so thankful for her knowledge and attention to detail because it made the whole process so much easier for me. She even helped me figure out how to activate my company email and all other IT questions I had. I highly recommend Kelli for any web development or anything related!",
    backImage: cw,
    isLarge: true,
  },
  {
    id: 7,
    height: "70vh",
    logo: logosmall,
    cube: true,
    frontImage: cw,
    complete: true,
    link: "https://conciergewellnessandpt.com/",
    review:
      "Kelli has been outstanding with all of her help building my company website! She far exceeded any of my expectations and went above and beyond. I’m so thankful for her knowledge and attention to detail because it made the whole process so much easier for me. She even helped me figure out how to activate my company email and other IT questions I had. I highly recommend Kelli for any web development or anything related!",
    backImage: cw2,
    isLarge: true,
  },
];
export default function Slider() {
  const [factIndex, setFactIndex] = useState(0);
  const [currentLogo, setCurrentLogo] = useState(portfolioItems[0].logo);
  const [fadeKey, setFadeKey] = useState(0);
  console.log(factIndex);
  const showPreviousFact = () => {
    setFactIndex((index) =>
      index === 0 ? portfolioItems.length - 1 : index - 1
    );
  };

  const showNextFact = () => {
    setFactIndex((index) =>
      index === portfolioItems.length - 1 ? 0 : index + 1
    );
  };

  //get the current object being displayed in the slider, track in useEffect so the Fade is triggered
  //manipulating the key - changes in key change the dom, forcing a rerender of that element
  useEffect(() => {
    setCurrentLogo(portfolioItems[factIndex].logo);
    setFadeKey((prevKey) => prevKey + 1);
  }, [factIndex]);

  return (
    <div className="flex justify-center items-center w-5/6 relative">
      <div className="absolute left-10 z-[30] min-w-[150px] max-w-[150px] min-h-[150px] bg-customIndigo border-4 shadow-customSmallGrey border-customWhite p-10 box-content rounded-full flex justify-center items-center">
        <Fade key={fadeKey} duration={1500}>
          <Image
            alt="Concierge Wellness Logo"
            className="object-cover"
            src={currentLogo}
          />
        </Fade>
      </div>
      <div className="w-auto">
        <div className="flex items-center w-full">
          {/* slider starts below , but if transition back to just one item, delete slider stuff and keep the above div*/}
          {/* <Portfolio
            height={portfolioItem.height}
            cube={portfolioItem.cube}
            frontImage={cw}
            complete={portfolioItem.complete}
            link={portfolioItem.link}
            review={portfolioItem.review}
            backImage={portfolioItem.backImage}
          /> */}
          <div className="flex items-center justify-center w-full overflow-hidden">
            <div
              className="flex transition-transform duration-1000 w-screen"
              style={{ transform: `translateX(-${factIndex * 100}%)` }}
            >
              {portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 flex-grow w-full flex justify-center"
                  style={{ height: item.height }}
                >
                  <Portfolio
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
            onClick={showPreviousFact}
            className="absolute text-3xl top-2 -left-[4rem] hover:scale-110 transition duration-400"
          >
            <Image
              className="fill-customWhite"
              alt="back arrow"
              src={left}
              height={100}
            />
          </button>
          <button
            onClick={showNextFact}
            className="absolute text-3xl top-2 -right-[4rem] hover:scale-110 transition duration-400"
          >
            <Image
              className="fill-customWhite"
              alt="fwd arrow"
              src={right}
              height={100}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
