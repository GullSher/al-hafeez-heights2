import React from "react";
import Image1 from "../Assets/images/one.jpg";
import Image2 from "../Assets/images/two.jpg";
import Image3 from "../Assets/images/three.jpg";
import '../css/Carouselfullcss.css';

const Carouselfull = () => {
  return (
    <>
      <div id="demo" class="carousel slide" data-ride="carousel">
        {/* Example Copied from bootstrap 4 carousel  */}

        {/* <!-- Indicators --> */}
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        {/* <!-- The slideshow --> */}
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              className="d-block"
              src={Image1} width="100%" height="600px" class="" alt="Slide 3" />
          </div>
          <div class="carousel-item">
            <img
              className="d-block"
              src={Image2} width="100%" height="600px" class="" alt="Slide 3" />

          </div>
          <div class="carousel-item">
            <img
              className="d-block"
              src={Image3} width="100%" height="600px" class="" alt="Slide 3" />

          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>


    </>
  )
};
export default Carouselfull;
