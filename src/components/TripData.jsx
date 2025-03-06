import React from "react";

function TripData({ cardImg, cardHeading, cardText }) {
  return (
    <div className="w-full sm:w-80 md:w-96 lg:w-80 bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={cardImg} alt={cardHeading} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{cardHeading}</h3>
        <p className="text-sm text-gray-600">{cardText}</p>
      </div>
    </div>
  );
}

export default TripData;
