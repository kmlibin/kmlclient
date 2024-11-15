import React from "react";
//fonts
import { fredoka, ibm } from "@/app/utils/fonts";
//images
import Image, { StaticImageData } from "next/image";
import bank from "../../../../public/images/bank.svg";
import bankvid from '../../../../public/videos/bankvid.mp4'

type Props = {
  title: string;
  text: string;
  src: StaticImageData | string;
  alt: string;
  className:string;
};

const InfoCard = ({ title, text, src, alt, className }: Props) => {
  return (
    <div
      className={`3xl:w-1/4 w-1/3 h-[450px] 3xl:h-[500px] bg-customWhite ${className} flex flex-col justify-start items-center gap-4 border-2  border-lightGrey p-6 rounded-xl box-content z-10`}
    >
      <h3
        className={`${fredoka.className} text-2xl tracking-wide text-center h-[75px] w-4/5`}
      >
        {title}
      </h3>
      <div className="3xl:w-[200px] 3xl:h-[200px] h-[150px] w-[150px] mb-10 flex justify-center items-center">
        {src !== "bank" ? (
          <Image src={src} alt={alt} loading="lazy"/>
        ) : (
          <video loop playsInline muted autoPlay className="w-full">
            <source src={bankvid} type="video/mp4" />
            <Image src={bank} alt="putting money in a piggy bank" />
          </video>
        )}
      </div>
      <div className="flex justify-start items-start">
        <p
          className={`${ibm.className}  text-lg text-center flex justify-start items-start`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
