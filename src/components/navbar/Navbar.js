import React from 'react';
import './Navbar.css' 

export default function Navbar() {
    return (
            <nav>
                <div className='name' >
                    <p> Dr. Shalini Punia</p>
                </div>
                <div>
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
                </div>
                <div className='menu' >
                    <p>About</p>
                    <p>Works</p>
                    <p>Contact</p>
                </div>
            </nav>
    )
}
