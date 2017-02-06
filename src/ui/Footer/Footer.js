import React from 'react'

import {IconLogo, IconFacebook, IconTwitter, IconDribbble} from '../Icons/Icons'

const Footer = () => <footer className="c-footer">
  <div className="o-wrapper">
    
    <ul className="o-layout">
      <li className="o-layout__item u-1/4 u-1/1@tablet c-footer__logo-container">
        <a className="o-link" href="#"><IconLogo className="c-footer__logo"/></a>
      </li>
      <li className="o-layout__item u-1/4 u-1/3@tablet">
        <ul className="c-footer__ul">
          <li className="c-footer__title">Product</li>
          <li><a className="o-link" href="#">Features</a></li>
          <li><a className="o-link" href="#">Promo</a></li>
          <li><a className="o-link" href="#">Download</a></li>
        </ul>
      </li>
      <li className="o-layout__item u-1/4 u-1/3@tablet">
        <ul className="c-footer__ul">
          <li className="c-footer__title">Contact</li>
          <li><a className="o-link" href="#">Find Us</a></li>
          <li><a className="o-link" href="#">FAQ</a></li>
          <li><a className="o-link" href="#">Help</a></li>
        </ul>
      </li>
      <li className="o-layout__item u-1/4 u-1/3@tablet">
        <ul className="c-footer__ul">
          <li className="c-footer__title">Follow Us</li>
          <li>
            <a className="o-link" href="#"><IconFacebook className="u-mr-tiny u-mb-tiny"/></a>
            <a className="o-link" href="#"><IconTwitter className="u-mr-tiny u-mb-tiny"/></a>
            <a className="o-link" href="#"><IconDribbble className="u-mr-tiny u-mb-tiny"/></a>
          </li>
        </ul>
      
      </li>
    </ul>
  
  </div>
</footer>

export default Footer