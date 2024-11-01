"use client";
import React from "react";
import PortfolioCard from "./PortfolioCube";
import "./Portfolio.css";
import fittees from "../../../public/images/fittees.png";
import cw from "../../../public/images/cw.png";
import kellinetlify from "../../../public/images/kellinetlify.png";
import jpel from "../../../public/images/jpel.png";
import fittees2 from "../../../public/images/fittees2.png";
import cw2 from "../../../public/images/cw2.png";
import kellinetlify2 from "../../../public/images/kellinetlify2.png";
import jpel2 from "../../../public/images/jpel2.png";
import myport from "../../../public/images/7.png";

import portfolio from "../../../public/images/portfolio.svg";
import Image from "next/image";
import { ibm } from "@/app/utils/fonts";

const PortfolioGallery = () => {
  const portfolioItems = [
    {
      id: 5,
      height: "400px",
      frontImage: cw,
      complete: true,
      link: "https://conciergewellnessandpt.com/",
      review:
        "Kelli has been outstanding with all of her help building my company website! She far exceeded any of my expectations and went above and beyond. I’m so thankful for her knowledge and attention to detail because it made the whole process so much easier for me. She even helped me figure out how to activate my company email and all other IT questions I had. I highly recommend Kelli for any web development or anything related!",
      backImage: cw2,
    },
    {
      id: 2,
      height: "100px",
      bubbles: true,
    },
    {
      id: 3,
      height: "400px",
      frontImage: kellinetlify,
      link: "https://kelli-portfolio.netlify.app/",
      complete: true,
      review:
        "This is a personal site that I use for larger employers, as the projects are more skill focused and not nearly as pretty :)",
      backImage: kellinetlify2,
    },

    {
      id: 7,
      height: "400px",
    },
    {
      id: 4,
      height: "100px",
      bubbles: true,
      review: "this is a review",
    },
  ];

  const portfolioItems2 = [
    {
      id: 1,
      height: "400px",
      frontImage: fittees,
      complete: false,
      link: "https://poetic-selkie-096f2e.netlify.app/",
      review: "Under construction, check back soon!",
      backImage: fittees2,
    },
    {
      id: 6,
      height: "400px",
      frontImage: jpel,
      review: "Under construction, check back soon!",
      complete: false,
      backImage: jpel2,
    },
    {
      id: 4,
      height: "100px",
      bubbles: true,
      review: "this is a review x 2",
    },
    {
      id: 8,
      height: "393px",
    },
  ];

  return (
    <div className=" w-full relative bg-customWhite justify-start items-start flex">
      <div className="absolute w-2/3 bg-customIndigoRGBA h-[100%] left-2 border-2 border-customIndigo border-opacity-50"></div>

      <div className="sticky top-[14rem]">
        <Image alt="portfolio" src={myport} className="w-[350px]" />
      </div>

      <div className="relative h-full grid grid-cols-2 justify-center items-start gap-4 p-4 w-4/5 mr-5 ml-2 3xl:w-2/3 mt-[220px] box-content bg-lightGrey z-20">
        <div className="absolute w-[57%] shadow-md bg-customWhite h-[13%] rounded-xl -top-[16.25%] z-10 flex justify-center items-center">
          <p className={`${ibm.className} text-md w-5/6`}>
            See the difference I've made for other small businesses! From
            eye-catching designs to seamless functionality, my work speaks for
            itself. Explore the projects that have helped my clients grow online
            and stand out from the competition.
          </p>
        </div>
        <div className="flex flex-col justify-start gap-4 w-full">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id}
              height={item.height}
              complete={item.complete}
              review={item.review}
              link={item.link}
              bubbles={item.bubbles}
              frontImage={item.frontImage}
              backImage={item.backImage}
            />
          ))}
        </div>
        <div className="flex flex-col justify-start gap-4 ">
          {portfolioItems2.map((item) => (
            <PortfolioCard
              key={item.id}
              link={item.link}
              height={item.height}
              bubbles={item.bubbles}
              complete={item.complete}
              review={item.review}
              frontImage={item.frontImage}
              backImage={item.backImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery;
