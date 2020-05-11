import React from 'react';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
          <Portfolio />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
