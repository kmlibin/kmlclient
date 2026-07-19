export const services = [
  {
    id: "website",
    title: "Custom Website Development",
    price: "700",
    tagline: "Built for your business",
    accent: "#057ee6",
    lightAccent: undefined,
    short:
      "Skip the templates and generic page builders. Every website is custom designed and hand-coded to reflect your business, providing a fast, responsive experience, clean performance, and the flexibility to grow as your business evolves.",

    body: (
      <>
        Every project is designed from the ground up and built with clean,
        hand-written code — not generic templates or drag-and-drop website
        builders. The result is a fast, professional website tailored to your
        goals, your brand, and your customers.{" "}
        <span className="font-bold">The Website Launch Package</span> includes
        up to four custom pages, responsive design, contact form integration,
        and everything needed to launch with confidence.<br></br>
        <br></br>
        <span className="font-bold bg-customGold bg-opacity-30">
          {" "}
          When the project is complete, your website and its code belong to you
          — you'll never be locked into a proprietary website builder or
          platform.
        </span>
      </>
    ),
    tags: ["Custom Code", "Responsive", "SEO Ready"],
    details: [
      "Up to four custom pages",
      "Complete design & development",
      "Contact form integration",
      "Fast, modern codebase",
      "Cross-browser compatibility",
      "$75 per additional page",
    ],
  },
  {
    id: "communication",
    title: "Work Directly With Your Developer",
    tagline: "Real support. Real communication.",
    accent: "#fec246",
    lightAccent: undefined,
    short:
      "No support tickets or outsourced teams — just direct communication with the person building your website.",

    body: "Throughout the project, you'll work directly with me. That means faster communication, personalized recommendations, and a website that's built around your goals instead of fitting your business into a template.",
    tags: ["Support", "Collaboration", "Small Business"],
    details: [
      "One point of contact",
      "Personalized recommendations",
      "Project updates",
      "Quick revisions",
      "Support throughout the build",
    ],
  },

  {
    id: "responsive",
    title: "Responsive Design",
    tagline: "For every screen",
    accent: "#e15c3a",
    lightAccent: "#FFFCFD",
    short: undefined,

    body: "More than half of all web traffic comes from mobile devices. Every website I build is designed mobile-first, then carefully refined for tablets and desktops. Rather than simply shrinking content to fit a smaller screen, each layout is thoughtfully crafted to remain fast, intuitive, and easy to navigate on any device.",

    tags: ["Mobile-First", "Fast", "Responsive"],
    details: [
      "Mobile-first development",
      "Optimized for phones, tablets, and desktops",
      "Consistent layouts across devices",
      "Touch-friendly navigation",
      "Performance-conscious design",
    ],
  },

  {
    id: "integrations",
    title: "Business Integrations",
    tagline: "Connect with customers",
    accent: "#C6375C",
    lightAccent: "#FFFCFD",
    short: undefined,

    body: "Whether your business relies on appointment scheduling, contact forms, social media, maps, or other third-party services, I can integrate the tools you already use into a seamless experience. The goal is to make it as easy as possible for customers to connect with you.",
    tags: ["Contact", "Scheduling", "Third-Party Tools"],
    details: [
      "Secure contact form integration",
      "Reliable email delivery with Resend",
      "Google Maps embedding",
      "Social media integration",
      "Links to existing business tools",
    ],
  },
  {
    id: "maintenance",
    title: "Website Care Plan",
    price: "75",
    tagline: "Optional annual plan",
    accent: "#111167",
    lightAccent: undefined,

    short:
      "Keep your website secure, online, and up-to-date without worrying about the technical details.",

    body: (
      <>
        After launch, I offer an optional maintenance package that keeps your
        website healthy throughout the year. It includes secure hosting, domain
        management, uptime monitoring, routine content updates, code
        maintenance, and deployment management, so you can focus on running your
        business instead of the technical details.
        <br></br>
        <br></br>
        <span className="font-bold bg-customGold bg-opacity-30">
          New clients receive 50% off their first year of hosting and
          maintenance.
        </span>
      </>
    ),
    tags: ["50% Off Year One", "Content Updates", "Uptime Monitoring"],

    details: [
      "Secure hosting",
      "Uptime monitoring",
      "Routine content & image updates",
      "Dependency & code updates",
      "Deployment management",
      "Minor changes included",
    ],
  },

  {
    id: "seo",
    title: "Performance & Technical SEO",
    tagline: "Built to be found",
    accent: "#62D3E4",
    lightAccent: undefined,
    short:
      "Search engines and customers both appreciate fast, well-built websites. Every project is optimized behind the scenes so your business has the best chance to be found and make a strong first impression.",

    body: "Search engines reward websites that are fast, well-structured, and easy to understand. Rather than relying on bulky page builders or generic templates, every website is built with clean, modern code and includes the technical SEO essentials that help search engines crawl and understand your site.",

    tags: ["Metadata", "JSON-LD", "Image Optimization"],

    details: [
      "Performance-focused development",
      "Page metadata",
      "Structured data (JSON-LD)",
      "Image optimization",
      "XML sitemap",
      "robots.txt configuration",
    ],
  },
];

export const additionalInfo = [
  {
    content:
      "You always own your website and its source code. You're free to continue hosting with me or move your website to any hosting provider that supports modern web applications.",
  },

  {
    content:
      "New website clients receive 50% off their first year of the optional Website Care Plan, which includes hosting, domain management, monitoring, routine updates, and ongoing maintenance.",
  },
  {
    content:
      "The Website Launch Package is designed for brochure websites that showcase your business and help customers get in touch. Projects requiring user accounts, e-commerce, databases, or other custom backend functionality can absolutely be built, but are quoted separately due to their increased complexity.",
  },
];
