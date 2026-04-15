import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="App">
      <header>
        <h1>🛍️ Product Store</h1>
        <p>Cart: {cartCount} items</p>
      </header>
      <div className="grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart}/>
        ))}
      </div>
    </div>
  );
}

export default App;