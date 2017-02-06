import React, {PropTypes} from 'react'

const ButtonLink = ({children, buttonColor, className = '', ...other}) => {
  
  let composedClass = 'c-button-link ' + className
  
  if (buttonColor === 'white') composedClass += ' c-button-link--white'
  
  return <a className={composedClass} {...other}>{children}</a>
}

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  buttonColor: React.PropTypes.oneOf(['white']),
  href: PropTypes.string.isRequired,
}

export default ButtonLink
