import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaClipboardList, FaPhoneAlt, FaUser } from 'react-icons/fa';
import "./Header.css";

const Header: React.FC = () => {
    const location = useLocation();

    return (
        <header className="header">
            <div className="header-content container mx-auto">
                <div className="logo">Jacek Gil <br /> Nadzór Budowlany</div>
                <nav>
                    <ul className="nav-links">
                        <li className={location.pathname === "/" ? "active" : ""}>
                            <Link to="/">
                                <FaHome size={18} className="icon"/>
                                <span>Strona główna</span>
                            </Link>
                        </li>
                        <li className={location.pathname === "/services" ? "active" : ""}>
                            <Link to="/services">
                                <FaClipboardList size={18} className="icon"/>
                                <span>Zakres działalności</span>
                            </Link>
                        </li>
                        <li className={location.pathname === "/AboutMe" ? "active" : ""}>
                            <Link to="/AboutMe">
                                <FaUser size={18} className="icon"/>
                                <span>O mnie</span>
                            </Link>
                        </li>
                        <li className={location.pathname === "/contact" ? "active" : ""}>
                            <Link to="/contact">
                                <FaPhoneAlt size={18} className="icon"/>
                                <span>Kontakt</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
