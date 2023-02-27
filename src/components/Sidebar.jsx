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
                <nav className="nav__item active">
                    <FontAwesomeIcon icon={faHome} className="nav__item-icon-active" />
                    <span className="nav__item-text">Home</span>
                </nav>
                <nav className="nav__item">
                    <FontAwesomeIcon icon={faUser} className="nav__item-icon" />
                    <span className="nav__item-text">About</span>
                </nav>
                <nav className="nav__item">
                    <FontAwesomeIcon icon={faCode} className="nav__item-icon" />
                    <span className="nav__item-text">Skills</span>
                </nav>
                <nav className="nav__item">
                    <FontAwesomeIcon icon={faGraduationCap} className="nav__item-icon" />
                    <span className="nav__item-text">Qualification</span>
                </nav>
                <nav className="nav__item">
                    <FontAwesomeIcon icon={faFolder} className="nav__item-icon" />
                    <span className="nav__item-text">Portfolio</span>
                </nav>
                <nav className="nav__item">
                    <FontAwesomeIcon icon={faEnvelope} className="nav__item-icon" />
                    <span className="nav__item-text">Contactme</span>
                </nav>
            </nav>
        </div>
    )
}

export default Sidebar