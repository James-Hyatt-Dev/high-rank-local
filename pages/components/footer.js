import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from '@mui/material';

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerWrapper">
                <div className="footerTop">
                    <div className="footerTopLeft">
                        <h1>Got a Project? <span> Tell us Everything.</span></h1>
                        <a className='tel' href="tel:14079929992"><h2 className='tel'>(407) 992-9992</h2></a>
                        <a className='email' href="mailto:james@jameshyattdev.com">james@jameshyattdev.com</a>
                    </div>
                    <div className="footerTopRight">
                        <Link href="/about-us" target='none'>About Us</Link>
                        <Link href="/some-clients" target='none'>Clients</Link>
                        <Link href="/prices" target='none'>Prices</Link>
                        <Link href="/contact-us" target='none'>Contact Us</Link>
                    </div>
                </div>
                <hr />
                <div className="footerBottom">
                    <div className="footerBottomLeft">
                        <p>Cape Coral Florida</p>
                        <p>Made with <span>❤️</span> and a literal ton of ☕</p>
                        <p>2017-2022 All Rights Reserved</p>
                    </div>
                    <div className="footerBottomRight">
                        <Link href='/terms' target='none'>Terms & Conditions</Link>
                        <Link href='/privacy' target='none'>Privacy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer