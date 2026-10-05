import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from '../assets/ball 3 (5).png'

function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{
        backgroundColor: "#4513FB"
    }}>
      <Container fluid>
        <img src={img} alt="" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex justify-content-end   w-75"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
             <Nav.Link href="#action2">Contact</Nav.Link>
              <Nav.Link href="#action2">Blog</Nav.Link>
              <button className='ms-5'> button</button>
     
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;