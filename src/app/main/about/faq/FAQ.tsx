"use client";

import React, { useState, useEffect } from "react";
//images
import faq from "./faq.svg";
import Image from "next/image";

//fonts and content
import { ibm } from "@/app/utils/fonts";
import { faqCards } from "./faqContent";
//components
import Accordion from "./Accordion";
import RollImage from "@/components/RollImage";

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  // check to see if an id is in the browser string, then open that question
  useEffect(() => {
    const hash = window.location.hash.substring(1); // get hash without '#'
    if (hash && faqCards.some((item) => item.id === hash)) {
      setOpenId(hash);
    }
  }, []);

  //  toggle the accordion item and update URL hash
  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <div className="w-full h-full flex bg-customWhite pb-8 relative">
      <div className="absolute -top-[12vh] -left-[12%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
      <div className="absolute -bottom-[10vh] -right-[10vw] rainbow-circle w-[500px] rounded-full h-[500px]"></div>

      <div className="w-full relative sm:flex-row flex-col flex justify-evenly items-center sm:items-start sm:mt-[180px] mt-[5rem]">
        {/* rainbows */}
        <div className="sm:w-1/3 w-full h-full flex flex-col items-end justify-start ">
          <RollImage>
            <Image
              src={faq}
              alt="faq image"
              height={400}
              className="z-10 sm:sticky top-4 -mt-[3.75rem]"
            />
          </RollImage>
        </div>

        <div
          className={`${ibm.className} bg-customWhite rounded-xl bg-opacity-80  tracking-wide text-lg w-[95%] sm:w-1/2 relative  flex flex-col items-center justify-start`}
        >
          {faqCards.map((item) => (
            <Accordion
              toggleItem={toggleItem}
              item={item}
              openId={openId}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
