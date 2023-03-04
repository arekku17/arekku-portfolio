import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { boxVariant } from '../content/variants';
import { TypeAnimation } from 'react-type-animation';

const HomeInfo = () => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);


  return (
    <>
      <motion.div className="containerColumn" id='home'
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}>
        <div className="containerLeft">
          <img src="./fotomia.svg" alt="Foto alex" />
        </div>
        <div className="containerRight">
          <div className="topInfo">
            <div className="titleHome">
              <TypeAnimation
                sequence={['Hello World!', 1000, '']}
                speed={45}
                wrapper="p"
                repeat={Infinity}
              />
              <div className="socialMedias">
                <a href="https://github.com/arekku17" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/arekku17/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
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
      </motion.div>
    </>
  )
}

export default HomeInfo