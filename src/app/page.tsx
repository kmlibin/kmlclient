import ContactWrapper from "@/components/Wrapper/ContactWrapper";
import Hero from "@/components/Home/Hero";
import PortfolioBanner from "@/components/Home/Portfolio2Banner";
import HomeBanner from "@/components/Home/HomeBanner";
import Info from "@/components/Home/Info";

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

export default ContactWrapper(Home);
