import React from 'react'
import '../footer/Footer.css'

export default function Footer() {
    function navigatetoabout(){
        window.scrollTo(0,800)
    }
    function navigatetoworks(){
        window.scrollTo(0,3700)
    }
    function navigatetoconnect(){
        window.scrollTo(0,4800)
    }
    return (
        <footer>
            <div className='name' >
                    <p>Dr. Shalini Punia</p>
                </div>
                <div>
                    <p><b>V.02 2021</b></p>
                    <p>Portfolio Works</p>
                </div>
                <div>
                <p><b>Skin that feels good —</b></p>
                    <p>Inside Out</p>
                </div>
                <div>
                <p><b>Grater Kailesh</b></p>
                    <p>Khan Market</p>
                </div>
                <div className='menu' >
                <p onClick={navigatetoabout} >About</p>
                <p onClick={navigatetoworks} >Works</p>
                <p onClick={navigatetoconnect} >Connect</p>
                </div>
        </footer>
    )
}
