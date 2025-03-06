import React from "react";
import Navebar from "../components/Navebar";
import Hero from "../components/Hero";
// import HomeImg from "../assets/Homeimg.jpg";
import tajmahel from "../assets/tajmahel.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navebar />
      <Hero
        cName="hero"
        HeroImg={tajmahel}
        title="Your Journey Your Story"
        text="choose your favourite destination."
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;