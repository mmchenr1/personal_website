import { useContext } from 'react'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import {Navigation} from './components/Navbar/Navigation'
import { NavOffset } from './components/Navbar/NavOffset'
import './App.css'


const App = () => {
  return (
    <div id='app' className={`Molly's app`}>
        <Navigation
            className="nav-bar"
            property1="desktop"
            text="Projects"
            text1="Contact"
        />

        <div className="content-wrapper">
          <Home id = "page" className="Home"/>
          <NavOffset/><NavOffset/>
          <About id = "page" className="About"/>
          <NavOffset/><NavOffset id="Projects-scroll-spacer"/>
          <Projects id="page" className="Projects"/>
          <NavOffset/><NavOffset/>
          <Skills id="page" className="Skills"> </Skills>
        </div>
       

    </div>
  )
}

export default App
