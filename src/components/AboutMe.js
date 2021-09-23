import React from 'react'
import me from "../me.jpg"
const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={me} alt="pic" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                        HÜSEYİN DİNÇER has experience in facility engineering design and management of wide variety of process and plants.
                        He has gained extensive experience in the development of projects concept, the provision of engineering support during procurement, construction
                        and commissioning of projects and coordinating the
                        efforts of Process Engineering teams in execution of these projects in Batman and İstanbul /Turkey.
                        Also, he is self-taught front-end developer for almost 2 years.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
