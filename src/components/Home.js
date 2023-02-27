import React, { useState } from 'react'
import './Home.css'
import joystick from '../assets/images/gamelogo.png'
import front from '../assets/images/icon-code.jpg'
import unity from  '../assets/images/unitylogo.jpg'
import rct from '../assets/images/react.jpg'
import { Button } from 'react-bootstrap'
import {useTranslation} from  "react-i18next";
import SobreMi from './SobreMi'
import SAG from '../assets/images/Yooo.jpeg'
import Timeline from './Timeline'

export default function Home() {


  const [t, i18n] = useTranslation("global")


  return (
    <div className='homed'>
      <div className='parteFoto'>
        <img src={SAG} className='miFoto'></img>
        </div>
        <div className='descripcion'>
      <div className='hi'>
      <h5>Hola, Soy Lauti</h5>
      </div>
    <div className='title'>

        <h1>{t("home.hello-there")} </h1> 

    </div>
    
    <div className='subT'>
    <p>{t("home.my-name")}</p>
    

    </div>
    <SobreMi/>
    
    </div>
   
    </div>
    
  )
}
