import React from 'react'
import "../about/About.css"
import bgImg from '../../images/bgImg.png'

export default function about() {

    // function animate() {
    //     let hand = document.getElementById('hand');
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
    //     animate()
    // }, 5000);

    return (
        <>
            
            <div className='headings' >
                <p className='heading' >My </p>
                <p className='heading' >Philosophy</p>
            </div>
            <div className="introduction">
                <p> <i class="fas fa-crosshairs"></i>Introduction</p>
                <img src={bgImg} alt="" className="bgImg" />
                <div>
                    <span>
                        <p>Everything in nature is interdependent. One entity can’t exist is isolation. I believe that disease comes when the person goes against the nature. We all are controlled by it. Skin is a reflection of one’s inner self. It works through the “mind-gut-skin axis”. Everything in nature is a masterpiece, with all its imperfections. Finding perfection in these imperfections is my passion. Nature’s scale to measure perfection is the “GOLDEN RATIO”. Nothing is symmetrical but still so beautiful and looks perfect. Nothing is perfect but still so beautiful !
                        </p>
                    </span>
                    <span>
                        <p>Every person too is a masterpiece. Correcting some of the imperfections in order to enhance one’s potential and beauty and therefore enhancing one’s confidence is very satisfying job. The skin carries our image to the world. It’s our first barrier and first point of contact. It’s health is a predictor of one’s health and well being both mentally and physically.
                        </p>
                    </span>
                </div>
                {/* <i id='hand' class="fas fa-arrow-down"></i> */}
            </div>

        </>
    )
}

