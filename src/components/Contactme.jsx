import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons'

const Contactme = () => {
    return (
        <>
            <div className="sectionTitle">
                <p className="title">
                    Contact me
                </p>
                <p className="description">
                    My contact information
                </p>
            </div>

            <div className="contacts">
                <div className="contactContainer">
                    <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
                    <div className="infoContact">
                        <p className="social">Telegram</p>
                        <p className="userSocial">@arekku17</p>
                    </div>
                </div>
                <div className="contactContainer">
                    <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
                    <div className="infoContact">
                        <p className="social">Discord</p>
                        <p className="userSocial">Arekku17#2494</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactme