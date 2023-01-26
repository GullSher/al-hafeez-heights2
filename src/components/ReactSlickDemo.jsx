import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";
import Image1 from "../Assets/images/one.jpg";
import Image2 from "../Assets/images/two.jpg";
import Image3 from "../Assets/images/three.jpg";

class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src={Image1} width="100%" height="600px" class="" alt="Slide 1" />
          </div>
          {/* <img src="http://placekitten.com/g/400/200" /> */}
          <div>
            <img src={Image2} width="100%" height="600px" class="" alt="Slide 2" />
            {/* <img src="http://placekitten.com/g/400/200" /> */}
          </div>
          <div>
            <img src={Image3} width="100%" height="600px" class="" alt="Slide 3" />
            {/* <img src="http://placekitten.com/g/400/200" /> */}
          </div>
          <div>
            <img src={Image1} width="100%" height="600px" class="" alt="Slide 4" />
            {/* <img src="http://placekitten.com/g/400/200" /> */}
          </div>
        </Slider >
      </div >
    );
  }
}

ReactDOM.render(<ReactSlickDemo />, document.getElementById("container"));
