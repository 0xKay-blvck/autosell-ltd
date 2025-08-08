import Head from "@/components/shared/Head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";

const SellYourCar = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const entries = Object.fromEntries(data.entries()) as Record<string, string>;

    const text = encodeURIComponent(
      `AutoSell - Paid Car Advertising\nName: ${entries.name}\nPhone: ${entries.phone}\nMake/Model: ${entries.make} ${entries.model}\nYear: ${entries.year}\nLocation: ${entries.location}\nPrice: GHS ${entries.price}\nImage: ${entries.image || 'N/A'}\nDescription: ${entries.description || 'N/A'}`
    );

    const wa = siteConfig.socials.whatsappNumber;
    if (wa) {
      window.open(`https://wa.me/${wa}?text=${text}`, "_blank");
    } else {
      window.location.href = `mailto:${siteConfig.contact.email}?subject=AutoSell - Car Advertising&body=${text}`;
    }
  };

  return (
    <>
      <Head title="Sell Your Car | AutoSell Ltd" description="Promote your car with AutoSell. Submit your details to advertise to our audience across Ghana." canonicalPath="/sell" />
      <section className="container py-10 animate-fade-in">
        <h1 className="text-3xl font-bold">Sell Your Car</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          We actively promote car listings via Facebook and Instagram. Submit your car details below to advertise for a small fee and reach more buyers quickly.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" name="name" required placeholder="e.g., Ama Mensah" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" required placeholder="e.g., 024XXXXXXX" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="make">Make</Label>
            <Input id="make" name="make" required placeholder="e.g., Toyota" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="model">Model</Label>
            <Input id="model" name="model" required placeholder="e.g., Corolla" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="year">Year</Label>
            <Input id="year" name="year" type="number" min={1990} max={2100} required placeholder="e.g., 2018" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" required placeholder="e.g., Accra" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price (GHS)</Label>
            <Input id="price" name="price" type="number" min={0} required placeholder="e.g., 95000" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="image">Car Image URL (placeholder OK)</Label>
            <Input id="image" name="image" placeholder="e.g., https://.../my-car.jpg" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" placeholder="Condition, mileage, features, etc." rows={5} />
          </div>
          <div className="md:col-span-2">
            <Button type="submit" variant="brand" className="w-full md:w-auto">Submit & Contact via WhatsApp</Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SellYourCar;
