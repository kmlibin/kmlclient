
import React from "react";
//metadata
import { Metadata } from "next";
//components
import FAQ from "./FAQ";
export const metadata: Metadata = {
  title: "FAQ | Libin Web Development",
  description:
    "Have questions about our web development services? Find answers to the most common questions about pricing, custom websites, SEO, mobile responsiveness, and more on our FAQ page.",
  openGraph: {
    type: "website",
    url: "https://libinwebdevelopment.com/main/about/faq",
    title: "FAQ | Libin Web Development",
    description:
      "Learn more about how Libin Web Development helps small businesses thrive online. Our FAQ covers topics like pricing, process, hosting, SEO, and what sets our services apart from DIY platforms.",
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
    "FAQ, web development questions, small business websites, custom web development, SEO FAQs, website hosting, responsive design, pricing for web development, web developer process, freelance web developer, Next.js websites, custom website design",
};


const page = () => {
  return (
      <FAQ />
  );
};

export default page;
