import React from 'react';
import "./FeaturedCategories.css"
import image1 from './images/p1.png';
import image2 from './images/p9.png';
import image3 from './images/p2.png';
import image4 from './images/p3.png';
import image5 from './images/p5.png';
import image6 from './images/p6.png';
import image7 from './images/p7.png';
import image8 from './images/p8.png';

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

const FeaturedCategories = () => {
  const cards = [
    { image: image1, description: 'Salt Spray Chamber Stand' },
    { image: image2, description: 'Salt Spray Chamber Stand' },
    { image: image3, description: 'Salt Spray Chamber Stand' },
    { image: image4, description: 'Salt Spray Chamber Stand' },
    { image: image5, description: 'Salt Spray Chamber Stand' },
    { image: image6, description: 'Salt Spray Chamber Stand' },
    { image: image7, description: 'Salt Spray Chamber Stand' },
    { image: image8, description: 'Salt Spray Chamber Stand' }
  ];

  return (
    <div className="card-layout-container">
      <h2 className="featured-products-title">Featured Products</h2>
    <div className="card-layout">
      {cards.map((card, index) => (
        <Card 
          key={index} 
          image={card.image} 
          description={card.description} 
        />
      ))}
    </div></div>
  );
};

export default FeaturedCategories;










