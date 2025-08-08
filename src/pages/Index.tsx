import Head from "@/components/shared/Head";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cars } from "@/data/cars";
import CarCard from "@/components/listings/CarCard";
import { Car, Shield, TrendingUp } from "lucide-react";
import { useRef } from "react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <Head title="AutoSell Ltd | Ghana Car Marketplace" description="Your trusted platform for car buyers and sellers in Ghana. Browse cars, advertise your car, and partner with us." canonicalPath="/" />
      <section ref={heroRef} onMouseMove={handleMove} className="relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(600px circle at var(--x) var(--y), hsl(var(--primary)/0.18), transparent 60%)" }} />
        <div className="bg-hero-gradient">
          <div className="container py-16 md:py-24 relative">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your trusted platform for car buyers and sellers in Ghana
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Promote your car listings to thousands of buyers. We amplify your reach across Facebook and Instagram.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="brand" size="lg">
                <Link to="/browse">Browse Cars</Link>
              </Button>
              <Button asChild variant="hero" size="lg">
                <Link to="/sell">Advertise Your Car</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact on WhatsApp</Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border p-4 hover-scale">
                <div className="flex items-center gap-2 font-medium"><Car className="h-4 w-4" /> Wide Selection</div>
                <p className="text-sm text-muted-foreground mt-1">Curated cars from trusted garages and individuals.</p>
              </div>
              <div className="rounded-lg border p-4 hover-scale">
                <div className="flex items-center gap-2 font-medium"><TrendingUp className="h-4 w-4" /> Paid Promotion</div>
                <p className="text-sm text-muted-foreground mt-1">Boost your listing to reach more buyers quickly.</p>
              </div>
              <div className="rounded-lg border p-4 hover-scale">
                <div className="flex items-center gap-2 font-medium"><Shield className="h-4 w-4" /> Trusted Network</div>
                <p className="text-sm text-muted-foreground mt-1">Trusted by garages and dealers across Ghana.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 animate-fade-in">
        <h2 className="text-2xl font-bold">Featured Listings</h2>
        <p className="text-muted-foreground mt-2">A few popular picks — replace images with your own easily.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.slice(0, 6).map((c) => (
            <CarCard key={c.id} car={c} />
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="brand">
            <Link to="/browse">See All Cars</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
