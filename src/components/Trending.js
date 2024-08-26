import React from 'react';
import "./Trending.css";
import image1 from './images/p1.png';
import image2 from './images/p2.png';
import image3 from './images/p3.png';
import image4 from './images/p5.png';
import image5 from './images/p6.png';
import image6 from './images/p9.png';

const Card = ({ image, title, description }) => {
    return (
        <div className="cardss">
            <div className="card-contents">
                <div className="imgcrd">
                    <img src={image} alt="" className="cardImg" />
                </div>
                <div className="card-content">
                    <h5 className="title">{title}</h5>
                    <p className="text">{description}</p>
                </div>
            </div>
            <div className="card-buttons">
                <button className="card-button">View</button>
                <button className="card-button">Quote</button>
                <button className="card-button">Catalog</button>
            </div>
        </div>

    );
};

const Trending = () => {
    const cards = [
        { image: image1, title: 'Melt Flow Indexer', description: 'Melt Flow Indexer NM31' },
        { image: image2, title: 'Melt Flow Indexer', description: 'Melt Flow Indexer NM31' },
        { image: image3, title: 'Melt Flow Indexer', description: 'Melt Flow Indexer NM31' },
        { image: image4, title: 'Melt Flow Indexer', description: 'Melt Flow Indexer NM31' },
        { image: image5, title: 'Melt Flow Indexer', description: 'Melt Flow Indexer NM31' },
        { image: image6, title: 'Melt Flow Indexer', description: 'Melt Flow Indexer NM31' },
    ];

    return (
        <div className="card-container">
            <h2 className="trending-products-title">Featured Products</h2>
            <div className="trending-layout">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Trending;
