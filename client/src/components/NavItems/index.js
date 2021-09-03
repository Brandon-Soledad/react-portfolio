import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";



function NavItems({toggleBurgerMenu}){
 
    return(
        <Container>
            <div id="navMenu" className="navbar-menu has-background-black ">
                <div className="navbar-end custom-nav-menu ">
                    <Link to="/" data-target="home" className="navbar-item navbar-mod " onClick={toggleBurgerMenu}>Home</Link>
                    <Link to="/About" data-target="about" className="navbar-item navbar-mod" onClick={toggleBurgerMenu}>About Me</Link>
                    <Link to="/Work" data-target="work-examples" className="navbar-item navbar-mod" onClick={toggleBurgerMenu}>Portfolio</Link>
                    <a href="./docs/BrandonsResume.pdf" className="navbar-item navbar-mod" target="_blank" onClick={toggleBurgerMenu} >Resume</a>
                </div>
            </div>
        </Container>
    )
}

export default NavItems



