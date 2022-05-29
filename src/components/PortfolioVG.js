import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Juegos } from './Juegos';
import './PortfolioVG.css'

import { SiGithub, SiGoogleplay, SiYoutube } from 'react-icons/si';


export default function PortfolioVG() {
  return (
      <div className='portfolioVG'>
      <h3>My videogames</h3>
    <div className='gim'>
    <div className='grid1'>
    { Juegos.map((lider, index) => {
      return(
    <Card className='cardB' >
    <Card.Img variant="top" src={lider.image} />
    <Card.Body>
      <Card.Title>{lider.name}</Card.Title>
      <Card.Text>
        {lider.description}
      </Card.Text>
      <Card.Footer>

      <Button variant="dark" href={lider.download} target='_blank'>
      <SiGoogleplay width={"100"}/> Download
      </Button>   
      <Button variant="dark" href={lider.source} target='_blank'>
      <SiGithub width={"100"}/> Source code
      </Button>
      <Button variant="dark" href={lider.video} target='_blank'>
      <SiYoutube width={"100"}/> Gameplay</Button>
      </Card.Footer>
    </Card.Body>
  </Card>
      );
    })}
   </div>
   </div>
   </div >
  )
}
