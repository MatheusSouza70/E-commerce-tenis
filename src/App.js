import React from 'react';
import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header/';
import HomePage from './componentes/HomePage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div className="App">
      <Header />
      <CartProvider />
      <HomePage />
      <Cart />
      <CartProvider />
      <Footer />
    </div>
  );
}

export default App;
