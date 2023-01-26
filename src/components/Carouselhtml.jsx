import React from "react";
// import Coffee  from "../assets/images/coffee.jpg";
import Image1 from "../Assets/images/one.jpg";
import Image2 from "../Assets/images/two.jpg";
import Image3 from "../Assets/images/three.jpg";
// import '../components/Carouselcss.css';
// import '../css/Carouselcss.css';
// import '../css/Carouselhtml.css';
// import '../css/Carouselhtmlcss.css';
// import '../javascripts/One.js';
// const mycss = {

// };
// let myScript = () => {
const myScript = () => {
  let slideIndex = 0;
  // let sliderIndex1=0;
  // var slideIndex = 0;
  showSlides();
 
    function showSlides() {
    let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) { slideIndex = 1 }
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
}


const Carouselhtml = () => {

  return (
    <>

      <section class="section-carouselhtml">

        <h2>Automatic Slideshow</h2>
        <p>Change image every 2 seconds:</p>

        <div class="slideshow-container">

          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            {/* <img src="img_nature_wide.jpg" style="width:100%" /> */}
            <img src={Image1} width="100%" height="600px" class="" alt="Slide 1" />

            <div class="text">Caption Text</div>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            {/* <img src="img_snow_wide.jpg" style="width:100%" /> */}
            <img src={Image2} width="100%" height="600px" class="" alt="Slide 1" />
            <div class="text">Caption Two</div>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            {/* <img src="img_mountains_wide.jpg" style="width:100%" /> */}
            <img src={Image3} width="100%" height="600px" class="" alt="Slide 1" />
            <div class="text">Caption Three</div>
          </div>

        </div>
        <br />

        <div style="text-align:center">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>

        <myScript />

      </section>


    </>
  )
};

export default Carouselhtml;


