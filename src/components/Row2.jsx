import React from "react";
// import "../Row2css.css";
import "./Row2.css";
import Card from "./Card";
import Coffee from "../assets/images/coffee.jpg";
import Cat from "../assets/images/2020-three-quarters-1.png";

const Row2 = () => {
    return (
        <>
            {/* <section className="section-3 " > */}

                <div className="container">

                    <div className="row-2 col-10">
                        <   div className="col-4 col1 ">
                            <div className="row-incol10 d-flex">
                                {/* <h1 className="aaaa">This is Color.</h1> */}
                                <Card img1={Coffee} alt1="Coffee Image1" title1="My Image One" /><br />
                            </div>
                        </div>
                        <div className="col-4 col1 ">
                            <div className="row-incol10 d-flex">

                                <Card img1={Cat} alt1="Cat" title1="My Cat Image" /><br/>
                            </div>
                        </div>

                        <div className="col-4 col1 ">
                            <div className="row-incol10 d-flex">

                                <Card img1="images/three.jpg" alt1={"one jpg"} title1={"One jpg"} /><br />
                            </div>
                        </div>
                        <div className="col-4 col1 ">
                            <div className="row-incol10 d-flex">

                                <Card img1="images/sandwich.jpg" alt1={"one jpg"} title1={"One jpg"} /><br />
                            </div>
                        </div>
                    </div>
                </div>
            {/* </section > */}
            <br /><br /><br />


        </>
    )
};

export default Row2;

