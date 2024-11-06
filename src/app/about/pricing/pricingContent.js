import design from "../../../../public/images/design.svg";
import communication from "../../../../public/images/communication.svg";
import responsive from "../../../../public/images/responsive.svg";
import multiple from "../../../../public/images/multiple.svg";
import message from "../../../../public/images/message.svg";
import seo from "../../../../public/images/seo.svg";
import hosting from "../../../../public/images/hosting.svg";
import { fredoka, ibm } from "@/app/utils/fonts";

export const pricingCards = [
  {
    title: "Custom Next.js Website",
    alt: "design",
    src: design,
    text: "A unique, fully custom-designed website crafted to reflect your brand’s identity. Built with performance and scalability in mind, your site will be fast, SEO-friendly, and seamlessly adapt to any device, ensuring an exceptional experience for your visitors across all screen sizes.",
    isList: false,
  },
  {
    title: "Direct Communication & Personalized Support",
    alt: "responsive design",
    src: communication,
    text: "You’ll work directly with me throughout the process, ensuring your site reflects your vision. I’ll be available for ongoing support to address any questions or minor adjustments.",
    isList: false,
  },
  {
    title: "Responsive, Mobile-Optimized Design",
    alt: "responsive design",
    src: responsive,
    text: "Your website will be fully responsive, ensuring it looks and functions seamlessly on mobile, tablet, and desktop devices.",
    isList: false,
  },
  {
    title: "Up to Four Pages",
    alt: "responsive design",
    src: multiple,
    text: "Your website includes up to four pages, covering the essentials for a professional online presence. Need more pages? No problem—each additional page can be added for just $50.",
    isList: false,
  },
  {
    title: "Contact Form Integration",
    alt: "responsive design",
    src: message,
    text: "Set up a custom contact form for client inquiries and engagement. Note: Clients will need an EmailJS account (using the free tier). See FAQ for details.",
    isList: false,
  },
  {
    title: "Optimized for Speed & SEO",
    alt: "responsive design",
    src: seo,
    text: "Your website will be built with Next.js, a framework known for its exceptional speed and performance—key factors that search engines love. With built-in SEO features like server-side rendering (SSR), a custom robots.txt, and an auto-generated sitemap, your site will be fully optimized for faster indexing and better visibility in search results.",
    isList: false,
  },
  {
    title: (
      <p className={`${fredoka.className} text-2xl w-full`}>
        Reliable Hosting & Content Updates <span className={`${ibm.className} text-lg`}> &nbsp;- $60 per year</span>
      </p>
    ),
    alt: "hosting",
    src: hosting,
    text: (
      <>
        <ul className="list-disc list-outside pl-10 text-md space-y-2">
          <li>Fast, secure hosting with Netlify</li>
          <li>
            Regular content updates included (excludes major redesigns or adding
            new features)
          </li>
          <li>
            Video Support: Showcase videos (up to 75MB) to enhance customer
            engagement
          </li>
        </ul>
      </>
    ),
    isList: true,
  },
];
