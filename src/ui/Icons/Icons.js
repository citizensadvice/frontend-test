import React from 'react'

import menuburger from '../../../inuitcss/svg/.compressed/menu-burger.svg'
import twitter from '../../../inuitcss/svg/.compressed/twitter.svg'
import dribbble from '../../../inuitcss/svg/.compressed/dribbble.svg'
import facebook from '../../../inuitcss/svg/.compressed/facebook.svg'

// svg inline in order to be able to change the color via CSS
export const IconLogo = ({height = 100, ...props}) => <svg {...props} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 530.4 100">
  <path className="text" fill="#333"
        d="M106.8 24H123c7.4 0 12.7 1 16 3.1 3.3 2.1 5 5.4 5 10 0 3.1-.7 5.7-2.2 7.6-1.5 2-3.4 3.2-5.8 3.6v.4c3.3.7 5.7 2.1 7.1 4.1 1.5 2 2.2 4.7 2.2 8 0 4.7-1.7 8.4-5.1 11.1-3.4 2.7-8.1 4-14 4h-19.4V24zm11 20.6h6.4c3 0 5.1-.5 6.5-1.4 1.3-.9 2-2.5 2-4.6 0-2-.7-3.4-2.2-4.3-1.5-.9-3.8-1.3-6.9-1.3h-5.8v11.6zm0 8.8v13.5h7.2c3 0 5.3-.6 6.7-1.7 1.4-1.2 2.2-2.9 2.2-5.3 0-4.3-3.1-6.5-9.2-6.5h-6.9zM192.1 76l-3.8-12.4h-18.9L165.6 76h-11.9L172 23.8h13.5L204 76h-11.9zm-6.4-21.6c-3.5-11.2-5.4-17.5-5.9-19-.4-1.5-.8-2.6-.9-3.5-.8 3-3 10.5-6.7 22.5h13.5zm61.5 7.2c0 4.7-1.7 8.4-5.1 11.1-3.4 2.7-8.1 4.1-14.1 4.1-5.5 0-10.5-1-14.7-3.1V63.3c3.5 1.6 6.5 2.7 8.9 3.3 2.4.6 4.7 1 6.7 1 2.4 0 4.3-.5 5.6-1.4 1.3-.9 1.9-2.3 1.9-4.1 0-1-.3-1.9-.9-2.7s-1.4-1.6-2.5-2.3c-1.1-.7-3.3-1.9-6.7-3.5-3.2-1.5-5.6-2.9-7.1-4.3-1.6-1.4-2.9-3-3.8-4.8-.9-1.8-1.4-4-1.4-6.4 0-4.6 1.6-8.2 4.7-10.8 3.1-2.6 7.4-3.9 12.9-3.9 2.7 0 5.3.3 7.7 1 2.5.6 5 1.5 7.7 2.7l-3.6 8.6c-2.8-1.1-5.1-1.9-6.9-2.4s-3.6-.7-5.3-.7c-2.1 0-3.7.5-4.8 1.5-1.1 1-1.7 2.2-1.7 3.8 0 1 .2 1.8.7 2.5.4.7 1.2 1.4 2.2 2.1 1 .7 3.3 1.9 7 3.6 4.9 2.3 8.2 4.7 10 7 1.7 2.2 2.6 5.1 2.6 8.5zM292.6 76h-29.9V24h29.9v9h-18.9v11.4h17.6v9h-17.6v13.4h18.9V76zm38.9 0L319 35.2h-.3c.4 8.3.7 13.8.7 16.6V76h-9.8V24h15l12.3 39.7h.2l13-39.7h15v52h-10.3V51.4c0-1.2 0-2.5.1-4 0-1.5.2-5.5.5-12.1h-.4L341.6 76h-10.1zm82.6 0h-29.9V24h29.9v9h-18.9v11.4h17.6v9h-17.6v13.4h18.9V76zm63 0h-14l-22.6-39.3h-.3c.5 6.9.7 11.9.7 14.9V76H431V24h13.9l22.6 39h.2c-.4-6.8-.5-11.5-.5-14.3V24h9.9v52zm39.2 0h-11V33.2h-14.1V24h39.2v9.2h-14.1V76z"/>
  <path className="symbol" fill="#FF5E1B"
        d="M82.2 41.3L41.1 0 0 41.3l.1 16.6v.8L41.3 100l41.1-41.3-.1-15.4-.1-2zm-77.3 2L41.1 6.9l35.2 35.4-35.1 35.4-.1-.1-19.6-19.9 4.2-4.2L41.1 69l26.7-26.7-26.4-26.4-.3-.3L4.9 51.8v-8.5zm36.4 49.8L6 57.7l35.2-35.3.1.1 19.6 19.9-4.2 4.2L41.2 31 14.6 57.7l26.3 26.4.3.3 36.1-36.3.1 8.6-36.1 36.4z"/>
</svg>

export const IconMenuBurger = ({height = 18, alt = 'MenuBurger', ...props}) => <img {...props} src={menuburger} alt={alt}/>
export const IconTwitter = ({height = 24, alt = 'Twitter', ...props}) => <img {...props} src={twitter} alt={alt}/>
export const IconDribbble = ({height = 24, alt = 'Dribbble', ...props}) => <img {...props} src={dribbble} alt={alt}/>
export const IconFacebook = ({height = 24, alt = 'Facebook', ...props}) => <img {...props} src={facebook} alt={alt}/>

