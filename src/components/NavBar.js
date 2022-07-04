import i18next from 'i18next';
import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { SiAdobeacrobatreader, SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import  './NavBar.css'
import {useTranslation} from  "react-i18next";
export default function NavBar() {
  const [t, i18n] = useTranslation("global")
  return (

    

    <div className='nBAR'>     
     <Navbar  fixed ='top'collapseOnSelect expand="lg" variant="dark">
    <Container >
    <Navbar.Brand href="#top" >Lautaro Coria</Navbar.Brand>
    
    <Navbar>
      <Nav className="me-auto" >
      
      </Nav>
      <Nav >
      <Nav.Link  href="https://mega.nz/file/RNIlEQhB#87EMgJksfLO-DDe0oMuSdD_Ikc_g4WNyxXRFWhEKwxc" target="_blank">
          <SiAdobeacrobatreader />
                            
        </Nav.Link>
      <Nav.Link  href="https://www.linkedin.com/in/lautaro-coria-914848237/" target="_blank">
            <SiLinkedin  />
        </Nav.Link>
        <Nav.Link  href="mailto:lautarocoria97@gmail.com" target="_blank">
            <SiGmail />
        </Nav.Link>
        <Nav.Link  href="https://github.com/lautacoria18" target="_blank">
          <SiGithub />
                            
        </Nav.Link>
        
        
        <Button onClick={() => i18n.changeLanguage("es")}>ES</Button>
        <Button onClick={() => i18n.changeLanguage("en")}>EN</Button>
      </Nav>
    </Navbar>
    </Container>
  </Navbar></div>
  )
}
