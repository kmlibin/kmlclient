
import React from "react";
//libraries
import { FaEtsy, FaLinkedinIn, FaGithub } from "react-icons/fa";
//components
import SMIcons from "./SMIcons";
import ContactImages from "./ContactImages";


const NotHomeContactWrapper = (Component: React.ComponentType) => {
  const Wrapper: React.FC = (props) => {

    return (
      <>
        {/* social media icons on side */}
        <div className={`md:fixed mt-[60px] md:mt-[170px] top-5 md:left-4 left-1 z-50 flex -translate-y-1/2 md:flex-col flex-row items-start justify-center w-full md:w-auto`}>
          <SMIcons href={"https://etsy.com/shop/CreationsKMP"} icon={FaEtsy} />
          <SMIcons href={"https://www.linkedin.com/in/kelli-libin-b5ba78151/"} icon={FaLinkedinIn} />
          <SMIcons href={"https://github.com/kmlibin"} icon={FaGithub} />
        </div>

        <ContactImages />

        {/* wrapper */}
        <div className="w-full">
          <Component {...props} />
        </div>
      </>
    );
  };
  return Wrapper;
};

export default NotHomeContactWrapper;
