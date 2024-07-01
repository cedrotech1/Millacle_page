import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

import "../CSS/style.css";
import logo from "../assets/images/logoo.png";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => setShowMenu(true);
    const handleCloseMenu = () => setShowMenu(false);

    const offcanvasHeaderStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        borderBottom: '1px solid #e9ecef',
    };

    const offcanvasTitleStyle = {
        margin: 0,
        fontSize: '1.25rem',
    };

    const offcanvasBodyStyle = {
        padding: '1rem',
    };

    const sidebarNavStyle = {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    };

    const navItemStyle = {
        marginBottom: '0.5rem',
    };

    const navLinkStyle = {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#000',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        transition: 'background-color 0.2s',
    };

    const navLinkHoverStyle = {
        backgroundColor: '#e9ecef',
    };

    const handleCloseAndNavigate = () => {
        setShowMenu(false); // Close the Offcanvas
    };

    return (
        <>
            <header className="shadow-md">
                <div className="hed-top d-none d-sm-block border-bottom">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block">
                                <ul className="text-dark leftlist ld fs-8">
                                    <li className="float-start">
                                        <i className="bi bi-envelope"></i> miracleCenter@gmail.com
                                    </li>
                                    <li className="float-start border-start">
                                        <i className="bi bi-telephone"></i> +250785206973
                                    </li>
                                    <li className="float-start border-start">
                                        <a target="_blank" rel="noopener noreferrer" href='https://millacle.vercel.app/Login'>
                                            <i className="bi bi-box-arrow-in-right"></i> Login to account
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="text-dark pt-1 float-end">
                                    <li className="float-start fs-8 p-3 py-2"><i className="bi bi-facebook"></i></li>
                                    <li className="float-start fs-8 p-3 py-2"><i className="bi bi-twitter"></i></li>
                                    <li className="float-start fs-8 p-3 py-2"><i className="bi bi-instagram"></i></li>
                                    <li className="float-start fs-8 p-3 py-2"><i className="bi bi-linkedin"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="menu-jk" className="nav-part bg-white toop">
                    <div className="container-lg">
                        <div className="row bg-white navcol p-2">
                            <div className="col-lg-4">
                                <Link to='/'>
                                    <img className="logoNav" src={logo} alt="Logo" />
                                </Link>
                                <a onClick={handleShowMenu} className="float-end d-lg-none pt-1 ps-3">
                                    <i className="bi pt-1 fs-1 cp bi-list"></i>
                                </a>
                            </div>
                            <div id="menu" className="col-lg-8 d-none d-lg-block">
                                <ul className="fw-bold float-end nacul fs-7">
                                    <li className="float-start p-3 px-4"><a href="/">Home</a></li>
                                    <li className="float-start p-3 px-4"><Link to='/about' onClick={handleCloseMenu}>About Us</Link></li>
                                    <li className="float-start p-3 px-4"><Link to='/events' onClick={handleCloseMenu}>Event</Link></li>
                                    <li className="float-start p-3 px-4"><Link to='/gallery' onClick={handleCloseMenu}>Gallery</Link></li>
                                    <li className="float-start p-3 px-4"><Link to='/blogs' onClick={handleCloseMenu}>Blog</Link></li>
                                    <li className="float-start p-3 px-4"><Link to='/payment' onClick={handleCloseMenu}>Give</Link></li>
                                    <li className="float-start p-3 px-4"><Link to='/contact' onClick={handleCloseMenu}>Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Offcanvas show={showMenu} onHide={handleCloseMenu} placement="start">
                <div style={offcanvasHeaderStyle}>
                    <Offcanvas.Title style={offcanvasTitleStyle}>
                        <Link to="/">
                            <img src={logo} alt="Logo" className="img-fluid" />
                        </Link>
                    </Offcanvas.Title>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseMenu}></button>
                </div>
                <div style={offcanvasBodyStyle}>
                    <ul style={sidebarNavStyle}>
                        <li style={navItemStyle}>
                            <Link to="/" style={navLinkStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} onClick={handleCloseAndNavigate}>
                                <i className="bi bi-grid"></i>
                                <span style={{ marginLeft: '0.5rem' }}>Home</span>
                            </Link>
                        </li>
                        <li style={navItemStyle}>
                            <Link to="/about" style={navLinkStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} onClick={handleCloseAndNavigate}>
                                <i className="bi bi-info-circle"></i>
                                <span style={{ marginLeft: '0.5rem' }}>About Us</span>
                            </Link>
                        </li>
                        <li style={navItemStyle}>
                            <Link to="/events" style={navLinkStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} onClick={handleCloseAndNavigate}>
                                <i className="bi bi-calendar-event"></i>
                                <span style={{ marginLeft: '0.5rem' }}>Events</span>
                            </Link>
                        </li>
                        <li style={navItemStyle}>
                            <Link to="/gallery" style={navLinkStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} onClick={handleCloseAndNavigate}>
                                <i className="bi bi-image"></i>
                                <span style={{ marginLeft: '0.5rem' }}>Gallery</span>
                            </Link>
                        </li>
                        <li style={navItemStyle}>
                            <Link to="/blogs" style={navLinkStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} onClick={handleCloseAndNavigate}>
                                <i className="bi bi-journal"></i>
                                <span style={{ marginLeft: '0.5rem' }}>Blog</span>
                            </Link>
                        </li>
                        <li style={navItemStyle}>
                            <Link to="/payment" style={navLinkStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} onClick={handleCloseAndNavigate}>
                                <i className="bi bi-credit-card"></i>
                                <span style={{ marginLeft: '0.5rem' }}>Give</span>
                            </Link>
                        </li>
                        <li style={navItemStyle}>
                            <Link to="/contact" style={navLinkStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} onClick={handleCloseAndNavigate}>
                                <i className="bi bi-envelope"></i>
                                <span style={{ marginLeft: '0.5rem' }}>Contact Us</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Offcanvas>
        </>
    );
}

export default Navbar;
