"use client";
import React, { useState, useRef } from "react";
//libraries
import emailjs from "@emailjs/browser";
import { LuSend } from "react-icons/lu";

//components
import SuccessErrorModal from "./SuccessErrorModal";
//fonts
import { ibm, ibmBold } from "../../utils/fonts";
import InputField from "./InputField";
//components
import SelectField from "./SelectField";

type formState = {
  name: string;
  email: string;
  message: string;
  hasDomain: string;
  domainProvider?: string;
  hostingPreference: string;
  otherHostingPlatform?: string;
};
const ContactForm = () => {
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
    hasDomain: "",
    domainProvider: "",
    hostingPreference: "",
    otherHostingPlatform: "",
  });

  //handles changes to inputs
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

    //rough rate limiting - mmaybe find a third party or use server actions
    const lastSent = localStorage.getItem("lastSentTime");
    const now = Date.now();
    if (lastSent && now - parseInt(lastSent) < 60000) {
      setSubmissionStatus({
        heading: "Oops!",
        message: "Please wait before sending another message.",
      });
      setShowErrorOrSuccessModal(true);
      return;
    }
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
      localStorage.setItem("lastSentTime", now.toString());
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
        hasDomain: "",
        domainProvider: "",
        hostingPreference: "",
        otherHostingPlatform: "",
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
    <div className="w-full flex items-end justify-center md:justify-end">
      <form
        className="space-y-6 w-[95%] md:w-3/4 p-8 bg-customWhite rounded-lg shadow-lg border-customGold border-4 border-opacity-90"
        ref={formRef}
        aria-labelledby="contact-form-title"
        role="form"
        onSubmit={handleSubmit}
      >
        <h3
          className={`${ibmBold.className} text-2xl  text-center sm:text-left mb-4`}
        >
          Let&apos;s Bring Your Vision to Life!
        </h3>

        <InputField
          label="Name"
          name="name"
          value={formData.name}
          error={formErrors.name}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          name="email"
          value={formData.email}
          error={formErrors.email}
          onChange={handleChange}
          type="email"
        />
        <SelectField
          label="Do you have a domain purchased?"
          name="hasDomain"
          value={formData.hasDomain}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
          onChange={handleChange}
        />

        {formData.hasDomain === "yes" && (
          <InputField
            label="Where did you buy your domain from?"
            name="domainProvider"
            value={formData.domainProvider || ""}
            onChange={handleChange}
          />
        )}

        <SelectField
          label="Do you know if you're planning to host with me or somewhere else?"
          name="hostingPreference"
          value={formData.hostingPreference}
          options={[
            { value: "hostWithYou", label: "Host with you" },
            { value: "hostElsewhere", label: "Host somewhere else" },
            { value: "hostUndecided", label: "Undecided" },
          ]}
          onChange={handleChange}
        />

        {formData.hostingPreference === "hostElsewhere" && (
          <InputField
            label="What hosting platform?"
            name="otherHostingPlatform"
            value={formData.otherHostingPlatform || ""}
            onChange={handleChange}
          />
        )}

        <div className={`${ibm.className} flex flex-col tracking-wider`}>
          <label htmlFor="message" className=" text-[16px]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`w-full rounded-xl border-2 p-3 focus:outline-none ${
              formErrors.message
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 border-opacity-50"
            }`}
            required
            value={formData.message}
            onChange={handleChange}
            aria-describedby="message-error"
          ></textarea>
          {formErrors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-500">{formErrors.message}</p>
          )}
        </div>

        <button
         aria-label="Submit Form"
          type="submit"
          className={`${ibm.className} flex items-center justify-center gap-3 w-full z-10 overflow-hidden text-customWhite bg-customIndigo btn relative py-3 px-6 rounded-lg`}
        >
          {buttonStatus} <LuSend className="mt-[.1rem]" />
        </button>
      </form>
      {/* Success/Error Modal */}
      {showErrorOrSuccessModal && (
        <SuccessErrorModal
          setIsOpen={setShowErrorOrSuccessModal}
          submissionStatus={submissionStatus}
          setSubmissionStatus={setSubmissionStatus}
           aria-live="assertive"
        />
      )}
    </div>
  );
};

export default ContactForm;
