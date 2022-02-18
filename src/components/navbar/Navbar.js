import React from 'react';
import './Navbar.css'
import { scrollRotate } from '../profile/Profile';

export default function Navbar() {

    window.onscroll = function () {
        // print "false" if direction is down and "true" if up
        if (this.oldScroll < this.scrollY) {
            document.getElementById('navbar').style.transform = 'translateY(-200px)'
            document.getElementById('navbar').style.backgroundColor = 'white'
        } else {
            document.getElementById('navbar').style.transform = 'translateY(0px)'
            document.getElementById('navbar').style.background = 'none'
        };
        this.oldScroll = this.scrollY;
        scrollRotate();
    }

  

    return (
        <nav id='navbar' >
            <div className='name' >
                <p> Dr. Shalini Punia</p>
            </div>
            {/* <div>
                    <p><b>V.02 2021</b></p>
                    <p>Portfolio Works</p>
                </div>
                <div>
                    <p><b>Out Of Chaos</b></p>
                    <p>Emerges Order</p>
                </div>
                <div>
                    <p><b>33.5427° N 117.7854°W</b></p>
                    <p>Laguna Beach, CA HQ</p>
                </div> */}
            <div className='menu' >
                <p>About</p>
                <p>Works</p>
                <p>Contact</p>
            </div>
        </nav>
    )
}
