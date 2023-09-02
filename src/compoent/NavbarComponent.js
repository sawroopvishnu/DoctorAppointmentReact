import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';

const NavbarComponent = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Doctor Appointments</Link>
            </div>
            <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="navbar-dropdown">
                    <span className="dropdown-toggle">Account</span>
                    <div className="dropdown-content">
                        <Link to="/doctor/login">Doctor Login</Link>
                        <Link to="/doctor/register">Doctor Register</Link>
                        <Link to="/patient/login">Patient Login</Link>
                        <Link to="/patient/register">Patient Register</Link>
                    </div>
                </div>
            </div>
            <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} />
            </div>
        </nav>
    );
};

export default NavbarComponent;
