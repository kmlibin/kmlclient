import React, { ReactNode } from "react";
import Image from "next/image";
import pricing from "./pricing.svg";
import { ibm, fredoka } from "@/app/utils/fonts";
import Navbar from "@/components/Navbar/Navbar";
import { pricingCards } from "./pricingContent";
import PricingCards from "./PricingCards";
import { StaticImageData } from "next/image";
import paths from "@/app/paths";
import TableComparison from "./TableComparison";
import AdditionalInfo from "./AdditionalInfo";
import GetStartedButton from "./GetStartedButton";

type Props = {};

type PricingData = {
  title: ReactNode | string;
  text: ReactNode | string;
  src: StaticImageData;
  alt: string;
  isList: boolean;
};

//fix the what's included, it's no longer tracking with the screen. change to fixed and remove top, it works, but then scrolls all the way to the bottom
//of the screen, irregardless of container.
const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="w-full flex h-full flex-col bg-customWhite items-center">
        <div className="w-full  relative flex justify-evenly items-start mt-[180px] pb-16">
          {/* rainbows */}
          <div className="absolute -top-[16%] -left-[15%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
          <div className="absolute -bottom-20 -right-[10%] rainbow-circle w-[500px] rounded-full h-[500px]"></div>
          <div className="w-1/3 flex flex-col items-end justify-start relative h-[300vh] 3xl:h-[230vh]">
            <div className="sticky top-[4vh] -mt-[3rem]">
              <Image
                src={pricing}
                alt="faq image"
                height={400}
                className="z-10"
              />
            </div>
          </div>

          <div
            className={`${ibm.className} tracking-wide  w-1/2 relative  flex flex-col items-center justify-start gap-16`}
          >
            <div className="w-full flex flex-col items-center justify-start ">
              <h2 className={`${fredoka.className} text-5xl text-center mb-2`}>
                Everything You Need <br></br> in a Website
              </h2>
              <h4 className={`${ibm.className} text-xl text-left mb-4 `}>
                Starting at $350
              </h4>
            </div>

            {pricingCards.map((item: PricingData) => (
              <PricingCards
                key={item.alt}
                title={item.title}
                text={item.text}
                alt={item.alt}
                src={item.src}
                isList={item.isList}
              />
            ))}
          </div>
        </div>

        <AdditionalInfo />
        <GetStartedButton path={paths.contactPath()} />
        <TableComparison />
      </div>
    </>
  );
};

export default page;
