import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  // {products:products, initialCart: initialCart};
  const [cart, setCart] = useState(initialCart);
  const removeCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
        {cart.length === 0 && (
          <h2>
            You have not selected any product
            <br />
            <Link to={'/'}>Shop more</Link>
          </h2>
        )}
      </div>
      <div className="cart-container">
        <Cart cart={cart} removeCart={removeCart} />
      </div>
    </div>
  );
};

export default Orders;
