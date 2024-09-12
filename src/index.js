 import React from 'react';
 import ReactDOM from 'react-dom/client'; // Usar createRoot en React 18
 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap.bundle.min';
 import App from './app';
 import './styles/index.css';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Home from './paginas/home';
 import Presentacion from './paginas/presentacion';
 import Integrantes from './paginas/integrantes';
 import Navbar from './components/navbar';


 const root = ReactDOM.createRoot(document.getElementById('root'));

 root.render(
   <BrowserRouter>
      <Navbar />
     <Routes>
       <Route path="/" element={<App />} />
       <Route path="home" element={<Home />} />
       <Route path="presentacion" element={<Presentacion />} />
        <Route path="integrantes" element={<Integrantes />} />

     </Routes>
   </BrowserRouter>
);
