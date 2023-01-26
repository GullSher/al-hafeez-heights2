import React from "react";
// import Pic1 from "../assets/images/coffee.jpg";
// import Pic2 from "../assets/images/header.jpg";
// import Pic3 from "../assets/images/one-a.jpg";
// import Pic4 from "../assets/images/sandwich.jpg";
// import Pic5 from "../assets/images/slide1.jpg";
// import Pic6 from "../assets/images/slide2.jpg";
// import Pic7 from "../assets/images/slide3.jpg";
// import Pic8 from "../assets/images/three.jpg";
// import Pic9 from "../assets/images/two.jpg";
// import Pic10 from "../assets/images/two-a.jpg";
const Card = (props) => {
  // console.log(props);
  return (
    <>
      <div className="card">
      {/* <div className="card" style="width: 18rem;"> */}
        <img src={props.img1} className="card-img-top" alt={props.alt1} />
        <div className="card-body">
        <h5 className="card-title">{props.title1}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>

    </>
  )
};
export default Card;
