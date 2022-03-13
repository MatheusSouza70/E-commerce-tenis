import React from 'react';
import { CartProvider, useCart } from "react-use-cart";
 

const Cart = () => {
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        } = useCart();
        if (isEmpty) return <h1 className="text-center">Seu carrinho está vazio! :(</h1>
  return (
    <section className="py-4 container">
        <div className="row justify-content-center">
            <div className="col-12">
                <h5>Cart ({totalUniqueItems}) items totais: ({totalItems})</h5>
                <table className="table table-light table-hover m-0">
                    <tBody>
                    {items.map((item,index)=>{
                        return(
                        <tr key={index}>
                        <td>
                            <img src={item.img} style={{height: '6rem'}}/>
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>quantity({item.quantity})</td>
                        <td>
                            <button className="btn btn-info ms-2"
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                            >-</button>      
                            <button className="btn btn-info ms-2"
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                            >+</button>
                            <button className="btn btn-danger ms-2"
                            onClick={() => removeItem(item.id)}
                            >Remove item</button>
                        </td>
                        </tr>)
                       
                    })}
                     </tBody>
                </table>
        </div>
        <div className="col-auto ms-auto">
            <h2>Total price: R$ {cartTotal}</h2>
        </div>
        <div className="col-auto ">
        <button
        className="btn btn-danger m-2"
        onClick={() => emptyCart()}
        >Clear cart    
        </button>  
        <button className="btn btn-primary m-2">Buy now</button>  
        </div>
        </div>
   </section>
  );
};

export default Cart;
