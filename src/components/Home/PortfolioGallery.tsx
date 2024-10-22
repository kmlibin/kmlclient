"use client";
import React from "react";
import PortfolioCard from "./Portfolio";
import "./Portfolio.css";
import fittees from "../../../public/images/fittees.png";
import cw from "../../../public/images/cw.png";
import kellinetlify from "../../../public/images/kellinetlify.png";
import jpel from "../../../public/images/jpel.png";
import fittees2 from "../../../public/images/fittees2.png";
import cw2 from "../../../public/images/cw2.png";
import kellinetlify2 from "../../../public/images/kellinetlify2.png";
import jpel2 from "../../../public/images/jpel2.png";

const PortfolioGallery = () => {
  const portfolioItems = [
    {
      id: 1,
      height: "250px",
      frontImage: fittees,
      complete: false,
      link: "https://poetic-selkie-096f2e.netlify.app/",
      review: "Under construction, check back soon!",
      backImage: fittees2,
    },
    {
      id: 2,
      height: "175px",
    },
    {
      id: 3,
      height: "250px",
      frontImage: kellinetlify,
      link: "https://kelli-portfolio.netlify.app/",
      complete: true,
      review:
        "This is a personal site that I use for larger employers, as the projects are more skill focused and not nearly as pretty :)",
      backImage: kellinetlify2,
    },
  ];

  const portfolioItems2 = [
    {
      id: 4,
      height: "175px",
    },
    {
      id: 5,
      height: "250px",
      frontImage: cw,
      complete: true,
      link: "https://conciergewellnessandpt.com/",
      review:
        "Kelli has been outstanding with all of her help building my company website! She far exceeded any of my expectations and went above and beyond. I’m so thankful for her knowledge and attention to detail because it made the whole process so much easier for me. She even helped me figure out how to activate my company email and all other IT questions I had. I highly recommend Kelli for any web development or anything related!",
      backImage: cw2,
    },
    {
      id: 6,
      height: "250px",
      frontImage: jpel,
      review: "Under construction, check back soon!",
      complete: false,
      backImage: jpel2,
    },
  ];

  const portfolioItems3 = [
    {
      id: 7,
      height: "250px",
    },
    {
      id: 8,
      height: "443px",
    },
  ];

  return (
    <div className="grid grid-cols-3 justify-start items-start gap-4 p-5 w-4/5 mx-auto">
      <div className="flex flex-col justify-start gap-4">
        {portfolioItems.map((item) => (
          <PortfolioCard
            key={item.id}
            height={item.height}
            complete={item.complete}
            review={item.review}
            link={item.link}
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
            complete={item.complete}
            review={item.review}
            frontImage={item.frontImage}
            backImage={item.backImage}
          />
        ))}
      </div>
      <div className="flex flex-col justify-start gap-4">
        {portfolioItems3.map((item) => (
          <PortfolioCard key={item.id} height={item.height} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;
