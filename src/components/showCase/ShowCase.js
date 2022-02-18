import React from 'react'
import '../showCase/ShowCase.css'

import image1 from '../../images/Dermatology.jpg';
import image2 from '../../images/Dermatosurgery.jpg';
import image3 from '../../images/Hair.png';
import image4 from '../../images/Laser Treatments.jpg';
import image5 from '../../images/pexels-nico-becker-5619463.jpg';
import image6 from '../../images/Anti ageing.jpg';
import image7 from '../../images/Body Cosmetic.jpg';
import image8 from '../../images/Cosmetic Treatments.jpg';


export default function ShowCase() {
    function switchSlideright() {

        let slide1 = document.getElementById('slide1')
        let slide2 = document.getElementById('slide2')

        slide2.style.transform = 'translateX(0vw)'
        slide1.style.transform = 'translateX(-100vw)'


    }
    function switchSlideleft() {
        let slide1 = document.getElementById('slide1')
        let slide2 = document.getElementById('slide2')

        slide2.style.transform = 'translateX(100vw)'
        slide1.style.transform = 'translateX(0vw)'
    }
    // function animate1() {
    //     let hand = document.getElementById('hand1');
    //     setTimeout(() => {
    //         hand.style.transform = "scaleY(0.7)"
    //     }, 100);
    //     // setTimeout(() => {
    //     //     hand.style.transform = "scaleY(1)"
    //     // }, 400);
    //     setTimeout(() => {
    //         hand.style.transform = "scaleY(1.9)"
    //     }, 800);
    //     setTimeout(() => {
    //         hand.style.transform = "scaleY(1)"
    //     }, 1200);
    // }
    // setInterval(() => {
    //     animate1()
    // }, 5000);

    setTimeout(() => {
        const circle1 = document.getElementById("circle1");
        const process1 = document.getElementById("process1")
        const processName1 = document.getElementById('processName1')
        circle1.onmouseover = function () { mouseOver(process1, processName1) };
        circle1.onmouseout = function () { mouseOut(process1, processName1) };;


        const circle2 = document.getElementById("circle2");
        const process2 = document.getElementById("process2")
        const processName2 = document.getElementById('processName2')
        circle2.onmouseover = function () { mouseOver(process2, processName2) };
        circle2.onmouseout = function () { mouseOut(process2, processName2) };;


        const circle3 = document.getElementById("circle3");
        const process3 = document.getElementById("process3")
        const processName3 = document.getElementById('processName3')
        circle3.onmouseover = function () { mouseOver(process3, processName3) };
        circle3.onmouseout = function () { mouseOut(process3, processName3) };;

        const circle4 = document.getElementById("circle4");
        const process4 = document.getElementById("process4")
        const processName4 = document.getElementById('processName4')
        circle4.onmouseover = function () { mouseOver(process4, processName4) };
        circle4.onmouseout = function () { mouseOut(process4, processName4) };;

        function mouseOver(process, processName) {
            // circle.style.transform = scale(1.1);
            process.style.opacity = 1
            processName.style.color = '#BA975C'
        }
        function mouseOut(process, processName) {
            process.style.opacity = .3
            processName.style.color = '#9c9ea5'
        }
    }, 0);

    return (

        <>
            <div className='Capabilities' >

                <p>Dr.Shalini’s vision:</p>
                <div>
                    <p>Our vision is to be reputed as the leader in our sector by our patients, suppliers and regulators. This can be achieved by recruiting highly trained professionals, and staff whose ambitions are in line with ours to exceed patient expectations.While working with patients my goal is to bring their bodies back in sync using a mixture of procedures, medication and wellness techniques. <br /> Our only mission is to provide the highest quality of care, and unparalleled service to our patrons.</p>
                    <div>
                        <img src={image5} alt="" />
                    </div>
                </div>
                <i id='hand1' class="fas fa-arrow-down"></i>
            </div>
            <div className="process">
                <p>Process</p>
                <div className="rotatingCircleHolder">
                    <div className="rotatingCircleBox"> <div id='circle1' className="rotatingCircle"></div> </div>
                    <div className="rotatingCircleBox"> <div id='circle2' className="rotatingCircle"></div> </div>
                    <div className="rotatingCircleBox"> <div id='circle3' className="rotatingCircle"></div> </div>
                    <div className="rotatingCircleBox"> <div id='circle4' className="rotatingCircle"></div> </div>
                    <marquee behavior="" className="runningProcessName" direction=""> Discovery — Concept — Design — Deliver — Discovery — Concept — Design — Deliver — Discovery — Concept — Design — Deliver — Discovery — Concept — Design — Deliver —  </marquee>
                </div>
                <div className="processHolder">
                    <div className="processBox">
                        <p id='processName1' >Discovery</p>
                        <p id='process1' >Utilize the power of research and data to uncover key insights that formulate a visionary roadmap.</p>
                    </div>
                    <div className="processBox">
                        <p id='processName2' >Concept</p>
                        <p id='process2' >Begin whiteboarding, wireframing, sprints, and collaboration. This is where the foundation is built.</p>
                    </div>
                    <div className="processBox">
                        <p id='processName3' >Design</p>
                        <p id='process3' >Where the discovery and concept phases begin to form functional and aesthetically pleasing designs and solutions.</p>
                    </div>
                    <div className="processBox">
                        <p id='processName4' >Deliver</p>
                        <p id='process4' >lidation by testing, implementing, and assuring quality. We’re ready for takeoff!</p>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <p className='pixelEscapes' >Pixel Escapes</p>
                <p className='galleryHeading' >Services</p>
                <div className="slider">
                    <div className="imageHolder" id='slide1' >
                        <div className="img">
                            <div className="aboutImg">
                                <p>Dermatology</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                            </div>
                            <img src={image1} alt="" />
                            <p>Dermatology</p>
                        </div>
                        <div className="img">
                            <div className="aboutImg">
                                <p>Dermatosurgery</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                            </div>
                            <img src={image2} alt="" />
                            <p>Dermatosurgery</p>
                        </div>
                        <div className="img">
                            <div className="aboutImg">
                                <p>Hair</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                            </div>
                            <img src={image3} alt="" />
                            <p>Hair</p>
                        </div>
                        <div className="img">
                            <div className="aboutImg">
                                <p>Laser Treatments</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                            </div>
                            <img src={image4} alt="" />
                            <p>Laser Treatments</p>
                        </div>
                    </div>
                    <div className="imageHolder" id='slide2'>
                        <div className="img">
                            <div className="aboutImg">
                                <p>Anti Aging Treatments</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                            </div>
                            <img src={image6} alt="" />
                            <p>Anti Aging Treatments</p>
                        </div>
                        <div className="img">
                            <div className="aboutImg">
                                <p>Cosmetic Treatments</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                            </div>
                            <img src={image7} alt="" />
                            <p>Cosmetic Treatments</p>
                        </div>
                        <div className="img">
                            <div className="aboutImg">
                                <p>Dermatosurgery</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                            </div>
                            <img src={image2} alt="" />
                            <p>Dermatosurgery</p>
                        </div>

                        <div className="img">
                            <div className="aboutImg">
                                <p>Body Cosmetic Treatment</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                            </div>
                            <img src={image8} alt="" />
                            <p>Body Cosmetic Treatment</p>
                        </div>
                    </div>
                </div>
                <div className='swiper' >
                    <i onClick={switchSlideleft} class="fas fa-arrow-left"></i>
                    <i onClick={switchSlideright} class="fas fa-arrow-right"></i>
                </div>
            </div>
        </>
    )


}
