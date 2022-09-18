import React from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import Logo from "../../logo.svg";
import "./header.scss";
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";

const Userprofile = () => {

  const logout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };
  return (
    <>
      <Navbar expand="lg" className="shadow-sm">
        <Container>
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" width={170} />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/how-it-works">Discover</Nav.Link>
              <Nav.Link href="#action2">Help</Nav.Link>
              <Nav.Link href="#action1">Messages</Nav.Link>
              <div onClick={logout} className="border-start d-flex align-items-center">  
                <img 
                  src={`${process.env.PUBLIC_URL}/images/logout.png`}
                  alt="rate"
                  className="ms-2"
                  width={20}
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Userprofile;
