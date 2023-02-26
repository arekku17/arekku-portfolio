import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



const HomeInfo = () => {
  return (
    <>
      <div className="containerColumn">
        <div className="containerLeft">
          <img src="./fotomia.svg" alt="Foto alex" />
        </div>
        <div className="containerRight">
          <div className="topInfo">
            <div className="titleHome">
              <p>Hello World!</p>
              <div className="socialMedias">
                <a href="https://github.com/arekku17"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/arekku17/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
            </div>
            <div className="nameHome">
              <p className='name'>I´m Alex Perez Arenas</p>
              <p className="profesion">Frontend Developer | ONE and ISIC Student</p>
            </div>
          </div>
          <div className="aboutmeHome">
            Passionate to design and development web pages, desktop and mobile apps. Always learning things news about programming and undertaking business of products.
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeInfo