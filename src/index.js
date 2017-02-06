import React from 'react'
import ReactDOM from 'react-dom'
import App from './ui/App'

import './.inuitcss.css'

const rootEl = document.getElementById('root')

ReactDOM.render(<App />, rootEl)

if (module.hot) {
  module.hot.accept('./ui/App', () => {
    const NextApp = require('./ui/App').default
    ReactDOM.render(<NextApp />, rootEl)
  })
}