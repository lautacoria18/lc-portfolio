import React from 'react'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import  './NavBar.css'
export default function NavBar() {
  return (
    <div className='nBAR'>     
     <Navbar  fixed ='top'collapseOnSelect expand="lg" variant="dark">
    <Container >
    <Navbar.Brand href="#top" >Lautaro Coria</Navbar.Brand>
    
    <Navbar>
      <Nav className="me-auto" >
      
      </Nav>
      <Nav >
      <Nav.Link  href="https://www.linkedin.com/in/lautaro-coria-914848237/" target="_blank">
            <SiLinkedin  />
        </Nav.Link>
        <Nav.Link  href="mailto:lautarocoria97@gmail.com" target="_blank">
            <SiGmail />
        </Nav.Link>
        <Nav.Link  href="https://github.com/lautacoria18" target="_blank">
          <SiGithub />
        </Nav.Link>
      </Nav>
    </Navbar>
    </Container>
  </Navbar></div>
  )
}
