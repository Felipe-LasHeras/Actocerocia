import React from 'react';
import Home from './paginas/home';
import Navbar from './components/navbar';
import Presentacion from './paginas/presentacion';

const App = () => (
  <div className="app">
    <Navbar/>
    <Home/> 
    <Presentacion/>
  </div>
);

export default App;
