import './NavBar.css';
import { Link } from "react-router-dom";
import { ExternalLink } from 'react-external-link';
import { RiHome2Line } from 'react-icons/ri'; //Icons
import { TiDocument } from 'react-icons/ti';
import { BsCodeSlash } from 'react-icons/bs';
import { FiMessageSquare, FiLinkedin, FiGithub } from 'react-icons/fi';

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-list">
                <Link to="/" className="navbar-link">
                    <NavBarIcon icon={<RiHome2Line size="85"/>} description={"H O M E"}/>
                </Link>
                <Link to="/Resume" className="navbar-link">
                    <NavBarIcon icon={<TiDocument size="100"/>} description={"R E S U M E"}/>
                </Link>
                <Link to="/Projects" className="navbar-link">
                    <NavBarIcon icon={<BsCodeSlash size="55"/>} description={"P R O J E C T S"}/>
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
            </div>
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