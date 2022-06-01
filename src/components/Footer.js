import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { SiGithub, SiGmail } from 'react-icons/si';
//import gmail from '../assets/images/gmail2.png';
import './Footer.css';

export default function Footer() {

  const [t, i18n] = useTranslation("global")
  return (
    <div className="main-footer">
      <div className="container">
        <hr />
        <p className="col-sm">
          &copy;{new Date().getFullYear()} {t("footer.footer-desc")}
          <Button href="https://github.com/lautacoria18/lc-portfolio" className='logoA' target='_blank'>
            <SiGithub /> {t("footer.source-code")}
          </Button>
           
        </p>
      </div>
    </div>
  );
}