import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./componentes/Home"
import CadastroVagas from "./componentes/CadastroVagas";
import ListarVagas from "./componentes/ListarVagas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/cadastroVagas" element={<CadastroVagas/>} />
        <Route path="/vagaDisponivel" element={<ListarVagas/>} />
        </Routes>
    </BrowserRouter>
  );
}