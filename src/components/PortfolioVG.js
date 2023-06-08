import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Juegos } from './Juegos';
import './PortfolioVG.css'
import SAG from '../assets/images/CoverPhoto.jpg'
import JMP from  '../assets/images/JumpinguCover.jpg'
import RAT from '../assets/images/RockAndTrollCover.jpg'
import TLIB from '../assets/images/DropTheBallCover.jpg'
import ROAD from '../assets/images/ROAD.png'

import { SiGithub, SiGoogleplay, SiYoutube } from 'react-icons/si';
import { useTranslation } from 'react-i18next';


export default function PortfolioVG() {


  const [t, i18n] = useTranslation("global")

  return (
      <>
      <div className='portfolioVG'>
        <div className='fullCard'>
      <div className='cardVG'>
          <img src={SAG} className='imgSAG'/>
          
      </div>
      <div className='TitleAndButtons'>
      <h3  className='titleCard'>Splash and go!</h3>
      <div className='buttons'>
      <Button variant="dark" href={"https://github.com/lautacoria18/Endless-runn3r"} target='_blank'>
           <SiGithub width={"100"}/> {}
           </Button>
           <Button variant="dark" href={"https://www.youtube.com/watch?v=l5Ad3BRcB3U"} target='_blank'>
           <SiYoutube width={"100"}/> {}</Button>
           <Button variant="dark" href={"https://play.google.com/store/apps/details?id=com.TinyIgloo.ColorRunner"} target='_blank'>
           <SiGoogleplay width={"100"}/> {}
           </Button>  
           </div>
      </div>
</div>
<div className='fullCard'>
      <div className='cardVG'>
          <img src={ROAD} className='imgSAG'/>
          
      </div>
      <div className='TitleAndButtons'>
      <h3  className='titleCard'>Road Roosters</h3>
      <div className='buttons'>
           
           <Button variant="dark" href={"https://github.com/lautacoria18/Chicken"} target='_blank'>
           <SiGithub width={"100"}/> {}
           </Button>
           <Button variant="dark" href={"https://www.youtube.com/watch?v=kt2oCXASloY"} target='_blank'>
           <SiYoutube width={"100"}/> {}</Button>
           <Button variant="dark" href={"https://mega.nz/file/YI5AGIhT#OwWIj3IuELZiplaIJ25G7PGPb3a_yKdqpf8AtETeRdg"} target='_blank'>
           <SiGoogleplay width={"100"}/> {}
           </Button>   
           </div>
      </div>
</div>
<div className='fullCard'>
      <div className='cardVG'>
          <img src={RAT} className='imgSAG'/>
          
      </div>
      <div className='TitleAndButtons'>
      <h3  className='titleCard'>Rock and Troll</h3>
      <div className='buttons'>
           
           <Button variant="dark" href={"https://github.com/lautacoria18/Rock_and_Troll"} target='_blank'>
           <SiGithub width={"100"}/> {}
           </Button>
           <Button variant="dark" href={"https://www.youtube.com/watch?v=tW2321dTYPc"} target='_blank'>
           <SiYoutube width={"100"}/> {}</Button>
           <Button variant="dark" href={"https://drive.google.com/file/d/1G72v6FpbzVbFW1nkuWyfDYfxyCgwFL--/view?usp=sharing"} target='_blank'>
           <SiGoogleplay width={"100"}/> {}
           </Button>   
           </div>
      </div>
</div>
<div className='fullCard'>
      <div className='cardVG'>
          <img src={TLIB} className='imgSAG'/>
          
      </div>
      <div className='TitleAndButtons'>
      <h3  className='titleCard'>TLIB</h3>
      <div className='buttons'>
           
           <Button variant="dark" href={"https://github.com/lautacoria18/Droptheball"} target='_blank'>
           <SiGithub width={"100"}/> {}
           </Button>
           <Button variant="dark" href={"https://www.youtube.com/watch?v=SiFJzVFACuc"} target='_blank'>
           <SiYoutube width={"100"}/> {}</Button>
          
           </div>
      </div>
</div>
</div>
      </>
  )
}
