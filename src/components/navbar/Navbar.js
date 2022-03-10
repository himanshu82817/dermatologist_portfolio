import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Navbar.css'
import { scrollRotate } from '../profile/Profile';
import about from '../about/About';

export default function Navbar() {

    window.onscroll = function () {
        // print "false" if direction is down and "true" if up
        if (this.oldScroll < this.scrollY && this.oldScroll>700 ) {
            document.getElementById('navbar').style.transform = 'translateY(-200px)'
            document.getElementById('navbar').style.backgroundColor = 'white'
        } else {
            document.getElementById('navbar').style.transform = 'translateY(0px)'
            document.getElementById('navbar').style.background = 'none'
        };
        this.oldScroll = this.scrollY;
        // console.log(this.oldScroll)
        scrollRotate();
    }
    function navigatetoabout() {
        window.scrollTo(0, 800)
    }
    function navigatetoworks() {
        window.scrollTo(0, 4200)
    }
    function navigatetoconnect() {
        window.scrollTo(0, 4800)
    }
    function restorePosition() {
        window.scrollTo(0,0)
    }




    return (
        <nav id='navbar' >
            <div className='name' >
                <Link to="/"  >
                    <p onClick={restorePosition} > Dr. Shalini Punia</p>
                </Link>
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
                <Link to="/"  >
                    <p onClick={navigatetoabout}>About</p>
                </Link>
                <Link to="/"  >
                    <p onClick={navigatetoworks} >Works</p>
                </Link>
                <Link to="/"  >
                    <p onClick={navigatetoconnect} >Connect</p>
                </Link>
                
                
            </div>
        </nav>
    )
}
