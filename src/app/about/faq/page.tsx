import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import FAQ from "./FAQ";
import NotHomeContactWrapper from "@/components/Wrapper/NotHomeContactWrapper";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <FAQ />
    </>
  );
};

export default page;
