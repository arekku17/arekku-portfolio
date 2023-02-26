import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { skillsData } from '../content/skillsData'

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
            <div className="accordion">
              <button className='btnSkill'>
                <FontAwesomeIcon icon={skill.icon}></FontAwesomeIcon>
                {skill.name}
                <FontAwesomeIcon icon={faAngleDown} className="arrow_active"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faAngleUp} className="arrow"></FontAwesomeIcon>
              </button>
              <div className="skillsList">
                {skill.skills.map(skillData =>
                  <div className='skillContainer'>
                    <div className="skillInfo">
                      <p className="skillName">
                        {skillData.name}
                      </p>
                      <p className="porcentaje">
                        {skillData.score}
                      </p>
                    </div>
                    <div className="progress">
                      <div className="progressBar" style={{width: skillData.score + '%'}}>

                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}
