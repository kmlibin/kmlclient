import React from "react";
//routing
import Link from "next/link";
//fonts
import { ibm } from "@/app/utils/fonts";
//libraries
import { PiArrowFatLinesRightFill } from "react-icons/pi";

type Props = {
    path: string,
    text: string,
};

const Button = ({path, text}: Props) => {
  return (
    <Link
    href={path}
    className={` ${ibm.className}  bg-customIndigo shadow-customSmallGrey relative overflow-hidden z-10 btn p-4 text-lightGrey flex items-center gap-3 justify-center`}
  >
    <span className="flex justify-center items-center gap-3">{text} <PiArrowFatLinesRightFill /></span>
  </Link>
  );
};

export default Button;
