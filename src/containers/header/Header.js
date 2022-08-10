import React from 'react'
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import Logo from '../../logo.svg'
import './header.scss'
import { Link } from 'react-router-dom';


const Header = () => {
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
              <Nav.Link href="/how-it-works">Find Help</Nav.Link>
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
            <div className="ms-0 ms-lg-5 d-flex">
              <Link to="/login" className="btn btn-primary">
                LOGIN
              </Link>

           

              <Dropdown className='ms-4'>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                SIGNUP
                </Dropdown.Toggle>

                <Dropdown.Menu align="end" className='rounded-3'>
                  <Dropdown.Item href="worker-signup">
                    <div className='signup-quicjobber'>
                      <div>
                        <div className='text-center'>
                          <img  src={`${process.env.PUBLIC_URL}/images/signup-quicjobber.png`} alt="signup-quicjobber" height={110} />
                        </div>
                        <h4 className='fw-bold text-white text-wrap line-height-revert text-center mb-0 mt-3'>Join to Offer Your Services</h4>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="/user-signup">
                    <div className='find-quicjobber'>
                      <div>
                        <div className='text-center'>
                          <img  src={`${process.env.PUBLIC_URL}/images/find-quicjobber.png`} alt="find-quicjobber" height={110} />
                        </div>

                        <h4 className='fw-bold text-white text-wrap line-height-revert text-center mb-0 mt-3'>Find Someone to Fix a problem</h4>

                      </div>

                   

                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header