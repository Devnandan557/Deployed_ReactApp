import React, { useState } from "react";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaSearch
} from "react-icons/fa";

import { GiHamburgerMenu } from "react-icons/gi";
import image from "./images/logo.png"
import "./Navbar.css";



export default function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>

            <div className="mynav">
                <div className="pri-nav">
                    <div className="social-accounts">
                        <ul>
                            <li>
                                <FaFacebookF />
                            </li>
                            <li>
                                <FaInstagram />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                            <li>
                                <FaLinkedinIn />
                            </li>
                        </ul>

                    </div>
                    <div className="contact-no">
                        <ul>
                            <li>
                                +245 77777777
                            </li>

                        </ul>
                    </div>

        
                    <div className="my-acount">
                        <ul>
                            <li>My Account</li>
                        </ul>
                    </div>
                </div>
            </div>






            <nav className="main-nav">
            
                <div className="logo">
                    <img src={image} alt="logo" />
                </div>

            
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Poducts
                        </li>
                        <li>
                            Categories
                        </li>
                        <li>
                            Catalog
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Contact Us
                        </li>
                    </ul>
                </div>

               
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <FaSearch className="" />
                        </li>
                        <li>Enquiry</li>
                    </ul>

                
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );

}













