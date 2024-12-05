
import React from "react";
import Image from "next/image";
import notfound from "../../public/images/404.png";
import { fredoka, ibm, ibmBold } from "./utils/fonts";
import Link from "next/link";
import paths from "./paths";
import { FaHouse } from "react-icons/fa6";


const notFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] w-full text-blackTextFont">
      <div className="h-full w-full flex justify-center items-center flex-col">
        <h2 className={`${fredoka.className} text-5xl py-4 tracking-wide`}>
          Uh-Oh! This Page Didn&apos;t Make It...
        </h2>
        <p className={`${ibm.className} text-xl my-4 flex`}>No worries - head to the <Link className={`${ibmBold.className} hover:text-customBlue duration-300`} href={paths.homePath()}><span className="flex items-center justify-center gap-2">&nbsp;<FaHouse /> homepage&nbsp;</span></Link> and start fresh!</p>
        <Image src={notfound} alt="page not found" />
        
      </div>
    </div>
  );
};

export default notFound;
