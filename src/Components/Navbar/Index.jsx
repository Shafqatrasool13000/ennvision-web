
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { StyledContainer } from './style';
import logo from '../../assets/icons/ic_logo2.svg';
import profile from '../../assets/icons/ic_profile_placeholder.svg';
function Index() {
    return (
        <StyledContainer>
        <Navbar expand="lg" fixed='top'>
            <Container>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <NavLink to="/">
                <img src={logo} alt="logo" />
                </NavLink>
                <Navbar.Brand href="#" className='d-lg-none'>
                <img src={profile} alt="profile" />
                </Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mx-auto my-2 my-lg-0"
                navbarScroll
                >
                <NavLink className='nav-link' to="/find-home">FIND A HOME</NavLink>
                <NavLink className='nav-link' to="/list-properties">LIST A PROPERTY</NavLink>
                <NavLink className='nav-link' to="/find-professionals">FIND A PROFESSIONAL</NavLink>
                <NavLink className='nav-link' to="/resources">RESOURCES</NavLink>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#" className='d-none d-lg-block'>
                <img src={profile} alt="profile" />
                </Navbar.Brand>
            </Container>
        </Navbar>
        </StyledContainer>
    );
}

export default Index;