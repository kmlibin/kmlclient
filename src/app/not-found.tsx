import React from "react";

//images
import notfound from "../../public/images/404.png";
import Image from "next/image";
//fonts
import { fredoka, ibm, ibmBold } from "./utils/fonts";
//routing
import Link from "next/link";
import paths from "./paths";
//icons
import { FaHouse } from "react-icons/fa6";

const notFound = () => {
  return (
    <main
      className="flex flex-col justify-center items-center min-h-[80vh] w-full text-blackTextFont"
      aria-live="assertive"
      id="main-content"
    >
      <div className=" sm:flex h-full w-full  justify-center items-center flex-col">
        <h2
          className={`${fredoka.className} text-5xl py-4 tracking-wide text-center`}
        >
          Uh-Oh! This Page Didn&apos;t Make It...
        </h2>
        <p className={`${ibm.className} hidden text-xl my-4 sm:flex`}>
          No worries - head to the{" "}
          <Link
            aria-label="Go to homepage"
            className={`${ibmBold.className} hover:text-customBlue duration-300`}
            href={paths.homePath()}
          >
            <span className="flex items-center justify-center gap-2">
              &nbsp;
              <FaHouse /> homepage&nbsp;
            </span>
          </Link>{" "}
          and start fresh!
        </p>

        <p
          className={`${ibm.className} sm:hidden text-xl my-4 flex-col items-center justify-center text-center w-full`}
        >
          No worries - head to the{" "}
          <Link
            aria-label="Go to homepage"
            className={`${ibmBold.className} hover:text-customBlue duration-300`}
            href={paths.homePath()}
          >
            <span className="flex items-center justify-center gap-2">
              &nbsp;
              <FaHouse /> homepage&nbsp;
            </span>
          </Link>{" "}
          and start fresh!
        </p>

        <Image
          src={notfound}
          alt="Illustration of a page not found, showing a broken link or missing page"
        />
      </div>
    </main>
  );
};

export default notFound;
