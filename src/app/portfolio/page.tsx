import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import PortfolioPage from "./PortfolioPage";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <PortfolioPage />
    </>
  );
};

export default page;
