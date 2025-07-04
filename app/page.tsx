"use client";

import { useState } from "react";

const houses = [
  { id: 1, title: "Casa da Serra", location: "Gerês, Portugal", price: 80, image: "/house2.jpg" },
  { id: 2, title: "Apartamento Moderno", location: "Lisboa, Portugal", price: 100, image: "/house3.jpg" },
  { id: 3, title: "Casa na Praia", location: "Algarve, Portugal", price: 120, image: "/house1.jpg" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [dates, setDates] = useState({ startDate: "", endDate: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="relative min-h-screen p-8 pb-20 sm:p-20 font-sans">

      {/* Header com login no canto superior direito */}
      <header className="flex justify-end max-w-6xl mx-auto mb-8">
        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Sair
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={() => alert("Implementar login")}
              className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition"
            >
              Entrar
            </button>
            <button
              onClick={() => alert("Implementar registrar")}
              className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Registrar
            </button>
          </div>
        )}
      </header>

      <main className="flex flex-col gap-8 items-center w-full max-w-4xl mx-auto">
        {/* Título */}
        <h1 className="text-5xl font-extrabold text-foreground tracking-tight">Alencasas</h1>

        {/* Barra de pesquisa */}
        <input
          type="text"
          placeholder="Pesquisar localizações, casas, etc."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        {/* Calendário */}
        <div className="w-full max-w-md flex flex-col gap-4">
          <input
            type="date"
            value={dates.startDate}
            onChange={(e) => setDates((prev) => ({ ...prev, startDate: e.target.value }))}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Data de início"
          />
          <input
            type="date"
            value={dates.endDate}
            onChange={(e) => setDates((prev) => ({ ...prev, endDate: e.target.value }))}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Data de fim"
          />
        </div>

        {/* Seção de Casas */}
        <section className="w-full max-w-6xl mt-12">
          <h2 className="text-3xl font-semibold mb-6">Casas Disponíveis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {houses.map(({ id, title, location, price, image }) => (
              <div key={id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-gray-600">{location}</p>
                  <p className="mt-2 font-bold">€{price} / noite</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-lg mb-2">Alencasas</h3>
            <a href="#" className="hover:underline">Sobre Nós</a>
            <a href="#" className="hover:underline">Carreiras</a>
            <a href="#" className="hover:underline">Ajuda</a>
            <a href="#" className="hover:underline">Imprensa</a>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-lg mb-2">Comunidade</h3>
            <a href="#" className="hover:underline">Eventos</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Parcerias</a>
            <a href="#" className="hover:underline">Sustentabilidade</a>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-lg mb-2">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-blue-600">Facebook</a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400">Twitter</a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-500">Instagram</a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-12 mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Alencasas. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
