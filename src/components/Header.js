import React from 'react'
import Typed from 'react-typed';
import {Link} from "react-scroll"
const Header = () => {
    return (
        <div>
            <div id="home" className="header-wraper">
                <div className="main-info">
                    <h1>trust the process</h1>
                    <Typed
                        className="typed-text"
                        strings={["Web Design", "Web Development", "Twitter Ads SMM", "Google Ads"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                    <Link smooth={true} to="contacts" offset={-110} href="#" className="btn-main-offer">contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
