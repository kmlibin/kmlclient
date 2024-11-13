"use client";
import { infoCards } from "../homeContent";
import InfoCard from "./InfoCard";
import { fredoka} from "@/app/utils/fonts";
import paths from "@/app/paths";
import Button from "@/components/Button";
import ZoomHeading from "@/components/ZoomHeading";

// py-[6rem]
const Info = () => {
  return (
    <div
      id="info-section"
      className="relative flex w-full flex-col justify-center items-center gap-2 bg-customWhite pb-[6rem]"
    >
      <div className="mb-[5rem]">
        <ZoomHeading as="h2" className={`${fredoka.className} text-5xl`}>
          Don’t Settle for Less — Get a Site That Works
        </ZoomHeading>
      </div>
      <div className="flex w-5/6 justify-evenly items-start gap-14 h-full ">
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
      <div className="flex justify-center mt-[3rem] items-center w-5/6">
        <Button path={paths.tablePath()} text="Learn More" />
      </div>
    </div>
  );
};

export default Info;
