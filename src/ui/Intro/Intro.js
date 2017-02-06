import React from 'react'

import Menu from '../Menu/Menu'

import {IconLogo} from '../Icons/Icons'

const Intro = () => <div className="c-intro">
  <header>
    <nav>
      <Menu/>
    </nav>
  </header>
  <IconLogo className="c-intro__logo"/>
</div>

export default Intro
