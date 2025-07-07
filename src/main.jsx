// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/index.jsx";
import Entrar from "./pages/Entrar.jsx";
import Registar from "./pages/Registar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/registar" element={<Registar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
