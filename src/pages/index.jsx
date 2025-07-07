// src/pages/index.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import casa1 from "../assets/casa1.jpg";
import casa2 from "../assets/casa2.jpg";
import casa3 from "../assets/casa3.jpg";
import casa4 from "../assets/casa4.jpg";
import casa5 from "../assets/casa5.jpg";

const destinosSugestao = [
  "Lisboa, Portugal",
  "Porto, Portugal",
  "Faro, Portugal",
  "Madrid, Espanha",
  "Barcelona, Espanha",
  "Paris, França",
];

export default function Home() {
  const [popupAberto, setPopupAberto] = useState(null);
  const [data, setData] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [hospedes, setHospedes] = useState(1);
  const [destino, setDestino] = useState("");

  const refPopup = useRef(null);

  // Fecha popups ao clicar fora
  useEffect(() => {
    function handleClickFora(event) {
      if (refPopup.current && !refPopup.current.contains(event.target)) {
        setPopupAberto(null);
      }
    }
    document.addEventListener("mousedown", handleClickFora);
    return () => document.removeEventListener("mousedown", handleClickFora);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">alencasas.pt</h1>
        <div className="space-x-2">
          <Link to="/entrar">
            <button className="bg-black text-white px-4 py-2 rounded-full hover:opacity-90">Entrar</button>
          </Link>
          <Link to="/registar">
            <button className="text-black px-4 py-2 rounded-full hover:underline">Registar</button>
          </Link>
        </div>
      </header>

      {/* Barra de pesquisa estilo Airbnb */}
      <div className="flex justify-center">
        <div className="bg-gray-100 rounded-full p-2 flex gap-4 items-center w-full max-w-4xl shadow">
          <div className="relative">
            <button onClick={() => setPopupAberto("destino")} className="px-4 py-2 rounded-full hover:bg-gray-200">
              <strong>Onde</strong>
              <div className="text-sm">{destino || "Pesquisar destinos"}</div>
            </button>
            {popupAberto === "destino" && (
              <div ref={refPopup} className="absolute top-full mt-2 bg-white border shadow rounded p-4 w-64 z-50">
                {destinosSugestao.map((item, i) => (
                  <div key={i} className="hover:bg-gray-100 p-2 cursor-pointer" onClick={() => { setDestino(item); setPopupAberto(null); }}>
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => setPopupAberto("data")} className="px-4 py-2 rounded-full hover:bg-gray-200">
              <strong>Quando</strong>
              <div className="text-sm">Adicionar data</div>
            </button>
            {popupAberto === "data" && (
              <div ref={refPopup} className="absolute top-full mt-2 z-50">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setData([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={data}
                />
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => setPopupAberto("hospedes")} className="px-4 py-2 rounded-full hover:bg-gray-200">
              <strong>Pessoas</strong>
              <div className="text-sm">{hospedes} hóspede(s)</div>
            </button>
            {popupAberto === "hospedes" && (
              <div ref={refPopup} className="absolute top-full mt-2 bg-white border shadow rounded p-4 w-48 z-50">
                <div className="flex justify-between items-center">
                  <span>Hóspedes</span>
                  <div className="flex gap-2 items-center">
                    <button onClick={() => setHospedes(Math.max(1, hospedes - 1))} className="px-2">−</button>
                    <span>{hospedes}</span>
                    <button onClick={() => setHospedes(hospedes + 1)} className="px-2">+</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button className="ml-auto bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700">
            🔍
          </button>
        </div>
      </div>

      {/* Alojamentos populares */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Alojamentos populares em Moura›</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[casa1, casa2, casa3, casa4, casa5].map((img, i) => (
            <div key={i}>
              <img src={img} alt={`Casa ${i + 1}`} className="rounded-xl w-full h-48 object-cover" />
              <p className="font-semibold mt-2">Turismo rural em Moura</p>
              <p className="text-sm text-gray-600">Anfitriã/o particular</p>
              <p className="text-sm text-gray-600">63€ por 2 noites</p>
              <p className="text-sm text-gray-600">Classificação média de 4,86</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="mt-16 text-center text-gray-500 text-sm border-t pt-6">
        <p>© 2025 alencasas.pt - Projeto inspirado no Airbnb</p>
      </footer>
    </div>
  );
}
