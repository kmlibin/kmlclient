import React from "react";
//metadata
import { Metadata } from "next";
//components
import Contact from "./Contact";

export const metadata: Metadata = {
  title: "Contact | Libin Web Development",
  description:
    "Have questions or ready to start your project? Get in touch with Libin Web Development today. Let’s build a custom website tailored to your small business needs.",
  openGraph: {
    type: "website",
    url: "https://libinwebdevelopment.com/main/contact",
    title: "Contact | Libin Web Development",
    description:
      "Reach out to Libin Web Development to discuss your next website project. From custom designs to SEO-friendly solutions, I’m here to help your small business thrive online.",
    siteName: "Libin Web Development",
    images: "https://libinwebdevelopment.com/images/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
  referrer: "origin-when-cross-origin",
  authors: {
    name: "Libin Web Development",
    url: "https://kellidoesdev.com",
  },
  keywords:
    "contact web developer, freelance web developer, small business websites, custom website design, Next.js developer, contact Libin Web Development, Colorado Springs web developer, start a web project, website inquiries",
};

const page = () => {
  return <Contact />;
};

export default page;
