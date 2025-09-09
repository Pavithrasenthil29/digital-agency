import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import CaseStudies from './Components/CaseStudies/CaseStudies';
import Testimonials from './Components/Testimonials/Testimonials';
import ContactForm from './Components/ContactForm/ContactForm';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <AboutUs />
    <CaseStudies />
    <Testimonials />
    <ContactForm />
    <Footer />
    </>
  );
}

export default App;
