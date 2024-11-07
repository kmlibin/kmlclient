"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import faq from "../../../../public/images/faq.svg";
import { ibm } from "@/app/utils/fonts";
import Accordion from "./Accordion";
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
      "Yes, we accept multiple insurance providers. Contact us for more details. Yes, we accept multiple insurance providers. Contact us for more details. Yes, we accept multiple insurance providers. Contact us for more details.",
  },
  {
    id: "question3",
    question: "How can I book an appointment?",
    answer:
      "You can book directly on our website or give us a call. We are just adding more to see how the text wraps because it's not working well.",
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

const FAQ = (props: Props) => {
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
    <div className="w-full h-full flex">
      <div className="w-full h-[100vh] relative flex justify-evenly items-start mt-[180px]">
        {/* rainbows */}
        <div className="absolute -top-[55%] -left-[15%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
        <div className="absolute -bottom-20 -right-[10%] rainbow-circle w-[500px] rounded-full h-[500px]"></div>

        <div className="w-1/3 h-full flex flex-col items-end justify-start ">
          <Image
            src={faq}
            alt="faq image"
            height={400}
            className="z-10 sticky top-4 -mt-[3.75rem]"
          />
        </div>

        <div
          className={`${ibm.className} tracking-wide text-lg w-1/2 relative  flex flex-col items-center justify-start`}
        >
          {faqItems.map((item) => (
            <Accordion toggleItem={toggleItem} item={item} openId={openId} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
