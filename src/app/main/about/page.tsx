import React from "react";
//metadata
import { Metadata } from "next";
//components
import About from "./About";

export const metadata: Metadata = {
  title: "About Me | Libin Web Development",
  description:
    "Hi, I'm a freelance web developer specializing in custom Next.js websites for small businesses. With a focus on performance, responsive design, and SEO, I create tailored websites that help your business thrive online.",
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
    "about freelance web developer, custom website design, remote web developer, small business web development, Next.js developer, responsive websites, SEO-friendly websites, professional web design, tailored website solutions, affordable website development, web development for small businesses, Colorado Springs web developer",
};

const page = () => {
  return (
    <>
      {" "}
      <link
        rel="preload"
        as="image"
        href="/images/bw8.jpg"
        fetchPriority="high"
        type="image/jpg"
      />
      <About />
    </>
  );
};

export default page;
