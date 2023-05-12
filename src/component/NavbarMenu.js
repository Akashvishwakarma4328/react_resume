import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarMenu.css';
function NavbarMenu() {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: 'white' }}>Akash Vishwakarma</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Link to="/" style={{ color: 'white' }} className='navLink'>Home </Link>
              <Link to="/About" style={{ color: 'white' }} className='navLink'>About</Link>
              <Link to="/Skills" style={{ color: 'white' }} className='navLink'>Skills</Link>
              <Link to="/Project" style={{ color: 'white' }} className='navLink'>Project</Link>
              <Link to="/Certificates" style={{ color: 'white' }} className='navLink'>Certificates</Link>
              {/* <Nav.Link href="/Internship" style={{ color: 'white' }}>Internships</Nav.Link> */}
              <Link to="/Contact" style={{ color: 'white' }} className='navLink'>Contact</Link>


            </Nav>
            <Form className="d-flex"  >
              <Form.Control
                type="search" style={{ backgroundColor: '#313234' }}
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" >Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu;