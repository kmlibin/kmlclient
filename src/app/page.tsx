import HomeContactWrapper from "@/components/Wrapper/HomeContactWrapper";
import Hero from "@/components/Home/Hero/Hero";
import PortfolioBanner from "@/components/Home/PortfolioBanner/Portfolio2Banner";
import HomeBanner from "@/components/Home/Hero/HomeBanner";
import Info from "@/components/Home/InfoBanner/Info";

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
