import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faUser,
    faCode,
    faGraduationCap,
    faFolder,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll';

const Sidebar = () => {

    const [toggle, setToggle] = useState(false);

    const changeToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className="sidebar">
            <div className="hamburger-menu__container" onClick={changeToggle} onKeyDown={changeToggle} role='presentation'>
                <div className={`hamburger-menu ${toggle ? "hamburger-menu--open" : ""}`}>
                    <div className="hamburger-menu__line"></div>
                    <div className="hamburger-menu__line"></div>
                    <div className="hamburger-menu__line"></div>
                </div>
            </div>
            <nav className={`nav ${toggle ? "nav--open" : ""}`}>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-300} className="nav__item">
                    <FontAwesomeIcon icon={faHome} className="nav__item-icon-active" />
                    <span className="nav__item-text">Home</span>
                </Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-150} className="nav__item">
                    <FontAwesomeIcon icon={faUser} className="nav__item-icon" />
                    <span className="nav__item-text">About</span>
                </Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-150} className="nav__item">
                    <FontAwesomeIcon icon={faCode} className="nav__item-icon" />
                    <span className="nav__item-text">Skills</span>
                </Link>
                <Link activeClass="active" to="qualification" spy={true} smooth={true} offset={-150} className="nav__item">
                    <FontAwesomeIcon icon={faGraduationCap} className="nav__item-icon" />
                    <span className="nav__item-text">Qualification</span>
                </Link>
                <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-150} className="nav__item">
                    <FontAwesomeIcon icon={faFolder} className="nav__item-icon" />
                    <span className="nav__item-text">Portfolio</span>
                </Link>
                <Link activeClass="active" to="contactme" spy={true} smooth={true} offset={-150} className="nav__item">
                    <FontAwesomeIcon icon={faEnvelope} className="nav__item-icon" />
                    <span className="nav__item-text">Contactme</span>
                </Link>
            </nav>
        </div>
    )
}

export default Sidebar