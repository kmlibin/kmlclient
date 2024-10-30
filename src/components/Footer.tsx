import React from "react";
import { ibm } from "@/app/utils/fonts";
import webdevlogo from "../../public/images/colorpng.png";
import { RiCopyrightLine } from "react-icons/ri";
import Image from "next/image";

type Props = {};

const Footer = () => {
  return (
    <div
      className={`${ibm.className} w-full h-[150px] bg-customIndigoRGBA flex flex-col border-t-customIndigo border-t`}
    >
      <div className="relative w-full border-b-4 h-[120px] border-b-customIndigo">
        <Image
          className="absolute -bottom-5 left-20 z-[10] h-[120px] w-[120px] border-none"
          src={webdevlogo}
          alt="libin web development logo"
        />
      </div>
      <p className="w-full items-center text-md gap-4  pr-5 flex justify-end">
        Libin Web Development <RiCopyrightLine /> 2024
      </p>
    </div>
  );
};

export default Footer;
