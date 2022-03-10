import React from 'react'
import Profile from '../profile/Profile'
import About from '../about/About'
import Works from '../works/Work'
import Clints from '../clints/Clints'
import ShowCase from '../showCase/ShowCase'
import Contact from '../contact/Contact'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <Profile></Profile>
            <About></About>
            <Works></Works>
            <Clints></Clints>
            <ShowCase></ShowCase>
            <Contact></Contact>
            <Footer></Footer>

            
        </>
    )
}
