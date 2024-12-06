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
    <div
      className={`${ibm.className} w-full h-[150px] bg-customWhite z-[100] relative flex flex-col justify-end border-t-customIndigo border-t`}
    >
      
      <div className="w-full absolute top-16 h-[30px] rainbow z-[12]">
        <Image
          className="absolute -bottom-[3rem] left-20 z-[10] h-[130px] w-auto border-none"
          src={webdevlogo}
          alt="libin web development logo"
        />
      </div>
      <p className="w-full items-center text-md gap-4  pr-5 flex justify-end mb-2">
        Libin Web Development <RiCopyrightLine /> 2024
      </p>
    </div>

    
  );
};





export default Footer;
