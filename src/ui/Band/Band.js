import React, {PropTypes} from 'react'

const Band = ({children, bandColor, className = '', ...other}) => {
  
  let composedClass = 'c-band ' + className
  
  if (bandColor === 'orange') composedClass += ' c-band--orange'
  
  return <div className={composedClass} {...other}>
    {children}
  </div>
  
}

Band.propTypes = {
  children: PropTypes.node.isRequired,
  bandColor: React.PropTypes.oneOf(['orange']),
}

export default Band