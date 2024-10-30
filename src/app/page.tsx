import ContactWrapper from "@/components/Wrapper/ContactWrapper";
import Hero from "@/components/Home/Hero";
import PortfolioBanner from "@/components/Home/PortfolioBanner";
import HomeBanner from "@/components/Home/HomeBanner";
import Info from "@/components/Home/Info";

function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Hero />
      <HomeBanner /> 
      <PortfolioBanner />
      <Info />
      
     
    </div>
  );
}

export default ContactWrapper(Home);
