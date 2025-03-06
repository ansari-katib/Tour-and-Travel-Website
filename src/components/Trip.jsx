import React from "react";
import TripData from "./TripData";
import manaliImg from "../assets/manaliimg.jpeg";
import KashmirImg from "../assets/kashmirimg2.jpg";
import tajmahel from "../assets/tajmahel.jpg"

function Trip() {
  return (
    <>
      <div className="px-6 py-10 bg-gray-100">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-4">Recent Trip</h1>
        <p className="text-lg text-center text-gray-600 mb-8">Discover unique destinations around the world using Google Maps.</p>

        <div className="flex flex-wrap justify-center gap-8">
          <TripData 
            cardImg={manaliImg}
            cardHeading="Manali"
            cardText="Manali, located in the Himachal Pradesh region of India, is a popular destination known for its stunning landscapes and adventure activities. Surrounded by snow-capped mountains and lush valleys, it offers a serene environment perfect for a getaway. Manali is a hub for activities like skiing, paragliding, and trekking."
          />

          <TripData 
            cardImg={KashmirImg}
            cardHeading="Kashmir"
            cardText="Kashmir, often referred to as 'Paradise on Earth,' is known for its mesmerizing landscapes, including the famous Dal Lake, snow-covered mountains, and lush green valleys. The region is famous for its winter sports at Gulmarg and its traditional handicrafts."
          />

          <TripData 
            cardImg={tajmahel}
            cardHeading="Hawaii"
            cardText="Hawaii is a tropical paradise known for its active volcanoes, beautiful beaches, and lush rainforests. Visitors can experience volcanic eruptions at Hawaii Volcanoes National Park or enjoy the cultural heritage of the islands with traditional luaus, hula dances, and local cuisine."
          />
        </div>
      </div>
    </>
  );
}

export default Trip;
