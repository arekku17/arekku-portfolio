import React from 'react'
import { dataPortafolio as data } from '../content/portfolioData'
import Card from './Card'

const Portfolio = () => {
    return (
        <>
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
        </>
    )
}

export default Portfolio