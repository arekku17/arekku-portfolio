import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Card = (props) => {

    const { item } = props;
    return (
        <>
            <div className="cardPortfolio">
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

                <div className="btns">
                    <button className='btnCard'> <p>Demo</p><FontAwesomeIcon icon={faEye}/> </button>
                    <button className='btnCard'> <p>Repo</p>  <FontAwesomeIcon icon={faGithub}/></button>
                </div>
            </div>
        </>
    )
}

export default Card