import React from 'react'
import { skillsData } from '../content/skillsData'
import Accordion from './Accordion'

export const Skills = () => {

  return (
    <>
      {console.log(skillsData)}

      <div className="sectionTitle">
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
    </>
  )
}
