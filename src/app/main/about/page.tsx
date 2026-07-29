import React from "react";
//metadata
import { Metadata } from "next";
//components
import About from "./About";
//jsonld
import { aboutSchema } from "@/lib/schema/about";

export const metadata: Metadata = {
  title: "About Me | Libin Web Development",
  description:
    "Hi, I'm a freelance web developer in Colorado Springs specializing in custom, modern websites for small businesses. With a focus on performance, responsive design, and SEO, I create tailored websites that help your business thrive online.",
  alternates: {
  canonical: "https://libinwebdevelopment.com/main/about",
},
    openGraph: {
    type: "website",
    url: "https://libinwebdevelopment.com/main/about",
    title: "About Me | Libin Web Development",
    description:
      "Meet the developer behind Libin Web Development! I specialize in building fast, responsive, and SEO-friendly websites for small businesses. Learn more about my approach to creating custom websites that reflect your unique brand and goals.",
    siteName: "Libin Web Development",
    images: "https://libinwebdevelopment.com/images/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex:false,
    nocache: false,
  },
  referrer: "origin-when-cross-origin",
  authors: {
    name: "Libin Web Development",
    url: "https://libinwebdevelopment.com",
  },
  keywords:
    "about freelance web developer, custom website design, remote web developer, small business web development, Next.js developer, responsive websites, SEO-friendly websites, professional web design, tailored website solutions, affordable website development, web development for small businesses, Colorado Springs web developer",
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />
    <div className="bg-customWhite bg-opacity-0">
      {" "}
      <link
        rel="preload"
        as="image"
        href="/images/bw8.jpg"
        fetchPriority="high"
        type="image/jpg"
      />
      <About />
    </div>
    </>
  );
};

export default page;
