import React from "react";
//metadata
import { Metadata } from "next";
//components
import PortfolioPage from "./PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio | Libin Web Development",
  description:
    "Explore my portfolio of custom-built websites for small businesses. See how I’ve helped clients create fast, responsive, and SEO-optimized sites tailored to their unique needs and goals.",
  openGraph: {
    type: "website",
    url: "https://libinwebdevelopment.com/main/portfolio",
    title: "Portfolio | Libin Web Development",
    description:
      "Browse my portfolio to see examples of websites I've designed and developed for small businesses. From custom designs to responsive and SEO-friendly builds, discover how I can bring your vision to life.",
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
    "portfolio, freelance web developer, small business websites, custom website design, Next.js developer, responsive websites, SEO-friendly websites, professional web design, client work, website examples, Colorado Springs web developer, custom website portfolio",
};

const page = () => {
  return <PortfolioPage />;
};

export default page;
