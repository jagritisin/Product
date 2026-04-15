import React, { useState } from 'react';
import './ProductCard.css';  

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsInCart(true);
    setTimeout(() => setIsInCart(false), 1500);
  };

  return (
    <div 
      className={`product-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-image" 
        />
        {isHovered && (
          <div className="quick-actions">
            <button className="quick-view-btn">Quick View</button>
            <button className="wishlist-btn">♥</button>
          </div>
        )}
      </div>
      
      <div className="product-info">
        <span className="category-badge">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>
        <div className="price-section">
          <span className="current-price">${product.price.toFixed(2)}</span>
        </div>
        
        <button 
          className={`add-to-cart-btn ${isInCart ? 'added' : ''}`}
          onClick={handleAddToCart}
        >
          {isInCart ? '✓ Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
