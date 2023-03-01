import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Card = (props) => {

    const { item } = props;
    return (
        <>
            <div className="cardPortfolio">
                <div className="infoCard">
                    <img src={item.img} alt={item.name} />
                    <p className="titleCard">{item.name}</p>
                    <p>Tags:</p>
                    <div className="techs">
                        {
                            item.tags.map((tech, index) =>
                                <p className="tech" id={index}>{tech}</p>
                            )
                        }
                    </div>
                    <p>Description:</p>
                    <p className="desCard">
                        {
                            item.description
                        }
                    </p>
                </div>
                <div className="btns">
                    <a className='btnCard' href={item.demo} target="_blank" rel="noreferrer"> <p>Demo</p><FontAwesomeIcon icon={faEye} /> </a>
                    <a className='btnCard' href={item.repo} target="_blank" rel="noreferrer"> <p>Repo</p>  <FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
        </>
    )
}

export default Card