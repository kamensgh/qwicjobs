import React from 'react'
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import Logo from '../../logo.svg'
import './header.scss'
import { useCookies } from "react-cookie";
// import { Link } from 'react-router-dom';


const Workerprofile = () => {
  const [cookies, removeCookie] = useCookies();
  
  const logout = () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
  };
  return (
    <>
      <Navbar expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="logo" width={170} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/how-it-works">Discover</Nav.Link>
              <Nav.Link href="#action2">Help</Nav.Link>
              <Nav.Link href="#action1">Messages</Nav.Link>
              <Nav.Link onClick={logout} className="border-start">
                <img
                  src={`${process.env.PUBLIC_URL}/images/logout.png`}
                  alt="rate"
                  className="ms-1"
                  width={20}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Workerprofile