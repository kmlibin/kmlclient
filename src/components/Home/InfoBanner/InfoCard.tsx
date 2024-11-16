import React from "react";
//fonts
import { fredoka, ibm } from "@/app/utils/fonts";
//images
import Image, { StaticImageData } from "next/image";
import bank from "../../../../public/images/bank.svg";
import bankvid from "../../../../public/videos/bankvid.mp4";

type Props = {
  title: string;
  text: string;
  src: StaticImageData | string;
  alt: string;
  className: string;
};

const InfoCard = ({ title, text, src, alt, className }: Props) => {
  return (
    <div
      className={`3xl:w-2/3 w-3/4 mx-auto  bg-customWhite ${className} flex justify-between items-between gap-6 border-2  border-lightGrey p-4 rounded-xl box-content z-[40] my-10`}
    >
      <div className="w-1/4  p-4 flex justify-center items-center">
        {src !== "bank" ? (
          <Image src={src} alt={alt} loading="lazy" />
        ) : (
          <video loop playsInline muted autoPlay className="w-full">
            <source src={bankvid} type="video/mp4" />
            <Image src={bank} alt="putting money in a piggy bank" />
          </video>
        )}
      </div>

      <div className="flex flex-col items-start justify-center w-2/3 gap-4 pr-10">   
        <h3
            className={`${fredoka.className} text-3xl tracking-wide text-center`}
          >
            {title}
          </h3>
        <div className="flex justify-start items-start">
       
          <p
            className={`${ibm.className}  text-lg  flex justify-start items-start`}
          >
            {text}
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default InfoCard;
