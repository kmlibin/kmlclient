"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import faq from "../../../../public/images/faq.svg";
import { ibm } from "@/app/utils/fonts";
import Accordion from "./Accordion";
import {faqCards} from './faqContent'


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
    <div className="w-full h-full flex bg-customWhite pb-8">
      <div className="w-full relative flex justify-evenly items-start mt-[180px]">
        {/* rainbows */}
        <div className="absolute -top-[28%] -left-[15%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
        <div className="absolute -bottom-20 -right-[10%] rainbow-circle w-[500px] rounded-full h-[500px]"></div>

        <div className="w-1/3 h-full flex flex-col items-end justify-start ">
          <Image
            src={faq}
            alt="faq image"
            height={400}
            className="z-10 sticky top-4 -mt-[3.75rem]"
          />
        </div>

        <div
          className={`${ibm.className} tracking-wide text-lg w-1/2 relative  flex flex-col items-center justify-start`}
        >
          {faqCards.map((item) => (
            <Accordion toggleItem={toggleItem} item={item} openId={openId} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
