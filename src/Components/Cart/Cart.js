import React from "react";

const Cart = ({cart}) => {
  return (
    <div>
      <h2>Order summary</h2>
      <h2>Selected products: {cart.length}</h2>
    </div>
  );
};

export default Cart;
