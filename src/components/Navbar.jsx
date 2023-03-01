import React, { useState } from 'react'
import { Link } from 'react-scroll';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [fix, setFix] = useState(false);

    const setFixed = () => {

        if(window.scrollY >= 530) {
            setFix(true);
        }else{
            setFix(false);
        }
    }

    window.addEventListener('scroll',  setFixed)

    return (
        <header className={fix ? "header-active" : ""}>
            <img src="./logo arekku dev.svg" alt="logo" className='logo' />
            <nav>
                <ul className="navbarHorizontal">
                    <li><Link activeClass="selected" to="home" spy={true} smooth={true} offset={-300}>Home</Link></li>
                    <li><Link activeClass="selected" to="about" spy={true} smooth={true} offset={-150}>About</Link></li>
                    <li><Link activeClass="selected" to="skills" spy={true} smooth={true} offset={-150}>Skills</Link></li>
                    <li><Link activeClass="selected" to="qualification" spy={true} smooth={true} offset={-150}>Qualification</Link></li>
                    <li><Link activeClass="selected" to="portfolio" spy={true} smooth={true} offset={-150}>Portfolio</Link></li>
                    <li><Link activeClass="selected" to="contactme" spy={true} smooth={true} offset={-150}>Contactme</Link></li>
                </ul>
            </nav>
            
            <Sidebar></Sidebar>
        </header>
    )
}

export default Navbar