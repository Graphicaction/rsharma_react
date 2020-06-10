import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <Router>
      <div className="my-page m-0">
        <div className="row mx-0 mt-0">
          <div className="col-sm-3 col-md-4 col-lg-3 nav-block text-center">
            <Navbar />
          </div>
          <div className="col-sm-9 col-md-8 col-lg-9">  
            
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
            
          </div>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
