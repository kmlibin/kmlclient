
//images
import fittees from "../../../../public/images/fittees.png";
import cw from "../../../../public/images/cw.png";
import kellinetlify from "../../../../public/images/kellinetlify.png";
import jpel from "../../../../public/images/jpel.png";
import fittees2 from "../../../../public/images/fittees2.png";
import cw2 from "../../../../public/images/cw2.png";
import kellinetlify2 from "../../../../public/images/kellinetlify2.png";
import jpel2 from "../../../../public/images/jpel2.png";

export const portfolioItems = [
  {
    id: 5,
    height: "475px",
    frontImage: cw,
    owner: "Dr. Christian Wade",
    business: "Concierge Wellness",
    cube: true,
    complete: true,
    link: "https://conciergewellnessandpt.com/",
    review:
      "Kelli has been outstanding with all of her help building my company website! She far exceeded any of my expectations and went above and beyond. I’m so thankful for her knowledge and attention to detail because it made the whole process so much easier for me. She even helped me figure out how to activate my company email and all other IT questions I had. I highly recommend Kelli for any web development or anything related!",
    backImage: cw2,
    isLarge: false,
  },
  {
    id: 2,
    height: "100px",
    bubbles: true,
    review: "bubbles 1",
  },
  {
    id: 3,
    height: "475px",
    cube: true,
    frontImage: kellinetlify,
    link: "https://kelli-portfolio.netlify.app/",
    complete: true,
    review:
      "This is a personal site that I use for larger employers, as the projects are more skill focused and not nearly as pretty :)",
    backImage: kellinetlify2,
    isLarge: false,
  },

  {
    id: 7,
    height: "475px",
    cube: true,
    frontImage: kellinetlify,
    backImage: kellinetlify2,
    isLarge: false,
  },
  {
    id: 10,
    height: "100px",
    bubbles: true,
    review: "bubbles 2",
  },

  {
    id: 1,
    height: "475px",
    cube: true,
    owner: "Dr. Tochi Egbuzie",
    business: "Fittees Physical Therapy",
    frontImage: fittees,
    complete: false,
    link: "https://poetic-selkie-096f2e.netlify.app/",
    review: "Under construction, check back soon!",
    backImage: fittees2,
    isLarge: false,
  },
  {
    id: 6,
    height: "475px",
    cube: true,
    business: "JPEL Farms",
    frontImage: jpel,
    review: "Under construction, check back soon!",
    complete: false,
    backImage: jpel2,
    isLarge: false,
  },
  {
    id: 4,
    height: "100px",
    bubbles: true,
    review: "bubbles 3",
  },
  {
    id: 8,
    height: "392px",
  },
];