import React from 'react';
import style from './Footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquareFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.socialIcons}>
        <FontAwesomeIcon className={style.socials} icon={faSquareFacebook}/>
        <FontAwesomeIcon className={style.socials} icon={faInstagram}/>
        <FontAwesomeIcon className={style.socials} icon={faTwitter}/>
        <FontAwesomeIcon className={style.socials} icon={faLinkedin}/>
      </div>
      <p>© 2020 All rights reserved</p>
    </footer>
  );
}

export default Footer;
