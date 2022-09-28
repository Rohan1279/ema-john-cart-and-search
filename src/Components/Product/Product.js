import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = ({product, handleAddToCart}) => {
    //   console.log(props.product);
    // const {product, handleAddToCart} = props
    const { name, img, seller, price, ratings, stock } = product;


   
    return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>Price: ${price}</p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
        <p>
            <small>Stock: {stock}</small>
        </p>
      </div>
      <button onClick={()=>handleAddToCart(product)} className="btn-cart">
        <p>
            Add to Cart
        </p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
