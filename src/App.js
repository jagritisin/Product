import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import Auth from './components/Auth';
import Profile from './components/Profile';
import { products } from './data/products';

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [cartCount, setCartCount] = useState(0);

  const handleLogin = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const handleSignup = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <Router>

      {/* NAVBAR */}
      <nav style={{padding: '20px', display: 'flex', justifyContent: 'space-between'}}>
        <Link to="/">🛍️ Shop</Link>

        <div>
          {user ? (
            <>
              <Link to="/profile">👤 {user.name}</Link>
              <span style={{marginLeft: '15px'}}>🛒 {cartCount}</span>
            </>
          ) : (
            <Link to="/auth">Login</Link>
          )}
        </div>
      </nav>

      <Routes>

        {/* HOME - ALWAYS SHOW PRODUCTS */}
        <Route path="/" element={
          <div style={{padding: '20px'}}>

            <h2 style={{textAlign:'center'}}>
              {user ? `Welcome ${user.name}` : "Our Products"}
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {products.map(p => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>

          </div>
        } />

        {/* AUTH */}
        <Route path="/auth" element={
          <Auth onLogin={handleLogin} onSignup={handleSignup} />
        } />

        {/* PROFILE */}
        <Route path="/profile" element={
          user ? (
            <Profile user={user} onLogout={handleLogout} />
          ) : (
            <h2 style={{textAlign:'center'}}>Please login</h2>
          )
        } />

      </Routes>

    </Router>
  );
}

export default App;
