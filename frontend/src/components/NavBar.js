import './NavBar.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from 'react-external-link';
import { RiHome2Line } from 'react-icons/ri';
import { TiDocument } from 'react-icons/ti';
import { FiMessageSquare, FiLinkedin, FiGithub } from 'react-icons/fi';
import { GoThreeBars } from 'react-icons/go';

const NavBar = () => {
    const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    
    const [isExpanded, setIsExpanded] = useState(false);
    
    const handleMenuExpand= () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className={ isMobile ? "navbar-mobile-container" : "navbar-container"}>
            {!isMobile && <div className="navbar-list">
                <Link to="/" className="navbar-link">
                    <NavBarIcon icon={<RiHome2Line size="85"/>} description={"H O M E"}/>
                </Link>
                <Link to="/Resume" className="navbar-link">
                    <NavBarIcon icon={<TiDocument size="100"/>} description={"R E S U M E"}/>
                </Link>
                <Link to="/Contact" className="navbar-link">
                    <NavBarIcon icon={<FiMessageSquare size="60" className="flip-horizontal"/>} description={"C O N T A C T"}/>
                </Link>
                <ExternalLink href="https://www.linkedin.com/in/lakejasper/" className="navbar-link">
                    <NavBarIcon icon={<FiLinkedin size="55"/>} description={"L I N K E D I N"}/>
                </ExternalLink>
                <ExternalLink href="https://github.com/TheJaspinater" className="navbar-link">
                    <NavBarIcon icon={<FiGithub size="55"/>} description={"G I T H U B"}/>
                </ExternalLink>
            </div>}
            {isMobile && <button className="hamburger-icon" onClick={handleMenuExpand}>
                <GoThreeBars size="55"/>
            </button>}
            {isMobile && <div className={isExpanded ? "menu active" : "menu"}>
                <div className="prevent-resize">
                    <Link to="/" className="navbar-link" onClick={handleMenuExpand}>
                        <NavBarIcon icon={<RiHome2Line size="85"/>} description={"H O M E"}/>
                    </Link>
                </div>
                <div className="prevent-resize">
                <Link to="/Resume" className="navbar-link" onClick={handleMenuExpand}>
                    <NavBarIcon icon={<TiDocument size="100"/>} description={"R E S U M E"}/>
                </Link>
                </div>
                <div className="prevent-resize">
                <Link to="/Contact" className="navbar-link" onClick={handleMenuExpand}>
                    <NavBarIcon icon={<FiMessageSquare size="60" className="flip-horizontal"/>} description={"C O N T A C T"}/>
                </Link>
                </div>
                <div className="prevent-resize">
                <ExternalLink href="https://www.linkedin.com/in/lakejasper/" className="navbar-link" onClick={handleMenuExpand}>
                    <NavBarIcon icon={<FiLinkedin size="55"/>} description={"L I N K E D I N"}/>
                </ExternalLink>
                </div>
                <div className="prevent-resize">
                <ExternalLink href="https://github.com/TheJaspinater" className="navbar-link" onClick={handleMenuExpand}>
                    <NavBarIcon icon={<FiGithub size="55"/>} description={"G I T H U B"}/>
                </ExternalLink>
                </div>
            </div>}
        </div>
    )
};

const NavBarIcon = ({icon, description}) => (
    <div>
        <div className="navbar-icon">
            {icon}
        </div>
        <div className="navbar-description">
            {description}
        </div>
    </div>
);

export default NavBar;