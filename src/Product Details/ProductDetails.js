import React from "react";
import { useParams } from "react-router-dom";
import DummyItems from "../Component/Items";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();

  const selectedItem = DummyItems.find((item) => item.id === productId);

  return (
    <div className="product-details">
      <div className="product-image-container">
        <img
          src={selectedItem.imageUrl}
          alt={selectedItem.title}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h1 className="product-title">{selectedItem.title}</h1>
        <p className="product-price">$ {selectedItem.price}</p>
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          convallis massa eu nisi feugiat, ac volutpat mauris rutrum.
        </p>
        <div className="product-rating">
          <h4>Rating:</h4>
          <div className="rating-stars">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
          <p>Rated 4.5 out of 5 stars</p>
        </div>
        <div className="product-reviews">
          <h4>Reviews:</h4>
          <ul>
            <li>Great product! Highly recommended.</li>
            <li>The quality is excellent.</li>
            <li>Very satisfied with my purchase.</li>
          </ul>
          <form className="review-form">
            <h4>Write a review:</h4>
            <textarea placeholder="Write your review"></textarea>
            <button className="submit-review-button">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
