import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, deleteShoppingCart, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const products = useLoaderData();
  console.log(products);
  const [cart, setCart] = useState([]);
  const removeCart = () =>{
    setCart([]);
    deleteShoppingCart();
  }
  useEffect(() => {
    //cart from local storage
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) { // storedCart -> object
      //find which porducts are in storedCart
      const addedProduct = products.find((product) => product.id === id);
      // if id of storedCart === each product's id
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;

        // push addeProduct object to array
        savedCart.push(addedProduct);
      }
    }
    //set initial cart as the savedCart to show previous cart
    setCart(savedCart);
    // call the product after it is ready
    // if the value of products changes/loads/updates Hot reload and call the product
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    // console.log(product)
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart 
        cart={cart}
        removeCart={removeCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
