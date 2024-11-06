import React, { ReactNode } from "react";
import Image from "next/image";
import pricing from "./pricing.svg";
import { ibm, fredoka } from "@/app/utils/fonts";
import Navbar from "@/components/Navbar";
import { pricingCards } from "./pricingContent";
import PricingCards from "./PricingCards";
import { StaticImageData } from "next/image";

type Props = {};

type PricingData = {
  title: ReactNode | string;
  text: ReactNode | string;
  src: StaticImageData;
  alt: string;
  isList: boolean;
};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="w-full flex">
        <div className="w-full min-h-[100vh] relative flex justify-evenly items-start mt-[180px] pb-16">
          {/* rainbows */}
          <div className="absolute -top-[16%] -left-[15%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
          <div className="absolute -bottom-20 -right-[10%] rainbow-circle w-[500px] rounded-full h-[500px]"></div>

          <div className="w-1/3 h-full flex flex-col items-end justify-start ">
            <Image
              src={pricing}
              alt="faq image"
              height={400}
              className="z-10 sticky top-4 -mt-[3.75rem]"
            />
          </div>

          <div
            className={`${ibm.className} tracking-wide  w-1/2 relative  flex flex-col items-center justify-start gap-16`}
          >
            <div className="w-full flex flex-col items-center justify-start gap-4">
              <h2 className={`${fredoka.className} text-5xl text-center mb-2`}>
                Everything You Need <br></br> in a Website
              </h2>
              <h4 className={`${ibm.className} text-2xl text-left `}>
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
      </div>
    </>
  );
};

export default page;
