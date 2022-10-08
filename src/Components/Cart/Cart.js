import React from "react";
import './Cart.css'
const Cart = ({cart, removeCart}) => {
  console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity += product.quantity 
    total += product.price * product.quantity
    shipping += product.shipping
  }
//   const tax = +(total*.01).toFixed(2) ; 
  const tax = parseFloat((total*.01).toFixed(2)) ; 
  const grandTotal = total+shipping+tax;
  return (
    <div className="cart">
      <h2>Order summary</h2>
      <p>Selected products: {quantity}</p>
      <p>Total price: ${total}</p>
      <p>Total shipping: ${shipping}</p>
      <p>Tax: {tax}</p>
      <h2>Grand Total: {grandTotal.toFixed(2)}</h2>
      <button onClick={removeCart}>Remove 🛒</button>
    </div>
  );
};

export default Cart;
