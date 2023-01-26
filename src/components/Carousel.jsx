import React from "react";
// import Coffee  from "../assets/images/coffee.jpg";
import Image1 from "../Assets/images/one.jpg";
import Image2 from "../Assets/images/two.jpg";
import Image3 from "../Assets/images/three.jpg";
// import '../components/Carouselcss.css';
// import '../css/Carouselcss.css';

const Carousel = () => {

    return (
        <>
            {/* <h1>This is Carousel</h1> */}
            <section class="section-carousel">

                <div className="mainslider">

                    <div className="sliderbox">

                        <h1 className="h1Carousel">This is from Section One </h1>
                    </div>
                </div>
            </section>
            {/* Carousel Second */}
            {/* from https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-carousel.php */}
            <section class="two">

                <div class="container-lg my-3">

                   <div id="demo" class="carousel slide" data-ride="carousel">

                        {/* Indicators  */}
                        <ul class="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" class="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>

                        {/* The slideshow  */}
                        <div class="carousel-inner">
                            <div class="carousel-item active">

                              <img src={Image1} width="100%" height="600px" class="" alt="Slide 1" />

                            </div>

                            <div class="carousel-item">

                                <img src={Image2} width="100%" height="600px" class="" alt="Slide 1" />
                                {/* <img src="chicago.jpg" alt="Chicago" width="1100" height="500"> */}

                            </div>

                            <div class="carousel-item">
                                <img src={Image3} width="100%" height="600px" class="" alt="Slide 1" />
                                {/* <img src="ny.jpg" alt="New York" width="1100" height="500"> */}

                            </div>
                        </div>

                        {/* Left and right controls  */}
                        <a class="carousel-control-prev" href="#demo" data-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </a>
                        <a class="carousel-control-next" href="#demo" data-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </a>
                    </div>





                    {/* <div id="myCarousel" class="carousel slide" data-bs-ride="carousel"> */}
                    {/* Carousel indicators  */}
                 
                    {/* <ol class="carousel-indicators">
                            <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
                            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                        </ol> */}

                    {/* Wrapper for carousel items  */}
                    {/* <div class="carousel-inner">
                            <div class="carousel-item active"> */}
                    {/* <img src="/examples/images/slide1.png" class="d-block w-100" alt="Slide 1"/> */}
                    {/* <img src = "f:/program files 10/xampp/htdocs/react_work/reactbythapa/react01/src/assets/images/coffee.jpg" class="d-block w-100" alt="Slide 1" /> */}
                    {/* <img src="https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1" class="d-block w-100" alt="Slide 1" /> */}
                    {/* <img src={require("/src/assets/images/one.jpg")} class="" alt="Slide 1" /> */}
                    {/* <img src={require('../assets/images/one.jpg')} class="" alt="Slide 1" /> */}
                    {/* <img src={Image1} width="100%" height="600px" class="" alt="Slide 1" /> */}
                    {/* <img src={Image2} width="100%" height="600px" class="" alt="Slide 1" /> */}
                    {/* <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some demonstrative placeholder content for the first slide.</p>
                                </div> */}
                    {/* F:\program files 10\xampp\htdocs\react_work\reactbythapa\react01\src\assets\images */}

                    {/* </div> */}

                    {/* <div class="item"> */}

                    {/* <div class="carousel-item"> */}

                    {/* <img src="/examples/images/slide2.png" class="d-block w-100" alt="Slide 2"/> */}
                    {/* <img src="https://images.unsplash.com/photo-1591348122449-02525d70379b?ixlib=rb-1.2.1" class="d-block w-100" alt="Slide 2" /> */}

                    {/* <img src={Image2} width="100%" height="600px" class="" alt="Slide 2" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some demonstrative placeholder content for the second slide.</p>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <img src={Image3} width="100%" height="600px" class="" alt="Slide 3" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some demonstrative placeholder content for the third slide.</p>
                                </div>

                            </div>

                        </div> */}

                    {/* Carousel controls  */}
                    {/* 
                        <a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </a>
                    </div> 
 */}

                </div>

            </section>
            {/* Third Carousel */}
            <section class="three>">

            </section>
        </>
    )
};
export default Carousel;
