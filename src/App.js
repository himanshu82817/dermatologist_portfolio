import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile.js';
import About from './components/about/About'
import Works from './components/works/Work'
import Clints from './components/clints/Clints'
import ShowCase from './components/showCase/ShowCase'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'
import './App.css';



function App() {
  return (
    <main>
      <Navbar></Navbar>
      <Profile></Profile>
      <About></About>
      <Works></Works>
      <Clints></Clints>
      <ShowCase></ShowCase>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}

export default App;
