import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../../logo.svg'
import './header.scss'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#">
            <img src={Logo} alt="logo" width={150} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#action2">Find Help</Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="#action2">Find Work</Nav.Link>

              <Nav.Link href="#action1">Why Qwicjobs?</Nav.Link>
            </Nav>
            <div className="ms-0 ms-lg-5">
              <Link to="/login" className="btn btn-primary">
                LOGIN
              </Link>

              <Link
                to="/signup"
                className="ms-4 btn btn-secondary"
              >
                SIGNUP
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header