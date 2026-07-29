export const contactSchema= {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact | Libin Web Development",
  url: "https://libinwebdevelopment.com/main/contact",
  description:
    "Contact Libin Web Development to discuss your custom website project.",

  mainEntity: {
    "@type": "ProfessionalService",
    name: "Libin Web Development",
    url: "https://libinwebdevelopment.com",
    email: "mailto:kelli@libinwebdevelopment.com",
    areaServed: [
  {
    "@type": "City",
    "name": "Colorado Springs",
  },
  {
    "@type": "State",
    "name": "Colorado",
  },
  {
    "@type": "Country",
    "name": "United States",
  },
],
    image: "https://libinwebdevelopment.com/images/icon.png",
  },
};