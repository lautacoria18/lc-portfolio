import React from 'react';
import { Button } from 'react-bootstrap';
import { SiGithub, SiGmail } from 'react-icons/si';
//import gmail from '../assets/images/gmail2.png';
import './Footer.css';

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <hr />
        <p className="col-sm">
          &copy;{new Date().getFullYear()} Designed and developed by me
          <Button href="https://github.com/lautacoria18/lc-portfolio" className='logoA' target='_blank'>
            <SiGithub /> Source code
          </Button>
           
        </p>
      </div>
    </div>
  );
}