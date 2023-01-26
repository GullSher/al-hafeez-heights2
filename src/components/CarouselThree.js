import React from 'react'
import Image1 from "../Assets/images/one.jpg";
import Image2 from "../Assets/images/two.jpg";
import Image3 from "../Assets/images/three.jpg";


const CarouselThree = () => {

  // {/* function CarouselThree() { */}

  return (
    <>
      {/* 
        <Carousel>
          <Carousel.Item> */}

      <CarouselThree>
        {/* <CarouselThree.Item> */}
          <div>
          <img
            // className="d-block"
            src={Image1} width="100%" height="600px" class="" alt="Slide 1" />

          {/* <Carousel.Caption> */}
          {/* <CarouselThree.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </CarouselThree.Caption> */}
        {/* </CarouselThree.Item> */}
        </div>
        {/* <Carousel.Item> */}
        <div>
        {/* <CarouselThree.Item> */}
          <img
            // className="d-block"
            src={Image2} width="100%" height="600px" class="" alt="Slide 2" />


          {/* <Carousel.Caption> */}
          {/* <CarouselThree.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </CarouselThree.Caption> */}
          {/* </Carousel.Item>
          <Carousel.Item> */}
        {/* </CarouselThree.Item> */}
        </div>
<div>
        {/* <CarouselThree.Item> */}

          <img 
          // className="d-block" 
          src={Image3} width="100%" height="600px" class="" alt="Slide 3" />
          {/* <Carousel.Caption> */}
          {/* <CarouselThree.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </CarouselThree.Caption> */}
        {/* </CarouselThree.Item> */}
        </div>
      </CarouselThree>

    </>
  )
}

export default CarouselThree



      // <Carousel>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src="holder.js/800x400?text=First slide&bg=373940"
      //       alt="First slide"
      //     />
      //     <Carousel.Caption>
      //       <h3>First slide label</h3>
      //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src="holder.js/800x400?text=Second slide&bg=282c34"
      //       alt="Second slide"
      //     />

      //     <Carousel.Caption>
      //       <h3>Second slide label</h3>
      //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src="holder.js/800x400?text=Third slide&bg=20232a"
      //       alt="Third slide"
      //     />

      //     <Carousel.Caption>
      //       <h3>Third slide label</h3>
      //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      // </Carousel>
