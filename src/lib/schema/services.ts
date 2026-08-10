export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  serviceType: "Website Design and Development",

  name: "Small Business Website Packages",

  provider: {
    "@type": "ProfessionalService",
    name: "Libin Web Development",
    url: "https://libinwebdevelopment.com",
  },

  areaServed: {
    "@type": "Country",
    name: "United States",
  },

  url: "https://libinwebdevelopment.com/main/about/services",

  description:
    "Custom website packages for small businesses including responsive design, SEO best practices, hosting options, accessibility, and ongoing maintenance.",

  offers: {
    "@type": "Offer",
    price: "400",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },

  audience: {
    "@type": "Audience",
    audienceType: "Small Business Owners",
  },
};