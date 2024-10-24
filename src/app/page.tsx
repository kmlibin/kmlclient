import ContactWrapper from "@/components/Wrapper/ContactWrapper";

import Hero from "@/components/Home/Hero";

import PortfolioGallery from "@/components/Home/PortfolioGallery";

function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Hero />
      
        <PortfolioGallery />
    
    </div>
  );
}

export default ContactWrapper(Home);
