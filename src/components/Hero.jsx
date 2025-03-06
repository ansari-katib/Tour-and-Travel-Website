import React from "react";
import { Link } from "react-router-dom";
import "../components/Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img className="image" alt="HeroImg" src={props.HeroImg} />
      </div>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <Link to={props.url} className={props.btnClass}>
          {props.btnText}
        </Link>
      </div>
    </>
  );
}

export default Hero;
