import React from "react";

import Portfolio from "../Portfolio/Portfolio";
import fittees from "../../../public/images/fittees.png";
import fittees2 from "../../../public/images/fittees2.png";
import cw from "../../../public/images/cw.png";
import cw2 from "../../../public/images/cw2.png";
import Link from "next/link";
import { fredoka, ibm } from "@/app/utils/fonts";
import { Gi3dGlasses } from "react-icons/gi";
import { FcIdea } from "react-icons/fc";

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
    id: 1,
    height: "400px",
    frontImage: fittees,
    complete: false,
    link: "https://poetic-selkie-096f2e.netlify.app/",
    review: "Under construction, check back soon!",
    backImage: fittees2,
  },
];

type Props = {};

// bg-gradient-to-t from-customIndigoRGBA to-customWhite

const PortfolioBanner = (props: Props) => {
  return (
    <div
      id="portfolio-section"
      className="relative min-h-[60vh] flex justify-center items-center py-[6rem] flex-col w-full"
    >
      <div className="absolute inset-0  bg-customIndigoRGBA z-10"></div>

      <div className="flex flex-col w-3/4 justify-start items-end gap-8 z-[15] h-full p-2 3xl:w-2/3">
        <h3
          className={`${fredoka.className} text-5xl w-full text-left tracking-wide flex items-center gap-3`}
        >
          Bringing Ideas to Life <FcIdea />
        </h3>
        <div className="w-full flex flex-col items-end gap-6 text-md bg-lightGrey bg-opacity-50 shadow-customSmallGrey rounded-xl p-5">
          <p className={`${ibm.className} text-right px-5`}>
            See the difference I've made for other small businesses! From
            eye-catching designs to seamless functionality, my work speaks for
            itself. Explore the projects that have helped my clients grow online
            and stand out from the competition.
          </p>
        </div>
        <div className="w-full flex gap-5">
          {portfolioItems.map((item) => (
            <Portfolio
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
        <Link href="/myportfolio" className="px-5  ">
          <span
            className={` ${ibm.className} bg-customIndigo relative overflow-hidden z-10 btn w-full p-4 text-lightGrey flex items-center gap-3 justify-center`}
          >
            See More! <Gi3dGlasses />
          </span>
        </Link>
      </div>
      <div className="w-full h-[30px] absolute bottom-0 rainbow mt-[4rem] z-[15]"></div>
      <div className="w-full absolute top-0 h-[30px] rainbow z-[12]"></div>
    </div>
  );
};

export default PortfolioBanner;
