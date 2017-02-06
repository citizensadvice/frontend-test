import React from 'react';

import Intro from './Intro/Intro'
import Home from './Home/Home'
import Footer from './Footer/Footer'

const App = props => (
  <div className="c-app">
    <Intro/>
    <Home/>
    <Footer/>
  </div>
)

export default App;
