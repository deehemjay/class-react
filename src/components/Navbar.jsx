import img1 from  "../assets/ball 3 (1).png";
import "../App.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className=""
    style={{
        backgroundColor: " #4513FB "

      }}>
      <Container>
    <Navbar.Brand href="#home"><img src={img1} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
          style={{

            width:"1000px"
          }}
           className="me-auto d-flex   justify-content-end ">
            <Nav.Link href="#features">HOME</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
             <Nav.Link href="#features">BLOG</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
        
          </Nav>
          <Nav>
           <button style={{
            padding: "10px 40px",
            width: "170px",
            backgroundColor:"black",
            color: "white",
            border:"none",
            outline:"none"

           }}>
         BLOG
           </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;