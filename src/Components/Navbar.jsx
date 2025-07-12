import React from 'react'
import { FiMenu } from "react-icons/fi";
import { PiBagBold } from "react-icons/pi";
import "../styleComponent/navbar.css"
const Navbar = () => {
    return (<>
        <header className="nav-header">
            <div className="top-bar">
                <button className="nav-button">
                    <FiMenu />
                    <i className="icon-menu" /> Menu
                </button>

                <div className="center-logo">
                    <span className="year">2022</span>
                    <div className="logo-circle">ROYAL</div>
                    <span className="stars">☆☆☆☆</span>
                </div>

                <button className="nav-button">
                    Booking <i className="icon-lock" />
                    <PiBagBold />
                </button>
            </div>

            <nav className="nav-links">
                <a href="#">ROOMS</a>
                <a href="#">WELLNESS</a>
                <a href="#">GASTRO</a>
                <a href="#">HOTEL</a>
                <a href="#">EVENTS</a>
                <a href="#">CONTACT</a>
            </nav>
        </header>

    </>)
}

export default Navbar;