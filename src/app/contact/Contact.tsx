"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import SuccessErrorModal from "./SuccessErrorModal";

import { ibm, fredoka } from "../utils/fonts";
type formState = {
  name: string;
  email: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [buttonStatus, setButtonStatus] = useState<string>("Send Message");
  const [showErrorOrSuccessModal, setShowErrorOrSuccessModal] =
    useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    heading: string | null;
    message: string | null;
  } | null>({
    heading: null,
    message: null,
  });
  const [formErrors, setFormErrors] = useState<{
    name: string | null;
    email: string | null;
    message: string | null;
  }>({
    name: null,
    email: null,
    message: null,
  });
  const [formData, setFormData] = useState<formState>({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    //remember to clear the errors on change
    setFormErrors({ ...formErrors, [name]: null });
  };

  //validate data, submit data to emailJS, reset form state
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonStatus("Loading...");

    //check for errors and email validation
    const newFormErrors = {
      name: !formData.name ? "Please enter your name" : null,
      email: !formData.email
        ? "Please enter your email"
        : !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
            formData.email
          )
        ? "Please enter a valid email address"
        : null,
      message: !formData.message ? "Please enter your message" : null,
    };

    setFormErrors(newFormErrors);

    // checks for errors in the form
    if (Object.values(newFormErrors).some((error) => error !== null)) {
      setButtonStatus("Submit");
      return;
    }

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        "template_jwbblc5",
        formRef.current || "",
        process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
      );

      console.log(result);
      setSubmissionStatus({
        heading: "You're all set!",
        message:
          "Thanks for your sending a message to Libin Web Development. Please allow 1-2 business days for a response.",
      });

      setButtonStatus("Submit");
      setShowErrorOrSuccessModal(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setButtonStatus("Submit");
      setSubmissionStatus({
        heading: "Error",
        message:
          "Oh no! There was an error sending your message. Please try again later or email email@email directly.",
      });
      setShowErrorOrSuccessModal(true);
    }
  };

  return (
    <div className=" relative bg-customWhite flex w-full min-h-[100vh] overflow-hidden">
      <div className="absolute -bottom-[20rem] -right-[15rem] rainbow-circle w-[1100px] rounded-full h-[1100px] "></div>
      <div className="flex justify-center items-start w-full mt-[180px] mb-10">
        <div className="w-1/3 flex items-center justify-center tracking-wide">
          <div className="z-10 w-full flex flex-col justify-center items-start">
            <h2 className={`${fredoka.className} text-5xl mb-4`}>
              Ready to Connect?
            </h2>
            <p className={`${ibm.className} text-lg mb-8`}>
              If you have any questions, see my{" "}
              <Link
                className="hover:cursor text-customBlue hover:text-customTurquoise"
                href="/about/faq"
              >
                FAQ
              </Link>{" "}
              or use the form to send me a message!
            </p>
            <div className="flex flex-col w-full border-2 border-gray-200 shadow-lg p-8 bg-customWhite">
              <p className={`${ibm.className} text-lg mb-2`}>
                If you're ready to start chatting about a custom site:
              </p>

              <ul className={`list-disc pl-8 ${ibm.className} text-lg`}>
                <li>
                  Please make sure you look at{" "}
                  <Link
                    href={"/faq/#gettingStarted"}
                    className="hover:cursor text-customBlue hover:text-customTurquoise"
                  >
                    Getting Started
                  </Link>{" "}
                  in my FAQ
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative flex items-center justify-end">
          {/* rainbows */}

          <form
            className="space-y-6 w-3/4 p-8 bg-white rounded-lg shadow-lg"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>

            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full rounded-xl border-2 p-3 focus:outline-none ${
                  formErrors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-darkTeal focus:ring-darkTeal"
                }`}
                required
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && (
                <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                className={`w-full rounded-xl border-2 p-3 focus:outline-none ${
                  formErrors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-darkTeal focus:ring-darkTeal"
                }`}
                required
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`w-full rounded-xl border-2 p-3 focus:outline-none ${
                  formErrors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-darkTeal focus:ring-darkTeal"
                }`}
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {formErrors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              {buttonStatus}
            </button>
          </form>
        </div>
      </div>
      {/* Success/Error Modal */}
      {showErrorOrSuccessModal && (
        <SuccessErrorModal
          setIsOpen={setShowErrorOrSuccessModal}
          submissionStatus={submissionStatus}
          setSubmissionStatus={setSubmissionStatus}
   
        />
      )}
    </div>
  );
};

export default Contact;
