import Head from "@/components/shared/Head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";

const Partner = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const entries = Object.fromEntries(data.entries()) as Record<string, string>;

    const text = encodeURIComponent(
      `AutoSell - Partner Request\nGarage/Dealer: ${entries.business}\nContact: ${entries.contact} (${entries.phone})\nLocation: ${entries.location}\nMessage: ${entries.message || 'N/A'}`
    );

    const wa = siteConfig.socials.whatsappNumber;
    if (wa) {
      window.open(`https://wa.me/${wa}?text=${text}`, "_blank");
    } else {
      window.location.href = `mailto:${siteConfig.contact.email}?subject=AutoSell - Partner Request&body=${text}`;
    }
  };

  return (
    <>
      <Head title="Partner With Us | AutoSell Ltd" description="Garages and dealers in Ghana — partner with AutoSell to get your inventory in front of more buyers." canonicalPath="/partner" />
      <section className="container py-10 animate-fade-in">
        <h1 className="text-3xl font-bold">Partner With Us</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Join our network of trusted garages and dealerships. We promote listings across Facebook and Instagram to drive more leads.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="business">Business Name</Label>
            <Input id="business" name="business" required placeholder="e.g., Accra Auto Garage" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact">Contact Person</Label>
            <Input id="contact" name="contact" required placeholder="e.g., Kofi Adjei" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" required placeholder="e.g., 020XXXXXXX" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" required placeholder="e.g., Spintex, Accra" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Tell us about your inventory and goals" rows={5} />
          </div>
          <div className="md:col-span-2">
            <Button type="submit" variant="brand" className="w-full md:w-auto">Request Partnership</Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Partner;
