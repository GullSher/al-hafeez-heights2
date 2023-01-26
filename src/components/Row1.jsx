
import React from "react";
import "./Row1.css";
import Card from "./Card";
import Coffee from "../assets/images/coffee.jpg";
import Cat from "../assets//images/2020-three-quarters-1.png";
// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
//   }

//   const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

// const Row1 extends React.Component = () => {
const Row1 = () => {
    const mystyle = {
        color: "green",
        backgroundColor: "yellow",
        paddingLeft: "25px",
        innerWidth: "20px",
        width: "98%"
    };
    const divstyle = {
        width: "98%",
        paddingLeft: "15px"
    }

    return (
        <>
            <div style={divstyle}>
                <h1 style={mystyle}>Appling Style in change approch.</h1>
            </div>

            <div style={divstyle}>
                <h1 style={{ color: "red", backgroundColor: "blue", paddingLeft: "145px,  " }}>This is Row1</h1>
                {/* <h1>{props.h1}</h1> */}
            </div>

            <section className="sec-carousel">
                {/* <div className="container"> */}
                <div className="container-fluid container" >
                    <div className="row-1">

                        {/* col 1 */}
                        {/* <div className="col-lg-12 col-sm-4 col-md-8"> */}
                        <div className="col-3 col1">
                            <div className="row-incol10">
                                <h1>This is Carousel sec 1.</h1>
                                {/* <h1>{props.h1sec1}</h1> */}
                            </div>
                        </div>

                        {/*  col 2 */}
                        <div className="col-3 col1">
                            <div className="row-incol10">
                                <h1>This is Carousel sec 2.</h1>
                                {/* <img rel="img" src=""  href="" /> */}
                            </div>
                        </div>

                        {/*  col 3  */}

                        <div className="col-3 col1">
                            <div className="row-incol10">
                                <h1>This is Carousel sec 3.</h1>
                            </div>
                        </div>

                        {/* Col 4 */}
                        <div className="col-3 col1">
                            <div className="row-incol10">
                                <h1>This is Carousel sec 4.</h1>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <br /><br /><br />

            <h1 className="abc">This is Row2</h1>
            {/* <h1>{props.h1}</h1> */}
            <section className="sec-carousel col-lg-10">
                {/* <div className="container"> */}
                <div className="container-fluid" >
                    <div className="row">

                        {/* col 1 */}
                        {/* <div className="col-lg-12 col-sm-4 col-md-8"> */}
                        <div className="col-sm-3">
                            <div className="row-incol10">
                                <h1>This is Carousel sec 1.</h1>
                                {/* <h1>{props.h1sec1}</h1> */}
                            </div>
                        </div>

                        {/*  col 2 */}

                        <div className="col-sm-3">
                            <div className="row-incol10">
                                <h1>This is Carousel sec 2.</h1>
                                {/* <img rel="img" src=""  href="" /> */}
                            </div>
                        </div>

                        {/*  col 3  */}

                        <div className="col-sm-3">
                            <div className="row-incol10">
                                <h1>This is Carousel sec 3.</h1>
                            </div>
                        </div>

                        {/* Col 4 */}
                        <div className="col-sm-3">
                            <div className="row-incol10">
                                <h1>This is Carousel sec 4.</h1>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <br /><br /><br />

            <div class="container">
                <div class="row">
                    <div class="col-3">
                        One of three columns
                        <Card img1={Coffee} alt1="Coffee Image1" title1="My Image One" />
                    </div>
                    <div class="col-3">
                        One of three columns
                        <Card img1={Cat} alt1="Cat" title1="My Cat Image" />
                    </div>
                    <div class="col-3">
                        One of three columns
                        <Card img1="images/three.jpg" alt1={"one jpg"} title1={"One jpg"} />
                    </div>
                    <div class="col-3">
                        One of three columns
                        <Card img1="images/sandwich.jpg" alt1={"one jpg"} title1={"One jpg"} />
                    </div>
                </div>
            </div>









        </>


    )
};
export default Row1;
