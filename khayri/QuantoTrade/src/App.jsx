import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Companie from './Components/Companie/Companie';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactHero from './Components/ContactHero/ContactHero';
import Cube from './Components/Cube/Cube';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import HowHero from './Components/HowHero/HowHero';
import Howtouse from './Components/Howtouse/Howtouse';
import Loader from './Components/Loader/Loader';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing/Pricing';
import Screenshots from './Components/Screenshots/Screenshots';
import Steps from './Components/Steps/Steps';


const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Companie />
      <Screenshots />
      <Steps />
      <Pricing />
    </div>
  );
};
const AboutPage= () => {
  return (
    <div>
      <HowHero/>
      <Howtouse/>
     
    </div>
  );
};
const ContactPage= () => {
  return (
    <div>
      <ContactHero/>
      <ContactForm/>
    </div>
  );
};

const MainContent = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading time

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div id='body'>
      {loading ? <Loader /> : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Cube />
          <Footer />
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
