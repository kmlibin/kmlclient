import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import About from "./About";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <About />
    </>
  );
};

export default page;
