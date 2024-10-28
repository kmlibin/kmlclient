import Image from "next/image";
import React from "react";
import seo from "../../../public/images/seo.svg";
import bank from "../../../public/images/bank.svg";
import design from "../../../public/images/design.svg";
import { fredoka } from "@/app/utils/fonts";

type Props = {};

const Info = (props: Props) => {
  return (
    <div className="relative flex w-full flex-col justify-center items-center bg-customWhite">
                <div className="w-full absolute top-0 h-[30px] rainbow z-[12]"></div>

      <div className="flex w-3/4 justify-evenly items-start gap-14 py-[8rem]">
        <div className="w-[275px] flex flex-col justify-center items-center gap-4">
          <h3
            className={`${fredoka.className} text-2xl tracking-wide text-center h-[75px]`}
          >
            Performance & <br></br>SEO Boost
          </h3>
          <div className="w-[200px] h-[200px]">
            <Image src={bank} alt="seo" />
          </div>
          <p>
            DIY site builders often slow down with extra plugins and features,
            which can impact SEO. My sites are custom-built for speed and search
            optimization, so customers can find you easily and enjoy a seamless
            experience. Reach more clients with a high-performance site designed
            to boost your SEO.
          </p>
        </div>

        <div className="w-[275px] flex flex-col justify-center items-center gap-4">
          <h3
            className={`${fredoka.className} text-2xl tracking-wide text-center h-[75px]`}
          >
            Get More for Less
          </h3>
          <div className="w-[200px] h-[200px]">
            <Image src={design} alt="seo" />
          </div>
          <p>
            Unlike DIY platforms that can charge extra for premium features or
            add-on plugins, my pricing includes all essential features from the
            start — no surprise fees. With packages starting at just $350 and
            hosting for $60 per year, get a professionally designed, fully
            optimized site at a fraction of the cost of other solutions.
          </p>
        </div>
        <div className="w-[275px] flex flex-col justify-center items-center gap-4">
          <h3
            className={`${fredoka.className} text-2xl tracking-wide text-center h-[75px]`}
          >
            Custom Design,<br></br>Made for You
          </h3>
          <div className="w-[200px] h-[200px]">
            <Image src={seo} alt="seo" />
          </div>
          <p>
            Tired of seeing the same page as you're surfing the web? Maybe you
            want a unique feature on your site? Get a one-of-a-kind site built
            just for your business, designed to stand out from cookie-cutter
            templates. We’ll create a unique, professional site that reflects
            your brand’s personality and values.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
