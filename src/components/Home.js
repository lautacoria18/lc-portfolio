import React from 'react'
import './Home.css'
import joystick from './gamelogo.png'
import front from './icon-code.jpg'
import unity from  './unitylogo.jpg'
import rct from './react.jpg'

export default function Home() {
  return (
      <>
    <div className='title'>
        <h1>Hello there! Welcome to my portfolio </h1> 
        <div className='logos'>
         <img className='logo' src={joystick}></img>
        <img className='logo' src={front}></img>
        <img className='logo' src={unity}></img>
        <img className='logo' src={rct}></img>
        </div>
       
       
    </div>
    <div className='subT'>
    <p>My name is Lautaro Coria, a videogame and front-end independent developer</p>
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
