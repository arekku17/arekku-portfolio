import React, { useEffect } from 'react'
import { skillsData } from '../content/skillsData'
import Accordion from './Accordion'

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { boxVariant } from '../content/variants';

export const Skills = () => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div id='skills'
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control}>
      <div className="sectionTitle" >
        <p className="title">
          Skills
        </p>
        <p className="description">
          My technical level
        </p>
      </div>


      <div className="gridContainer">
        {
          skillsData.map(skill =>
            <Accordion skill={skill} key={skill.name}/>
          )
        }
      </div>
    </motion.div>
  )
}
