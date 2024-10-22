"use client";
import React from "react";
import PortfolioCard from "./Portfolio";
import "./Portfolio.css";

const PortfolioGallery = () => {
  const portfolioItems = [
    {
      id: 1,
      height: "250px",
      frontImage:
        "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80&auto=format&fit=crop",
    },
    {
      id: 2,
      height: "175px",
      frontImage:
        "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80&auto=format&fit=crop",
    },
    {
      id: 3,
      height: "250px",
      frontImage:
        "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80&auto=format&fit=crop",
    },
  ];

  const portfolioItems2 = [
    {
      id: 4,
      height: "175px",
      frontImage:
        "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80&auto=format&fit=crop",
    },
    {
      id: 5,
      height: "250px",
      frontImage:
        "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80&auto=format&fit=crop",
    },
    {
      id: 6,
      height: "250px",
      frontImage:
        "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80&auto=format&fit=crop",
    },
  ];

  const portfolioItems3 = [
    {
      id: 7,
      height: "250px",
      frontImage:
        "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80&auto=format&fit=crop",
    },
    {
      id: 8,
      height: "443px",
      frontImage:
        "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop",
      backImage:
        "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80&auto=format&fit=crop",
    },

  ];

  return (
    <div className="gallery">
      <div className="flex flex-col justify-start gap-4">
        {portfolioItems.map((item) => (
          <PortfolioCard
            key={item.id}
            height={item.height}
            frontImage={item.frontImage}
            backImage={item.backImage}
          />
        ))}
      </div>
      <div className="flex flex-col justify-start gap-4 ">
        {portfolioItems2.map((item) => (
          <PortfolioCard
            key={item.id}
            height={item.height}
            frontImage={item.frontImage}
            backImage={item.backImage}
          />
        ))}
      </div>
      <div className="flex flex-col justify-start gap-4">
        {portfolioItems3.map((item) => (
          <PortfolioCard
            key={item.id}
            height={item.height}
            frontImage={item.frontImage}
            backImage={item.backImage}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;
