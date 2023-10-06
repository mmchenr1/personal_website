import './Navbar.css'

const scrollTo = (destination) => {
  console.log("scrolling")
  document.getElementById(destination)?.scrollIntoView();
}

export const Navigation = () => {
  return (
    <div className="nav-bar">
        <div className="nav-button-container">
            <button className="Home-Button" id="nav-bar-button" onClick={(e) => document.getElementById("Home")?.scrollIntoView({block: "center"})}>Home</button>
            <button className="About-Button" id="nav-bar-button" onClick={(e) => document.getElementById("About")?.scrollIntoView({block: "center"})}>About</button>
            <button className="Projects-Button" id="nav-bar-button" onClick={(e) => document.getElementById("scroll-spacer")?.scrollIntoView({block: "start"})}>Projects</button>
            <button className="Skills-Button" id="nav-bar-button" onClick={(e) => document.getElementById("Skills")?.scrollIntoView({block: "center"})}>Skills</button>

        </div>

        <div className="emailme-button-wrapper">
            <a
              href={"mailto:molly_mchenry@brown.edu"}
              aria-label='email address'
              className="EmailMe-Button" 
              target="_blank"
            >
              Email Me
            </a>
          {/* <button className="EmailMe-Button" onClick={(e) => scrollTo("Home")}>Email Me</button> */}
        </div>
    </div>
  );
};