import React, { useState } from 'react'
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
                    <li><a href="#home" className="selected">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#qualification">Qualification</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contactme">Contactme</a></li>
                </ul>
            </nav>
            
            <Sidebar></Sidebar>
        </header>
    )
}

export default Navbar