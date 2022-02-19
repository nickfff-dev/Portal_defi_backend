import React, { Component } from 'react';
import Header from './Header';
import Press from './Press';
import Intro from './Intro';
import PricePrediction from './PricePrediction';
import Exchange from './Exchange';
import Presstwo from './Presstwo';
import Footer from './Footer';
import Team from './Team';
import Videosec from './Videosec';
import Contact from './Contact';
import Investors from './Investors';

class App extends Component {

  
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <PricePrediction />
      <Exchange  />

        <Team />
        <Investors />
      <Press/>
      <Presstwo />
      <Videosec />
      <Contact />
      <Footer />
        
      </div>
    );
  }
}

export default App;