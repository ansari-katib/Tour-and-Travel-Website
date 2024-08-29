import React from "react";
import "../components/Trip.css";

function TripData(props) {
  return (
    <>
      <div className="trip-card">
        <div className="trip-image">
          <img alt="trip-card-img" src={props.cardImg} />
        </div>
        <h4>{props.cardhrading}</h4>
        <p>{props.cardtext}</p>
      </div>
    </>
  );
}

export default TripData;
