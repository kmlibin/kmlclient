import React from "react";
//fonts
import { fredoka, ibm } from "@/app/utils/fonts";
//libs
import Image from "next/image";
//images
import table from './images/table.svg'


const TableComparison = () => {
  return (
    <div id="comparison-table" className="w-[95%] flex flex-col tracking-wide items-center justify-center border-2 border-customBlue mb-10 border-opacity-50">
      <h3 className={`${fredoka.className} text-4xl mb-4 pt-8 `}>
        See How We Compare to Other Platforms
      </h3>
      <p className={`${ibm.className} text-lg w-3/4 text-center`}>
        Our flat-fee approach includes everything you need to establish a
        strong, professional online presence — without the surprise charges.
        Compare below to see the comprehensive features of our package against
        common options in the market.
      </p>
      <Image src={table} alt="table" className="-mt-8" />
    </div>
  );
};

export default TableComparison;
