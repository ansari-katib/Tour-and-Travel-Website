import React from "react";
import "../components/Trip.css";
import TripData from "./TripData";
import manaliImg from "../assets/manaliimg.jpeg";
import KashmirImg from "../assets/kashmirimg2.jpg"
import HawaiImg from "../assets/hawaiimg2.jpg"

function Trip() {
  return (
    <>
      <div className="trip">
        <h1>Recent Trip</h1>
        <p>You can discover unique destination using Google Map</p>
      <div className="tripcard">
        <TripData 
        cardImg={manaliImg}
        cardhrading = "Manali "
        cardtext = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima itaque voluptatem quam laboriosam dolore totam harum nostrum, dicta odit vero. Vero molestias veniam deleniti hic non numquam, harum explicabo? Porro ullam et hic aut quaerat vel libero inventore officiis, facilis error neque eos iure, in quod possimus sit quisquam.harum explicabo? Porro ullam et hic aut quaerat vel libero inventore officiis, facilis error neque eos iure, in quod possimus sit quisquam."
        />
        <TripData 
        cardImg={KashmirImg}
        cardhrading = "Kashmir  "
        cardtext = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima itaque voluptatem quam laboriosam dolore totam harum nostrum, dicta odit vero. Vero molestias veniam deleniti hic non numquam, harum explicabo? Porro ullam et hic aut quaerat vel libero inventore officiis, facilis error neque eos iure, in quod possimus sit quisquam.harum explicabo? Porro ullam et hic aut quaerat vel libero inventore officiis, facilis error neque eos iure, in quod possimus sit quisquam."
        />
        <TripData 
        cardImg={HawaiImg}
        cardhrading = "Hawaii "
        cardtext = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima itaque voluptatem quam laboriosam dolore totam harum nostrum, dicta odit vero. Vero molestias veniam deleniti hic non numquam, harum explicabo? Porro ullam et hic aut quaerat vel libero inventore officiis, facilis error neque eos iure, in quod possimus sit quisquam.harum explicabo? Porro ullam et hic aut quaerat vel libero inventore officiis, facilis error neque eos iure, in quod possimus sit quisquam."
        />
        </div>
    </div>
    </>
  );
}

export default Trip;
