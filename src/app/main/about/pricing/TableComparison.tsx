import React from "react";
//fonts
import { fredoka, ibm } from "@/app/utils/fonts";
//libs
import Image from "next/image";
//images
import table from "./images/table.svg";

const TableComparison = () => {
  return (
    <div
      id="comparison-table"
      className="hidden z-[50] sm:flex w-[95%] flex-col tracking-wide items-center justify-center border-2 border-customBlue mb-10 border-opacity-50"
      role="region"
      aria-labelledby="comparison-table-heading"
    >
      <h3
        id="comparison-table-heading"
        className={`${fredoka.className} text-center text-4xl mb-4 pt-8`}
      >
        See How We Compare to Other Platforms
      </h3>
      <p
        className={`${ibm.className} w-[90%] text-lg sm:w-3/4 text-center`}
        aria-describedby="comparison-description" 
      >
        Our flat-fee approach includes everything you need to establish a
        strong, professional online presence — without the surprise charges.
        Compare below to see the comprehensive features of our package against
        common options in the market.
      </p>
      <Image
        src={table}
        alt="Comparison table showing features of our package against other platforms"
        className="sm:-mt-8"
        role="img"
        aria-labelledby="comparison-table" 
      />
    </div>
  );
};

export default TableComparison;
