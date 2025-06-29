import React from 'react';
import './App.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="Allign">
      <p><strong>Product ID:</strong> {product.id}</p>
      <h3>{product.title}</h3>
      <p><strong>Price:</strong> ${product.price}</p>
      <img src={product.image} alt={product.title} width={120} />
      <p>{product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p>
        Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)
      </p>
      <button
        className="btn add-to-cart"
        onClick={() => onAddToCart(product)}
      >
        🛒 Add to Cart
      </button>
      <button className="btn buy-now">💳 Buy Now</button>
    </div>
  );
};

export default ProductCard;
