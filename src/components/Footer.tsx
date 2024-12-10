import React from "react";
//fonts
import { ibm } from "@/app/utils/fonts";
//images
import webdevlogo from "../../public/images/logowhite.png";
import Image from "next/image";
//libraries
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer
      className={`${ibm.className} w-full h-[140px] sm:min-h-[150px] bg-customWhite z-[100] relative flex flex-col justify-center sm:justify-end border-t-customIndigo border-t`}
    >
      <div className="w-full flex items-center justify-center sm:absolute sm:top-16 h-[30px] rainbow z-[12]">
        <Image
          className="sm:absolute sm:-bottom-[3rem] sm:left-20 z-[10] sm:h-[130px] h-[100px] w-auto border-none"
          src={webdevlogo}
          alt="libin web development logo"
          role="img"
        />
      </div>
      <p className="hidden sm:flex w-full items-center text-md gap-4  pr-5  justify-end mb-2">
        Libin Web Development <RiCopyrightLine /> 2024
      </p>
    </footer>
  );
};

export default Footer;
