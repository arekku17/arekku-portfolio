import React, { useEffect } from 'react'
import { dataPortafolio as data } from '../content/portfolioData'
import Card from './Card'

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { boxVariant } from '../content/variants';

const Portfolio = () => {

    const control = useAnimation();
    const [ref, inView] = useInView({
        rootMargin: '700px'
    });

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);

    return (
        <motion.div id='portfolio'
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}>
            <div className="sectionTitle">
                <p className="title">
                    Portfolio
                </p>
                <p className="description">
                    My projects that I developed
                </p>
            </div>
            <div className="gridContainer">
                {
                    data.map(item => <Card item={item}></Card>)
                }
            </div>
        </motion.div>
    )
}

export default Portfolio