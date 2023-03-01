import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { boxVariant } from '../content/variants';

const Aboutme = () => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);


  return (
    <motion.div id='about'
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control}>
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
            <p className="cantidad">10</p>
            <p>Completed Projects</p>
          </div>
        </div>
      </div>

      <a className="downloadcv" href='./Curriculum Vitae Jose Perez.pdf' target="_blank" rel="noreferrer">
        <p>Download CV</p>
        <FontAwesomeIcon icon={faFileDownload} />
      </a>
    </motion.div>
  )
}

export default Aboutme