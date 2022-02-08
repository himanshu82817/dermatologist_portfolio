import React from 'react'
import "../about/About.css"

export default function about() {

    function animate() {
        let hand = document.getElementById('hand');
        setTimeout(() => {
            hand.style.transform = "scaleY(0.7)"
        }, 100);
        // setTimeout(() => {
        //     hand.style.transform = "scaleY(1)"
        // }, 400);
        setTimeout(() => {
            hand.style.transform = "scaleY(1.9)"
        }, 800);
        setTimeout(() => {
            hand.style.transform = "scaleY(1)"
        }, 1200);
    }
    setInterval(() => {
        animate()
    }, 5000);

    return (
        <>
            <div className='headings' >
                <p className='heading' >Skin that feels good —</p>
                <p className='heading' >Inside Out</p>
            </div>
            <div className="introduction">
                <p> <i class="fal fa-sign-in-alt"></i>About Me</p>
                <div>
                    <span>
                    <p>I have been helping people combat their dermatological problems for over a decade. For me, joy stems from correcting imperfections to give my patients confidence that empowers them to be find happiness in their own selves. Over the span of my career I have helped my patients manage and overcome skin disorders with dermato-surgical procedures as well as safe cosmetic procedures.</p>
                    </span>
                    <span>
                    <p>My wide range of expertise enables me to offer solutions for every aspect of medical and aesthetic dermatology - from anti-ageing treatments and skin rejuvenation to hair transplants and botox. I engage with each client with compassion and personalised attention.</p>
                    <p> No two clients are the same -  I work with a keen attention to detail incorporating advanced technologies into each treatment.</p>
                    </span>
                </div>
                <i id='hand' class="fas fa-hand-point-down"></i>
            </div>

        </>
    )
}

