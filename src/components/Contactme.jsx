import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons'

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { boxVariant } from '../content/variants';

const Contactme = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);

    return (
        <motion.div id='contactme'
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}>
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
        </motion.div>
    )
}

export default Contactme