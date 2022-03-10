import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route,  Link } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile.js';
import About from './components/about/About'
import Works from './components/works/Work'
import Clints from './components/clints/Clints'
import ShowCase from './components/showCase/ShowCase'
import Contact from './components/contact/Contact';

import './App.css';
import ServicePage from "./components/servicesPage/ServicePage";
import Home from "./components/home/Home";




function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/about" element={<About />} />
       </Routes>
    </BrowserRouter>
    
    </>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
