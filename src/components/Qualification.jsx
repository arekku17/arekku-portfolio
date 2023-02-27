import React from 'react'

const Qualification = () => {
    return (
        <>
            <div className="sectionTitle">
                <p className="title">
                    Qualification
                </p>
                <p className="description">
                    My historical academic
                </p>
            </div>


            <div className="gridContainer">
                <div className="schoolContainer">
                    <div className="imgSchool">
                        <img src="./schools/cetis 82 logo.png" alt="cetis82" />
                    </div>
                    <div className="infoSchool">
                        <p className="date">AUGUST 2017 - JULY 2020</p>
                        <p className="career">Programming Technician</p>
                    </div>
                </div>
                <div className="schoolContainer">
                    <div className="imgSchool">
                        <img src="./schools/itescham logo.png" alt="itescham" />
                    </div>
                    <div className="infoSchool">
                        <p className="date">AUGUST 2020 - PRESENT</p>
                        <p className="career">Computer System Engineering</p>
                    </div>
                </div>
                <div className="schoolContainer">
                    <div className="imgSchool">
                        <img src="./schools/devf-white.png" alt="devf" />
                    </div>
                    <div className="infoSchool">
                        <p className="date">MARCH 2022 - SEPTEMBER 2022</p>
                        <p className="career">Professional Coding (Frontend Developer)</p>
                    </div>

                </div>
                <div className="schoolContainer">
                    <div className="imgSchool">
                        <img src="./schools/ONE_logo_rgb-768x408.png" alt="one" />
                    </div>
                    <div className="infoSchool">
                        <p className="date">DECEMBER 2022 - PRESENT</p>
                        <p className="career">Backend Developer</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Qualification