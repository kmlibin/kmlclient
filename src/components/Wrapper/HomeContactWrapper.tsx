
import React from "react";
//libraries
import { FaEtsy, FaLinkedinIn, FaGithub } from "react-icons/fa";
//components
import SMIcons from "./SMIcons";



const ContactWrapper = (Component: React.ComponentType) => {
  const Wrapper: React.FC = (props) => {

    return (
      <>
        {/* social media icons on side */}
        <div className={`fixed hidden sm:flex sm:mt-[5%] top-24 sm:top-5 left-4 z-50 -translate-y-1/2 flex-col `}>
          <SMIcons href={"https://etsy.com/shop/CreationsKMP"} icon={FaEtsy} />
          <SMIcons href={"https://www.linkedin.com/in/kelli-libin-b5ba78151/"} icon={FaLinkedinIn} />
          <SMIcons href={"https://github.com/kmlibin"} icon={FaGithub} />
        </div>

        {/* wrapper */}
        <div className=" w-full ">
          <Component {...props} />
        </div>
      </>
    );
  };
  return Wrapper;
};

export default ContactWrapper;
