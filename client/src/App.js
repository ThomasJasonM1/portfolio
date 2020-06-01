import React from "react";
import LazyHero from 'react-lazy-hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <Router>
      <div style={{ background: '#d1d1e0' }}>
        <Navbar />
        <LazyHero 
            imageSrc="https://unsplash.it/2000/1000"
            minHeight='100vh'
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          </LazyHero>
      </div>
    </Router>
  );
}

export default App;
