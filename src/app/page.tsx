import ContactWrapper from "@/components/Wrapper/ContactWrapper";

import Hero from "@/components/Home/Hero";

import PortfolioGallery from "@/components/Home/PortfolioGallery";

function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Hero />
      <div className="w-full  bg-customIndigo justify-center items-center ">
        <PortfolioGallery />
      </div>
    </div>
  );
}

export default ContactWrapper(Home);
