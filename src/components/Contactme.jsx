import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faDiscord, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { boxVariant } from '../content/variants';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

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
                <a href='tel:+52982184028' className="contactContainer">
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    <div className="infoContact">
                        <p className="social">Phone</p>
                        <p className="userSocial">+52 982 184 5028</p>
                    </div>
                </a>
                <a href='https://wa.me/529821845028' className="contactContainer">
                    <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                    <div className="infoContact">
                        <p className="social">Whatsapp</p>
                        <p className="userSocial">+52 982 184 5028</p>
                    </div>
                </a>
            </div>
        </motion.div>
    )
}

export default Contactme