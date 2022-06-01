import React, { useTransition } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { SiGithub, SiGoogleplay, SiReact, SiYoutube } from 'react-icons/si';
import { Paginas } from './Paginas';

export default function PortfolioWEB() {

  const [t, i18n] = useTranslation("global")

  return (
    <div className='portfolioVG'>
      <h3>{t("portfolio.my-pg")}</h3>
    <div className='gim'>
    <div className='grid1'>
    { Paginas.map((lider, index) => {
      return(
    <Card className='cardB' >
    <Card.Img variant="top" src={lider.image} />
    <Card.Body>
      <Card.Title>{lider.name}</Card.Title>
      <Card.Text>
      {t(lider.description)}
      </Card.Text>
      <Card.Footer>

      <Button variant="dark" href={lider.download} target='_blank'>
      <SiReact width={"100"}/> Go to the page
      </Button>   
      <Button variant="dark" href={lider.source} target='_blank'>
      <SiGithub width={"100"}/> Source code
      </Button>
      
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
