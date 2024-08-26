import React from 'react';

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn
} from "react-icons/fa";

import image from "./images/logo.png"
import image1 from "./images/p9.png"
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-containers">
        <div className="footer-container">
            <img src={image} alt="" className="logoImg" />
            <p className='paraText'>Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not 
            only five centuries, but also the leap</p>
            <div className="social">
            <FaFacebookF className=" fa facebook"/>
            <FaInstagram className="fa instagram"/>
            <FaTwitter className="fa twitter"/>
            <FaLinkedinIn className="fa linkedIn"/>
            </div>
        </div>
        <div className="footer-container">
          <h3>Latest News</h3>
          <img src={image1} alt="img" className="logoImg" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has </p>
          <br/>
          <img src={image1} alt="img" className="logoImg" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has </p>
        </div>
        <div className="footer-container">
          <h3>Quick Links</h3>
          <p><a href="#" className='home'>Home</a></p>
          <p><a href="#" className='home'>Home</a></p>
          <p><a href="#" className='home'>Home</a></p>
          <p><a href="#" className='home'>Home</a></p>
          <p><a href="#" className='home'>Home</a></p>
          <p><a href="#" className='home'>Home</a></p>
        </div>
        <div className="footer-container">
          <h3>Best Seller</h3>
          <p>Flow Indexer NFMI</p>
          <p>Flow Indexer NFMI</p>
          <p>Flow Indexer NFMI</p>
          <p>Flow Indexer NFMI</p>
          <p>Flow Indexer NFMI</p>
          <p>Flow Indexer NFMI</p>
          <p>Flow Indexer NFMI</p>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; Copyright All rights reserved 2021.
      </div>
    </footer>
  );
};

export default Footer;
