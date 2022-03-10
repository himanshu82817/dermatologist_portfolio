import React from 'react'
import '../showCase/ShowCase.css'
import { Outlet, Link } from "react-router-dom";


import image1 from '../../images/Dermatology.jpg';
import image2 from '../../images/Dermatosurgery.jpg';
import image3 from '../../images/Hair.png';
import image4 from '../../images/Laser Treatments.jpg';
import image5 from '../../images/botox.jpg';
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
            processName.style.color = '#F04A24'
        }
        function mouseOut(process, processName) {
            process.style.opacity = .3
            processName.style.color = '#9c9ea5'
        }
    }, 0);
    function restorePosition(){
        window.scrollTo(0,0)
    }

    return (

        <>
            <div className='Capabilities introduction' >

                <p><i class="fas fa-crosshairs"></i>Capabilities</p>
                <div>
                    <p>Over a decade of experience in aesthetic dermatology. I believe that an individual needs a holistic healing. One's physical, mental and emotional well-being are interlinked, making us unique. I have a team of experts including a clinical psychologist for assisting in dealing with repressed emotions. A therapeutic nutritionist and the interventions recommended according to body type plays a major role in dealing with the skin condition.</p>
                    
                        <div>
                            <p>Botox and fillers</p>
                            <p>Anti Aging</p>
                            <p>Lasers</p>
                            <p>Skin rejuvenation</p>
                            <p>Chemical peels</p>
                            <p>Threads for face and body</p>
                        </div>
                        <div>
                            <p>Mesotherapy</p>
                            <p>Anti-pigmentation</p>
                            <p>Microblading</p>
                            <p>Lip tinting</p>
                            <p>Body polishing</p>
                            <p>Hair transplant</p>    
                        </div>
                    
                </div>
                {/* <i id='hand1' class="fas fa-arrow-down"></i> */}
            </div>
            <div className="process ">
                <p> <i class="fas fa-crosshairs"></i> Process</p>
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
                {/* <p className='pixelEscapes' >Pixel Escapes</p> */}
                <p className='galleryHeading' >Services</p>
                <div className="slider">
                    <p className="overTxt">INSPIRED BY CULTURES, TRAVEL, <br /> AND THE OUTDOORS.</p>
                    <div className="imageHolder" id='slide1' >
                        <div  className="img">
                            <div className="aboutImg">   
                                <p className='serviceName' >Dermatology</p>
                                <p className='aboutService' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                                <Link to="/service" >
                                    <p onClick={restorePosition} className='link1'>Read More</p>
                                </Link>
                            </div>
                            <img src={image1} alt="" />
                           
                        </div>
                        <div className="img">
                            <div className="aboutImg">
                                <p className='serviceName' >Dermatosurgery</p>
                                <p className='aboutService' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                                <Link to="/service" >
                                    <p onClick={restorePosition} className='link1'>Read More</p>
                                </Link>
                            </div>
                            <img src={image2} alt="" />
                            
                        </div>
                        <div className="img">
                            <div className="aboutImg">
                                <p className='serviceName' >Hair</p>
                                <p className='aboutService' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                                <Link to="/service" >
                                    <p onClick={restorePosition} className='link1'>Read More</p>
                                </Link>
                            </div>
                            <img src={image3} alt="" />
                           
                        </div>
                        <div className="img">
                            <div className="aboutImg">
                                <p className='serviceName' >Laser Treatment</p>
                                <p className='aboutService' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                                <Link to="/service" >
                                    <p onClick={restorePosition} className='link1'>Read More</p>
                                </Link>
                            </div>
                            <img src={image4} alt="" />
                            
                        </div>
                    </div>
                    <div className="imageHolder" id='slide2'>
                        <div className="img">
                            <div className="aboutImg">
                                <p className='serviceName' >Anti Aging Treatments</p>
                                <p className='aboutService' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                                <Link to="/service" >
                                    <p onClick={restorePosition} className='link1'>Read More</p>
                                </Link>
                            </div>
                            <img src={image6} alt="" />
                           
                        </div>
                        <div className="img">
                            <div className="aboutImg">
                                <p className='serviceName' >Cosmetic Treatments</p>
                                <p className='aboutService' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                                <Link to="/service" >
                                    <p onClick={restorePosition} className='link1'>Read More</p>
                                </Link>
                            </div>
                            <img src={image7} alt="" />
                           
                        </div>
                        <div className="img">
                            <div className="aboutImg">
                                <p className='serviceName' >Botox</p>
                                <p className='aboutService' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                                <Link to="/service" >
                                    <p onClick={restorePosition} className='link1'>Read More</p>
                                </Link>
                            </div>
                            <img src={image5} alt="" />
                          
                        </div>

                        <div className="img">
                            <div className="aboutImg">
                                <p className='serviceName' >Body Cosmetic Treatment</p>
                                <p className='aboutService' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis commodi a pariatur aliquam expedita placeat nesciunt nam, nemo, eligendi aspernatur sunt aperiam molestias quia aut. Cupiditate, assumenda sunt? Numquam, sit.</p>
                                <Link to="/service" >
                                    <p onClick={restorePosition} className='link1'>Read More</p>
                                </Link>
                            </div>
                            <img src={image8} alt="" />
                            
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
