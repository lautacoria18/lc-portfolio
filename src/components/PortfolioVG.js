import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Juegos } from './Juegos';
import './PortfolioVG.css'
import SAG from '../assets/images/CoverPhoto.jpg'
import JMP from  '../assets/images/JumpinguCover.jpg'
import RAT from '../assets/images/RockAndTrollCover.jpg'
import TLIB from '../assets/images/DropTheBallCover.jpg'
import ROAD from '../assets/images/ROAD.png'

import { SiGithub, SiGoogleplay, SiReact, SiYoutube } from 'react-icons/si';
import { useTranslation } from 'react-i18next';


export default function PortfolioVG() {


  const [t, i18n] = useTranslation("global")

  return (
      <>
          { Juegos.map((lider, index) => {
      return(
       <div className="game-card">
        
      <div className="game-image">
        <img src={lider.image} alt={"game.title"} />
      </div>
      <div className="game-details">
        <h2>{lider.name}</h2>
        <p>{lider.description}</p>
        <div className="button-group">
        <Button variant="dark" href={lider.download} target='_blank'>
      <SiReact width={"100"}/> Descargar
      </Button>
      <Button variant="dark" href={lider.video} target='_blank'>
      <SiReact width={"100"}/> Gameplay
      </Button>  
      <Button variant="dark" href={lider.source} target='_blank'>
      <SiReact width={"100"}/> Código fuente
      </Button>     
    
        </div>
      </div>
    </div>
       );
    })}
      </>
  )
}
