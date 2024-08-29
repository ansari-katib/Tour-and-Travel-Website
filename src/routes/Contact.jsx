import React from 'react'
import Navebar from '../components/Navebar'
import Hero from '../components/Hero'
import ContactImg from "../assets/Contactimg.jpg";
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
    <Navebar /> 

    <Navebar />
      <Hero
        cName="hero"
        HeroImg={ContactImg}
        title="Contact Page"
        text="Contact us to know more about this app"
        url="/contact"
      />
      <ContactForm />
      <Footer />
      
    </>
  )
}

export default Contact
