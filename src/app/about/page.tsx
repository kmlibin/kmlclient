import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import kelli from "../../../public/images/bw8.jpg";
import { fredoka, ibm } from "../utils/fonts";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className=" bg-customWhite flex w-full">
        <div className="w-1/2 relative  h-[100vh] flex flex-col items-center justify-center">
          <div className="absolute -top-1/4 -left-1/4 rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
          <Image
            src={kelli}
            alt="kelli"
            height={450}
            className="z-10 border-8 border-customIndigo"
          />
        </div>

        <div className="relative w-1/2 flex flex-col items-start justify-start mt-[11rem] gap-10 tracking-wide pb-[8rem]">
        <div className="absolute -bottom-20 -right-[20%] rainbow-circle w-[500px] rounded-full h-[500px]"></div>
          <h2 className={`text-5xl ${fredoka.className}`}>Nice to Meet You!</h2>
          <p className={`w-2/3 ${ibm.className} text-md`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            tristique commodo velit, sit amet vestibulum sem imperdiet ut. Donec
            sodales ante sed est fermentum mattis. Pellentesque elementum nisi
            non ligula ultricies, at luctus ex suscipit. Pellentesque eget
            blandit sapien. Phasellus a consequat leo. Proin maximus pretium
            ornare. Sed ante eros, faucibus at eleifend a, consectetur nec mi.
            Sed diam velit, tristique quis ornare a, pulvinar quis lorem.
            Quisque vel condimentum orci. Suspendisse ac diam non est ultricies
            hendrerit. Morbi nec consectetur nulla. Integer ex elit, bibendum
            ullamcorper diam a, malesuada imperdiet felis. Integer eget sem
            pharetra, luctus tellus vitae, luctus augue. Duis quis placerat
            tortor.
            <br></br>
            <br></br>
            Cras dapibus libero augue, fermentum pulvinar mi convallis id. Sed
            quis hendrerit eros. Nam metus ex, venenatis eu purus et, mattis
            dictum velit. Cras sit amet mauris aliquet, malesuada risus ac,
            convallis ipsum. Integer non placerat diam. Aliquam semper ornare
            risus. Aliquam enim dolor, pharetra id tellus id, maximus interdum
            elit. Praesent vitae justo tempus, imperdiet est ac, fermentum dui.
            Mauris eget mi lectus. Nulla ac sem aliquam justo ultricies
            hendrerit sit amet nec felis. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. In porttitor sapien eget massa convallis
            placerat. Pellentesque et consectetur magna. Sed laoreet felis et
            libero vestibulum, nec interdum nisl efficitur. In tellus lorem,
            feugiat et diam a, finibus ornare risus. Quisque accumsan mollis
            felis ut tincidunt. Vivamus consectetur urna non ultricies maximus.
            Curabitur facilisis nisi quis orci feugiat, nec posuere elit
            ultrices.
            <br></br>
            <br></br>
            Donec eget turpis nec erat imperdiet vulputate in vel tortor. Nullam
            odio lectus, gravida nec cursus vel, ultricies sed felis. Vivamus
            viverra enim nisi. Donec velit enim, dignissim fermentum magna ac,
            scelerisque dignissim turpis. Nulla metus ex, consectetur vitae
            malesuada id, hendrerit nec mi. Praesent finibus maximus turpis, eu
            malesuada mauris. Donec dignissim, erat at maximus molestie, mauris
            elit faucibus leo, non convallis elit tellus ac lacus. Nulla
            vulputate maximus erat sit amet sodales. Aenean id auctor metus.
            Fusce mollis magna a elementum consequat. Suspendisse sollicitudin
            commodo nibh ac vehicula. Nunc mattis faucibus dapibus. Nunc mattis
            tempus placerat.
          </p>
        </div>
      </div>
    
    </>
  );
};

export default page;
