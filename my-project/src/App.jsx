import React from 'react';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Contactus from './components/Contactus.jsx/Contactus';
import Deskcontent from './components/Deskcontent.jsx/Deskcontent';
import Whyuse from './components/Whyuse/Whyuse';



const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Contactus />
      <Deskcontent />
      <Whyuse />
     
      <Footer />
    </div>
  );
};

export default App;