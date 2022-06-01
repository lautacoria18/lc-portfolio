import React, { useState } from 'react'
import './Home.css'
import joystick from '../assets/images/gamelogo.png'
import front from '../assets/images/icon-code.jpg'
import unity from  '../assets/images/unitylogo.jpg'
import rct from '../assets/images/react.jpg'
import { Button } from 'react-bootstrap'
import {useTranslation} from  "react-i18next";


export default function Home() {


  const [t, i18n] = useTranslation("global")


  return (
      <>
    <div className='title'>
        <h1>{t("home.hello-there")} </h1> 
        
        <div className='logos'>
         <img className='logo' src={joystick}></img>
        <img className='logo' src={front}></img>
        <img className='logo' src={unity}></img>
        <img className='logo' src={rct}></img>

        </div>
       
       
    </div>
    <div className='subT'>
    <p>{t("home.my-name")}</p>
    <div className='logos2'>
         <img className='logo' src={joystick}></img>
        <img className='logo' src={front}></img>
        <img className='logo' src={unity}></img>
        <img className='logo' src={rct}></img>
        </div>
    </div>
    
    </>
  )
}
