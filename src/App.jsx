import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import ProductCard from './ProductCard';
import CartModal from './Modal';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  const handleAddToCart = (product) => {
    const alreadyInCart = cartItems.some((item) => item.id === product.id);

    if (alreadyInCart) {
      setAlertMessage('⚠️ Item already added to the cart!');
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
      setAlertMessage('✅ Product added to cart!');
    }

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  const toggleCart = () => setShowCart(!showCart);

  return (
    <div>
      <Navbar cartCount={cartItems.length} onCartClick={toggleCart} />

      {showAlert && <div className="alert">{alertMessage}</div>}

      <div className="Details">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {showCart && (
        <CartModal
          cartItems={cartItems}
          onClose={toggleCart}
          onRemoveItem={handleRemoveFromCart}
        />
      )}
    </div>
  );
};

export default App;
