import React from "react";
import Link from "next/link";
import { ibm } from "@/app/utils/fonts";
import { PiArrowFatLinesRightFill } from "react-icons/pi";

type Props = {
    path: string,
    text: string,
};

const Button = ({path, text}: Props) => {
  return (
    <Link
    href={path}
    className={` ${ibm.className}  bg-customIndigo relative overflow-hidden z-10 btn p-4 text-lightGrey flex items-center gap-3 justify-center`}
  >
    <span className="flex justify-center items-center gap-3">{text} <PiArrowFatLinesRightFill /></span>
  </Link>
  );
};

export default Button;
