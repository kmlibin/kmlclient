export const faqCards = [
  {
    id: "getting-started",
    question: "How do we get started?",
    answer: (
      <>
        To start, please message at (email) me or fill out the contact form on
        my site, and we&apos;ll get the ball rolling. I want to hear your ideas
        and preferences to make sure your site aligns with your brand and goals.{" "}
        <br></br>
        <br></br>To help me understand your style, share 2-3 example websites
        you like, along with what you appreciate about them (such as layout,
        colors, or features). I&apos;ll use this as inspiration while we outline
        your site structure, especially the homepage. The homepage is often the
        first impression for visitors, so any details you have in mind (like a
        tagline, contact form, or calls-to-action) are invaluable.<br></br>
        <br></br> After that, I&apos;ll create a mockup within 7-10 business
        days, and we&apos;ll go over it together to refine any details. Your
        input helps me craft something unique, so I look forward to
        collaborating and shaping your vision into a stunning site!
      </>
    ),
  },
  {
    id: "payment-process",
    question: "What is your payment process?",
    answer:
      "My payment process is simple and transparent. I require a 50% non-refundable deposit upfront to begin working on your project. The remaining 50% is due once the project is complete, just before I provide access or deploy the site. Hosting fees are not included in this amount. For payment, I accept Venmo, Zelle, or PayPal transfer.",
  },
  {
    id: "project-communication",
    question: "How will we communicate during the project?",
    answer:
      "We can communicate in whichever way works best for you, whether it's email, text, or call. I'll keep detailed notes and share them in a Google Doc, which we can both access and comment on. This allows us to keep track of all updates, feedback, and ideas. I aim to respond promptly, and I expect the same to ensure the project stays on track. Clear, active communication helps prevent delays, so we can build and launch your site without long waiting periods.",
  },
  {
    id: "need-database",
    question: "How do I know if I need a database for my website?",
    answer: (
      <>
        A database is generally required for complex sites, like e-commerce
        platforms, social media applications, or any site that stores user data
        long-term. For most small business sites, informational pages, or basic
        contact forms, a database isn&apos;t necessary. I specialize in these
        simpler sites, which keeps costs down and streamlines maintenance.{" "}
        <br></br>
        <br></br>If you need advanced features like payment processing or
        shopping functionality, I can set up your site to link with secure,
        third-party services like PayPal or Shopify. This way, you can manage
        those services independently, saving you the added costs and setup time
        associated with a full database on your site.
      </>
    ),
  },
  {
    id: "domain-registration",
    question:
      "How do I buy a domain, and how do we connect it to my custom site?",
    answer: (
      <>
        If you don&apos;t already have a domain name (e.g., www.yourbusiness.com),
        you can purchase one from domain registrars like Namecheap, GoDaddy, or
        Google Domains. After purchasing, the domain needs to be connected to
        your custom website by configuring DNS settings. This involves logging
        into the registrar&apos;s dashboard and updating records like CNAME or A
        records to point to your hosting provider.
        <br></br>
        <br></br>
        If you&apos;re hosting your site with me:
        <br></br>
        <br></br>I can help you purchase the domain through Netlify, charging
        the same price as the domain provider charges annually.
        <br></br>
        <br></br> If you already own a domain, I can guide you through the setup
        process or handle it for you if you provide temporary access to your
        domain account.
      </>
    ),
  },
  
  {
    id: "external-hosting",
    question: "What if I choose to host somewhere else?",
    answer: (
      <>
        If you prefer to host your site with another provider, no problem! Make
        sure you find a provider that hosts Next.js code, and I&apos;ll provide
        a complete build folder with all project files and code. Just let me
        know where you plan to host, so I can configure everything correctly on
        my end. <br></br>
        <br></br>Please note that if you&apos;re not hosting with me,
        you&apos;ll be responsible for setting up your domain and, if
        applicable, configuring custom email settings. Additionally, free
        content updates aren&apos;t included with this option.
      </>
    ),
  },
  {
    id: "custom-email",
    question: "Can I use a custom email address (e.g., name@yourbusiness.com)?",
    answer:
      "Absolutely, you can use a custom email with your domain (like hello@yourcompany.com), but setup varies depending on your email provider. For example, if we host your site on Netlify, I'll configure the DNS settings there to point to your domain. However, additional steps are needed with your email provider (like Google Workspace or Zoho) to ensure emails are routed properly, and we will likely have to do this together. This is because email services and website hosting services handle data differently, so we need to align both setups for seamless email delivery. If you host with me, I can guide you through this process to get everything working smoothly.",
  },
  {
    id: "content-readiness",
    question: "Do I need to have content ready before we start?",
    answer:
      "Knowing the type of content for each page, especially the homepage, is helpful and can streamline the entire process. If you don't know all the content right away, that's totally fine - I'll build out your site with placeholder text, which can help you get a better sense of what text you want and how it should be structured. However, after we settle on a general design for your site, I would expect you to deliver content within 1-2 weeks.",
  },
  {
    id: "content-updates",
    question: "How often can I update content on my site?",
    answer:
      "If you host with me, I offer free content updates as needed, provided they’re not major redesigns. This way, you can keep your site fresh and relevant without added hassle.",
  },
  {
    id: "image-quality",
    question: "What kind of images do you need?",
    answer:
      "High-quality, non-phone images work best, as phone photos may not display well on all screen sizes. I’ll optimize your images, but clear originals make a big difference in quality.",
  },
  {
    id: "what-is-emailjs",
    question: "What is EmailJS, and is it secure?",
    answer:
      "EmailJS is a service that allows emails to be sent directly from your website without needing a server backend. It's considered secure because it doesn’t store or transmit any sensitive information from your end (such as passwords or personal data). While the client keys are visible, these keys only enable email functionality and cannot be used to retrieve private data. This approach simplifies setup while still protecting your information. I will set up an account for you, and you will need to confirm the account and go through a couple of simple steps.",
  },
  {
    id: "site-accessibility",
    question: "Are your sites accessible?",
    answer:
      "Yes, I prioritize accessibility to make sure your site can be used by people with various disabilities. Accessibility means creating an inclusive experience: from designing readable text sizes to optimizing site navigation for screen readers and making sure all interactive elements are easy to use with a keyboard. This approach makes your site easier for everyone to use and ensures compliance with industry standards, giving you a broader reach and a positive user experience.",
  },

  {
    id: "logo-design",
    question: "Do you design logos?",
    answer:
      "While I'm not a professional graphic designer, I do use Canva Pro and can help create a basic logo if needed.",
  },
  {
    id: "graphic-design",
    question: "Do you offer graphic design services?",
    answer:
      "No, but I use Canva for any simple graphic needs your site may have.",
  },
];
