import React, {Component} from 'react'

import {IconMenuBurger} from '../Icons/Icons'

class Menu extends Component {
  constructor(props) {
    super(props)
    
    this.handleClickMenu = this.handleClickMenu.bind(this)
  }
  
  render() {
    return <div className="c-menu">
      
      <ul className="c-menu__ul u-hide@tablet">
        <li className="o-list-inline__item"><a className="c-menu__link" href="#">Product</a></li>
        <li className="o-list-inline__item"><a className="c-menu__link" href="#">About</a></li>
        <li className="o-list-inline__item"><a className="c-menu__link" href="#">Portfolio</a></li>
        <li className="o-list-inline__item"><a className="c-menu__link" href="#">Team</a></li>
        <li className="o-list-inline__item"><a className="c-menu__link" href="#">Contact</a></li>
      </ul>
      
      <div className="c-menu__burger" onClick={this.handleClickMenu}>
        <IconMenuBurger/> <span className="u-ml-small">Menu</span>
      </div>
    </div>
  }
  
  handleClickMenu(e){
    alert('do something')
  }
}


export default Menu
