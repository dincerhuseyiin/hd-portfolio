import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>my experiences</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2010-2014</h3>
                        <p>Halkali Gazi Anatolia High School</p>

                    </div>
                </div>
                {/*-*/}
              
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2014-2018</h3>
                        <p>Studied Electronic and Communication Engineering </p>

                    </div>
                </div>
                {/*-*/}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018-2020</h3>
                        <p>Renewable Energy Engineer - Project Engineer at Anahtar Energy (3.12 MWe Waste to Energy Plant) </p>

                    </div>
                </div>
                {/*-*/}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019-2021</h3>
                        <p>Front-end Developer at Twitter</p>
                    </div>
                </div>
                {/*-*/}
            </div>
        </div>
    )
}

export default Experience
