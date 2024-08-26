import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar.js';
import FeaturedCategories from './components/FeaturedCategories.js'
import Trending from './components/Trending.js'
import Footer from './components/Footer.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div className="contacts">
      <Navbar />
      <FeaturedCategories />
      <Trending />
      <Footer />
    </div>

  </React.StrictMode>
);

