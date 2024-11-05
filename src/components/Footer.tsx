import React from "react";
import { ibm } from "@/app/utils/fonts";
import webdevlogo from "../../public/images/fulllogo.png";
import { RiCopyrightLine } from "react-icons/ri";
import Image from "next/image";

type Props = {};

const Footer = () => {
  return (
    <div
      className={`${ibm.className} w-full h-[150px] bg-lightIndigo relative flex flex-col justify-end border-t-customIndigo border-t`}
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
