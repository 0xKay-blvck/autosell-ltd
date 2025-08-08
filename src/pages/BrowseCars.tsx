import Head from "@/components/shared/Head";
import { cars } from "@/data/cars";
import CarCard from "@/components/listings/CarCard";
import { useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BrowseCars = () => {
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const makes = useMemo(() => Array.from(new Set(cars.map(c => c.make))).sort(), []);
  const models = useMemo(() => Array.from(new Set(cars.filter(c => !make || c.make === make).map(c => c.model))).sort(), [make]);
  const locations = useMemo(() => Array.from(new Set(cars.map(c => c.location))).sort(), []);

  const filtered = cars.filter(c =>
    (!make || c.make === make) &&
    (!model || c.model === model) &&
    (!location || c.location === location)
  );

  return (
    <>
      <Head title="Browse Cars | AutoSell Ltd" description="Explore cars for sale in Ghana. Filter by make, model, and location." canonicalPath="/browse" />
      <section className="container py-10">
        <h1 className="text-3xl font-bold">Browse Cars</h1>
        <p className="text-muted-foreground mt-2">Find your next car by filtering through our listings.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="make">Make</Label>
            <Select onValueChange={setMake} value={make}>
              <SelectTrigger id="make"><SelectValue placeholder="All makes" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="">All makes</SelectItem>
                {makes.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="model">Model</Label>
            <Select onValueChange={setModel} value={model}>
              <SelectTrigger id="model"><SelectValue placeholder="All models" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="">All models</SelectItem>
                {models.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Select onValueChange={setLocation} value={location}>
              <SelectTrigger id="location"><SelectValue placeholder="All locations" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="">All locations</SelectItem>
                {locations.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(c => (
            <CarCard key={c.id} car={c} />
          ))}
        </div>
      </section>
    </>
  );
};

export default BrowseCars;
