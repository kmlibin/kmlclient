//metadata
import { Metadata } from "next";
//components
import HomeContactWrapper from "@/components/Wrapper/HomeContactWrapper";
import Hero from "@/components/Home/Hero/Hero";
import PortfolioBanner from "@/components/Home/PortfolioBanner/Portfolio2Banner";
import HomeBanner from "@/components/Home/HomeBanner/HomeBanner";
import Info from "@/components/Home/InfoBanner/Info";


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
    "web development, custom websites, small business websites, Next.js developer, SEO optimization, Colorado Springs web design, user-friendly websites, mobile-responsive websites, freelance web developer, website speed, small business branding, website design for small businesses",
};

function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Hero />
      <HomeBanner />
      <Info />
      <PortfolioBanner />
    </div>
  );
}

export default HomeContactWrapper(Home);
