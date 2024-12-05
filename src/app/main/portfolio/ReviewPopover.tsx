"use client";
import { useState } from "react";
import { StaticImageData } from "next/image";

import { Fade } from "react-awesome-reveal";
import { createPortal } from "react-dom";

import { IoMdClose } from "react-icons/io";

type ReviewProps = {
  frontImage?: StaticImageData | string;

  complete?: boolean;
  review?: string;

  isHome?: boolean;
};

export default function ReviewSection({
  complete,
  review,
  isHome,
}: ReviewProps) {
  const [popup, setPopup] = useState(false);
  const [smallPopup, setSmallPopup] = useState(false);
  const [showFullReview, setShowFullReview] = useState(false);

  const handleShowPopup = () => setSmallPopup(true);
  const handleClosePopup = () => setSmallPopup(false);

  const handleToggleReviewOn = () => {
    setPopup(true);
    setTimeout(() => {
      setShowFullReview(!showFullReview);
    }, 1000);
  };

  // toggle review
  const handleToggleReviewOff = () => {
    setShowFullReview(false);
    setPopup(false);
  };

  // truncates text to 30 words, use for small cubes
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <>
      {/* //normal size */}
      <p
        className={` ${
          !complete ? "text-center" : ""
        } text-lg w-2/3 bg-customWhite text-blackTextFont p-7 relative rounded-lg sm:block hidden`}
      >
        {complete
          ? review && truncateText(review, 40)
          : "Under Construction, Check Back Soon!"}

        {/* show more button only if the text is truncated */}
        {review && !showFullReview && review.split(" ").length > 40 && (
          <span
            className="text-customBlue hover:underline cursor-pointer"
            onClick={handleToggleReviewOn}
          >
            see more
          </span>
        )}
      </p>
      {/* popover for show more */}
      {popup && (
        <Fade duration={500}>
          <div className="absolute flex flex-col items-center justify-center -top-2 left-0 mt-2 p-4 h-full bg-customWhite shadow-lg border border-gray-300 w-full z-30">
            <p
              className={`${
                isHome ? "w-[70%]" : "w-5/6"
              } text-lg text-blackTextFont`}
            >
              {review}
            </p>
            <button
              onClick={handleToggleReviewOff}
              className="text-customBlue hover:underline mt-2 absolute  bottom-[5%]  p-6 "
            >
              ...show less
            </button>
          </div>
        </Fade>
      )}

      {/* small screen */}

      {complete ? (
        <>
          {/* Button to show review on small screens */}
          <button
            className="block sm:hidden bg-customBlue text-white py-2 px-4 rounded"
            onClick={handleShowPopup}
          >
            Read Review
          </button>
        </>
      ) : (
        <p
          className={` ${
            !complete ? "text-center" : ""
          } block sm:hidden text-sm w-2/3 bg-customWhite text-blackTextFont p-7 relative rounded-lg`}
        >
          {" "}
          Under Construction, Check Back Soon!
        </p>
      )}

      {/* popover for show more */}
      {
        smallPopup && (
          // createPortal(

          <div className="sm:hidden absolute w-[90vw] h-full z-[900]">
            <div className="bg-white w-[90vw] h-full overflow-y-auto z-[900] p-6 rounded-lg shadow-lg relative">
              <button
                className="absolute top-4 right-4"
                onClick={handleClosePopup}
              >
                <IoMdClose className="text-customBlue" />
              </button>{" "}
              <Fade>
                <p className="tracking-wider text-blackTextFont text-xs mt-5">
                  {review}
                </p>{" "}
              </Fade>
            </div>
          </div>
        )

        // document.body
        //@ts-ignore
        // document.getElementById("popup-container")  // Ensure the popup is appended to the correct container
        // )
      }
    </>
  );
}
