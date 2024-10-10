import Image from "next/image";

import background from "../../public/images/kmlbg.jpg";

import fulllogo from "../../public/images/largerlogo.svg";
import ContactWrapper from "@/components/Wrapper/ContactWrapper";
import {australia, ibm} from '../app/utils/fonts';

function Home() {
  return (
    <div className="relative h-[100vh] flex w-full items-center">
      {/* bg */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={background}
          priority
          fill
          style={{ objectFit: "cover" }}
          alt="CanvaBG"
        />
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-gray-900 to-transparent"></div>
      </div>
      {/* image */}

      <div className="relative flex justify-end items-center ml-[5rem] py-10 mb-4">
        <Image src={fulllogo} width={650} alt="logo" />

        <div className="absolute -right-[50%] bottom-0 flex flex-col justify-end mb-2 py-10 text-gray-900 text-2xl leading-loose list-none">
          <ul className={` ${ibm.className} mb-7`}>
            <li>/ About</li>
            <li>/ View Client Portfolio</li>
            <li>/ Getting Started</li>
            <li>/ FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactWrapper(Home);
