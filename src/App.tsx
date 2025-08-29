import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { BrochureProvider } from './context/BrochureContext';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <BrochureProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </Router>
      </BrochureProvider>
    </ProductProvider>
  );
}

export default App;