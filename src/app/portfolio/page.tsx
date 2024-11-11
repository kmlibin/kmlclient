import Navbar from "@/components/Navbar/Navbar";
import PortfolioGallery from "./PortfolioGallery";
import React from "react";
import PortfolioPage from "./PortfolioPage";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      {/* <PortfolioGallery /> */}
      <PortfolioPage />
    </>
  );
};

export default page;
