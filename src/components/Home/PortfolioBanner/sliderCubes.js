//images
import logosmall from "../../../app/portfolioImages/logosmall.webp";
import cw from "../../../app/portfolioImages/cw.jpg";
import cw2 from "../../../app/portfolioImages/cw2.jpg";
import fittees from "../../../app/portfolioImages/fittees.png";
import fittees2 from "../../../app/portfolioImages/fittees2.png";
import fitteeslogo from "../../../app/portfolioImages/goldpng.png";
import kl from "../../../../public/images/icon.png";
import kellinetlify from "../../../app/portfolioImages/kellinetlify.png";
import kellinetlify2 from "../../../app/portfolioImages/kellinetlify2.png";
import putnitz from "../../../app/portfolioImages/putnitzscreen.webp";
import putnitz2 from "../../../app/portfolioImages/putnitzscreen2.webp";
import putnitzlogo from "../../../app/portfolioImages/putnitzlogo.png";
export const sliderItems = [
  {
    id: 4,
    height: "70vh",
    logo: putnitzlogo,
    owner: "Dan",
    business: "Putnitz Devops",
    cube: true,
    frontImage: putnitz,
    complete: true,
    link: "https://putnitz.com/",
    review: `Kelli took my vague, hand-wavy client ideas about "the vibe of the
website" and "experience of the viewer" and turned it into exactly what
I was looking for in exactly one try. I couldn't be more impressed.
Prompt communication, high detail, generous results, 10/10 would work
with again!`,
    backImage: putnitz2,
    isLarge: true,
    isHome: true,
  },
  {
    id: 6,
    height: "70vh",
    logo: logosmall,
    owner: "Dr. Christian Wade",
    business: "Concierge Wellness",
    cube: true,
    frontImage: cw2,
    complete: true,
    link: "https://conciergewellnessandpt.com/",
    review:
      "Kelli has been outstanding with all of her help building my company website! She far exceeded any of my expectations and went above and beyond. I’m so thankful for her knowledge and attention to detail because it made the whole process so much easier for me. She even helped me figure out how to activate my company email and all other IT questions I had. I highly recommend Kelli for any web development or anything related!",
    backImage: cw,
    isLarge: true,
    isHome: true,
  },
  {
    id: 5,
    logo: fitteeslogo,
    height: "70vh",
    owner: "Dr. Tochi Egbuzie",
    business: "Fittees Osteopractic Physical Therapy & Wellness",
    cube: true,
    frontImage: fittees,
    complete: true,
    link: "https://fittees.netlify.app/",
    review:
      "I highly recommend Kelli for her exceptional web development services. She meticulously listened to my needs, paying close attention to every detail. She was very patient with me and ensured I received a website that perfectly met my expectations. Kelli's outstanding work and professionalism make her an excellent choice for anyone seeking top-notch web design services.",
    backImage: fittees2,
    isLarge: true,
    isHome: true,
  },
  {
    id: 7,
    height: "70vh",
    owner: "Kelli L.",
    business: "Portfolio Site",
    logo: kl,
    cube: true,
    frontImage: kellinetlify,
    complete: true,
    link: "https://kellidoesdev.com/",
    review:
      "This is my original portfolio site, which is geared more towards large employers seeking specific coding skills. Though the projects showcased on this site focus on demonstrating skill with different libraries, this site shows a variety of design and coding skills, enjoy!",
    backImage: kellinetlify2,
    isLarge: true,
    isHome: true,
  },
];
