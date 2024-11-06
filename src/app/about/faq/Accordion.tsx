"use client";
import React from "react";
import { fredoka } from "@/app/utils/fonts";
import { FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

type Props = {
  toggleItem: (id: string) => void;
  item: {
    id: string;
    question: string;
    answer: string;
  };
  openId: string | null;
};

const Accordion = ({ toggleItem, item, openId }: Props) => {
  return (
    <div
      id={item.id}
      className="border-b border-gray-300 w-full py-4 flex flex-col items-start"
    >
      <button
        onClick={() => toggleItem(item.id)}
        className="w-full flex items-center justify-between px-4 py-2"
      >
        <div className="flex items-center gap-4">
          <HiOutlineComputerDesktop className="text-customPink" />
          {/* <FaQuestion className="text-customPink" /> */}
          <span className={`${fredoka.className} text-2xl`}>
            {item.question}
          </span>
        </div>
        <div>
          {openId === item.id ? (
            <FaMinus className="text-customTurquoise" />
          ) : (
            <FaPlus className="text-customPink" />
          )}
        </div>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden w-full ${
          openId === item.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        <div className="px-8 py-4 bg-customIndigo bg-opacity-10 w-4/5 ml-[3rem] text-[1rem] flex justify-start">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
