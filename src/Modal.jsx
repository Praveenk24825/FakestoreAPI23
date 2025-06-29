import React from 'react';
import './App.css';

const CartModal = ({ cartItems, onClose, onRemoveItem }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>🛒 Cart Details</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} width={50} />
              <div>
                <p><strong>{item.title}</strong></p>
                <p>${item.price}</p>
                <button className="btn remove-btn" onClick={() => onRemoveItem(index)}>
                  ❌ Remove From Cart
                </button>
              </div>
            </div>
          ))
        )}

        <button className="btn close-modal" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartModal;
