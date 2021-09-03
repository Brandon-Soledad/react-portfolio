import CenterContainer from "../CenterContainer"
import NavItems from "../NavItems"
import Container from "react-bootstrap/Container";

const Nav = () =>{
    function toggleBurgerMenu() {
        document.querySelector('.navbar-menu').classList.toggle('is-active');
    }
    return(
        <Container>
            <nav className="navbar has-background-black has-text-white custom-nav">
                <CenterContainer cName="has-background-black">                    
                    <NavItems toggleBurgerMenu={toggleBurgerMenu}/>    
                </CenterContainer>
            </nav>
        </Container>
    )
}

export default Nav

