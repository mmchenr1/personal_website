import { useContext } from 'react'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import {Navigation} from './components/Navbar/Navigation'
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

        <div className="content=wrapper">
          <Home id = "Home" className="Home"/>
          <About id = "About" className="About"/>
          <Projects id="Projects" className="Projects"/>
          <Contact id="ContactMe" className="ContactMe"/>
        </div>
       

    </div>
  )
}

export default App
