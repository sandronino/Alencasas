"use client";

import { useParams } from "next/navigation";

const houses = [
  { id: 1, title: "Casa da Serra", location: "Gerês, Portugal", price: 80, image: "/house2.jpg" },
  { id: 2, title: "Apartamento Moderno", location: "Lisboa, Portugal", price: 100, image: "/house3.jpg" },
  { id: 3, title: "Casa na Praia", location: "Algarve, Portugal", price: 120, image: "/house1.jpg" },
];

export default function HousePage() {
  const params = useParams();
  const houseId = Number(params.id);
  const house = houses.find((h) => h.id === houseId);

  if (!house) {
    return <div>Casa não encontrada</div>;
  }

  return (
    <main className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4">{house.title}</h1>
      <img src={house.image} alt={house.title} className="w-full h-64 object-cover rounded mb-4" />
      <p className="text-gray-600">{house.location}</p>
      <p className="text-lg mt-2 font-bold">€{house.price} / noite</p>
    </main>
  );
}
import Header from "./components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
