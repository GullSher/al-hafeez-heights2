import React from "react";
import '../src/App.css';
import Navbar1 from "../src/components/Navbar1";
// Importing "node_modules" from bootstrap for using css of bootstraps
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/Carousel';
// importing "switch,Route, and ... from " reac-router-dom for using .....
// instead of blow import in "react-router-dom" v6 we are using
//import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


//import Carousel from '../src/components/Carousel';
// import Carouselfull from './components/CarouselFull';
// import Carouselfull from '../src/components/Carouselfull';
// import Carouselhtml from '../src/components/Carouselhtml';
//  import CarouselThree from './components/CarouselThree';
// import CarouselMulti from './components/CarouselMulti';
function App() {
  return (
    //adding "<> </> " for using multiple components.
    <>
      <div className="App">
        <Navbar1 />
        {/* In react-router-dom, you also do not need to use
         the "exact" in the Route declaration.
    For more information,
 you can visit the official documentation: upgrade to react-router-dom v6 */}
        <Router>
          {/* <switch> */}
          {/* <Route exact path="/" componet={Home} /> */}
          <Route exact path="/" componet={About} />
          <Route exact path="/" componet={Service} />
          <Route exact path="/" componet={Contact} />
          <Redirect to="/" />
        </Router>
        {/* </switch> */}
        {/* <Navbar /> */}

        <Carousel />
        {/* <CarouselThree/> */}
        {/* <Carouselfull/> */}
        {/* <Carouselhtml/> */}
        {/* <CarouselMulti /> */}
        {/* <Card /> */}
        {/* <Carousel /> */}
        {/* <Row1 /> */}

      </div>
    </>
  );
}
export default App;