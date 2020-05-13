import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Row from "./components/Row";
import Col from "./components/Col"

function App() {
  return (
    <Router>
      <div>
        <Row>
          <Col size="4">
            <Navbar />
          </Col>
          <Col size ="8">  
            <Wrapper>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
            </Wrapper>
          </Col>
        </Row>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
