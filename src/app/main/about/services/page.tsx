//metadata
import { Metadata } from "next";
//utils and content
import { ibm, fredoka } from "@/app/utils/fonts";
//images
import Image from "next/image";
import undraw3 from "./images/undraw3.svg";
//paths
import paths from "@/app/paths";
//components
import Button from "@/components/Button";
import AdditionalInfo from "./AdditionalInfo";
import RollImage from "../../../../components/RollImage";
import ZoomHeading from "@/components/ZoomHeading";
import ServicesGrid from "./bentocomponents/ServicesGrid";
import Steps from "./Steps";
import MobileSteps from "./MobileSteps";
import { servicesSchema } from "@/lib/schema/services";

export const metadata: Metadata = {
  title: "Web Development Packages | Libin Web Development",
  description:
    "Discover affordable web development packages starting at $400. Each package includes a custom-coded website, SEO optimization, responsive design, hosting options, and more to help your business shine online.",
  alternates: {
    canonical: "https://libinwebdevelopment.com/main/about/services",
  },
  openGraph: {
    type: "website",
    url: "https://libinwebdevelopment.com/main/about/services",
    title: "Web Development Packages | Libin Web Development",
    description:
      "Learn about our affordable website packages designed for small businesses. Starting at $400, get a custom-built  site with responsive design, SEO, hosting options, and up to four pages included. Add extra pages or services to suit your needs.",
    siteName: "Libin Web Development",
    images: "https://libinwebdevelopment.com/images/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "origin-when-cross-origin",
  authors: {
    name: "Libin Web Development",
    url: "https://libinwebdevelopment.com",
  },
  keywords:
    "web development pricing, small business websites, affordable website packages, custom website design, Next.js websites, SEO-friendly websites, mobile-optimized websites, responsive design, hosting services, freelance web developer, additional web development services, domain registration support, custom contact forms",
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <div className="w-full flex  flex-col bg-customWhite items-center relative">
        {/* rainbows */}
        <div className="h-full min-w-[100vw] md:min-w-[99vw] md:max-w-[99vw] overflow-hidden absolute">
          <div className="absolute bottom-[0vh] -right-[10%] rainbow-circle w-[500px] rounded-full h-[500px]"></div>
          <div className="absolute -top-[12vh] -left-[12%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
        </div>

        <section className="md:w-4/5 w-full flex md:flex-row flex-col justify-evenly items-center md:mt-[180px] mt-[5rem] md:py-14 md:pl-5 rounded-lg md:bg-opacity-70 md:bg-customWhite z-50 ">
          <div
            className={`${ibm.className} tracking-wide  md:w-full relative flex flex-col items-center justify-center gap-4 md:gap-16`}
          >
            <div className="w-full flex flex-col items-start justify-center  ">
              <ZoomHeading
                as="h2"
                className={`${fredoka.className} text-5xl text-center mb-5 md:mb-2`}
              >
                Website Launch Package
              </ZoomHeading>
              <ZoomHeading
                as="h4"
                className={`${ibm.className} text-[16px] md:text-xl text-center md:text-left`}
              >
                Get a custom-built website - <br></br> designed, developed, and
                optimized for your business.
              </ZoomHeading>
              <div className="md:hidden bg-customWhite bg-opacity-60 w-full flex justify-center items-center p-5 my-5">
                <RollImage delay={500}>
                  <Image
                    src={undraw3}
                    alt="people building a website"
                    height={200}
                    className="z-10"
                  />
                </RollImage>
              </div>
            </div>
          </div>
        </section>
        <ServicesGrid />

        {/* desktop */}
        <div className="hidden md:block">
          <Steps />
        </div>

        {/* mobile */}
        <div className="md:hidden">
          <MobileSteps />
        </div>

        <AdditionalInfo />
        <div className="h-[150px] bg-customBlue bg-opacity-20 w-full flex items-center justify-center mb-10 z-[50]">
          <Button
            path={paths.contactPath()}
            text="Get Started"
            label="Contact us"
          />
        </div>
      </div>
    </>
  );
};

export default page;
