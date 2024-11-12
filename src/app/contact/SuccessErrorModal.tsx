"use client";
import React from "react";
//react icons
import { IoMdClose } from "react-icons/io";
import { fredoka, ibm } from "../utils/fonts";
import { useRouter } from "next/navigation";
import Fireworks from "./Fireworks";
type SuccessOrErrorModalProps = {
  setIsOpen: (isOpen: boolean) => void;
  submissionStatus: { heading: string | null; message: string | null } | null;
  setSubmissionStatus: React.Dispatch<
    React.SetStateAction<{
      heading: string | null;
      message: string | null;
    } | null>
  >;
};

const SuccessErrorModal = ({
  setIsOpen,
  submissionStatus,
  setSubmissionStatus,
}: SuccessOrErrorModalProps) => {
  const router = useRouter();
  const handleClose = () => {
    if (submissionStatus && submissionStatus.heading === "You're all set!") {
      router.push("/");
      setIsOpen(false);
      setSubmissionStatus(null);
    }

    setIsOpen(false);
    setSubmissionStatus(null);
  };
  return (
    <>
      {submissionStatus?.heading == "You're all set!" ? (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <Fireworks id="tsparticles" />
        </div>
      ) : (
        <div className="fixed inset-0  z-50 bg-black bg-opacity-60"></div>
      )}
      {/* modal start */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative w-full max-w-sm transform rounded-xl bg-customWhite p-6 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <h5
              className={`${fredoka.className} w-full border-b-2 border-lighterTeal pb-4 text-center text-lg font-semibold text-darkestTeal`}
            >
              {submissionStatus?.heading}
            </h5>
            <button
              className="text-gray-500 hover:text-darkestTeal"
              onClick={() => {
                setIsOpen(false);
                setSubmissionStatus(null);
              }}
            >
              <IoMdClose
                size={24}
                className="absolute right-4 top-4 text-xl text-gray-500 hover:text-darkestTeal"
              />
            </button>
          </div>

          {/* text */}
          <div className={`${ibm.className} mb-6 text-center text-darkestTeal`}>
            <p>{submissionStatus?.message}</p>
          </div>

          <div className="flex justify-center">
            <button
              className={`${fredoka.className} mt-4 w-full border-2 border-lighterTeal bg-darkTeal py-3 tracking-wider text-lightGrey shadow-md transition-all duration-300 hover:bg-customGold active:translate-y-[2px] active:scale-[0.95] active:shadow-none`}
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessErrorModal;
