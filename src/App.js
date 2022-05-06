import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SliderBanner from './components/SlideBanner';
import Introduction from './components/Introduction';
import Service from './components/Service';
import Room from './components/Room';
import Gallery from './components/Gallery';
import Prize from './components/Prize';
import About from './components/About';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class App extends React.Component {

  render (){
    return (
      <>
        <Header />
        <Navbar />
        <SliderBanner />
        <Introduction />
        <Service />
        <Room />
        <Gallery />
        <Prize />
        <About />
        <Contact />
        <Map />
        <Footer />
      </>
    );
  }
}
export default App;