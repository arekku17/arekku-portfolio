import React from 'react'
import Sidebar from './Sidebar';

const Navbar = () => {

    

    return (
        <header>
            <img src="./logo arekku white.png" alt="logo" className='logo' />
            <nav>
                
                <ul className="navbarHorizontal">
                    <li><a href="#home" className="selected">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#qualification">Qualification</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contactme">Contactme</a></li>
                </ul>

                <Sidebar></Sidebar>
            </nav>
        </header>
    )
}

export default Navbar