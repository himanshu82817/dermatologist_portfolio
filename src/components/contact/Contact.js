import React from 'react'
import '../contact/Contact.css'
import connectImg from '../../images/connect.png' 

export default function Contact() {
    return (
        <>
            <div className='contactUs' >
                <p className='getInTouch' > <i class="fas fa-crosshairs"></i> Get in Touch</p>
                <p className='connectHeading' >Connect</p>
            </div>
            {/* <div className="mediaLinks">
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
            </div> */}
            <div className="form">
                <img src={connectImg} alt="" className='connectImg' />
                <form action="">
                    <span>
                        <input type="text" placeholder='Your Name' />
                        <input type="email" placeholder='Email' />
                    </span>
                    <span>
                        <input type="tel" placeholder='Phone' />
                        <select name="" id="" placeholder='Select a service'>
                            <option value="">Select a service</option>
                            <option value="">Dermatosurgery </option>
                            <option value="">Hair</option>
                            <option value="">Laser Treatments</option>
                            <option value="">Laser Treatments</option>
                            <option value="">Cosmetic Treatments</option>
                            <option value="">Anti Aging Treatments</option>
                            <option value="">Body Cosmetic Treatment</option>
                            <option value="">Others</option>
                        </select>
                    </span>
                    <span>
                        <select name="" id="" placeholder='Select a service'>
                            <option value="">Select Place</option>
                            <option value="">Grater Kailesh </option>
                            <option value="">Khan Market</option>

                        </select>
                        <input type="text" placeholder='Primary Concern' />
                    </span>
                    <button>Submit</button>
                </form>
            </div>
            {/* <p className='findMe' >Or find me here.</p>
            <marquee id="address1" behavior="" direction="">33.5427° N, 117.7854° W, </marquee>
            <marquee id="address2" behavior="" direction="right">Laguna Beach_ CA, </marquee>
            <i class="fas fa-hand-peace">Thanks for visiting</i> */}
        </>
    )
}
