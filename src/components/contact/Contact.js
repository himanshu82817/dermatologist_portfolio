import React from 'react'
import '../contact/Contact.css'

export default function Contact() {
    return (
        <>
            <div className='contactUs' >
                <p className='getInTouch' >Get in Touch</p>
                <p className='connectHeading' >Connect</p>
            </div>
            <div className="mediaLinks">
                <div className="link">
                    <div className="mainLink">
                        <p>EMAIL</p>
                        <i class="far fa-arrow-up"></i>
                    </div>
                    <div className="hoverEffect">
                        <p>EMAIL</p>
                        <i class="far fa-arrow-up"></i>
                    </div>
                </div>
                <div className="link">
                    <div className="mainLink">
                        <p>LINKEDIN</p>
                        <i class="far fa-arrow-up"></i>
                    </div>
                    <div className="hoverEffect">
                        <p>LINKEDIN</p>
                        <i class="far fa-arrow-up"></i>
                    </div>
                </div>
                <div className="link">
                    <div className="mainLink">
                        <p>DRIBBBLE</p>
                        <i class="far fa-arrow-up"></i>
                    </div>
                    <div className="hoverEffect">
                        <p>DRIBBBLE</p>
                        <i class="far fa-arrow-up"></i>
                    </div>
                </div>
                <div className="link">
                    <div className="mainLink">
                        <p>BHANCE</p>
                        <i class="far fa-arrow-up"></i>
                    </div>
                    <div className="hoverEffect">
                        <p>BHANCE</p>
                        <i class="far fa-arrow-up"></i>
                    </div>
                </div>
                <div className="link">
                    <div className="mainLink">
                        <p>TUMBLER</p>
                        <i class="far fa-arrow-up"></i>
                    </div>
                    <div className="hoverEffect">
                        <p>TUMBLER</p>
                        <i class="far fa-arrow-up"></i>
                    </div>
                </div>
            </div>
            <p className='findMe' >Or find me here.</p>
            <marquee id="address1" behavior="" direction="">33.5427° N, 117.7854° W, </marquee>
            <marquee id="address2" behavior="" direction="right">Laguna Beach_ CA, </marquee>
            <i class="fas fa-hand-peace">Thanks for visiting</i>
        </>
    )
}
