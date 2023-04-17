import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ColorSchemesExample() {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#Home">Akash Vishwakarma</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Project">Project</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

<Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"  style={{ color :'white'}}>Akash Vishwakarma</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#Home"  style={{ color :'white'}}>Home</Nav.Link>
            <Nav.Link href="#About"  style={{ color :'white'}}>About</Nav.Link>
            <Nav.Link href="#Project"  style={{ color :'white'}}>Project</Nav.Link>
            <Nav.Link href="#Contact"  style={{ color :'white'}}>Contact</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex"  >
            <Form.Control
              type="search" style={{ backgroundColor :'#313234'}}
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

export default ColorSchemesExample;