"use server";
//libraries
import { Resend } from "resend";
import validator from "validator";
//components
import SendTemplate from "../main/contact/EmailTemplates/SendTemplate";
import ReceiptTemplate from "../main/contact/EmailTemplates/ReceiptTemplate";

type formState = {
  name: string;
  email: string;
  message: string;
  hasDomain: string;
  domainProvider: string;
  hostingPreference: string;
  otherHostingPlatform: string;
};

export async function sendEmail(formData: formState) {
  // console.log("formData", formData);
  try {
    const kmlEmail = process.env.KML_EMAIL;
    if (!kmlEmail) {
      return {
        success: false,
        heading: "Error Sending",
        message:
          "Error sending message - please email kelli@libinwebdevelopment.com for further assistance",
      };
    }

    //extract values
    const customerName = formData.name?.toString().trim();
    const customerEmail = formData.email?.toString().trim();
    const customerMessage = formData.message?.toString().trim();
    const hasDomain = formData.hasDomain?.toString().trim();
    const domainProvider = formData.domainProvider?.toString().trim();
    const otherHostingPlatform = formData.otherHostingPlatform
      ?.toString()
      .trim();
    const hostingPreference = formData.hostingPreference?.toString().trim();

    //form validation was on frontend, confirm values on backend
    if (typeof customerName !== "string" || customerName.length < 1) {
      return {
        heading: "Form Error",
        message: "Please enter a valid name",
        success: false,
      };
    }

    if (
      typeof customerMessage !== "string" ||
      customerMessage.trim().split(/\s+/).length < 5
    ) {
      return {
        success: false,
        heading: "Form Error",
        message: "Please provide a more detailed message (at least 5 words)",
      };
    }

    if (
      typeof customerEmail !== "string" ||
      !customerEmail ||
      !validator.isEmail(customerEmail)
    ) {
      return {
        heading: "Form Error",
        message: "Please enter a valid email address.",
        success: false,
      };
    }

    //sanitize inputs- not email, as it escapes characters like periods
    const safeName = validator.escape(customerName);
    const safeMessage = validator.escape(customerMessage);
    const safeEmail = customerEmail.trim();
    const safeDomainProvider = validator.escape(domainProvider);
    const safeHostingPreference = validator.escape(hostingPreference);
    const safeHostingPlatform = validator.escape(otherHostingPlatform);
    const safeHasDomain = validator.escape(hasDomain);

    //connect to resend
    const resendKey = process.env.RESEND_API_KEY;
    const resend = new Resend(resendKey);

    //if no resend key
    if (!resendKey) {
      return {
        success: false,
      };
    }

    //eventually put from email in .env
    //if successful validation, send email to client (libinwebdev)

    const response = await resend.emails.send({
      from: kmlEmail,
      to: kmlEmail,
      subject: "New Inquiry for Libin Web Development",
      react: SendTemplate({
        customerName: safeName,
        customerMessage: safeMessage,
        customerEmail: safeEmail,
        hasDomain: safeHasDomain,
        domainProvider: safeDomainProvider,
        hostingPreference: safeHostingPreference,
        otherHostingPlatform: safeHostingPlatform,
      }),
    });

    if (response.error) {
      return {
        success: false,
      };
    }

    //if no error, send confirmation email to customer
    //eventually put from in .env
    const newResponse = await resend.emails.send({
      from: kmlEmail,
      to: customerEmail,
      subject: "Success: Your Submission to Libin Web Development!",
      react: ReceiptTemplate({
        customerName: safeName,
        customerMessage: safeMessage,
        customerEmail: safeEmail,
        hasDomain: safeHasDomain,
        domainProvider: safeDomainProvider,
        hostingPreference: safeHostingPreference,
        otherHostingPlatform: safeHostingPlatform,
      }),
    });

    // console.log("new response", newResponse);
    //if unsuccessful sending receipt
    if (newResponse.error) {
      return {
        heading: "Successfully sent message!",
        message:
          "Your message was sent to Libin Web Development, but there was an issue sending a receipt to your email address",
        success: true,
      };
    }
    //both are successful
    if (!newResponse.error) {
      return {
        heading: "Successfully sent message!",
        message: "Successfully sent receipt to your email address!",
        success: true,
      };
    }
  } catch (err: any) {
    console.log("response2", err);
    return {
      heading: "Something went wrong",
      message: "Please contact kelli@libinwebdevelopment for assistance",
      success: false,
    };
  }
}
