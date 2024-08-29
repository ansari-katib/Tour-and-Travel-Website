import React from "react";
import "../components/Destination.css";



function DestinationData(props) {
    return (
        <>
            <div className={props.className}>

                <div className="des-text">
                    <h2>{props.heading}</h2>
                    <p>{props.para}</p>
                </div>

                <div className="des-images">
                    <img alt="des-image" src={props.Img1} />
                    <img alt="des-image" src={props.Img2} />
                </div>

            </div>
        </>
    );
}

export default DestinationData;
