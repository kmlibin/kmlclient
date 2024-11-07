import Navbar from "@/components/Navbar";
import React from "react";
import { fredoka, ibm } from "../utils/fonts";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className=" relative bg-customWhite flex w-full min-h-[100vh] overflow-hidden">
        <div className="absolute -bottom-[20rem] -right-[15rem] rainbow-circle w-[1100px] rounded-full h-[1100px] "></div>
        <div className="flex justify-center items-start w-full mt-[180px] mb-10">
          <div className="w-1/3 flex items-center justify-center tracking-wide">
            <div className="z-10 w-full flex flex-col justify-center items-start">
              <h2 className={`${fredoka.className} text-5xl mb-4`}>
                Ready to Connect?
              </h2>
              <p className={`${ibm.className} text-lg mb-8`}>
                If you have any questions, see my{" "}
                <Link
                  className="hover:cursor text-customBlue hover:text-customTurquoise"
                  href="/about/faq"
                >
                  FAQ
                </Link>{" "}
                or use the form to send me a message!
              </p>
<div className="flex flex-col w-full border-2 border-gray-200 shadow-lg p-8 bg-customWhite">
              <p className={`${ibm.className} text-lg mb-2`}>
                If you're ready to start chatting about a custom site:
              </p>

              <ul className={`list-disc pl-8 ${ibm.className} text-lg`}>
                <li>
                  Please make sure you look at{" "}
                  <Link
                    href={"/faq/#gettingStarted"}
                    className="hover:cursor text-customBlue hover:text-customTurquoise"
                  >
                    Getting Started
                  </Link>{" "}
                  in my FAQ
                </li>
              </ul>
              </div>
            </div>
          </div>
          <div className="w-1/2 relative flex items-center justify-end">
            {/* rainbows */}

            <form className="space-y-6 w-3/4 p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h3>

              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
