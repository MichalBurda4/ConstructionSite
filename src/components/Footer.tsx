import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Nadzór Budowlany. Wszelkie prawa zastrzeżone.</p>
            <nav>
                <ul className="footer-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutme">O mnie</Link></li>
                    <li><Link to="/services">Usługi</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
