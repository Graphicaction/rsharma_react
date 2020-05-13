import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css'

function App() {
  return (
    <Router>
      <div className="my-page">
        <div className="row mx-0 mt-0">
          <div className="col-sm-3 col-md-4 col-lg-3 nav-block text-center">
            <Navbar />
          </div>
          <div className="col-sm-9 col-md-8 col-lg-9">  
            <Wrapper>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
            </Wrapper>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
