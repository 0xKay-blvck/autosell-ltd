import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Car } from "@/data/cars";
import { siteConfig } from "@/config/site";

type Props = { car: Car };

const currency = (n: number) => new Intl.NumberFormat("en-GH", { style: "currency", currency: "GHS", maximumFractionDigits: 0 }).format(n);

const CarCard = ({ car }: Props) => {
  const waNumber = siteConfig.socials.whatsappNumber;
  const message = encodeURIComponent(
    `AutoSell Enquiry\nCar: ${car.make} ${car.model} (${car.year})\nPrice: ${currency(car.price)}\nLocation: ${car.location}`
  );
  const waLink = waNumber ? `https://wa.me/${waNumber}?text=${message}` : undefined;

  return (
    <Card className="overflow-hidden hover-scale">
      <CardHeader>
        <CardTitle className="text-base">{car.make} {car.model} · {car.year}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-accent">
          <img
            src={car.imageUrl}
            alt={`${car.make} ${car.model} placeholder image — replace with your photo`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">{currency(car.price)}</span>
          <span className="text-muted-foreground">{car.location}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
          {car.mileage !== undefined && <div>Mileage: {car.mileage?.toLocaleString()} km</div>}
          {car.transmission && <div>Trans: {car.transmission}</div>}
          {car.fuel && <div>Fuel: {car.fuel}</div>}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="brand" className="w-full" disabled={!waLink}>
          <a href={waLink} target="_blank" rel="noreferrer">Contact on WhatsApp</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
