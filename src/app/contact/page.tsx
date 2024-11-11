import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Contact from "./Contact";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <Contact />
    </>
  );
};

export default page;
