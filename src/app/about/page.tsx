import Navbar from "@/components/Navbar";
import React from "react";


type Props = {};

const page = (props: Props) => {
  return <>
  <Navbar />
  <div className="h-[100vh] bg-customWhite">page</div>;
  </>
};

export default page;
