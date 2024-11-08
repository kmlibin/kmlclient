import Navbar from "@/components/Navbar/Navbar";
import PortfolioGallery from "./PortfolioGallery";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <PortfolioGallery />
    </>
  );
};

export default page;
