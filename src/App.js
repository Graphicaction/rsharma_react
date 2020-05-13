import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <div className="row mx-0 mt-0">
          <div className="col-sm-3 col-md-4 col-lg-3 nav-block text-center">
            <Navbar />
          </div>
          <div className="col-sm-8 col-md-7 col-lg-8">  
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
