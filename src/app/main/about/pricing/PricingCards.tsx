"use client";
import React, { useState, ReactNode } from "react";
//fonts
import { fredoka } from "@/app/utils/fonts";
//image
import Image, { StaticImageData } from "next/image";
//fonts
import { ibm, ibmBold } from "@/app/utils/fonts";
//routing
import Link from "next/link";
import paths from "@/app/paths";
import { Fade } from "react-awesome-reveal";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

type Props = {
  title: string | ReactNode;
  text: ReactNode | string | null;
  src: StaticImageData;
  alt: string;
  isList: boolean;
  isNote1?: boolean;
};

const PricingCards = ({ title, text, src, alt, isList, isNote1 }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fade triggerOnce direction="up">
      <div
        className={`flex flex-col w-[95%] md:w-full border-2 border-gray-200 shadow-lg box-content z-[50] mx-auto bg-customWhite ${
          isOpen ? "pb-4" : ""
        }`}
      >
        <div className="flex w-full gap-6 items-start p-4 sm:p-8">
          <div className="w-1/4 md:w-1/5 flex items-center justify-center">
            <Image src={src} alt={alt} height={150} />
          </div>
          <div className=" w-3/4 md:w-4/5 flex flex-col items-start justify-start gap-4">
            {isList || isNote1 ? (
             title
            ) : (
              <p className={`${fredoka.className} text-3xl sm:text-2xl`}>{title}</p>
            )}

            {isList ? (
              <div className={` ${isOpen ? "block" : "hidden"} sm:block`}>{text}</div>
            ) : (
              <p className={`text-md  ${isOpen ? "block" : "hidden"} sm:block`}>
                {text}
              </p>
            )}
            {isNote1 ? (
              <>
                <p
                  className={`${ibm.className} text-md -mt-4 ${
                    isOpen ? "block" : "hidden"
                  } sm:block`}
                >
                  Set up a custom contact form for client inquiries and
                  engagement.
                </p>
                <small className={`${isOpen ? "block" : "hidden"} sm:block`}>
                  <span
                    className={`${ibmBold.className} border-b border-b-blackTextFont`}
                  >
                    Note:
                  </span>
                  <span>
                    &nbsp; Clients will need an EmailJS account (using the free
                    tier).{" "}
                    <Link
                      href={paths.emailjsPath()}
                      className="cursor:hover text-customBlue hover:underline hover:text-customIndigo duration-300 transition-all"
                    >
                      See FAQ for details.
                    </Link>
                  </span>
                </small>
              </>
            ) : (
              null
            )}
          </div>
        </div>
        <button
          onClick={toggleContent}
          aria-expanded={isOpen}
          aria-controls={`pricing-card-${title}-content`}
          className="sm:hidden w-full flex justify-center items-center pb-5 "
        >
          {isOpen ? <FaCaretUp size={40} className="text-brightOrange"/> : <FaCaretDown size={40} className="text-customBlue"/>}
        </button>
      </div>
    </Fade>
  );
};

export default PricingCards;
