export type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  location: string;
  price: number;
  mileage?: number;
  transmission?: string;
  fuel?: string;
  imageUrl: string; // Placeholder — replace with your own
};

export const cars: Car[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Corolla",
    year: 2016,
    location: "Accra",
    price: 85000,
    mileage: 72000,
    transmission: "Automatic",
    fuel: "Petrol",
    imageUrl: "/images/cars/corolla.svg", // Replace with: /images/cars/corolla.jpg
  },
  {
    id: "2",
    make: "Honda",
    model: "Civic",
    year: 2018,
    location: "Tema",
    price: 98000,
    mileage: 54000,
    transmission: "Automatic",
    fuel: "Petrol",
    imageUrl: "/images/cars/civic.svg", // Replace with: /images/cars/civic.jpg
  },
  {
    id: "3",
    make: "Hyundai",
    model: "Elantra",
    year: 2017,
    location: "Kumasi",
    price: 76000,
    mileage: 65000,
    transmission: "Automatic",
    fuel: "Petrol",
    imageUrl: "/images/cars/elantra.svg", // Replace with: /images/cars/elantra.jpg
  },
  {
    id: "4",
    make: "Nissan",
    model: "Rogue",
    year: 2019,
    location: "Takoradi",
    price: 145000,
    mileage: 49000,
    transmission: "Automatic",
    fuel: "Petrol",
    imageUrl: "/images/cars/rogue.svg", // Replace with: /images/cars/rogue.jpg
  },
  {
    id: "5",
    make: "Toyota",
    model: "RAV4",
    year: 2020,
    location: "Accra",
    price: 230000,
    mileage: 31000,
    transmission: "Automatic",
    fuel: "Petrol",
    imageUrl: "/images/cars/rav4.svg", // Replace with: /images/cars/rav4.jpg
  },
  {
    id: "6",
    make: "Kia",
    model: "Picanto",
    year: 2015,
    location: "Cape Coast",
    price: 45000,
    mileage: 82000,
    transmission: "Manual",
    fuel: "Petrol",
    imageUrl: "/images/cars/picanto.svg", // Replace with: /images/cars/picanto.jpg
  },
];
