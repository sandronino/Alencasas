import React from "react";

export default function Registar() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-3xl font-bold mb-6">Registar</h1>
      <form className="flex flex-col space-y-4 w-80">
        <input
          type="text"
          placeholder="Nome"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded"
        />
        <button className="bg-black text-white p-2 rounded hover:bg-gray-800 transition">
          Registar
        </button>
      </form>
    </div>
  );
}
