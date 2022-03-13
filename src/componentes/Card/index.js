import React from "react";
import "./style.css";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
  const { addItem } = useCart();
  return (
    <div className="card-container">
      <p className="nome">{props.nome}</p>
      <img className="imagem" src={props.imagem} alt={props.nome} />
      <p className="marca">{props.marca} </p>
      <p>R${props.price}</p>
      <p>Tamanhos Disponíveis</p>
      <div className="botoes">
        <button className="button1">{props.tamanho1}</button>
        <button className="button2">{props.tamanho2}</button>
      </div>
      <br></br>
      <div>
        <button class="btn btn-success" onClick={() =>addItem(props.item)} >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default Itemcard;

//  <div id="overlay" class="overlay">
//<p className='detalhes'>{props.detalhes}</p>
//</div>
