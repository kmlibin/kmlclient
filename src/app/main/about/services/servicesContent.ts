export const services = [
  {
    id: "nextjs",
    title: "Custom Next.js Websites",
    tagline: "Development",
    accent: "#2563eb",
    short:
      "Fast, modern websites built with Next.js and Tailwind CSS.",
    body:
      "Responsive websites designed around your business goals with modern architecture and excellent performance.",
    tags: [
      "Next.js",
      "Tailwind",
      "Responsive"
    ],
    details: [
      "Custom page layouts",
      "Mobile-first design",
      "SEO optimization",
      "Performance tuning"
    ],
  },

  {
    id: "ecomm",
    title: "Ecommerce",
    tagline: "Online Stores",
    accent: "#16a34a",
    short:
      "Sell products with a custom storefront.",
    body:
      "Custom ecommerce experiences designed for your products and customers.",
    tags: [
      "Payments",
      "Inventory"
    ],
    details: [
      "Product management",
      "Shopping cart",
      "Secure checkout"
    ],
  },

  // add cms, seo, brand, retainer...
] as const;


export type Service = typeof services[number];