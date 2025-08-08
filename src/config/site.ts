export const siteConfig = {
  name: "AutoSell Ltd",
  tagline: "Your trusted platform for car buyers and sellers in Ghana",
  description:
    "AutoSell Ltd is a modern, mobile-first online car advertising platform in Ghana connecting buyers with trusted sellers across the country.",
  url: "https://autosell.example", // Replace with your domain when ready
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61573682903085",
    instagram: "https://instagram.com/", // Optional: add your Instagram
    whatsappNumber: "", // e.g., 233XXXXXXXXX (no + or spaces)
  },
  contact: {
    email: "hello@example.com", // Fallback for contact
  },
  seo: {
    defaultTitle: "AutoSell Ltd | Ghana Car Marketplace",
    defaultDescription:
      "Browse cars, advertise your car for a small fee, and connect with trusted garages and sellers across Ghana.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
