import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useAutoAnimate } from '@formkit/auto-animate/react'


const Accordion = (props) => {

    const { skill } = props;
    const [toggle, setToggle] = useState(false);

    const changeToggle = () => {
        setToggle(!toggle);
    }

    const [parent] = useAutoAnimate()

    return (
        <div className="accordion" ref={parent}>
            <button className='btnSkill'
                onClick={changeToggle}
                onKeyDown={changeToggle}>
                <FontAwesomeIcon icon={skill.icon}></FontAwesomeIcon>
                {skill.name}
                <FontAwesomeIcon icon={faAngleDown} className={toggle ? "arrow" : "arrow__active"}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faAngleUp} className={toggle ? "arrow__active" : "arrow"}></FontAwesomeIcon>
            </button>
            {toggle ?
                <div className="skillsList">
                    {skill.skills.map(skillData =>
                        <div className='skillContainer' key={skillData.name}>
                            <div className="skillInfo">
                                <p className="skillName">
                                    {skillData.name}
                                </p>
                                <p className="porcentaje">
                                    {skillData.score}
                                </p>
                            </div>
                            <div className="progress">
                                <div className="progressBar" style={{ width: skillData.score + '%' }}>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                :
                <></>}

        </div>
    )
}

export default Accordion