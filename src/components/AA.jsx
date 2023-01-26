// import { render } from '@testing-library/react';
import React from 'react';
// import bird from '../assets/images/174018248004201.gif';
import Bird from '../assets/images/bird.gif';
import Coffee from "../assets/images/coffee.jpg";

const AA = (props) => {
return (
<>
<div>
<h1>This is from AA jsx.    </h1>    
    </div>

<div className="container">
          {/* <img src={props.} alt='Bird Flying' className='bird' /> */}
          
          <img src={Bird} style={{width: '120px'}} alt= 'Flying Bird' />

          <img src={Coffee} style={{width: '100px'}} alt='Coffee' className='Coffeeclass' />
          {/* <Card img1={Coffee} alt1="Coffee Image1" title1="My Image One" /> */}
    </div>


</>

)
};
export default AA; 