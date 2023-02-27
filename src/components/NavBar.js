import i18next from 'i18next';
import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { SiAdobeacrobatreader, SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import  './NavBar.css'
import {useTranslation} from  "react-i18next";
import BCS from '../assets/images/bcs.png'
export default function NavBar() {
  const [t, i18n] = useTranslation("global")
  return (

    

    <div className='nBAR'>     
     <Navbar  fixed ='top'collapseOnSelect expand="lg" variant="dark">
    <Container >
    <Navbar.Brand href="#top" ><img src={BCS} className='imgNav' /></Navbar.Brand>
    
    <Navbar>
      <Nav className="me-auto" >
      
      </Nav>
      <Nav >
      <Nav.Link  href="https://mega.nz/file/sIYzVYrZ#9NEcx7c26TUhaq6wFwgWQm57wCyts3W4R6-BhjcohOU" target="_blank">
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
        
        
        {/* Un comentario JSX  <Button onClick={() => i18n.changeLanguage("es")}>ES</Button>
       <Button onClick={() => i18n.changeLanguage("en")}>EN</Button>*/}
      </Nav>
    </Navbar>
    </Container>
  </Navbar></div>
  )
}
