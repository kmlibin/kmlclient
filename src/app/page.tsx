import ContactWrapper from "@/components/Wrapper/ContactWrapper";

import Hero from "@/components/Home/Hero";

import PortfolioGallery from "@/components/Home/PortfolioGallery";
import HomeBanner from "@/components/Home/HomeBanner";

function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Hero />
      <HomeBanner />
      <PortfolioGallery />
    </div>
  );
}

export default ContactWrapper(Home);
