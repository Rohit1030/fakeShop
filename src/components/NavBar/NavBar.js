import React from "react";
import './NavBar.css';

export default function NavBar(){
    const sideMenu = document.querySelector('.side-bar');
    function handleModalOpening(){
        sideMenu.showModal()
    }

    function handleModalClosing(){
        sideMenu.close();
    }
    return (
        <nav>
            <div className="container">
                <i className="fas fa-bars" onClick={handleModalOpening} onTouchStart={handleModalOpening}></i>
                <h1 className="company-name">
                    <span className="fake-text">Fake</span>
                    <span className="shop-text">Shop</span>
                </h1>
                <input type="text" id="search" placeholder="Search Your Product" />
                <ul className="nav-items">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Orders</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link"><span>Cart</span> <i className="fas fa-shopping-cart"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link"><span>Wishlist</span> <i className="far fa-heart"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link"><span>Profile</span> <i className="far fa-user-circle"></i></a>
                    </li>
                </ul>
            </div>
            <dialog className="side-bar">
                <div className="side-bar-header">
                    <h1 className="company-name">
                        <span className="fake-text">Fake</span>
                        <span className="shop-text">Shop</span>
                    </h1>
                    <i class="fas fa-times" onClick={handleModalClosing} onTouchStart={handleModalClosing}></i>
                </div>
                <ul className="side-bar-links">
                    <li className="side-bar-link">
                        <a href="#" className="bar-link">Home</a>
                        <i class="fas fa-angle-right"></i>
                    </li>
                    <li className="side-bar-link">
                        <a href="#" className="bar-link">Cart</a>
                        <i class="fas fa-angle-right"></i>
                    </li>
                    <li className="side-bar-link">
                        <a href="#" className="bar-link">Wishlist</a>
                        <i class="fas fa-angle-right"></i>
                    </li>
                    <li className="side-bar-link">
                        <a href="#" className="bar-link">Orders</a>
                        <i class="fas fa-angle-right"></i>
                    </li>
                    <li className="side-bar-link">
                        <a href="#" className="bar-link">FAQs</a>
                        <i class="fas fa-angle-right"></i>
                    </li>
                    <li className="side-bar-link">
                        <a href="#" className="bar-link">Contact Us</a>
                        <i class="fas fa-angle-right"></i>
                    </li>
                </ul>
            </dialog>
        </nav>
    );
}