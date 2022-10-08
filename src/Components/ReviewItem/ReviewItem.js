import { faDeleteLeft, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";
const ReviewItem = ({ product,handleRemoveItem }) => {
  const {id, name, price, quantity, img, shipping } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p>Price: 
            <small> ${price}</small>
          </p>
          <p>Quantity:
            <small> {quantity}</small>
          </p>
          <p>Shipping
            <small> ${shipping}</small>
          </p>
        </div>
        <div className="delete-container" 
        onClick={()=>{handleRemoveItem(id)}}>
          <button className="btn-delete">
            <FontAwesomeIcon icon={faTrashCan} className='delete-icon'></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
