import React from 'react';
import ReactDOM from 'react-dom/client'; // Usar createRoot en React 18
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './app';
import './styles/index.css'; // Si ya tienes estilos globales aquí, puedes combinarlo o eliminarlos si solo usas styled-components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './paginas/home';
import Presentacion from './paginas/presentacion';
import Integrantes from './paginas/integrantes';
import Navbar from './components/navbar';
import PerfilVicente from './paginas/perfiles/PerfilVicente';
import PerfilSofia from './paginas/perfiles/PerfilSofia';
import PerfilCarla from './paginas/perfiles/PerfilCarla';
import Obras from './paginas/obras';
import FrenteAUstedEsta from './paginas/obras/Frenteaustedesta';
import LaCocina from './paginas/obras/Lacocina';
import LasMujeresDeAfuera from './paginas/obras/Lasmujeresdeafuera';
import ElTiempoCamino from './paginas/obras/eltiempocamino';
import RelojViejoDePared from './paginas/obras/Relojviejodepared';
import { createGlobalStyle } from 'styled-components';
import BackButton from './components/backButton';

// Define los estilos globales
const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    color: white;
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <GlobalStyle /> {/* Agrega GlobalStyle aquí */}
    <Navbar />
    <BackButton />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="presentacion" element={<Presentacion />} />
      <Route path="integrantes" element={<Integrantes />} />
      <Route path="perfilvicente" element={<PerfilVicente />} />
      <Route path="perfilsofia" element={<PerfilSofia />} />
      <Route path="perfilcarla" element={<PerfilCarla />} />
      <Route path="obras" element={<Obras />} />
      <Route path="frenteaustedesta" element={<FrenteAUstedEsta />} />
      <Route path="lacocina" element={<LaCocina />} />
      <Route path="lasmujeresdeafuera" element={<LasMujeresDeAfuera />} />
      <Route path="eltiempocamino" element={<ElTiempoCamino />} />
      <Route path="elreloj" element={<RelojViejoDePared />} />


    </Routes>
  </BrowserRouter>
);
