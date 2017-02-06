import React from 'react'

import ButtonLink from '../ButtonLink/ButtonLink'
import Band from '../Band/Band'

const Home = (props) => <div className="c-home">
  <Band bandColor="orange">
    
    <div className="o-wrapper">
      <ul className="o-layout">
        <li className="o-layout__item u-3/4 u-1/1@tablet">
          Nam elementum rutrum ipsum sit amet luctus. Sed libero turpis, eleifend in quam sed, vestibulum vulputate ante.
        </li>
        <li className="o-layout__item u-1/4 u-1/1@tablet">
          
          <div className="c-home__more-info">
            <ButtonLink buttonColor="white" href="#">More Info</ButtonLink>
          </div>
        
        </li>
      </ul>
    </div>
  
  </Band>
  
  <div className="o-wrapper">
    <h1 className="c-home__title">
      Etiam nisl dui, ultricies quis turpis quis, dapibus finibus tortor
    </h1>
    
    <ul className="o-layout o-layout--large u-mt-large">
      <li className="o-layout__item u-1/3 u-hide@tablet">
        <div className="o-tile">
          <h4>
            Fantastic service,
            <br/>
            I’m exited!
          </h4>
          <p className="u-beta">
            Pellentesque porttitor urna a nisi sodales, ac condimentum mauris auctor. In efficitur velit ut eros porttitor eleifend. In tempor diam at urna finibus, vitae
            lobortis sem tincidunt.
          </p>
          <p className="u-beta">
            <b>James Counter</b>
            <br/>
            Citizens Advice
            <br/>
            Lead Front End UX Developer
          </p>
        </div>
      </li>
      <li className="o-layout__item u-2/3 u-1/1@tablet">
        <h4>
          Ut sit amet scelerisque ex, sit amet mattis sapien
        </h4>
        <p>
          Mauris eu finibus diam. Quisque accumsan aliquet dictum. Aenean interdum tortor vitae elit elementum, et interdum tortor imperdiet. Duis sed justo ultrices,
          aliquam nisi sit amet, interdum justo.
        </p>
        <p>
          Mauris eu finibus diam. Quisque accumsan aliquet dictum. Aenean interdum tortor vitae elit elementum, et interdum tortor imperdiet. Duis sed justo ultrices,
          aliquam nisi sit amet, interdum justo.
        </p>
        <h4>
          Ut sit amet scelerisque ex, sit amet mattis sapien. Proin convallis libero porta, mattis quam vitae
        </h4>
        <p>
          Pellentesque porttitor urna a nisi sodales, ac condimentum mauris auctor. In efficitur velit ut eros porttitor eleifend. In tempor diam at urna finibus, vitae
          lobortis sem tincidunt. Donec ac elementum orci.
        </p>
      </li>
    </ul>
  
  </div>
</div>

export default Home
