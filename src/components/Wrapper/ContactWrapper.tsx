import React from "react";

//libraries
import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
//components
import SMIcons from "./SMIcons";
import ContactImages from "./ContactImages";

const ContactWrapper = (Component: React.ComponentType) => {
  const Wrapper: React.FC = (props) => {
    return (
      <>
        {/* social media icons on side */}

        <div className="fixed mt-[5%] top-5 left-4 z-10 flex -translate-y-1/2 flex-col">
          <SMIcons href={"https://github.com/kmlibin"} icon={FaFacebook} />
          <SMIcons href={"https://github.com/kmlibin"} icon={FaLinkedinIn} />
          <SMIcons href={"https://github.com/kmlibin"} icon={FiInstagram} />
        </div>

        <ContactImages />

        {/* wrapper */}
        <div className=" w-full">
          <Component {...props} />
        </div>
      </>
    );
  };
  return Wrapper;
};

export default ContactWrapper;
