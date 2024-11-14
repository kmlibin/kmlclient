import React, { ReactNode } from "react";
//images
import Image from "next/image";
import info from "./images/info.svg";
//fonts and content
import { fredoka, ibm} from "@/app/utils/fonts";
import { additionalInfo } from "./pricingContent";

type listItem = {
  content: string | ReactNode;
};

const AdditionalInfo = () => {
  return (
    <div className="flex w-3/4 items-start p-8 justify-center mt-12 mb-10 gap-4 bg-customWhite border-2 border-gray-200 shadow-lg  box-content">
      <div className="w-[200px] h-[200px] info-bg flex justify-center items-center rounded-full">
        <Image src={info} alt="an information logo" height={175} width={175} />
      </div>
      <div className="w-4/5 flex flex-col justify-start items-start tracking-wide">
        {" "}
        <h3 className={`${fredoka.className} text-4xl mb-6`}>
          Additional Services and Notes
        </h3>
        <ul
          className={`${ibm.className} w-full flex items-start flex-col list-disc list-outside pl-10 text-md space-y-4 text-md`}
        >
          {additionalInfo.map((item: listItem, index) => (
            <li key={index}>{item.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdditionalInfo;