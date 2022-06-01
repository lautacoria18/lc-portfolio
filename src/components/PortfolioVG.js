import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Juegos } from './Juegos';
import './PortfolioVG.css'

import { SiGithub, SiGoogleplay, SiYoutube } from 'react-icons/si';
import { useTranslation } from 'react-i18next';


export default function PortfolioVG() {


  const [t, i18n] = useTranslation("global")

  return (
      <div className='portfolioVG'>
      <h3>{t("portfolio.my-vg")}</h3>
    <div className='gim'>
    <div className='grid1'>
    { Juegos.map((lider, index) => {
      return(
    <Card className='cardB' >
    <Card.Img variant="top" src={lider.image} />
    <Card.Body>
      <Card.Title>{t(lider.name)}</Card.Title>
      <Card.Text>
      {t(lider.description)}
      </Card.Text>
      <Card.Footer>

      <Button variant="dark" href={lider.download} target='_blank'>
      <SiGoogleplay width={"100"}/> {t("portfolio.google-play")}
      </Button>   
      <Button variant="dark" href={lider.source} target='_blank'>
      <SiGithub width={"100"}/> {t("portfolio.source-code")}
      </Button>
      <Button variant="dark" href={lider.video} target='_blank'>
      <SiYoutube width={"100"}/> {t("portfolio.gameplay")}</Button>
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
