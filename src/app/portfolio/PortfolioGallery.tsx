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
import paths from "../paths";
import Image from "next/image";

import GetStartedButton from "../about/pricing/GetStartedButton";

const PortfolioGallery = () => {
  const portfolioItems = [
    {
      id: 5,
      height: "275px",
      frontImage: cw,
      owner: "Dr. Christian Wade",
      business: "Concierge Wellness",
      cube: true,
      complete: true,
      link: "https://conciergewellnessandpt.com/",
      review:
        "Kelli has been outstanding with all of her help building my company website! She far exceeded any of my expectations and went above and beyond. I’m so thankful for her knowledge and attention to detail because it made the whole process so much easier for me. She even helped me figure out how to activate my company email and all other IT questions I had. I highly recommend Kelli for any web development or anything related!",
      backImage: cw2,
      isLarge: false,
    },
    {
      id: 2,
      height: "100px",
      bubbles: true,
      review: "bubbles 1",
    },
    {
      id: 3,
      height: "275px",
      cube: true,
      frontImage: kellinetlify,
      link: "https://kelli-portfolio.netlify.app/",
      complete: true,
      review:
        "This is a personal site that I use for larger employers, as the projects are more skill focused and not nearly as pretty :)",
      backImage: kellinetlify2,
      isLarge: false,
    },

    {
      id: 7,
      height: "275px",
      cube: true,
      frontImage: kellinetlify,
      backImage: kellinetlify2,
      isLarge: false,
    },
    {
      id: 10,
      height: "100px",
      bubbles: true,
      review: "bubbles 2",
    },
  ];

  const portfolioItems2 = [
    {
      id: 1,
      height: "275px",
      cube: true,
      owner: "Dr. Tochi Egbuzie",
      business: "Fittees Physical Therapy",
      frontImage: fittees,
      complete: false,
      link: "https://poetic-selkie-096f2e.netlify.app/",
      review: "Under construction, check back soon!",
      backImage: fittees2,
      isLarge: false,
    },
    {
      id: 6,
      height: "275px",
      cube: true,
      business: "JPEL Farms",
      frontImage: jpel,
      review: "Under construction, check back soon!",
      complete: false,
      backImage: jpel2,
      isLarge: false,
    },
    {
      id: 4,
      height: "100px",
      bubbles: true,
      review: "bubbles 3",
    },
    {
      id: 8,
      height: "392px",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-customWhite">
      <div className=" w-full relative justify-start items-start flex mb-10">
        <div className="absolute -bottom-[11rem] -right-[15rem] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>

        <div className="sticky top-[168px]">
          <Image
            alt="portfolio"
            src={myport}
            className="w-[270px] 3xl:w-[350px]"
          />
        </div>

        <div className="relative h-full grid grid-cols-2 justify-center items-start gap-4 p-4 mx-auto mt-[180px] box-content shadow-customSmallGrey border-2 border-customIndigo border-opacity-50 bg-customWhite z-20">
          <div className="flex flex-col justify-start gap-4 overflow-hidden">
            {portfolioItems.map((item) => (
              <PortfolioCard
                key={item.id}
                cube={item.cube}
                business={item.business}
                owner={item.owner}
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
                cube={item.cube}
                link={item.link}
                business={item.business}
                owner={item.owner}
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
    </div>
  );
};

export default PortfolioGallery;
