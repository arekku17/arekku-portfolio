import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

const Aboutme = () => {
  return (
    <>
        <div className="sectionTitle">
            <p className="title">
                About Me
            </p>
            <p className="description">
                A short description about me
            </p>
        </div>

        <div className="containerColumn">
          <div className="containerLeft__50">
            <p>I’m Frontend Developer with extensive knowledge and years of experience developing personal and academic projects, using different development and design tools. I also have knowledge of graphic design using Adobe and Figma applications, with a lot of experience doing work in my community</p>
          </div>
          <div className="containerRight__50">
            <div className="cardAbout">
              <p className="cantidad">3</p>
              <p>Years Experience</p>
            </div>
            <div className="cardAbout">
              <p className="cantidad">5</p>
              <p>Completed Projects</p>
            </div>
          </div>
        </div>

        <button className="downloadcv">
              <p>Download CV</p>
              <FontAwesomeIcon icon={faFileDownload}/>
        </button>
    </>
  )
}

export default Aboutme