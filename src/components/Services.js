import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">my services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                            <h3>Web Design</h3>
                            <p>I approach each project individually and always focus on the result.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                            <h3>Web Development</h3>
                            <p>Your website will be build with an new proven technologies.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faTwitter} size="2x" /></div>
                            <h3>Twitter Ads SMM</h3>
                            <p>Your potential clients will see your services or product on Twitter.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /></div>
                            <h3>Google Ads</h3>
                            <p>Your service or product will appear at the top of the Google search.</p>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default Services
