import { siteConfig } from "@/config/site";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border bg-secondary text-secondary-foreground">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-primary" aria-hidden />
            <span className="font-semibold">{siteConfig.name}</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            {siteConfig.tagline}
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <div className="flex items-center gap-3">
            <a className="inline-flex items-center gap-2 hover:underline" href={siteConfig.socials.facebook} target="_blank" rel="noreferrer">
              <Facebook className="h-4 w-4" /> Facebook
            </a>
            <a className="inline-flex items-center gap-2 hover:underline" href={siteConfig.socials.instagram} target="_blank" rel="noreferrer">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a className="inline-flex items-center gap-2 hover:underline" href={siteConfig.socials.whatsappNumber ? `https://wa.me/${siteConfig.socials.whatsappNumber}` : undefined} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Trusted by garages across Ghana</p>
          <p className="mt-2">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
