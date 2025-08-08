import Head from "@/components/shared/Head";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const wa = siteConfig.socials.whatsappNumber;

  return (
    <>
      <Head title="Contact | AutoSell Ltd" description="Get in touch with AutoSell via WhatsApp, Facebook, or Instagram." canonicalPath="/contact" />
      <section className="container py-10 animate-fade-in">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-muted-foreground mt-2">We respond quickly on WhatsApp and social media.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Button asChild variant="brand" className="gap-2">
            <a href={wa ? `https://wa.me/${wa}` : undefined} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </Button>
          <Button asChild variant="secondary" className="gap-2">
            <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer">
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          </Button>
          <Button asChild variant="secondary" className="gap-2">
            <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Contact;
