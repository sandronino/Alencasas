// src/pages/Entrar.jsx
import React, { useState } from "react";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Entrar() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      alert("Erro no login com Google: " + error.message);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert("Erro no login: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Entrar no alencasas.pt</h2>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-black text-white py-2 rounded-xl font-medium mb-4 hover:opacity-90"
        >
          Entrar com Google
        </button>

        <div className="text-center text-sm text-gray-500 mb-4">ou</div>

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-2 rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-2 rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-rose-500 text-white py-2 rounded-xl font-medium hover:bg-rose-600"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
