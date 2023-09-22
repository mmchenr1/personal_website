import './Navbar.css'

const scrollTo = (destination) => {
  console.log("scrolling")
  document.getElementById(destination)?.scrollIntoView();
}

export const Navigation = () => {
  return (
    <div className="nav-bar">
        <div className="nav-button-container">
            <button className="Home-Button" id="nav-bar-button" onClick={(e) => scrollTo("Home")}>Home</button>
            <button className="About-Button" id="nav-bar-button" onClick={(e) => scrollTo("About")}>About</button>
            <button className="Projects-Button" id="nav-bar-button" onClick={(e) => scrollTo("Projects")}>Projects</button>
            <button className="ContactMe-Button" id="nav-bar-button" onClick={(e) => scrollTo("ContactMe")}>ContactMe</button>
        </div>
    </div>
  );
};