//metadata
import { Metadata } from "next";
//components

import Hero from "@/components/Home/Hero/Hero";
import PortfolioBanner from "@/components/Home/PortfolioBanner/Portfolio2Banner";
import HomeBanner from "@/components/Home/HomeBanner/HomeBanner";
import Info from "@/components/Home/InfoBanner/Info";
import SMIcons from "@/components/Wrapper/SMIcons";

//icons
import { FaEtsy, FaLinkedinIn, FaGithub } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Libin Web Development",
  description:
    "Libin Web Development specializes in creating fast, SEO-optimized, and custom websites for small businesses. Say goodbye to DIY hassles and let us build a website tailored to your needs, helping you stand out online and attract more clients.",
  openGraph: {
    type: "website",
    url: "https://libinwebdevelopment.com/",
    title: "Libin Web Development | Custom Websites for Small Businesses",
    description:
      "Libin Web Development offers professional website development tailored to small businesses. Our custom sites are designed for speed, SEO optimization, and a seamless user experience. Perfect for showcasing your brand and growing your business online.",
    siteName: "Libin Web Development",
    images: "https://libinwebdevelopment.com/images/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
  },
  referrer: "origin-when-cross-origin",
  authors: {
    name: "Libin Web Development",
    url: "https://kellidoesdev.com",
  },
  keywords:
    "web development, libin web development, custom websites, small business websites, Next.js developer, SEO optimization, Colorado Springs web design, frontend developer, user-friendly websites, mobile-responsive websites, freelance web developer, website speed, small business branding, website design for small businesses",
};

function Home() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/images/smalllogo.svg"
        fetchPriority="high"
        type="image/svg"
      />
      <link
        rel="preload"
        as="image"
        href="/images/newlogo.svg"
        fetchPriority="high"
        type="image/svg"
      />
      <div className="flex flex-col w-full h-full overflow-hidden">
        <div
          className={`fixed hidden sm:flex lg:mt-[5%] top-24 sm:top-15 lg:top-5 left-4 z-50 -translate-y-1/2 flex-col `}
        >
          <SMIcons href={"https://etsy.com/shop/CreationsKMP"} icon={FaEtsy} />
          <SMIcons
            href={"https://www.linkedin.com/in/kelli-libin-b5ba78151/"}
            icon={FaLinkedinIn}
          />
          <SMIcons href={"https://github.com/kmlibin"} icon={FaGithub} />
        </div>
        <Hero />
        <HomeBanner />
        <Info />
        <PortfolioBanner />
      </div>
    </>
  );
}

export default Home;
