import React from "react";
import "./style.css";
import Card from "../Card";

function HomePage() {
  
  return (
    
    <div className="home-page">
      <Card
        nome="Tênis Grand Court SE"
        marca="Adidas"
        imagem="assets/adidas1.jpg"
        price="299,99"
        tamanho1="38"
        tamanho2="41"
      />
      <Card
        nome="Tênis U Path X"
        marca="Adidas"
        imagem="assets/adidas2.jpg"
        price="349,99"
        tamanho1="38"
        tamanho2="41"
      />
      <Card
        nome="TÊNIS NMD R1 Primeblue"
        marca="Adidas"
        imagem="assets/adidas3.jpg"
        price="899,99"
        tamanho1="38"
        tamanho2="41"
      />
      <Card
        nome="Tênis Busenitz"
        marca="Adidas"
        imagem="assets/adidas4.jpg"
        price="499,99"
        tamanho1="38"
        tamanho2="41"
      />
      <br></br>
      <Card
        nome="Tênis Air Jordan 1 Mid Paris"
        marca="Nike"
        imagem="assets/nike1.jpg"
        price="660,00"
        tamanho1="38"
        tamanho2="41"
      />
      <Card
        nome="Tênis Air Jordan XXXVI"
        marca="Nike"
        imagem="assets/nike2.jpg"
        price="950,00"
        tamanho1="38"
        tamanho2="41"
      />
      <Card
        nome="Tênis Nike SB Bruin React"
        marca="Nike"
        imagem="assets/nike3.jpg"
        price="430,00"
        tamanho1="38"
        tamanho2="41"
      />
      <Card
        nome="Tênis Nike SB Force 58 Premium"
        marca="Nike"
        imagem="assets/nike4.jpg"
        price="380,00"
        tamanho1="38"
        tamanho2="41"
      />
      <br></br>
      <Card
        nome="Tênis ANZARUN LITE"
        marca="Puma"
        imagem="assets/puma1.jpg"
        price="279,90"
        tamanho1="38"
        tamanho2="41"
      />
      <Card
        nome="Tênis FUTURE RIDER PLAY ON"
        marca="Puma"
        imagem="assets/puma2.jpg"
        price="399,90"
        tamanho1="38"
        tamanho2="41"
      />
      <Card
        nome="Tênis RS-X REINVENTION"
        marca="Puma"
        imagem="assets/puma3.jpg"
        price="599,90"
        tamanho1="38"
        tamanho2="41"
      />
      <Card
        nome="Tênis WILD RIDER REFLECTIVE"
        marca="Puma"
        imagem="assets/puma4.jpg"
        price="549,90"
        tamanho1="38"
        tamanho2="41"
      />
      <br></br>
    </div>
  );
}

export default HomePage;
