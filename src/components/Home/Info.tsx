import { infoCards } from "./homeContent";
import InfoCard from "./InfoCard";
import Link from "next/link";
import { ibm } from "@/app/utils/fonts";

const Info = () => {
  return (
    <div className="relative flex w-full flex-col justify-center items-center bg-customWhite py-[8rem]">
      <div className="flex w-3/4 justify-evenly items-start gap-14 ">
        {infoCards.map((card, index) => (
          <InfoCard
            alt={card.alt}
            key={index}
            src={card.src}
            text={card.text}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Info;
