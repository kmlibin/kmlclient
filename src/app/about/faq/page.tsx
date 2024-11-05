"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import faq from "../../../../public/images/faq.svg";
import { FaQuestion, FaPlus, FaMinus } from "react-icons/fa";
import { ibm, fredoka } from "@/app/utils/fonts";

type Props = {};
const faqItems = [
  {
    id: "question1",
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including physical therapy, dry needling, and more.",
  },
  {
    id: "question2",
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept multiple insurance providers. Contact us for more details. Yes, we accept multiple insurance providers. Contact us for more details. Yes, we accept multiple insurance providers. Contact us for more details."
  },
  {
    id: "question3",
    question: "How can I book an appointment?",
    answer: "You can book directly on our website or give us a call. We are just adding more to see how the text wraps because it's not working well.",
  },
  {
    id: "question6",
    question: "How can I book an appointment?",
    answer: "You can book directly on our website or give us a call.",
  },
  {
    id: "question7",
    question: "How can I book an appointment?",
    answer: "You can book directly on our website or give us a call.",
  },
  {
    id: "question8",
    question: "How can I book an appointment?",
    answer: "You can book directly on our website or give us a call.",
  },
  {
    id: "question9",
    question: "How can I book an appointment?",
    answer: "You can book directly on our website or give us a call.",
  },
];

const page = (props: Props) => {
  const [openId, setOpenId] = useState<string | null>(null);

  // check to see if an id is in the browser string, then open that question
  useEffect(() => {
    const hash = window.location.hash.substring(1); // get hash without '#'
    if (hash && faqItems.some((item) => item.id === hash)) {
      setOpenId(hash);
    }
  }, []);

  //  toggle the accordion item and update URL hash
  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex">
        <div className="w-full h-[100vh] relative flex justify-evenly items-start mt-[150px]">
          {/* rainbows */}
          <div className="absolute -top-1/4 -left-[15%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
          <div className="absolute -bottom-20 -right-[10%] rainbow-circle w-[500px] rounded-full h-[500px]"></div>

          <div className="w-1/3 h-full flex flex-col items-end justify-start ">
            <Image
              src={faq}
              alt="faq image"
              height={500}
              className="z-10 sticky top-4 -mt-[3.75rem]"
            />
          </div>

          <div
            className={`${ibm.className} tracking-wide text-lg w-1/2 relative  flex flex-col items-center justify-start`}
          >
            {faqItems.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="border-b border-gray-300 w-full py-4 flex flex-col items-start"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between px-4 py-2"
                >
                  <div className="flex items-center gap-4">
                    <FaQuestion className="text-customPink" />
                    <span className={`${fredoka.className} text-2xl`}>
                      {item.question}
                    </span>
                  </div>
                  <div>
                    {openId === item.id ? (
                      <FaMinus className="text-customPink" />
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
