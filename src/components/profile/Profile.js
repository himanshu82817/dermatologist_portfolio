import React from 'react'
import header1 from '../../images/header1.gif';
import profile1 from '../../images/profile1.jpeg';
import header2 from '../../images/header2.jpg';
import background from '../../images/background.jpg'
import './Profile.css'

export function scrollRotate() {
    let imgHolder = document.getElementById("imgHolder");
    imgHolder.style.transform = "translateY( " + window.pageYOffset/(2) + "px )"

    let num = document.getElementById("num");
    num.style.transform = "rotate(" + window.pageYOffset/(-5) + "deg)";
    num.style.opacity = 1 - window.pageYOffset;

    let cloud = document.getElementById("cloud");
    cloud.style.transform = "rotate(" + window.pageYOffset/(-5) + "deg)";
    cloud.style.opacity = 1 - window.pageYOffset/700;

    // let shadow = document.getElementById("shadow");
    // shadow.style.transform = "rotate(" + window.pageYOffset/(-5) + "deg)";
    // shadow.style.opacity = 1 - window.pageYOffset/700;
    
    let profile2 = document.getElementById("profile2");
    profile2.style.transform = "rotate(" + window.pageYOffset/(3) + "deg)";
    profile2.style.opacity = 1 - window.pageYOffset/800;

    let profile1 = document.getElementById("profile1");
    profile1.style.transform = "rotate(" + window.pageYOffset/(8) + "deg)";
    profile1.style.opacity = 1 - window.pageYOffset/800;
}
export default function profile() {

    return (

        <>
            <div className='landing' >
                {/* <img className='background' src={background} alt="" /> */}
                <div id='imgHolder' className="imgHolderA">
                    <p id='num' className="num">©’22</p>
                    <img id='cloud' className='cloud' src={header1} alt="" />
                   
                    <img id='profile2' className='profile2' src={profile1} alt="" />
                    <img id='profile1' className='profile1' src={header2} alt="" />
                </div>
                <div className="circle">
                    <div></div>
                </div>
            </div>
            <div className="welcomeTxt">
                <marquee behavior="" direction="">Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━ Welcome ━ Dr. Shalini Punia ━ Dermatologist ━</marquee>
            </div>
        </>



    )
}
