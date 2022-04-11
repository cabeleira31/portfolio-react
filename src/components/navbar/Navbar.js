import React from 'react';
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {

    const toTheTop = () => {
        window.scrollTo({ top: 20, left: 0, behavior: "smooth" });
    }

    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className='navbar-logo' onClick={toTheTop}>
                Portfólio
            </div>
        </nav>
    )
}

export default Navbar
